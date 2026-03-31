"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, CircleHelp } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";
import { AudioCard } from "./use-case/AudioCard";
import { useSectionFade } from "@/hooks/use-section-fade";
import { useLocale } from "@/context/locale-context";

const CARD_ICONS = [CalendarCheck, CircleHelp];
const CARD_SRCS = ["/audio/ori-reservation.ogg", "/audio/ori-faq.ogg"];
const CARD_DURATIONS = [57, 51];

export function UseCaseSection() {
	const { ref, opacity } = useSectionFade();
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const { t } = useLocale();
	const { useCase } = t;

	return (
		<motion.section
			id="use-case"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-16 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeader
					label={useCase.label}
					title={useCase.title}
					subtitle={useCase.subtitle}
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{useCase.cards.map((card, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
							className="w-full"
						>
							<AudioCard
								title={card.title}
								icon={CARD_ICONS[i]}
								src={CARD_SRCS[i]}
								simulatedDuration={CARD_DURATIONS[i]}
								tagGroups={card.tagGroups}
								active={activeIndex === null || activeIndex === i}
								onActivate={() => setActiveIndex(i)}
							/>
						</motion.div>
					))}
				</div>

				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-4xl mx-auto">
					{useCase.footer}
				</p>
			</div>
		</motion.section>
	);
}
