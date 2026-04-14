"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronRight, ChevronLeft } from "lucide-react";

import { TabId, TAB_ICONS, TAB_IDS } from "../interface-section";
import { QuickSetUpPanel } from "./QuickSetUpPanel";
import { CustomizePanel } from "./CustomizePanel";
import { AutomationPanel } from "./AutomationPanel";
import { TrackingPanel } from "./TrackingPanel";
import { useLocale } from "@/context/locale-context";

export function InterfaceTabsPhone() {
	const [active, setActive] = useState<TabId | null>("setup");
	const lastActiveRef = useRef<TabId>("setup");
	const [mobileActiveTab, setMobileActiveTab] = useState<TabId | null>(null);
	const [mounted, setMounted] = useState(false);
	const { t } = useLocale();

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mobileActiveTab !== null) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileActiveTab]);

	function handleTabClick(id: TabId) {
		if (active === id) {
			setActive(null);
		} else {
			lastActiveRef.current = id;
			setActive(id);
		}
	}

	const TABS = t.interface.tabs.map(
		(tab: { label: string; description: string }, i: number) => ({
			id: TAB_IDS[i],
			label: tab.label,
			Icon: TAB_ICONS[i],
			description: tab.description,
		}),
	);

	const panels: Record<TabId, React.ReactNode> = {
		setup: <QuickSetUpPanel />,
		customize: <CustomizePanel />,
		automation: <AutomationPanel />,
		tracking: <TrackingPanel />,
	};

	const mobileTab = mobileActiveTab
		? (TABS.find((tab) => tab.id === mobileActiveTab) ?? null)
		: null;

	return (
		<>
			{/* ── Mobile tab list (< lg) ── */}
			<div className="block lg:hidden md:px-6">
				{TABS.map((tab, i) => (
					<div key={tab.id}>
						{i > 0 && (
							<div className="h-px bg-background-secondary dark:bg-dark-overlay" />
						)}
						<button
							onClick={() => setMobileActiveTab(tab.id)}
							className="w-full flex items-center gap-3 py-4 text-left min-h-[52px]"
						>
							<tab.Icon
								size={22}
								className="shrink-0 text-text-heading dark:text-text"
							/>
							<span className="flex-1 font-display font-semibold text-lg text-text-heading dark:text-text leading-snug">
								{tab.label}
							</span>
							<ChevronRight
								size={20}
								strokeWidth={1.5}
								className="shrink-0 text-text-secondary dark:text-text"
							/>
						</button>
					</div>
				))}
			</div>

			{/* ── Mobile FAQTabs full-page overlay (portal) ── */}
			{mounted &&
				createPortal(
					<AnimatePresence>
						{mobileActiveTab !== null && (
							<motion.div
								key={mobileActiveTab}
								className="fixed inset-0 z-[60] bg-background dark:bg-dark-bg overflow-hidden lg:hidden"
								initial={{ x: "100%" }}
								animate={{ x: 0 }}
								exit={{ x: "100%" }}
								transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
							>
								<div className="px-5 md:px-10 pt-8 pb-12">
									{/* Back button */}
									<button
										onClick={() => setMobileActiveTab(null)}
										className="flex items-center gap-1 text-text-heading dark:text-text font-display font-medium text-base mb-5"
									>
										<ChevronLeft size={20} />
										<span>{t.interface.back}</span>
									</button>

									{/* Header: icon + label */}
									{mobileTab && (
										<div className="flex items-center gap-2 mb-4">
											<mobileTab.Icon
												size={22}
												className="shrink-0 text-text-heading dark:text-text"
											/>
											<span className="font-display font-semibold text-lg text-text-heading dark:text-text">
												{mobileTab.label}
											</span>
										</div>
									)}

									{/* Dashboard panel card */}
									<div className="bg-background-element dark:bg-dark-surface rounded-3xl p-5 shadow-card overflow-hidden mb-4">
										{panels[mobileActiveTab]}
									</div>

									{/* Description */}
									{mobileTab && (
										<p className="font-display font-normal text-sm text-text-heading dark:text-brand-accent">
											{mobileTab.description}
										</p>
									)}
								</div>
							</motion.div>
						)}
					</AnimatePresence>,
					document.body,
				)}

			{/* ── Desktop layout (>= lg) ── */}
			<div className="hidden lg:grid grid-cols-[45%_1fr] gap-11 items-center px-8 3xl:px-12">
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
									className="w-full flex items-center gap-3 py-6 text-left"
								>
									<tab.Icon
										size={22}
										className={`shrink-0 transition-colors ${
											isActive
												? "text-primary"
												: "text-text-heading dark:text-text"
										}`}
									/>
									<span
										className={`flex-1 font-display text-2xl leading-snug transition-colors ${
											isActive
												? "font-bold text-primary"
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
											<p className="font-display font-normal text-base text-text-heading dark:text-brand-accent pb-6 pr-8">
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
				<div className="bg-background-element dark:bg-dark-surface rounded-4xl p-8 shadow-card overflow-hidden min-h-[525px] flex flex-col justify-center">
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
		</>
	);
}
