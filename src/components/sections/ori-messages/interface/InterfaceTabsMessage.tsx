"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import {
	RiSettings3Line,
	RiUser3Line,
	RiMessage2Line,
	RiBarChart2Line,
} from "react-icons/ri";

import { QuickSetUpPanel } from "./QuickSetUpPanel";
import { CustomizePanel } from "./CustomizePanel";
import { AutomationPanel } from "./AutomationPanel";
import { TrackingPanel } from "./TrackingPanel";

type TabId = "setup" | "customize" | "automation" | "tracking";

const TABS = [
	{
		id: "setup" as TabId,
		label: "Connexion en un clic",
		Icon: RiSettings3Line,
		description:
			"Liez vos comptes WhatsApp et Instagram instantanément. Ori est prêt à répondre à vos clients en moins de 5 minutes.",
	},
	{
		id: "customize" as TabId,
		label: "Personnalisation métier",
		Icon: RiUser3Line,
		description:
			"Définissez le ton des réponses, vos horaires d'activité et les règles propres à votre établissement. Ori s'adapte à votre image.",
	},
	{
		id: "automation" as TabId,
		label: "Gestion 100% autonome",
		Icon: RiMessage2Line,
		description:
			"Ori prend en charge les réservations, les questions fréquentes et chaque sollicitation en temps réel. Votre équipe reste concentrée sur l'essentiel.",
	},
	{
		id: "tracking" as TabId,
		label: "Historique complet",
		Icon: RiBarChart2Line,
		description:
			"Retrouvez l'historique de tous les échanges et mesurez l'impact d'Ori sur votre taux de conversion et vos réservations.",
	},
] as const;

export function InterfaceTabsMessage() {
	const [active, setActive] = useState<TabId | null>("setup");
	const lastActiveRef = useRef<TabId>("setup");

	function handleTabClick(id: TabId) {
		if (active === id) {
			setActive(null);
		} else {
			lastActiveRef.current = id;
			setActive(id);
		}
	}

	const panels: Record<TabId, React.ReactNode> = {
		setup: <QuickSetUpPanel />,
		customize: <CustomizePanel />,
		automation: <AutomationPanel />,
		tracking: <TrackingPanel />,
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-8 lg:gap-14 items-start lg:items-center px-12">
			{/* ── Left: accordion ── */}
			<div>
				{TABS.map((tab, i) => {
					const isActive = active === tab.id;
					return (
						<div key={tab.id}>
							{i > 0 && (
								<div className="h-px bg-background-secondary dark:bg-dark-overlay" />
							)}
							<button
								onClick={() => handleTabClick(tab.id)}
								className="w-full flex items-center gap-2 sm:gap-3 py-4 sm:py-6 text-left min-h-[52px] sm:min-h-0"
							>
								<tab.Icon
									size={22}
									className={`shrink-0 transition-colors ${
										isActive
											? "text-ori-message"
											: "text-text-heading dark:text-text"
									}`}
								/>
								<span
									className={`flex-1 font-display text-lg sm:text-2xl leading-snug transition-colors ${
										isActive
											? "font-bold text-ori-message"
											: "font-semibold text-text-heading dark:text-text"
									}`}
								>
									{tab.label}
								</span>
								<Plus
									size={20}
									strokeWidth={1.5}
									className={`shrink-0 text-text-secondary dark:text-text transition-transform duration-300 ${
										isActive ? "rotate-45" : ""
									}`}
								/>
							</button>

							<AnimatePresence initial={false}>
								{isActive && (
									<motion.div
										key="desc"
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
										className="overflow-hidden"
									>
										<p className="font-display font-normal text-sm sm:text-base text-text-heading dark:text-brand-accent pb-5 sm:pb-6 pr-5 sm:pr-8">
											{tab.description}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					);
				})}
			</div>

			{/* ── Right: dashboard panel ── */}
			<div className="bg-background-element dark:bg-dark-surface rounded-3xl sm:rounded-4xl p-4 sm:p-6 lg:p-8 shadow-card overflow-hidden lg:min-h-[525px] flex flex-col justify-center">
				<AnimatePresence mode="wait">
					<motion.div
						key={lastActiveRef.current}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
					>
						{panels[active ?? lastActiveRef.current]}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
