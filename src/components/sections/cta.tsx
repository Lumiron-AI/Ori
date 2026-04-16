"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Cta() {
	return (
		<section className="section-padding py-12 md:py-16 lg:py-20">
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="max-w-4xl mx-auto text-center flex flex-col items-center gap-3"
			>
				{/* Title */}
				<h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary dark:text-text">
					Essayer Ori <span className="text-primary">7 jours</span> gratuits
				</h2>

				{/* Subtitle */}
				<p className="font-display font-semibold text-base sm:text-xl lg:text-2xl/8 text-text-primary dark:text-text-tertiary max-w-3xl">
					Sans engagement. Configuration en 5 minutes. Un seul client perdu
					coûte plus cher qu&apos;un mois d&apos;Ori.
				</p>

				{/* CTA buttons */}
				<div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 w-fit sm:w-auto">
					<Link
						href="/solutions/phone"
						className="inline-flex items-center justify-center gap-2.5 bg-primary shadow-orange-btn text-text font-display font-bold text-base sm:text-lg rounded-xl h-[46px] sm:h-[52px] px-5 sm:px-7 hover:bg-primary/90 active:bg-primary/80 transition-colors whitespace-nowrap"
					>
						Essayer Ori Téléphone
						<ArrowRight size={18} strokeWidth={2.5} />
					</Link>
					<Link
						href="/solutions/messages"
						className="inline-flex items-center justify-center gap-2.5 bg-ori-message shadow-blue-btn text-text font-display font-bold text-base sm:text-lg rounded-xl h-[46px] sm:h-[52px] px-5 sm:px-7 hover:bg-ori-message/90 active:bg-ori-message/80 transition-colors whitespace-nowrap"
					>
						Essayer Ori Message
						<ArrowRight size={18} strokeWidth={2.5} />
					</Link>
				</div>
			</motion.div>
		</section>
	);
}
