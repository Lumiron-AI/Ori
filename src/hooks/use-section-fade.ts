"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

// ── Animation keypoints ──────────────────────────────────────────────────────
// Desktop: fade-in over first 30%, hold, fade-out over last 20%
const DESKTOP_INPUT: number[] = [0, 0.3, 0.8, 1];
const DESKTOP_OUTPUT: number[] = [0, 1, 1, 0];

// Mobile: modify these values to adjust the fade on small screens
const MOBILE_INPUT: number[] = [0, 0.1, 0.9, 1];
const MOBILE_OUTPUT: number[] = [0, 1, 1, 0];
// ─────────────────────────────────────────────────────────────────────────────

interface UseSectionFadeReturn {
	ref: React.RefObject<HTMLElement | null>;
	opacity: MotionValue<number>;
}

/**
 * Fade-in on enter, fade-out on exit (scroll up).
 * Desktop keypoints: DESKTOP_INPUT / DESKTOP_OUTPUT
 * Mobile keypoints:  MOBILE_INPUT  / MOBILE_OUTPUT
 */
export function useSectionFade(): UseSectionFadeReturn {
	const ref = useRef<HTMLElement | null>(null);

	const isMobile =
		typeof window !== "undefined" &&
		window.matchMedia("(max-width: 767px)").matches;

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const input = isMobile ? MOBILE_INPUT : DESKTOP_INPUT;
	const output = isMobile ? MOBILE_OUTPUT : DESKTOP_OUTPUT;

	const opacity = useTransform(scrollYProgress, input, output);

	return { ref, opacity };
}
