"use client";

import { motion } from "framer-motion";

const STATS = [
	{ value: "500+", label: "Disponible", color: "text-primary" },
	{ value: "2M+", label: "Conversations gérées", color: "text-ori-message" },
	{ value: "98%", label: "Satisfaction client", color: "text-primary" },
	{ value: "24/7", label: "Disponibilité", color: "text-ori-message" },
];

export function Stats() {
	return (
		<section className="section-padding py-10">
			<div className="max-w-5xl mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0">
					{STATS.map((stat, i) => (
						<motion.div
							key={`${stat.value}-${i}`}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.08, duration: 0.5 }}
							className="flex flex-col items-center text-center gap-2 relative"
						>
							{/* Vertical divider between stats on desktop */}
							{i > 0 && (
								<span
									aria-hidden
									className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-background-secondary dark:bg-secondary"
								/>
							)}
							<span className={`font-display font-bold text-5xl ${stat.color}`}>
								{stat.value}
							</span>
							<span className="font-display font-normal text-lg text-text-secondary dark:text-text-tertiary">
								{stat.label}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
