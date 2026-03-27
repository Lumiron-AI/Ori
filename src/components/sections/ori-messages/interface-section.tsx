"use client";

import { motion } from "framer-motion";
import { SectionHeaderMessages } from "@/components/ui/section-header-messages";
import { InterfaceTabsMessage } from "./interface/InterfaceTabsMessage";
import { useSectionFade } from "@/hooks/use-section-fade";

export function OriMessagesInterfaceSection() {
	const { ref, opacity } = useSectionFade();

	return (
		<motion.section
			id="interface"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeaderMessages
					label="INTERFACE"
					title="Votre messagerie en pilote automatique."
					subtitle="Configurez Ori en quelques minutes et laissez-le gérer chaque message avec précision, selon vos règles."
					subtitleClassName="max-w-3xl"
				/>

				<InterfaceTabsMessage />

				<p className="font-display font-semibold text-lg text-text-secondary dark:text-text-tertiary text-center mt-12 max-w-3xl mx-auto">
					Une gestion simplifiée pour vous concentrer sur l&apos;essentiel :
					l&apos;accueil de vos clients et la qualité de votre service.
				</p>
			</div>
		</motion.section>
	);
}
