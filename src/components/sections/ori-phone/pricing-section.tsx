"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";
import { useSectionFade } from "@/hooks/use-section-fade";
import { StandardCard } from "./pricing/StandardCard";
import { AdvancedCard } from "./pricing/AdvancedCard";
import { useLocale } from "@/context/locale-context";

export function OriPhonePricingSection() {
	const [annual, setAnnual] = useState(false);
	const { ref, opacity } = useSectionFade();
	const { t } = useLocale();
	const { pricing } = t;

	return (
		<motion.section
			id="pricing"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-16 sm:py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeader
					label={pricing.label}
					title={pricing.title}
					subtitle={pricing.subtitle}
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-[55rem] mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="h-full"
					>
						<StandardCard annual={annual} setAnnual={setAnnual} />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1, duration: 0.5 }}
						className="h-full"
					>
						<AdvancedCard />
					</motion.div>
				</div>

				<p className="font-display font-normal text-sm sm:text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-3xl mx-auto">
					{pricing.footer}
				</p>
			</div>
		</motion.section>
	);
}
