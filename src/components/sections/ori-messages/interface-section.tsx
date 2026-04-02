"use client";

import { motion } from "framer-motion";
import { SectionHeaderMessages } from "@/components/ui/section-header-messages";
import { InterfaceTabsMessage } from "./interface/InterfaceTabsMessage";
import { useSectionFade } from "@/hooks/use-section-fade";
import { useLocale } from "@/context/locale-context";

export function OriMessagesInterfaceSection() {
	const { ref, opacity } = useSectionFade();
	const { t } = useLocale();
	const d = t.messagesInterface;

	return (
		<motion.section
			id="interface"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<SectionHeaderMessages
						label={d.label}
						title={d.title}
						subtitle={d.subtitle}
						subtitleClassName="max-w-5xl"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<InterfaceTabsMessage />
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.24, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-4xl mx-auto"
				>
					{d.footer}
				</motion.p>
			</div>
		</motion.section>
	);
}
