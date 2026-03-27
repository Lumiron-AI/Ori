"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

import { TabId, TABS } from "../interface-section";
import { QuickSetUpPanel } from "./QuickSetUpPanel";
import { CustomizePanel } from "./CustomizePanel";
import { AutomationPanel } from "./AutomationPanel";
import { TrackingPanel } from "./TrackingPanel";

export function InterfaceTabsPhone() {
	const [active, setActive] = useState<TabId>("setup");

	const panels: Record<TabId, React.ReactNode> = {
		setup: <QuickSetUpPanel />,
		customize: <CustomizePanel />,
		automation: <AutomationPanel />,
		tracking: <TrackingPanel />,
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-8 lg:gap-14 items-start lg:items-center">
			{/* ── Left: accordion ── */}
			<div>
				{TABS.map((tab, i) => {
					const isActive = active === tab.id;
					return (
						<div key={tab.id}>
							{i > 0 && <div className="h-px bg-background-secondary dark:bg-dark-overlay" />}
							<button
								onClick={() => setActive(tab.id)}
								className="w-full flex items-center gap-3 sm:gap-4 py-5 sm:py-8 text-left min-h-[64px] sm:min-h-0"
							>
								<tab.Icon
									size={26}
									className={`shrink-0 transition-colors ${
										isActive ? "text-primary" : "text-text-heading dark:text-text"
									}`}
								/>
								<span
									className={`flex-1 font-display text-lg sm:text-2xl leading-snug transition-colors ${
										isActive
											? "font-bold text-primary"
											: "font-semibold text-text-heading dark:text-text"
									}`}
								>
									{tab.label}
								</span>
								<Plus
									size={24}
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
										<p className="font-display font-normal text-base sm:text-lg text-text-heading dark:text-brand-accent pb-6 sm:pb-8 pr-6 sm:pr-10">
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
			<div className="bg-background-element dark:bg-dark-surface rounded-3xl sm:rounded-4xl p-5 sm:p-8 lg:p-10 shadow-card overflow-hidden lg:min-h-[550px] flex flex-col justify-center">
				<AnimatePresence mode="wait">
					<motion.div
						key={active}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
					>
						{panels[active]}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
