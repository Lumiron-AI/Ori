"use client";

import { Clock, X, Plus, Copy } from "lucide-react";
import { RiVolumeUpLine, RiTimeLine } from "react-icons/ri";
import { FiInfo, FiSettings, FiList } from "react-icons/fi";
import { useLocale } from "@/context/locale-context";

const SCHEDULE_INDICES = [0, 1, 2]; // Lundi, Mardi, Mercredi
const SCHEDULE_DATA = [
	{ on: true, start: "11:00", end: "23:00" },
	{ on: true, start: "11:00", end: "23:00" },
	{ on: false, start: "", end: "" },
];

const TAB_ICONS = [FiInfo, FiSettings, FiList];

export function CustomizePanel() {
	const { t } = useLocale();
	const d = t.dashboardMessages;

	return (
		<>
			{/* Header */}
			<p className="font-display font-medium text-base xs:text-lg lg:text-2xl text-text-primary dark:text-text">
				{d.welcome}
			</p>
			<p className="font-display font-normal text-xs lg:text-base text-text-secondary dark:text-text-tertiary mt-0.5 mb-3 lg:mb-5">
				{d.subtitle}
			</p>

			{/* Tabs — "Fonctionnement" active */}
			<div className="flex gap-1 mb-3 lg:mb-5">
				{d.tabs.map((tab, i) => {
					const Icon = TAB_ICONS[i];
					return (
						<div
							key={tab}
							className={`px-2.5 xs:px-3 lg:px-4 py-2.5 xs:py-1.5 lg:py-2 rounded-xl font-display font-medium text-xs lg:text-base whitespace-nowrap cursor-default ${
								i === 1
									? "bg-ori-message text-text"
									: "text-text-secondary dark:text-text-tertiary"
							}`}
						>
							<span className="xs:hidden flex items-center justify-center">
								<Icon size={14} />
							</span>
							<span className="hidden xs:inline">{tab}</span>
						</div>
					);
				})}
			</div>

			<div className="flex flex-col gap-2 lg:gap-3">
				{/* Card 1 — Choix du ton */}
				<div className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-3 lg:p-4 flex flex-col gap-2 lg:gap-3">
					<div className="flex items-center gap-2 lg:gap-3">
						<RiVolumeUpLine
							size={24}
							className="w-4 h-4 lg:w-6 lg:h-6 text-text-primary dark:text-text-tertiary shrink-0 mt-0.5 mx-1"
						/>
						<span className="font-display font-medium text-xs lg:text-base text-text-primary dark:text-text">
							{d.toneChoice}
						</span>
					</div>
					<div className="flex items-center gap-3 flex-wrap">
						<span className="font-display font-normal text-sm text-text-primary dark:text-text">
							{d.toneGender}
						</span>
						<div className="flex items-center gap-1.5">
							<div className="w-3.5 h-3.5 rounded-full border-2 border-ori-message flex items-center justify-center">
								<div className="w-1.5 h-1.5 rounded-full bg-ori-message" />
							</div>
							<span className="font-display font-normal text-sm text-text-primary dark:text-text">
								{d.toneProfessional}
							</span>
						</div>
						<div className="flex items-center gap-1.5">
							<div className="w-3.5 h-3.5 rounded-full border-2 border-background-tertiary dark:border-dark-overlay" />
							<span className="font-display font-normal text-sm text-text-primary dark:text-text">
								{d.toneCasual}
							</span>
						</div>
					</div>
				</div>

				{/* Card 2 — Plages d'activité */}
				<div className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-3 lg:p-4 flex flex-col gap-2 lg:gap-3">
					<div className="flex items-center gap-2 lg:gap-3">
						<RiTimeLine
							size={24}
							className="w-4 h-4 lg:w-6 lg:h-6 text-text-primary dark:text-text-tertiary shrink-0 mt-0.5 mx-1"
						/>
						<span className="font-display font-medium text-xs lg:text-base text-text-primary dark:text-text">
							{d.activitySlots}
						</span>
					</div>
					<p className="font-display font-normal text-xs sm:text-sm text-text-secondary dark:text-text-tertiary">
						{d.activitySlotsSubtitle}
					</p>
					<div className="flex flex-col gap-3 lg:gap-4">
						{SCHEDULE_INDICES.map((idx) => {
							const { on, start, end } = SCHEDULE_DATA[idx];
							const dayLabel = d.days[idx];
							return (
								<div
									key={dayLabel}
									className="flex items-center gap-2 lg:gap-2.5"
								>
									<div
										className={`w-8 h-4 lg:w-10 lg:h-5 rounded-full flex items-center px-0.5 shrink-0 ${
											on
												? "bg-ori-message"
												: "bg-text-secondary dark:bg-text-secondary"
										}`}
									>
										<div
											className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-text transition-transform ${
												on ? "translate-x-4 lg:translate-x-5" : "translate-x-0"
											}`}
										/>
									</div>
									<span className="font-display font-normal text-xs lg:text-sm text-text-primary dark:text-text shrink-0 w-fit">
										{dayLabel}
									</span>
									{on ? (
										<div className="flex items-center gap-1 lg:gap-1.5 flex-1">
											<div className="flex items-center gap-1 lg:gap-1.5 border border-text-primary/30 dark:border-text/30 rounded-lg px-1.5 lg:px-2 py-0.5 lg:py-1">
												<span className="font-display font-normal text-xs lg:text-sm text-text-primary dark:text-text">
													{start}
												</span>
												<Clock
													size={10}
													className="lg:w-3 lg:h-3 text-text-secondary dark:text-text-tertiary"
												/>
											</div>
											<span className="text-text-secondary dark:text-text-tertiary text-xs lg:text-sm">
												—
											</span>
											<div className="flex items-center gap-1 lg:gap-1.5 border border-text-primary/30 dark:border-text/30 rounded-lg px-1.5 lg:px-2 py-0.5 lg:py-1">
												<span className="font-display font-normal text-xs lg:text-sm text-text-primary dark:text-text">
													{end}
												</span>
												<Clock
													size={10}
													className="lg:w-3 lg:h-3 text-text-secondary dark:text-text-tertiary"
												/>
											</div>
											<button
												className="w-5 h-5 lg:w-6 lg:h-6 rounded-full dark:bg-dark-elevated xs:flex items-center justify-center shrink-0 cursor-default hidden"
												aria-label="Remove"
											>
												<X
													size={10}
													className="lg:w-3 lg:h-3 text-text-secondary dark:text-text-tertiary"
												/>
											</button>
											<button
												className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-background-tertiary dark:bg-dark-elevated xs:flex items-center justify-center shrink-0 cursor-default hidden"
												aria-label="Add"
											>
												<Plus
													size={10}
													className="lg:w-3 lg:h-3 text-text-secondary dark:text-text-tertiary"
												/>
											</button>
											<button
												className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-background-tertiary dark:bg-dark-elevated xs:flex items-center justify-center shrink-0 cursor-default hidden"
												aria-label="Copy"
											>
												<Copy
													size={10}
													className="lg:w-3 lg:h-3 text-text-secondary dark:text-text-tertiary"
												/>
											</button>
										</div>
									) : (
										<span className="font-display font-normal text-xs lg:text-sm text-text-secondary dark:text-text-tertiary italic">
											{d.closed}
										</span>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
