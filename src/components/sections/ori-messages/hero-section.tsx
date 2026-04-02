"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
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

interface Stat {
	numeric: number;
	suffix: string;
	label: string;
}

const STAT_NUMERICS = [100, 3, 24, 2];

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
	const { t } = useLocale();
	const d = t.messagesHero;

	const stats: Stat[] = d.stats.map((s, i) => ({
		numeric: STAT_NUMERICS[i],
		suffix: s.suffix,
		label: s.label,
	}));

	return (
		<motion.section
			ref={ref}
			style={{ opacity }}
			className="relative flex flex-col items-center justify-center text-center px-5 pt-[110px] sm:pt-[130px] md:pt-[90px] pb-16 sm:pb-20 overflow-hidden bg-background dark:bg-dark-bg"
		>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-gradient-to-b from-ori-message/10 via-ori-message/5 to-transparent"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute left-1/4 -translate-x-1/2 top-[-80px] w-[400px] sm:w-[700px] h-[300px] sm:h-[500px] blur-3xl opacity-15 rounded-full bg-ori-message"
			/>

			<div className="relative w-full max-w-6xl lg:max-w-7xl mx-auto flex flex-col items-center my-6 sm:my-12 gap-3">
				<motion.h1
					custom={0}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text-primary dark:text-text leading-tight max-w-6xl text-center"
				>
					<span className="text-ori-message">{d.titlePrefix}</span>
					<br />
					{d.titleAssistant}
					<span className="text-ori-message">{d.titleWhatsApp}</span>
					<br />
					{d.titleAnd}
					<span className="text-ori-message">{d.titleInstagram}</span>
					{d.titleFor}
					<span className="relative after:absolute after:bottom-[0px] after:left-0 after:w-full after:h-2 after:bg-ori-message after:opacity-60">
						{d.titleUnderline}
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
					{d.subtitle}
				</motion.p>

				<motion.div
					custom={2}
					variants={fadeUp}
					initial="hidden"
					animate="show"
					className="flex flex-col sm:flex-row gap-6 mt-2"
				>
					{/* Instagram CTA */}
					<Link
						href="#use-case"
						className="relative overflow-visible inline-flex items-center justify-center gap-3 h-[50px] px-8 rounded-2xl font-display font-bold text-lg text-text opacity-95 transition-[filter] hover:brightness-90 active:brightness-80"
						style={{
							background:
								"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
						}}
					>
						<span
							aria-hidden
							className="absolute inset-0 -z-10 rounded-2xl opacity-50 blur-xl"
							style={{
								background:
									"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
							}}
						/>
						<FaInstagram className="w-6 h-6" aria-hidden />
						Instagram
						<ArrowRight size={18} strokeWidth={2.5} />
					</Link>

					{/* WhatsApp CTA */}
					<Link
						href="#use-case"
						className="relative overflow-visible inline-flex items-center justify-center gap-3 h-[50px] px-8 rounded-2xl font-display font-bold text-lg text-text opacity-95 transition-[filter] hover:brightness-90 active:brightness-80"
						style={{ background: "linear-gradient(115deg, #2bad3d, #108821)" }}
					>
						<span
							aria-hidden
							className="absolute inset-0 -z-10 rounded-2xl opacity-50 blur-xl"
							style={{
								background: "linear-gradient(135deg, #2bad3d, #108821)",
							}}
						/>
						<FaWhatsapp className="w-6 h-6" aria-hidden />
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
					<div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4">
						{stats.map((stat, i) => (
							<div key={i} className="flex flex-col items-center min-w-[10rem]">
								<div className="flex items-center gap-4">
									<div className="w-1 h-8 sm:h-10 bg-ori-message rounded-full shrink-0" />
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
