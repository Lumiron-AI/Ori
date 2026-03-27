"use client";

import { motion } from "framer-motion";

const STEPS = [
	{
		number: "01",
		title: "Configuration",
		description:
			"Renseignez les informations de votre restaurant en 5 minutes.",
		color: "text-primary",
		borderColor: "border-primary/40",
		bgColor: "bg-primary/5 dark:bg-dark-chip",
	},
	{
		number: "02",
		title: "Activation",
		description:
			"Ori se connecte à vos canaux (téléphone, WhatsApp, Instagram).",
		color: "text-ori-message",
		borderColor: "border-ori-message/40",
		bgColor: "bg-ori-message/5 dark:bg-dark-chip",
	},
	{
		number: "03",
		title: "Conversations",
		description: "Ori répond automatiquement à vos clients, 24h/24.",
		color: "text-primary",
		borderColor: "border-primary/40",
		bgColor: "bg-primary/5 dark:bg-dark-chip",
	},
	{
		number: "04",
		title: "Suivi",
		description: "Suivez vos statistiques et conversations en temps réel.",
		color: "text-ori-message",
		borderColor: "border-ori-message/40",
		bgColor: "bg-ori-message/5 dark:bg-dark-chip",
	},
];

export function HowItWorks() {
	return (
		<section
			id="fonctionnement"
			className="section-padding py-12 md:py-16 lg:py-20"
		>
			<div className="max-w-8xl mx-auto">
				<div className="text-center mb-8 md:mb-10 lg:mb-12">
					<p className="font-display font-semibold text-lg sm:text-2xl uppercase text-primary mb-2">
						Fonctionnement
					</p>
					<h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary dark:text-text mb-3">
						Comment ça marche ?
					</h2>
					<p className="font-display font-semibold text-base sm:text-xl lg:text-2xl/8 text-text-primary dark:text-text-tertiary max-w-3xl mx-auto">
						Lancez Ori en quelques minutes. Aucune compétence technique requise.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
					{STEPS.map((step, i) => (
						<motion.div
							key={step.number}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
							className="flex flex-col items-center text-center gap-4 sm:gap-5"
						>
							{/* Numbered circle */}
							<div
								className={`flex items-center justify-center rounded-full border-2 w-16 h-16 sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] ${step.borderColor} ${step.bgColor} shrink-0`}
							>
								<span
									className={`font-display font-bold text-4xl sm:text-5xl ${step.color}`}
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
					))}
				</div>
			</div>
		</section>
	);
}
