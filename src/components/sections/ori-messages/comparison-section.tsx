"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AiOutlineMinusCircle } from "react-icons/ai";

import { SectionHeaderMessages } from "@/components/ui/section-header-messages";
import { useSectionFade } from "@/hooks/use-section-fade";

const ROWS = [
	{
		topic: "Délai de réponse",
		without: "Plusieurs heures d'attente selon votre disponibilité",
		with: "Réponse immédiate en moins de 2 secondes",
	},
	{
		topic: "Taux de conversion",
		without: "Perte de clients faute de réactivité immédiate",
		with: "Engagement maximal grâce à un traitement instantané",
	},
	{
		topic: "Précision des infos",
		without: "Risque d'erreurs ou d'informations incomplètes",
		with: "Réponses fiables basées sur vos données réelles",
	},
	{
		topic: "Gestion du flux",
		without: "Interruption constante de vos tâches prioritaires",
		with: "Autonomie complète pour une tranquilité totale",
	},
	{
		topic: "Accessibilité",
		without: "Dépend de la présence humaine sur chaque application",
		with: "Disponibilité totale, 24h/24 sur tous vos canaux",
	},
];

export function OriMessagesComparisonSection() {
	const { ref, opacity } = useSectionFade();

	return (
		<motion.section
			id="comparison"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-16 sm:py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeaderMessages
					label="COMPARATIF"
					title="Pourquoi choisir Ori pour vos messageries ?"
					subtitle="Comparez la gestion manuelle avec la puissance de l'automatisation intelligente et mesurez l'impact sur votre quotidien."
					subtitleClassName="max-w-6xl"
				/>

				{/* Desktop table */}
				<div className="hidden sm:block overflow-x-auto">
					<table className="w-full border-separate border-spacing-x-0 border-spacing-y-1.5 min-w-[560px]">
						<thead>
							<tr>
								<th className="w-[22%]" />
								<th className="w-[39%]">
									<div className="bg-dark-overlay text-text font-display font-semibold text-lg rounded-tl-2xl rounded-tr-2xl px-5 py-3 text-center">
										Gestion manuelle
									</div>
								</th>
								<th className="w-[39%] border-l-4 border-background dark:border-x-dark-bg p-0!">
									<div className="bg-ori-message text-text font-display font-semibold text-lg rounded-tl-2xl rounded-tr-2xl px-5 py-3 text-center">
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
									<td className="bg-background-secondary dark:bg-dark-elevated border-r-4 border-background dark:border-x-dark-bg rounded-l-2xl">
										<div
											className={`px-5 py-4 font-display font-semibold text-lg text-text-primary dark:text-text ${
												i === ROWS.length - 1 ? "rounded-bl-2xl" : ""
											}`}
										>
											{row.topic}
										</div>
									</td>

									<td className="bg-background-secondary dark:border-dark-bg dark:bg-dark-elevated">
										<div className="px-5 py-4 flex items-start gap-3">
											<AiOutlineMinusCircle
												size={20}
												className="text-text-secondary dark:text-text-tertiary shrink-0 mt-0.5"
												strokeWidth={2.5}
											/>
											<span className="font-display font-normal text-base text-text-primary dark:text-text">
												{row.without}
											</span>
										</div>
									</td>

									<td className="bg-background-secondary dark:bg-dark-elevated border-l-4 border-background dark:border-dark-bg">
										<div
											className={`px-5 py-4 flex items-start gap-3 rounded-r-2xl ${
												i === ROWS.length - 1 ? "rounded-br-2xl" : ""
											}`}
										>
											<CheckCircle2
												size={20}
												className="text-ori-message shrink-0 mt-0.5"
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

				{/* Mobile cards */}
				<div className="flex flex-col gap-4 sm:hidden">
					<div className="grid grid-cols-2 gap-2">
						<div className="bg-dark-overlay text-text font-display font-semibold text-lg rounded-2xl px-4 py-2.5 text-center">
							Gestion manuelle
						</div>
						<div className="bg-ori-message text-text font-display font-semibold text-lg rounded-2xl px-4 py-2.5 text-center">
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
							<div className="bg-background-tertiary dark:bg-dark-overlay px-4 py-2">
								<span className="font-display font-semibold text-lg text-text-primary dark:text-text">
									{row.topic}
								</span>
							</div>
							<div className="grid grid-cols-2 gap-px bg-background-tertiary dark:bg-dark-overlay">
								<div className="bg-background-secondary dark:bg-dark-elevated px-3 py-3 flex items-start gap-2">
									<AiOutlineMinusCircle
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
										className="text-ori-message shrink-0 mt-0.5"
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

				<p className="font-display font-normal text- sm:text-lg text-text-secondary dark:text-text-tertiary text-center mt-8 sm:mt-10 max-w-3xl mx-auto">
					Ne laissez plus aucune opportunité vous échapper. Chaque message reçu
					est une chance de convertir un prospect en client fidèle.
				</p>
			</div>
		</motion.section>
	);
}
