"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/locale-context";

const STEP_STYLES = [
	{ color: "text-primary", borderColor: "border-primary/40", bgColor: "bg-primary/5 dark:bg-dark-chip" },
	{ color: "text-ori-message", borderColor: "border-ori-message/40", bgColor: "bg-ori-message/5 dark:bg-dark-chip" },
	{ color: "text-primary", borderColor: "border-primary/40", bgColor: "bg-primary/5 dark:bg-dark-chip" },
	{ color: "text-ori-message", borderColor: "border-ori-message/40", bgColor: "bg-ori-message/5 dark:bg-dark-chip" },
];

export function HowItWorks() {
	const { t } = useLocale();
	const { homeHowItWorks } = t;

	return (
		<section
			id="fonctionnement"
			className="section-padding py-12 md:py-16 lg:py-20"
		>
			<div className="max-w-8xl mx-auto">
				<div className="text-center mb-8 md:mb-10 lg:mb-12">
					<p className="font-display font-semibold text-lg sm:text-2xl uppercase text-primary mb-2">
						{homeHowItWorks.label}
					</p>
					<h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary dark:text-text mb-3">
						{homeHowItWorks.title}
					</h2>
					<p className="font-display font-semibold text-base sm:text-xl lg:text-2xl/8 text-text-secondary dark:text-text-tertiary max-w-3xl mx-auto">
						{homeHowItWorks.subtitle}
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
					{homeHowItWorks.steps.map((step, i) => {
						const style = STEP_STYLES[i];
						return (
							<motion.div
								key={step.number}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.5 }}
								className="flex flex-col items-center text-center gap-4 sm:gap-5"
							>
								<div
									className={`flex items-center justify-center rounded-full border-2 w-16 h-16 sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] ${style.borderColor} ${style.bgColor} shrink-0`}
								>
									<span
										className={`font-display font-bold text-4xl sm:text-5xl ${style.color}`}
									>
										{step.number}
									</span>
								</div>

								<h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary dark:text-text">
									{step.title}
								</h3>
								<p className="font-display font-normal text-base sm:text-lg text-text-secondary dark:text-text-tertiary max-w-[18rem]">
									{step.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
