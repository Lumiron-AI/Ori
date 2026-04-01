"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonClass } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";

export function TrialCTASection() {
	const { t } = useLocale();
	const { trialCta } = t;

	return (
		<motion.section
			id="trial"
			className="relative bg-background-secondary dark:bg-dark-surface py-16 my-16 sm:py-24 px-5 text-center concave"
		>
			{/* Ambient lights */}
			<div
				aria-hidden
				className="pointer-events-none absolute right-[0px] top-[-200px] w-[300px] sm:w-[512px] h-[300px] sm:h-[508px] rounded-full blur-3xl opacity-20 z-10"
				style={{
					background: "radial-gradient(ellipse, #FF4F38 0%, transparent 70%)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute left-[-100px] top-[-200px] w-[300px] sm:w-[696px] h-[300px] sm:h-[701px] rounded-full blur-3xl opacity-15 z-10"
				style={{
					background: "radial-gradient(ellipse, #FF4F38 0%, transparent 70%)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute left-[40%] bottom-[-100px] w-[250px] sm:w-[484px] h-[200px] sm:h-[333px] rounded-full blur-2xl opacity-20 z-10"
				style={{
					background: "radial-gradient(ellipse, #FF4F38 0%, transparent 70%)",
				}}
			/>

			<div className="relative max-w-4xl mx-auto flex flex-col items-center gap-5 sm:gap-6">
				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary dark:text-text leading-tight"
				>
					{trialCta.title1}{" "}
					<span className="text-primary">{trialCta.titleHighlight}</span>{" "}
					{trialCta.title2}
				</motion.h2>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="font-display font-semibold text-base sm:text-lg lg:text-2xl text-text-primary dark:text-text max-w-2xl"
				>
					{trialCta.subtitle}
				</motion.p>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.24, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<Link
						href="#pricing"
						className={buttonClass({
							variant: "primary",
							size: "lg",
							className: "w-full sm:w-[261px] text-sm sm:text-lg mt-2",
						})}
					>
						{trialCta.cta}
						<ArrowRight size={18} strokeWidth={2.5} />
					</Link>
				</motion.div>
			</div>
		</motion.section>
	);
}
