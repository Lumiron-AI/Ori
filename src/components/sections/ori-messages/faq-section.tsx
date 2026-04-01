"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { SectionHeaderMessages } from "@/components/ui/section-header-messages";
import { buttonClass } from "@/components/ui/button";
import { useSectionFade } from "@/hooks/use-section-fade";

const FAQS = [
	{
		question: "Dois-je changer mes comptes WhatsApp ou Instagram ?",
		answer:
			"Non. Ori se connecte directement à vos comptes existants (Business ou Pro). Vous gardez vos accès, votre historique et vous pouvez continuer à les utiliser normalement.",
	},
	{
		question: "Est-ce qu'Ori peut vraiment gérer mes réservations ?",
		answer:
			"Oui. Ori est capable de comprendre une demande de table, de vérifier vos disponibilités et de confirmer la réservation en suivant vos règles spécifiques, comme le ferait un membre de votre équipe.",
	},
	{
		question: "Puis-je reprendre la main sur une discussion à tout moment ?",
		answer:
			"Absolument. Vous gardez le contrôle total. Si vous souhaitez intervenir personnellement dans une conversation sur WhatsApp ou Instagram, vous pouvez le faire instantanément depuis votre application habituelle.",
	},
	{
		question: "Est-ce que je peux utiliser Ori seulement quand je suis fermé ?",
		answer:
			"Oui. Vous pouvez programmer Ori pour qu'il ne s'active que pendant vos coupures, la nuit ou vos jours de fermeture. C'est vous qui déterminez ses plages d'activité selon vos besoins.",
	},
	{
		question: "Combien de temps faut-il pour activer l'assistant ?",
		answer:
			"Moins de 5 minutes. La connexion est simplifiée au maximum : vous liez vos comptes, vous renseignez vos infos de base, et Ori commence à répondre à vos clients immédiatement.",
	},
];

export function OriMessagesFAQSection() {
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
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="lg:w-[560px] shrink-0 flex flex-col"
					>
						<SectionHeaderMessages
							label="FAQ"
							title="Tout savoir sur Ori Message"
							subtitle="Les réponses à vos questions pour automatiser vos réseaux en toute confiance."
							className="mb-0"
						/>

						<Link
							href="/contact"
							className={buttonClass({
								variant: "ghost-primary",
								size: "lg",
								className:
									"w-full sm:w-[292px] border-ori-message text-ori-message bg-ori-message/10 hover:bg-ori-message/20 shadow-blue-btn-soft",
							})}
						>
							Voir toutes les questions
						</Link>
					</motion.div>

					{/* Right: accordion */}
					<div className="flex-1">
						{FAQS.map((faq, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									delay: i * 0.12,
									duration: 0.6,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								<div className="border-b border-background-secondary dark:border-dark-elevated">
									<button
										onClick={() => setOpen(open === i ? null : i)}
										className="w-full flex items-center gap-4 sm:gap-6 text-left group min-h-[80px] sm:min-h-[82px]"
									>
										<div className="w-1.5 h-[28px] sm:h-[28px] rounded-sm shrink-0 transition-colors bg-ori-message" />
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
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
}
