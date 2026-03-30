"use client";

import {
	RiSettings3Line,
	RiUser3Line,
	RiPhoneLine,
	RiBarChart2Line,
} from "react-icons/ri";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";
import { InterfaceTabsPhone } from "./interface/InterfaceTabsPhone";
import { useSectionFade } from "@/hooks/use-section-fade";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TabId = "setup" | "customize" | "automation" | "tracking";

// ─── Static data ──────────────────────────────────────────────────────────────

export const TABS = [
	{
		id: "setup" as TabId,
		label: "Mise en service immédiate",
		Icon: RiSettings3Line,
		description:
			"Renseignez les informations de votre restaurant, vos horaires et vos règles. Ori est prêt à répondre aux appels, sans installation complexe.",
	},
	{
		id: "customize" as TabId,
		label: "Personnalisation sur-mesure",
		Icon: RiUser3Line,
		description:
			"Définissez le message d'accueil, le ton et les règles de transfert. Ori s'adapte précisément à l'image de votre établissement.",
	},
	{
		id: "automation" as TabId,
		label: "Autonomie complète",
		Icon: RiPhoneLine,
		description:
			"Ori prend en charge les réservations, commandes et questions fréquentes. Votre équipe n'est plus interrompue pendant le service.",
	},
	{
		id: "tracking" as TabId,
		label: "Suivi et statistiques",
		Icon: RiBarChart2Line,
		description:
			"Retrouvez l'historique complet de vos appels et mesurez l'impact d'Ori sur votre taux de remplissage.",
	},
] as const;

// ─── Section ──────────────────────────────────────────────────────────────────

export function InterfaceSection() {
	const { ref, opacity } = useSectionFade();

	return (
		<motion.section
			id="interface"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeader
					label="INTERFACE"
					title="Votre assistant, vos règles."
					subtitle="Une interface pensée pour le terrain : définissez vos règles et suivez vos résultats en temps réel."
					subtitleClassName="max-w-3xl"
				/>

				<InterfaceTabsPhone />

				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-3xl mx-auto">
					Une gestion simplifiée pour vous concentrer sur l&apos;essentiel :
					l&apos;accueil de vos clients et la qualité de votre service.
				</p>
			</div>
		</motion.section>
	);
}
