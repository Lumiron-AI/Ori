"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { SectionHeaderMessages } from "@/components/ui/section-header-messages";
import { useSectionFade } from "@/hooks/use-section-fade";
import { useLocale } from "@/context/locale-context";
import { PricingCardInstagram } from "./pricing/PricingCardInstagram";
import { PricingCardWhatsApp } from "./pricing/PricingCardWhatsApp";
import { PricingCardDuo } from "./pricing/PricingCardDuo";

export function OriMessagesPricingSection() {
	const [annualInstagram, setAnnualInstagram] = useState(false);
	const [annualWhatsApp, setAnnualWhatsApp] = useState(false);
	const [annualDuo, setAnnualDuo] = useState(false);
	const { ref, opacity } = useSectionFade();
	const { t } = useLocale();
	const d = t.messagesPricing;

	return (
		<motion.section
			id="pricing"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-16 sm:py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeaderMessages
					label={d.label}
					title={d.title}
					subtitle={d.subtitle}
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="h-full"
					>
						<PricingCardInstagram
							annual={annualInstagram}
							setAnnual={setAnnualInstagram}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							delay: 0.12,
							duration: 0.6,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="h-full"
					>
						<PricingCardWhatsApp
							annual={annualWhatsApp}
							setAnnual={setAnnualWhatsApp}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							delay: 0.24,
							duration: 0.6,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="h-full"
					>
						<PricingCardDuo annual={annualDuo} setAnnual={setAnnualDuo} />
					</motion.div>
				</div>

				<p className="font-display font-semibold text-sm sm:text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-3xl mx-auto">
					{d.footer}
				</p>
			</div>
		</motion.section>
	);
}
