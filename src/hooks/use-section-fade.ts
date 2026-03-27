"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface UseSectionFadeReturn {
	ref: React.RefObject<HTMLElement | null>;
	opacity: MotionValue<number>;
}

/**
 * Fade-in on enter, fade-out on exit (scroll up).
 * - opacity 0 → 1 as section enters from bottom (first 30% of scroll progress)
 * - opacity 1 → 0 as section leaves from top (last 20% of scroll progress)
 */
export function useSectionFade(): UseSectionFadeReturn {
	const ref = useRef<HTMLElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 1, 1, 0]);

	return { ref, opacity };
}
