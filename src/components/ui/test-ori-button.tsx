"use client";

import { useRef, useState } from "react";
import { Phone, Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type State = "idle" | "playing" | "muted";

export function TestOriButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<State>("idle");

  function handleMain() {
    if (state === "idle") {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.muted = false;
        audioRef.current.play().catch(() => {});
      }
      setState("playing");
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setState("idle");
    }
  }

  function handleMute() {
    if (!audioRef.current) return;
    if (state === "playing") {
      audioRef.current.muted = true;
      setState("muted");
    } else if (state === "muted") {
      audioRef.current.muted = false;
      setState("playing");
    }
  }

  const isActive = state !== "idle";

  return (
    <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
      {/* Main button */}
      <button
        onClick={handleMain}
        className="inline-flex items-center justify-center gap-2.5 bg-primary text-text font-display font-bold text-base sm:text-xl rounded-3xl h-[52px] sm:h-[63px] w-full sm:w-[350px] px-5 sm:px-8 shadow-orange-btn hover:bg-primary/90 active:bg-primary/80 transition-colors"
      >
        <Phone size={18} strokeWidth={2.5} className="shrink-0" />
        {isActive ? "Arrêter la démo" : "Tester Ori maintenant"}
      </button>

      {/* Mute button — slides in when audio is playing */}
      <AnimatePresence>
        {isActive && (
          <motion.button
            initial={{ opacity: 0, x: -8, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -8, scale: 0.85 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleMute}
            aria-label={state === "muted" ? "Réactiver le son" : "Mettre en sourdine"}
            className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full border-2 border-text-secondary/30 bg-background dark:bg-dark-elevated flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors shrink-0"
          >
            {state === "muted" ? (
              <VolumeX size={18} strokeWidth={2} />
            ) : (
              <Volume2 size={18} strokeWidth={2} />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Audio element — src will be added by the user */}
      <audio ref={audioRef} src="/audio/ori-demo.mp3" preload="auto" />
    </div>
  );
}
