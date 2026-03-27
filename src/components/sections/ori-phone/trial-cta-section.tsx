"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonClass } from "@/components/ui/button";

export function TrialCTASection() {
	return (
		<motion.section
			id="trial"
			className="relative bg-background-secondary dark:bg-dark-surface py-16 my-16 sm:py-24 px-5 text-center"
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
				<h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary dark:text-text leading-tight">
					ESSAYER ORI <span className="text-primary">7 JOURS</span> GRATUITS
				</h2>

				{/* Subtitle */}
				<p className="font-display font-semibold text-base sm:text-xl lg:text-2xl text-text-primary dark:text-text max-w-2xl">
					Sans engagement. Configuration en 5 minutes.
				</p>

				{/* CTA */}
				<Link
					href="#pricing"
					className={buttonClass({
						variant: "primary",
						size: "lg",
						className: "w-full sm:w-[261px] text-base sm:text-xl mt-2",
					})}
				>
					Démarrer l&apos;essai
					<ArrowRight size={18} strokeWidth={2.5} />
				</Link>
			</div>
		</motion.section>
	);
}
