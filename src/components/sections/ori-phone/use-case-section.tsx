"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";
import { AudioCard, AudioCardProps } from "./use-case/AudioCard";
import { useSectionFade } from "@/hooks/use-section-fade";

// ─── Static data ─────────────────────────────────────────────────────────────

const CARDS: AudioCardProps[] = [
	{
		title: "Gestion des réservations",
		src: "/audio/ori-reservation.ogg",
		simulatedDuration: 57,
		// ── Configure `at` (seconds) to match the audio ───────────────────────
		tagGroups: [
			{
				at: 0,
				tags: ["Créneau 20h complet", "Proposition alternative 20h30 acceptée"],
			},
			{
				at: 20,
				tags: [
					"Client identifié via numéro",
					"Préférence « table au calme » confirmée",
				],
			},
			{ at: 40, tags: ["Réservation enregistrée dans le CRM"] },
		],
	},
	{
		title: "Questions fréquentes",
		src: "/audio/ori-faq.ogg",
		simulatedDuration: 51,
		// ── Configure `at` (seconds) to match the audio ───────────────────────
		tagGroups: [
			{ at: 0, tags: ["Informations menu communiquées", "Horaires transmis"] },
			{
				at: 18,
				tags: [
					"Demande anniversaire qualifiée (15 pers)",
					"Formules groupe envoyées par SMS",
				],
			},
			{ at: 38, tags: ["Responsable événements notifié"] },
		],
	},
];

// ─── Section ─────────────────────────────────────────────────────────────────

export function UseCaseSection() {
	const { ref, opacity } = useSectionFade();
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	return (
		<motion.section
			id="use-case"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-16 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeader
					label="CAS D'USAGE"
					title="L'assistant téléphone qui travaille à votre place."
					subtitle="Ori comprend chaque demande et exécute l'action."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{CARDS.map((card, i) => (
						<motion.div
							key={card.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
							className="w-full"
						>
							<AudioCard
								{...card}
								active={activeIndex === null || activeIndex === i}
								onActivate={() => setActiveIndex(i)}
							/>
						</motion.div>
					))}
				</div>

				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-3xl mx-auto">
					Ces exemples illustrent la gestion de vos appels en totale autonomie,
					sans aucune intervention de votre équipe.
				</p>
			</div>
		</motion.section>
	);
}
