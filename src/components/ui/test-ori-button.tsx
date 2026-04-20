"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Phone, Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/context/locale-context";

type State = "idle" | "connecting" | "active" | "error";

const PROXY_URL =
	process.env.NEXT_PUBLIC_REALTIME_WS_URL ?? "ws://localhost:8787/ws";
const MAX_SECONDS = 60;
const SAMPLE_RATE = 24000;

const WORKLET_SOURCE = `
class PCMProcessor extends AudioWorkletProcessor {
  process(inputs) {
    const input = inputs[0];
    if (input && input[0]) {
      this.port.postMessage(input[0].slice(0));
    }
    return true;
  }
}
registerProcessor("pcm-capture", PCMProcessor);
`;

function float32ToInt16Base64(float32: Float32Array): string {
	const int16 = new Int16Array(float32.length);
	for (let i = 0; i < float32.length; i++) {
		const s = Math.max(-1, Math.min(1, float32[i]));
		int16[i] = s < 0 ? s * 32768 : s * 32767;
	}
	const bytes = new Uint8Array(int16.buffer);
	let binary = "";
	const CHUNK = 0x8000;
	for (let i = 0; i < bytes.length; i += CHUNK) {
		binary += String.fromCharCode.apply(
			null,
			Array.from(bytes.subarray(i, i + CHUNK)),
		);
	}
	return btoa(binary);
}

function base64ToInt16(b64: string): Int16Array {
	const binary = atob(b64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return new Int16Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 2);
}

function downsample(
	input: Float32Array,
	inputRate: number,
	outputRate: number,
): Float32Array {
	if (inputRate === outputRate) return input;
	const ratio = inputRate / outputRate;
	const newLength = Math.floor(input.length / ratio);
	const out = new Float32Array(newLength);
	for (let i = 0; i < newLength; i++) {
		out[i] = input[Math.floor(i * ratio)];
	}
	return out;
}

