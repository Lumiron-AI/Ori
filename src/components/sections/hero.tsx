"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	}),
};

const STATS = [
	{ value: "500+", label: "Disponible", color: "text-primary" },
	{ value: "2M+", label: "Conversations gérées", color: "text-ori-message" },
	{ value: "98%", label: "Satisfaction client", color: "text-primary" },
	{ value: "24/7", label: "Disponibilité", color: "text-ori-message" },
];

export function Hero() {
	return (
		<section className="relative flex flex-col items-center justify-center text-center section-padding pt-[80px] sm:pt-[96px] md:pt-[130px] pb-10 sm:pb-14 overflow-hidden">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[-100px] w-[600px] sm:w-[1000px] h-[400px] sm:h-[600px] blur-3xl opacity-15 dark:opacity-30 rounded-full bg-primary-glow"
			/>

			<div className="relative w-full max-w-5xl mx-auto flex flex-col items-center gap-6 sm:gap-6 my-8">
				<motion.h1
					custom={0}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary"
				>
					<span>Ori, </span>
					<span className="text-text-primary dark:text-text">
						l&apos;assistant IA qui répond à vos appels et messages.
					</span>
				</motion.h1>

				<motion.p
					custom={1}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="font-display font-semibold text-base sm:text-lg lg:text-2xl/6 text-text-secondary dark:text-text-tertiary max-w-3xl"
				>
					Automatisez vos conversations clients par téléphone, WhatsApp et
					Instagram. Ori décroche, répond et prend les réservations ahah —{" "}
					<span className="font-bold">24h/24, 7j/7.</span>
				</motion.p>

				<motion.div
					custom={2}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="w-fit flex flex-col sm:flex-row gap-3 sm:gap-6 items-stretch sm:items-center justify-center"
				>
					<Link
						href="/solutions/phone"
						className="inline-flex items-center justify-center shadow-orange-btn gap-2 sm:gap-2.5 bg-primary text-text font-display font-bold text-base sm:text-lg rounded-xl h-[46px] sm:h-[52px] px-5 sm:px-7 hover:bg-primary/90 active:bg-primary/80 transition-colors"
					>
						Découvrir Ori téléphone
						<ArrowRight size={18} strokeWidth={2.5} className="shrink-0" />
					</Link>
					<Link
						href="/solutions/message"
						className="inline-flex items-center justify-center shadow-blue-btn gap-2 sm:gap-2.5 bg-ori-message text-text font-display font-bold text-base sm:text-lg rounded-xl h-[46px] sm:h-[52px] px-5 sm:px-7 hover:bg-ori-message/90 active:bg-ori-message/80 transition-colors"
					>
						Découvrir Ori messages
						<ArrowRight size={18} strokeWidth={2.5} className="shrink-0" />
					</Link>
				</motion.div>

				<motion.div
					custom={3}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="w-full max-w-4xl"
				>
					<div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-10 md:grid-cols-4">
						{STATS.map((stat, i) => (
							<div
								key={`${stat.value}-${i}`}
								className="flex flex-col items-center text-center py-1 sm:py-4 relative"
							>
								<span
									className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl ${stat.color}`}
								>
									{stat.value}
								</span>
								<span className="font-display font-normal text-sm sm:text-base lg:text-lg text-text-secondary dark:text-text-tertiary mt-1">
									{stat.label}
								</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
