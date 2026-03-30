"use client";

import { motion } from "framer-motion";
import { Minus, CheckCircle2 } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";
import { useSectionFade } from "@/hooks/use-section-fade";

const ROWS = [
	{
		topic: "Disponibilité",
		without: "Appels manqués pendant le rush ou après minuit",
		with: "Décroché instantané 24h/24 et 7j/7",
	},
	{
		topic: "Charge de travail",
		without: "Interruption constante du personnel en plein service",
		with: "Équipe 100% concentrée sur les clients en salle",
	},
	{
		topic: "Réservations",
		without: "Risque d'erreurs de saisie et d'oublis",
		with: "Saisie automatique et fiable dans votre logiciel",
	},
	{
		topic: "Coût d'exploitation",
		without: "Un poste coûteux et difficile à recruter",
		with: "Un investissement rentable dès le premier jour",
	},
	{
		topic: "Sérénité",
		without: "Stress lié au téléphone qui sonne dans le vide",
		with: "Esprit libre : chaque appel est traité",
	},
];

export function ComparisonSection() {
	const { ref, opacity } = useSectionFade();

	return (
		<motion.section
			id="comparison"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-16 sm:py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeader
					label="COMPARATIF"
					title="Bien plus qu'un standard, un atout pour votre équipe."
					subtitle="Comparez l'impact d'Ori sur votre quotidien face à une gestion classique."
					subtitleClassName="max-w-3xl"
				/>

				{/* Desktop table — hidden on mobile */}
				<div className="hidden sm:block overflow-x-auto">
					<table className="w-full border-separate border-spacing-x-0 border-spacing-y-1.5 min-w-[560px]">
						<thead>
							<tr>
								<th className="w-[22%]" />
								<th className="w-[39%]">
									<div className="bg-dark-overlay text-text font-display font-semibold text-lg rounded-tl-2xl rounded-tr-2xl px-5 py-3 text-center">
										Standard classique
									</div>
								</th>
								<th className="w-[39%] border-l-4 border-background p-0!">
									<div className="bg-primary text-text font-display font-semibold text-lg rounded-tl-2xl rounded-tr-2xl px-5 py-3 text-center">
										Avec Ori
									</div>
								</th>
							</tr>
						</thead>

						<tbody>
							{ROWS.map((row, i) => (
								<motion.tr
									key={i}
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.07, duration: 0.4 }}
								>
									<td className="bg-background-secondary border-r-4 border-background rounded-l-2xl">
										<div
											className={` dark:bg-dark-elevated px-5 py-4 font-display font-semibold text-lg text-text-primary dark:text-text  ${
												i === ROWS.length - 1 ? "rounded-bl-2xl" : ""
											}`}
										>
											{row.topic}
										</div>
									</td>

									<td className="bg-background-secondary dark:border-dark-bg">
										<div className=" dark:bg-dark-elevated px-5 py-4 flex items-start gap-3">
											<Minus
												size={20}
												className="text-text-secondary dark:text-text-tertiary shrink-0 mt-0.5"
												strokeWidth={2.5}
											/>
											<span className="font-display font-normal text-base text-text-primary dark:text-text">
												{row.without}
											</span>
										</div>
									</td>

									<td className="bg-background-secondary border-l-4 border-background dark:border-dark-bg">
										<div
											className={`bg-background-secondary dark:bg-dark-elevated px-5 py-4 flex items-start gap-3 rounded-r-2xl ${
												i === ROWS.length - 1 ? "rounded-br-2xl" : ""
											}`}
										>
											<CheckCircle2
												size={20}
												className="text-primary shrink-0 mt-0.5"
												strokeWidth={2.5}
											/>
											<span className="font-display font-bold text-base text-text-primary dark:text-text">
												{row.with}
											</span>
										</div>
									</td>
								</motion.tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Mobile cards — shown only on mobile */}
				<div className="flex flex-col gap-4 sm:hidden">
					{/* Column headers */}
					<div className="grid grid-cols-2 gap-2">
						<div className="bg-dark-overlay text-text font-display font-semibold text-lg rounded-2xl px-4 py-2.5 text-center">
							Standard classique
						</div>
						<div className="bg-primary text-text font-display font-semibold text-lg rounded-2xl px-4 py-2.5 text-center">
							Avec Ori
						</div>
					</div>

					{ROWS.map((row, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.07, duration: 0.4 }}
							className="rounded-2xl overflow-hidden"
						>
							{/* Topic label */}
							<div className="bg-background-tertiary dark:bg-dark-overlay px-4 py-2">
								<span className="font-display font-semibold text-lg text-text-primary dark:text-text">
									{row.topic}
								</span>
							</div>
							{/* Without / With */}
							<div className="grid grid-cols-2 gap-px bg-background-tertiary dark:bg-dark-overlay">
								<div className="bg-background-secondary dark:bg-dark-elevated px-3 py-3 flex items-start gap-2">
									<Minus
										size={14}
										className="text-text-secondary dark:text-text-tertiary shrink-0 mt-0.5"
										strokeWidth={2.5}
									/>
									<span className="font-display font-normal text-base text-text-primary dark:text-text leading-relaxed">
										{row.without}
									</span>
								</div>
								<div className="bg-background-secondary dark:bg-dark-elevated px-3 py-3 flex items-start gap-2">
									<CheckCircle2
										size={14}
										className="text-primary shrink-0 mt-0.5"
										strokeWidth={2.5}
									/>
									<span className="font-display font-bold text-base text-text-primary dark:text-text leading-relaxed">
										{row.with}
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-3xl mx-auto">
					Maximisez votre chiffre d&apos;affaires en ne laissant plus aucun
					appel sans réponse. Chaque appel décroché est une opportunité
					préservée.
				</p>
			</div>
		</motion.section>
	);
}
