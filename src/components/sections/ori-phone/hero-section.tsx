"use client";

import { motion } from "framer-motion";
import { TestOriButton } from "@/components/ui/test-ori-button";
import { useCountUp } from "@/hooks/use-count-up";
import { useSectionFade } from "@/hooks/use-section-fade";
import { useLocale } from "@/context/locale-context";

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	}),
};

const STAT_NUMERICS = [100, 12, 5, 24];

function AnimatedStatValue({
	numeric,
	suffix,
}: {
	numeric: number;
	suffix: string;
}) {
	const { count, ref } = useCountUp({ target: numeric, duration: 2800 });

	return (
		<span
			ref={ref as React.RefObject<HTMLSpanElement>}
			className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary dark:text-text leading-none"
		>
			{count}
			{suffix}
		</span>
	);
}

export function OriPhoneHeroSection() {
	const { ref, opacity } = useSectionFade();
	const { t } = useLocale();
	const { hero } = t;

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
					{hero.title1}
					<br /> {hero.title2}{" "}
					<span className="text-primary">{hero.titleHighlight}</span> <br />
					{hero.title3}{" "}
					<span className="relative after:absolute after:bottom-[0px] after:left-0 after:w-full after:h-2 after:bg-primary after:opacity-60">
						{hero.titleUnderline}
					</span>
					.
				</motion.h1>

				<motion.p
					custom={1}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="font-display font-semibold text-base sm:text-lg lg:text-2xl text-text-secondary dark:text-text-tertiary max-w-5xl gap-4 py-4"
				>
					{hero.subtitle}{" "}
					<span className="hidden sm:inline">
						<br />
					</span>
					{hero.subtitleLine2}
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
					{hero.testPrompt}
				</motion.p>

				<motion.div
					custom={4}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="w-full mt-2 sm:mt-4"
				>
					<div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4">
						{hero.stats.map((stat, i) => (
							<div key={i} className="flex flex-col items-center min-w-[10rem]">
								<div className="flex items-center gap-4">
									<div className="w-1 h-8 sm:h-10 bg-primary rounded-full shrink-0" />
									<AnimatedStatValue
										numeric={STAT_NUMERICS[i]}
										suffix={stat.suffix}
									/>
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
