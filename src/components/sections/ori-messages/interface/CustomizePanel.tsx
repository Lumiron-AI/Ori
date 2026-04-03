"use client";

import { Volume2, Clock, X, Plus, Copy } from "lucide-react";
import { useLocale } from "@/context/locale-context";

const SCHEDULE_INDICES = [0, 1, 2]; // Lundi, Mardi, Mercredi
const SCHEDULE_DATA = [
	{ on: true, start: "11:00", end: "23:00" },
	{ on: true, start: "11:00", end: "23:00" },
	{ on: false, start: "", end: "" },
];

export function CustomizePanel() {
	const { t } = useLocale();
	const d = t.dashboardMessages;

	return (
		<div className="flex flex-col gap-4">
			{/* Header */}
			<div className="mb-1">
				<p className="font-display font-medium text-xl text-text-primary dark:text-text">
					{d.welcome}
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-0.5">
					{d.subtitle}
				</p>
			</div>

			{/* Tabs — "Fonctionnement" active */}
			<div className="flex items-center gap-2">
				{d.tabs.map((tab, i) => (
					<button
						key={tab}
						className={`px-4 py-2 rounded-xl font-display font-medium text-sm cursor-default ${
							i === 1
								? "bg-ori-message text-text"
								: "text-text-secondary dark:text-text-tertiary"
						}`}
					>
						{tab}
					</button>
				))}
			</div>

			{/* Card 1 — Choix du ton */}
			<div className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-4 flex flex-col gap-3">
				<div className="flex items-center gap-3">
					<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
						<Volume2
							size={18}
							className="text-text-secondary dark:text-text-tertiary"
						/>
					</div>
					<span className="font-display font-medium text-base text-text-primary dark:text-text">
						{d.toneChoice}
					</span>
				</div>
				<div className="flex items-center gap-4 flex-wrap">
					<span className="font-display font-normal text-sm text-text-primary dark:text-text">
						{d.toneGender}
					</span>
					<div className="flex items-center gap-1.5">
						<div className="w-4 h-4 rounded-full border-2 border-ori-message flex items-center justify-center">
							<div className="w-2 h-2 rounded-full bg-ori-message" />
						</div>
						<span className="font-display font-normal text-sm text-text-primary dark:text-text">
							{d.toneProfessional}
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						<div className="w-4 h-4 rounded-full border-2 border-background-tertiary dark:border-dark-overlay" />
						<span className="font-display font-normal text-sm text-text-primary dark:text-text">
							{d.toneCasual}
						</span>
					</div>
				</div>
			</div>

			{/* Card 2 — Plages d'activité */}
			<div className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-4 flex flex-col gap-3">
				<div className="flex items-center gap-3">
					<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
						<Clock
							size={18}
							className="text-text-secondary dark:text-text-tertiary"
						/>
					</div>
					<span className="font-display font-medium text-base text-text-primary dark:text-text">
						{d.activitySlots}
					</span>
				</div>
				<p className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
					{d.activitySlotsSubtitle}
				</p>
				<div className="flex flex-col gap-4">
					{SCHEDULE_INDICES.map((idx) => {
						const { on, start, end } = SCHEDULE_DATA[idx];
						const dayLabel = d.days[idx];
						return (
							<div key={dayLabel} className="flex items-center gap-2">
								<div
									className={`w-9 h-5 rounded-full flex items-center px-0.5 shrink-0 ${
										on
											? "bg-ori-message"
											: "bg-background-tertiary dark:bg-dark-elevated"
									}`}
								>
									<div
										className={`w-3.5 h-3.5 rounded-full bg-text transition-transform ${
											on ? "translate-x-4" : "translate-x-0"
										}`}
									/>
								</div>
								<span className="font-display font-normal text-sm text-text-primary dark:text-text shrink-0 w-fit">
									{dayLabel}
								</span>
								{on ? (
									<div className="flex items-center gap-1.5 flex-1">
										<div className="flex items-center gap-1 border border-text-primary/30 dark:border-text/30 rounded-lg px-2 py-0.5">
											<span className="font-display font-normal text-sm text-text-primary dark:text-text">
												{start}
											</span>
											<Clock
												size={11}
												className="text-text-secondary dark:text-text-tertiary"
											/>
										</div>
										<span className="text-text-secondary dark:text-text-tertiary text-sm">
											—
										</span>
										<div className="flex items-center gap-1 border border-text-primary/30 dark:border-text/30 rounded-lg px-2 py-0.5">
											<span className="font-display font-normal text-sm text-text-primary dark:text-text">
												{end}
											</span>
											<Clock
												size={11}
												className="text-text-secondary dark:text-text-tertiary"
											/>
										</div>
										<button
											className="w-6 h-6 rounded-full dark:bg-dark-elevated flex items-center justify-center shrink-0 cursor-default"
											aria-label="Remove"
										>
											<X
												size={11}
												className="text-text-secondary dark:text-text-tertiary"
											/>
										</button>
										<button
											className="w-6 h-6 rounded-full bg-background-tertiary dark:bg-dark-elevated flex items-center justify-center shrink-0 cursor-default"
											aria-label="Add"
										>
											<Plus
												size={11}
												className="text-text-secondary dark:text-text-tertiary"
											/>
										</button>
										<button
											className="w-6 h-6 rounded-full bg-background-tertiary dark:bg-dark-elevated flex items-center justify-center shrink-0 cursor-default"
											aria-label="Copy"
										>
											<Copy
												size={11}
												className="text-text-secondary dark:text-text-tertiary"
											/>
										</button>
									</div>
								) : (
									<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary italic">
										{d.closed}
									</span>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
