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
import { useLocale } from "@/context/locale-context";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TabId = "setup" | "customize" | "automation" | "tracking";

export const TAB_ICONS = [
	RiSettings3Line,
	RiUser3Line,
	RiPhoneLine,
	RiBarChart2Line,
];
export const TAB_IDS: TabId[] = [
	"setup",
	"customize",
	"automation",
	"tracking",
];

// ─── Section ──────────────────────────────────────────────────────────────────

export function InterfaceSection() {
	const { ref, opacity } = useSectionFade();
	const { t } = useLocale();
	const { interface: iface } = t;

	return (
		<motion.section
			id="interface"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-12 md:py-20 lg:py-24 px-5 md:px-10 3xl:px-16"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<SectionHeader
						label={iface.label}
						title={iface.title}
						subtitle={iface.subtitle}
						subtitleClassName="max-w-5xl"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<InterfaceTabsPhone />
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.24, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="font-display font-normal text-sm sm:text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-3xl mx-auto"
				>
					{iface.footer}
				</motion.p>
			</div>
		</motion.section>
	);
}
