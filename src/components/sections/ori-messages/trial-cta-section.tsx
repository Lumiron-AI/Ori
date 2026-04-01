"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export function OriMessagesTrialCTASection() {
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
					background: "radial-gradient(ellipse, #3E67B5 0%, transparent 70%)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute left-[-100px] top-[-200px] w-[300px] sm:w-[696px] h-[300px] sm:h-[701px] rounded-full blur-3xl opacity-15 z-10"
				style={{
					background: "radial-gradient(ellipse, #3E67B5 0%, transparent 70%)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute left-[40%] bottom-[-100px] w-[250px] sm:w-[484px] h-[200px] sm:h-[333px] rounded-full blur-2xl opacity-20 z-10"
				style={{
					background: "radial-gradient(ellipse, #3E67B5 0%, transparent 60%)",
				}}
			/>

			<div className="relative max-w-4xl mx-auto flex flex-col items-center gap-5 sm:gap-6">
				<motion.h2
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary dark:text-text leading-tight"
				>
					ESSAYER ORI <span className="text-ori-message">7 JOURS</span> GRATUITS
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="font-display font-semibold text-sm sm:text-lg lg:text-xl text-text-primary dark:text-text max-w-2xl"
				>
					Sans engagement. Configuration en 5 minutes.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.24, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<Link
						href="#pricing"
						className="inline-flex items-center justify-center gap-2 font-display font-bold rounded-2xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ori-message focus-visible:ring-offset-2 w-full sm:w-[261px] text-sm sm:text-lg mt-2 h-[50px] px-8 bg-ori-message text-text shadow-blue-btn hover:bg-ori-message/90 active:bg-ori-message/80"
					>
						Démarrer l&apos;essai
						<ArrowRight size={18} strokeWidth={2.5} />
					</Link>
				</motion.div>
			</div>
		</motion.section>
	);
}