export function TestOriButton() {
	const { t, locale } = useLocale();
	const { testOriButton } = t;
	const [state, setState] = useState<State>("idle");
	const [muted, setMuted] = useState(false);
	const [secondsLeft, setSecondsLeft] = useState(MAX_SECONDS);
	const [errorMsg, setErrorMsg] = useState<string | null>(null);

	const wsRef = useRef<WebSocket | null>(null);
	const audioCtxRef = useRef<AudioContext | null>(null);
	const mediaStreamRef = useRef<MediaStream | null>(null);
	const workletNodeRef = useRef<AudioWorkletNode | null>(null);
	const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
	const gainRef = useRef<GainNode | null>(null);
	const playbackTimeRef = useRef<number>(0);
	const tickIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const stoppedRef = useRef<boolean>(false);

	const cleanup = useCallback(() => {
		if (tickIntervalRef.current) {
			clearInterval(tickIntervalRef.current);
			tickIntervalRef.current = null;
		}
		try {
			wsRef.current?.close();
		} catch {}
		wsRef.current = null;

		try {
			workletNodeRef.current?.disconnect();
		} catch {}
		workletNodeRef.current = null;

		try {
			sourceNodeRef.current?.disconnect();
		} catch {}
		sourceNodeRef.current = null;

		mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
		mediaStreamRef.current = null;

		try {
			audioCtxRef.current?.close();
		} catch {}
		audioCtxRef.current = null;
		gainRef.current = null;
		playbackTimeRef.current = 0;
	}, []);

	const stop = useCallback(() => {
		if (stoppedRef.current) return;
		stoppedRef.current = true;
		cleanup();
		setState("idle");
	}, [cleanup]);

	useEffect(() => {
		return () => {
			stoppedRef.current = true;
			cleanup();
		};
	}, [cleanup]);

	useEffect(() => {
		if (gainRef.current) {
			gainRef.current.gain.value = muted ? 0 : 1;
		}
	}, [muted]);

	async function start() {
		stoppedRef.current = false;
		setErrorMsg(null);
		setState("connecting");
		setSecondsLeft(MAX_SECONDS);
		setMuted(false);

		let stream: MediaStream;
		try {
			stream = await navigator.mediaDevices.getUserMedia({
				audio: {
					echoCancellation: true,
					noiseSuppression: true,
					autoGainControl: true,
				},
			});
		} catch {
			setState("error");
			setErrorMsg(testOriButton.micDenied);
			return;
		}
		mediaStreamRef.current = stream;

		const AudioCtx =
			window.AudioContext ??
			(window as unknown as { webkitAudioContext: typeof AudioContext })
				.webkitAudioContext;

		let audioCtx: AudioContext;
		try {
			audioCtx = new AudioCtx({ sampleRate: SAMPLE_RATE });
		} catch {
			audioCtx = new AudioCtx();
		}
		audioCtxRef.current = audioCtx;

		const gain = audioCtx.createGain();
		gain.gain.value = 1;
		gain.connect(audioCtx.destination);
		gainRef.current = gain;

		const workletBlob = new Blob([WORKLET_SOURCE], {
			type: "application/javascript",
		});
		const workletUrl = URL.createObjectURL(workletBlob);
		try {
			await audioCtx.audioWorklet.addModule(workletUrl);
		} catch {
			URL.revokeObjectURL(workletUrl);
			setState("error");
			setErrorMsg(testOriButton.connectionError);
			cleanup();
			return;
		}
		URL.revokeObjectURL(workletUrl);

		const source = audioCtx.createMediaStreamSource(stream);
		sourceNodeRef.current = source;
		const worklet = new AudioWorkletNode(audioCtx, "pcm-capture");
		workletNodeRef.current = worklet;

		const ws = new WebSocket(PROXY_URL);
		wsRef.current = ws;

		worklet.port.onmessage = (e: MessageEvent<Float32Array>) => {
			if (ws.readyState !== WebSocket.OPEN) return;
			const input = e.data;
			const resampled =
				audioCtx.sampleRate === SAMPLE_RATE
					? input
					: downsample(input, audioCtx.sampleRate, SAMPLE_RATE);
			const b64 = float32ToInt16Base64(resampled);
			ws.send(
				JSON.stringify({ type: "input_audio_buffer.append", audio: b64 }),
			);
		};

		source.connect(worklet);

		ws.onopen = () => {
			ws.send(JSON.stringify({ type: "client.start", lang: locale }));
		};

		ws.onmessage = (event) => {
			let msg: { type?: string; delta?: string };
			try {
				msg = JSON.parse(event.data);
			} catch {
				return;
			}

			if (msg.type === "proxy.ready") {
				setState("active");
				startCountdown();
				return;
			}
			if (msg.type === "proxy.timeout") {
				setErrorMsg(testOriButton.timeUp);
				stop();
				return;
			}
			if (msg.type === "proxy.error") {
				setErrorMsg(testOriButton.connectionError);
				stop();
				setState("error");
				return;
			}
			if (msg.type === "response.audio.delta" && typeof msg.delta === "string") {
				playAudioChunk(msg.delta);
			}
		};

		ws.onerror = () => {
			if (!stoppedRef.current) {
				setErrorMsg(testOriButton.connectionError);
				stop();
				setState("error");
			}
		};

		ws.onclose = () => {
			if (!stoppedRef.current) stop();
		};
	}

	function playAudioChunk(b64: string) {
		const ctx = audioCtxRef.current;
		const gain = gainRef.current;
		if (!ctx || !gain) return;
		const int16 = base64ToInt16(b64);
		const float32 = new Float32Array(int16.length);
		for (let i = 0; i < int16.length; i++) float32[i] = int16[i] / 32768;
		const buffer = ctx.createBuffer(1, float32.length, SAMPLE_RATE);
		buffer.copyToChannel(float32, 0);
		const src = ctx.createBufferSource();
		src.buffer = buffer;
		src.connect(gain);
		const now = ctx.currentTime;
		if (playbackTimeRef.current < now) playbackTimeRef.current = now;
		src.start(playbackTimeRef.current);
		playbackTimeRef.current += buffer.duration;
	}

	function startCountdown() {
		tickIntervalRef.current = setInterval(() => {
			setSecondsLeft((s) => {
				if (s <= 1) {
					stop();
					return 0;
				}
				return s - 1;
			});
		}, 1000);
	}

	const isActive = state === "active" || state === "connecting";

	return (
		<div className="flex flex-col items-center gap-2 w-full sm:w-auto">
			<div className="flex items-center gap-3 w-full sm:w-auto justify-center">
				<button
					onClick={isActive ? stop : start}
					disabled={state === "connecting"}
					className="inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-primary text-text font-display font-bold text-base sm:text-lg rounded-2xl h-[46px] sm:h-[52px] sm:w-auto px-8 sm:px-10 shadow-orange-btn hover:bg-primary/90 active:bg-primary/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
				>
					<Phone size={18} strokeWidth={2.5} className="shrink-0" />
					{state === "connecting"
						? testOriButton.connecting
						: state === "active"
						? `${testOriButton.stop} • ${secondsLeft}s`
						: testOriButton.start}
				</button>

				<AnimatePresence>
					{state === "active" && (
						<motion.button
							initial={{ opacity: 0, x: -8, scale: 0.85 }}
							animate={{ opacity: 1, x: 0, scale: 1 }}
							exit={{ opacity: 0, x: -8, scale: 0.85 }}
							transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
							onClick={() => setMuted((m) => !m)}
							aria-label={muted ? testOriButton.unmute : testOriButton.mute}
							className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full border-2 border-text-secondary/30 bg-background dark:bg-dark-elevated flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors shrink-0"
						>
							{muted ? (
								<VolumeX size={18} strokeWidth={2} />
							) : (
								<Volume2 size={18} strokeWidth={2} />
							)}
						</motion.button>
					)}
				</AnimatePresence>
			</div>
			{errorMsg && (
				<span className="font-sans text-xs text-text-secondary dark:text-text-tertiary text-center max-w-[280px]">
					{errorMsg}
				</span>
			)}
		</div>
	);
}
