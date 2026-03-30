"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { SectionHeaderMessages } from "@/components/ui/section-header-messages";
import { useSectionFade } from "@/hooks/use-section-fade";
import { PricingCardInstagram } from "./pricing/PricingCardInstagram";
import { PricingCardWhatsApp } from "./pricing/PricingCardWhatsApp";
import { PricingCardDuo } from "./pricing/PricingCardDuo";

export function OriMessagesPricingSection() {
	const [annual, setAnnual] = useState(false);
	const { ref, opacity } = useSectionFade();

	return (
		<motion.section
			id="pricing"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-16 sm:py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeaderMessages
					label="TARIFS"
					title="Choisissez le canal adapté à votre restaurant"
					subtitle="Commencez avec un canal ou combinez-les pour une gestion complète."
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="h-full"
					>
						<PricingCardInstagram annual={annual} setAnnual={setAnnual} />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1, duration: 0.5 }}
						className="h-full"
					>
						<PricingCardWhatsApp annual={annual} setAnnual={setAnnual} />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="h-full"
					>
						<PricingCardDuo annual={annual} setAnnual={setAnnual} />
					</motion.div>
				</div>

				<p className="font-display font-normal text-sm sm:text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-3xl mx-auto">
					Un seul client perdu coûte plus cher qu&apos;un mois d&apos;Ori.
				</p>
			</div>
		</motion.section>
	);
}
