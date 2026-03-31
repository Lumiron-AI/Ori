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
export const TAB_IDS: TabId[] = ["setup", "customize", "automation", "tracking"];

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
			className="bg-background dark:bg-dark-bg py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeader
					label={iface.label}
					title={iface.title}
					subtitle={iface.subtitle}
					subtitleClassName="max-w-3xl"
				/>

				<InterfaceTabsPhone />

				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-3xl mx-auto">
					{iface.footer}
				</p>
			</div>
		</motion.section>
	);
}
