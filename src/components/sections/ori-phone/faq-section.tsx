"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionFade } from "@/hooks/use-section-fade";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { SectionHeader } from "@/components/ui/section-header";
import { buttonClass } from "@/components/ui/button";

const FAQS = [
	{
		question: "Dois-je changer de numéro ou de matériel ?",
		answer:
			"Non. Ori se connecte à votre numéro existant via un simple renvoi d'appel. Aucun matériel à acheter, aucune installation technique — tout fonctionne avec votre ligne actuelle.",
	},
	{
		question: "Ori peut-il vraiment prendre des réservations automatiquement ?",
		answer:
			"Oui. Ori dispose de votre planning en temps réel et peut confirmer, modifier ou annuler une réservation directement dans votre logiciel. Le client reçoit une confirmation par SMS.",
	},
	{
		question: "Que se passe t-il en cas de demande urgente ?",
		answer:
			"Ori détecte les situations urgentes et peut transférer l'appel à votre équipe selon des règles que vous définissez : plages horaires, mots-clés, ou à tout moment sur demande du client.",
	},
	{
		question: "Est-ce rentable pour un petit restaurant ?",
		answer:
			"Absolument. Un seul client perdu à cause d'un appel manqué peut coûter plus qu'un mois d'abonnement à Ori. Et les heures économisées par votre équipe sur la gestion des appels représentent un gain immédiat.",
	},
	{
		question: "Comment fonctionne l'essai de 7 jours ?",
		answer:
			"Vous activez Ori en 5 minutes, sans carte bancaire requise. Pendant 7 jours, Ori gère vos appels réels. À la fin de l'essai, vous choisissez si vous continuez — sans aucun engagement.",
	},
];

export function FAQSection() {
	const [open, setOpen] = useState<number | null>(null);
	const { ref, opacity } = useSectionFade();

	return (
		<motion.section
			id="faq"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-16 sm:py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
					{/* Left: title block */}
					<div className="lg:w-[560px] shrink-0 flex flex-col">
						<SectionHeader
							label="FAQ"
							title="Vos questions sur Ori"
							subtitle="Tout savoir sur l'assistant conçu pour les restaurants."
							className="mb-0"
						/>

						<Link
							href="/contact"
							className={buttonClass({
								variant: "ghost-primary",
								size: "lg",
								className: "w-full sm:w-[292px]",
							})}
						>
							Voir toutes les questions
						</Link>
					</div>

					{/* Right: accordion */}
					<div className="flex-1">
						{FAQS.map((faq, i) => (
							<div
								key={i}
								className="border-b border-background-secondary dark:border-dark-elevated"
							>
								<button
									onClick={() => setOpen(open === i ? null : i)}
									className="w-full flex items-center gap-4 sm:gap-6 text-left group min-h-[80px] sm:min-h-[96px]"
								>
									<div className="w-1.5 h-[28px] sm:h-[33px] rounded-sm shrink-0 transition-colors bg-primary" />
									<span className="flex-1 font-display font-semibold text-base sm:text-xl lg:text-2xl text-text-primary dark:text-text">
										{faq.question}
									</span>
									<ChevronDown
										size={22}
										strokeWidth={2}
										className={`shrink-0 text-text-secondary dark:text-text transition-transform ${
											open === i ? "rotate-180" : ""
										}`}
									/>
								</button>

								<AnimatePresence initial={false}>
									{open === i && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
											className="overflow-hidden"
										>
											<p className="font-display font-normal text-sm sm:text-base text-text-primary dark:text-text-tertiary pb-6 sm:pb-8 pl-4 sm:pl-6 leading-relaxed">
												{faq.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
}
