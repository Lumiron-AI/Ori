"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCountUp } from "@/hooks/use-count-up";
import { useSectionFade } from "@/hooks/use-section-fade";

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.12, duration: 2, ease: [0.22, 1, 0.36, 1] },
	}),
};

interface Stat {
	numeric: number;
	suffix: string;
	label: string;
}

const STATS: Stat[] = [
	{ numeric: 100, suffix: "%", label: "Des messages traités" },
	{ numeric: 3, suffix: "s", label: "Temps moyen de réponse" },
	{ numeric: 24, suffix: "/7", label: "Disponibilité" },
	{ numeric: 2, suffix: "", label: "Canaux gérés simultanément" },
];

function AnimatedStatValue({ stat }: { stat: Stat }) {
	const { count, ref } = useCountUp({ target: stat.numeric, duration: 2800 });

	return (
		<span
			ref={ref as React.RefObject<HTMLSpanElement>}
			className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary dark:text-text leading-none"
		>
			{count}
			{stat.suffix}
		</span>
	);
}

export function OriMessagesHeroSection() {
	const { ref, opacity } = useSectionFade();

	return (
		<motion.section
			ref={ref}
			style={{ opacity }}
			className="relative flex flex-col items-center justify-center text-center px-5 pt-[110px] sm:pt-[130px] md:pt-[140px] pb-16 sm:pb-20 overflow-hidden bg-background dark:bg-dark-bg"
		>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-gradient-to-b from-ori-message/10 via-ori-message/5 to-transparent"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute left-1/4 -translate-x-1/2 top-[-80px] w-[400px] sm:w-[700px] h-[300px] sm:h-[500px] blur-3xl opacity-15 rounded-full bg-ori-message"
			/>

			<div className="relative w-full max-w-6xl lg:max-w-7xl mx-auto flex flex-col items-center my-6 sm:my-12 gap-4">
				<motion.h1
					custom={0}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text-primary dark:text-text leading-tight max-w-6xl text-center"
				>
					<span className="text-ori-message">Ori,</span>
					<br />
					{`l'assistant automatique `}
					<span className="text-ori-message">WhatsApp</span>
					{` et `}
					<span className="text-ori-message">Instagram</span>
					{` pour votre `}
					<span className="border-b-8 border-ori-message pb-0.5">
						restaurant
					</span>
					.
				</motion.h1>

				<motion.p
					custom={1}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="font-display font-semibold text-base sm:text-lg lg:text-2xl text-text-secondary dark:text-text-tertiary max-w-3xl py-4"
				>
					Ori répond instantanément aux messages de vos clients, prend vos
					réservations et confirme chaque demande. 24h/24.
				</motion.p>

				<motion.div
					custom={2}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="flex flex-col sm:flex-row gap-4 mt-2"
				>
					{/* Instagram CTA */}
					<Link
						href="#pricing"
						className="inline-flex items-center justify-center gap-3 h-[50px] px-8 rounded-2xl font-display font-bold text-lg text-text shadow-blue-btn transition-opacity hover:opacity-90"
						style={{
							background:
								"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
						}}
					>
						<svg
							className="w-6 h-6"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden
						>
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
						</svg>
						Instagram
						<ArrowRight size={18} strokeWidth={2.5} />
					</Link>

					{/* WhatsApp CTA */}
					<Link
						href="#pricing"
						className="inline-flex items-center justify-center gap-3 h-[50px] px-8 rounded-2xl font-display font-bold text-lg text-text transition-opacity hover:opacity-90"
						style={{ background: "linear-gradient(135deg, #2bad3d, #108821)" }}
					>
						<svg
							className="w-6 h-6"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden
						>
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
						</svg>
						WhatsApp
						<ArrowRight size={18} strokeWidth={2.5} />
					</Link>
				</motion.div>

				<motion.div
					custom={3}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="w-full mt-2 sm:mt-4"
				>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0">
						{STATS.map((stat, i) => (
							<div
								key={i}
								className="flex items-center justify-center gap-4 sm:gap-6 py-4 sm:py-6"
							>
								<div className="w-1 h-10 sm:h-12 bg-ori-message rounded-full shrink-0" />
								<div className="flex flex-col text-left">
									<AnimatedStatValue stat={stat} />
									<span className="font-display font-normal text-xs sm:text-sm lg:text-base text-text-secondary dark:text-text-tertiary">
										{stat.label}
									</span>
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}
