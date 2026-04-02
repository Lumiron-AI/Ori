"use client";

import { RiPhoneLine } from "react-icons/ri";
import { useLocale } from "@/context/locale-context";

const AGENTS = [
	{ name: "Ori 1", restaurant: "Trattoria", calls: 78, statusKey: "statusAllDay" as const, active: true },
	{ name: "Ori 2", restaurant: "Trattoria", calls: 0, statusKey: "statusUnavailable" as const, active: false },
	{ name: "Ori 3", restaurant: "Trattoria", calls: 45, status: "12h00-15h00", active: true },
	{ name: "Ori 4", restaurant: "Trattoria", calls: 29, status: "11h30-14h30", active: true },
];

export function AutomationPanel() {
	const { t } = useLocale();
	const d = t.dashboardPhone;

	return (
		<>
			<p className="font-display font-bold text-xl sm:text-2xl text-text-primary dark:text-text mb-4 sm:mb-5">
				{d.aiAgents}
			</p>
			<div className="flex flex-col gap-3">
				{AGENTS.map((a) => (
					<div
						key={a.name}
						className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-3 sm:p-5 flex items-center gap-3 justify-between"
					>
						{/* Avatar + Nom/Restaurant */}
						<div className="flex items-center gap-3 min-w-0 flex-1">
							<div
								className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl shrink-0 flex items-center justify-center ${
									a.active ? "bg-agent-active" : "bg-text-secondary"
								}`}
							>
								<RiPhoneLine className="text-white" size={20} />
							</div>
							<div className="min-w-0">
								<p className="font-display font-semibold text-sm text-text-primary dark:text-text truncate">
									{a.name}
								</p>
								<p className="font-display font-normal text-xs sm:text-sm text-text-secondary dark:text-text-tertiary truncate">
									{a.restaurant}
								</p>
							</div>
						</div>

						{/* Appels reçus */}
						<div className="hidden md:flex flex-col items-center text-center shrink-0 w-24">
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary mb-0.5">
								{d.callsReceived}
							</p>
							<p className="font-display font-semibold text-sm text-text-primary dark:text-text">
								{a.calls}
							</p>
						</div>

						{/* Disponibilité */}
						<div className="hidden sm:flex flex-col items-center text-center shrink-0 w-28">
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary mb-0.5">
								{d.availability}
							</p>
							<div className="flex items-center gap-1">
								<div
									className={`w-2 h-2 rounded-full shrink-0 ${
										a.active ? "bg-green-500" : "bg-primary"
									}`}
								/>
								<p className="font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text">
									{"statusKey" in a ? d[a.statusKey] : a.status}
								</p>
							</div>
						</div>

						{/* Activité toggle */}
						<div className="flex flex-col items-center shrink-0 text-center">
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary mb-1 hidden sm:block">
								{d.activity}
							</p>
							<div
								className={`relative w-10 h-6 rounded-full transition-colors ${
									a.active ? "bg-primary" : "bg-text-tertiary"
								}`}
							>
								<div
									className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
										a.active ? "translate-x-5" : "translate-x-1"
									}`}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
