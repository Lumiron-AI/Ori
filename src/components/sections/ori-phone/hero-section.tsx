"use client";

import { motion } from "framer-motion";
import { TestOriButton } from "@/components/ui/test-ori-button";
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
	{ numeric: 100, suffix: "%", label: "Appels pris en charge" },
	{ numeric: 12, suffix: "h", label: "Économisées par semaine" },
	{ numeric: 5, suffix: "min", label: "De configuration" },
	{ numeric: 24, suffix: "/7", label: "Disponibilité" },
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

export function OriPhoneHeroSection() {
	const { ref, opacity } = useSectionFade();

	return (
		<motion.section
			ref={ref}
			style={{ opacity }}
			className="relative flex flex-col items-center justify-center text-center px-5 pt-[110px] sm:pt-[110px] md:pt-[80px] pb-16 sm:pb-20 overflow-hidden bg-background dark:bg-dark-bg"
		>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute left-1/4 -translate-x-1/2 top-[-80px] w-[400px] sm:w-[700px] h-[300px] sm:h-[500px] blur-3xl opacity-20 rounded-full bg-primary-glow"
			/>

			<div className="relative w-full max-w-6xl lg:max-w-7xl mx-auto flex flex-col items-center my-6 sm:my-12 gap-3">
				<motion.h1
					custom={0}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text-primary dark:text-text leading-tight max-w-6xl"
				>
					Ori,
					<br /> le <span className="text-primary">
						standard téléphonique
					</span>{" "}
					<br />
					automatique pour votre{" "}
					<span className="border-b-8 border-primary pb-0.5"> restaurant</span>.
				</motion.h1>

				<motion.p
					custom={1}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="font-display font-semibold text-base sm:text-lg lg:text-2xl text-text-secondary dark:text-text-tertiary max-w-5xl gap-4 py-4"
				>
					Il décroche instantanément, répond aux questions de vos clients et
					enregistre vos réservations.{" "}
					<span className="hidden sm:inline">
						<br />
					</span>
					24h/24, sans jamais interrompre votre équipe.
				</motion.p>

				<motion.div
					custom={2}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="w-full flex justify-center"
				>
					<TestOriButton />
				</motion.div>

				<motion.p
					custom={3}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="font-display font-normal text-xs sm:text-base text-text-secondary dark:text-text-tertiary"
				>
					Parlez à Ori comme un vrai client
				</motion.p>

				<motion.div
					custom={4}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="w-full mt-2 sm:mt-4"
				>
					<div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4">
						{STATS.map((stat, i) => (
							<div key={i} className="flex flex-col items-center min-w-[10rem]">
								<div className="flex items-center gap-4">
									<div className="w-1 h-8 sm:h-10 bg-primary rounded-full shrink-0" />
									<AnimatedStatValue stat={stat} />
								</div>
								<span className="font-display font-normal text-xs sm:text-sm lg:text-base text-text-secondary dark:text-text-tertiary pl-3">
									{stat.label}
								</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}
