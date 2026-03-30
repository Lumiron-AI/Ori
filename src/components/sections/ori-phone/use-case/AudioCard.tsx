"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

/**
 * A group of tags that appear together at a given audio timestamp.
 * Configure `at` (seconds) to control exactly when the group shows up.
 */
export type TagGroup = {
	/** Audio time (seconds) at which this group of tags becomes visible */
	at: number;
	tags: string[];
};

export type AudioCardProps = {
	title: string;
	/** Path relative to /public, e.g. "/audio/ori-reservation.mp3" */
	src: string;
	/**
	 * Ordered list of tag groups. Each group replaces the previous one when
	 * `currentTime >= group.at`. Must be sorted by `at` ascending.
	 *
	 * Example:
	 * [
	 *   { at: 0,  tags: ["Créneau 20h complet", "Proposition alternative 20h30 acceptée"] },
	 *   { at: 18, tags: ["Client identifié via numéro", "Préférence "table au calme" confirmée"] },
	 *   { at: 38, tags: ["Réservation enregistrée dans le CRM"] },
	 * ]
	 */
	tagGroups: TagGroup[];
	/**
	 * Fallback duration (seconds) used for visual simulation when the audio
	 * file is not yet present. Replace with your real file and this is ignored.
	 */
	simulatedDuration?: number;
	/** When false, the card must stop if it was playing (controlled externally) */
	active?: boolean;
	/** Called when this card starts playing, so the parent can deactivate others */
	onActivate?: () => void;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const SPEEDS = [
	{ label: "x1.0", value: 1 },
	{ label: "x1.5", value: 1.5 },
	{ label: "x2", value: 2 },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(s: number) {
	const m = Math.floor(s / 60);
	const sec = Math.floor(s % 60);
	return `${m}:${sec.toString().padStart(2, "0")}`;
}

/**
 * Returns the index of the active tag group for the given currentTime,
 * or -1 if playback hasn't reached the first group yet.
 */
function activeGroupIndex(tagGroups: TagGroup[], currentTime: number): number {
	let idx = -1;
	for (let i = 0; i < tagGroups.length; i++) {
		if (currentTime >= tagGroups[i].at) idx = i;
	}
	return idx;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function AudioCard({
	title,
	src,
	tagGroups,
	simulatedDuration = 41,
	active = true,
	onActivate,
}: AudioCardProps) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const tickerRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const speedRef = useRef(1);
	const simTimeRef = useRef(0);

	const [playing, setPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [speed, setSpeed] = useState(1);

	// Index of the currently displayed tag group (-1 = none yet)
	const groupIdx = playing ? activeGroupIndex(tagGroups, currentTime) : -1;

	function stopTicker() {
		if (tickerRef.current !== null) {
			clearInterval(tickerRef.current);
			tickerRef.current = null;
		}
	}

	useEffect(() => () => stopTicker(), []);

	useEffect(() => {
		if (!active && playing) {
			reset();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);

	function startRealTicker() {
		stopTicker();
		tickerRef.current = setInterval(() => {
			const el = audioRef.current;
			if (!el) return;
			setCurrentTime(el.currentTime);
		}, 50);
	}

	function startSimulatedTicker(simDur: number) {
		stopTicker();
		simTimeRef.current = 0;
		setDuration(simDur);
		tickerRef.current = setInterval(() => {
			simTimeRef.current += 0.05 * speedRef.current;
			if (simTimeRef.current >= simDur) {
				simTimeRef.current = simDur;
				setCurrentTime(simDur);
				reset();
			} else {
				setCurrentTime(simTimeRef.current);
			}
		}, 50);
	}

	function reset() {
		stopTicker();
		simTimeRef.current = 0;
		setPlaying(false);
		setCurrentTime(0);
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
		}
	}

	function handlePlayStop() {
		const el = audioRef.current;
		if (!el) return;

		if (playing) {
			reset();
			return;
		}

		onActivate?.();
		el.playbackRate = speedRef.current;
		el.play()
			.then(() => {
				setPlaying(true);
				startRealTicker();
			})
			.catch(() => {
				setPlaying(true);
				startSimulatedTicker(simulatedDuration);
			});
	}

	function handleSpeed(v: number) {
		speedRef.current = v;
		setSpeed(v);
		if (audioRef.current) audioRef.current.playbackRate = v;
	}

	const activeDuration = duration > 0 ? duration : simulatedDuration;
	const progress =
		activeDuration > 0
			? Math.min((currentTime / activeDuration) * 100, 100)
			: 0;

	const currentTags = groupIdx >= 0 ? tagGroups[groupIdx].tags : null;

	return (
		<div
			className={`w-full rounded-4xl p-6 flex flex-col gap-4 shadow-card transition-colors duration-300 border border-transparent dark:border-text-secondary/30 ${
				playing
					? "bg-dark-elevated"
					: "bg-background-element dark:bg-dark-surface"
			}`}
		>
			{/* Title */}
			<p
				className={`font-display font-semibold text-2xl transition-colors duration-300 ${
					playing ? "text-text" : "text-text-heading dark:text-text"
				}`}
			>
				{title}
			</p>

			{/* Player row: [Play btn] [──progress──] [timer] */}
			<div className="flex items-center gap-3">
				<button
					onClick={handlePlayStop}
					aria-label={playing ? "Arrêter" : "Lire"}
					className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-orange-btn hover:bg-primary/90 active:bg-primary/80 transition-colors shrink-0"
				>
					{playing ? (
						<Pause
							size={18}
							strokeWidth={0}
							className="text-text fill-current"
						/>
					) : (
						<Play
							size={18}
							strokeWidth={0}
							className="text-text fill-current"
						/>
					)}
				</button>

				<div
					className={`flex-1 relative h-1.5 rounded-full overflow-hidden transition-colors duration-300 ${
						playing
							? "bg-dark-overlay"
							: "bg-background-tertiary dark:bg-dark-overlay"
					}`}
				>
					<div
						className="absolute inset-y-0 left-0 bg-primary rounded-full"
						style={{ width: `${progress}%` }}
					/>
				</div>

				<span
					className={`shrink-0 font-display font-normal text-base tabular-nums transition-colors duration-300 ${
						playing
							? "text-text/70"
							: "text-text-secondary dark:text-text-tertiary"
					}`}
				>
					{fmt(currentTime)}
					<span className={playing ? "text-text/40" : "text-text-tertiary"}>
						{" "}
						/ {fmt(activeDuration)}
					</span>
				</span>
			</div>

			{/* Speed controls — only shown while playing */}
			{playing && <div className="flex items-center gap-1">
				{SPEEDS.map((s) => (
					<button
						key={s.label}
						onClick={() => handleSpeed(s.value)}
						className={`font-display font-semibold text-sm px-2.5 py-1 rounded-full transition-colors ${
							speed === s.value
								? "bg-primary/10 text-primary"
								: playing
									? "text-text/40 hover:text-text/70"
									: "text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-text"
						}`}
					>
						{s.label}
					</button>
				))}
			</div>}

			{/* Tag groups — one group visible at a time, animated on change */}
			<div>
				<AnimatePresence mode="wait">
					{currentTags && (
						<motion.div
							// key changes whenever the active group changes → triggers exit + enter
							key={groupIdx}
							initial={{ opacity: 0, y: 6 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -6 }}
							transition={{ duration: 0.25 }}
							className="flex flex-wrap gap-1.5"
						>
							{currentTags.map((tag, i) => (
								<motion.span
									key={tag}
									initial={{ opacity: 0, scale: 0.88 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: i * 0.18 + 0.05, duration: 0.22 }}
									className="font-display font-medium text-sm text-text bg-dark-overlay px-2.5 py-1 rounded-full"
								>
									{tag}
								</motion.span>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Audio element */}
			<audio
				ref={audioRef}
				src={src}
				preload="metadata"
				onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
				onEnded={reset}
			/>
		</div>
	);
}
