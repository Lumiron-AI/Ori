"use client";

import { RiPhoneLine } from "react-icons/ri";
import { useLocale } from "@/context/locale-context";

const AGENTS = [
	{
		name: "Ori 1",
		restaurant: "Trattoria",
		calls: 78,
		statusKey: "statusAllDay" as const,
		active: true,
	},
	{
		name: "Ori 2",
		restaurant: "Trattoria",
		calls: 0,
		statusKey: "statusUnavailable" as const,
		active: false,
	},
	{
		name: "Ori 3",
		restaurant: "Trattoria",
		calls: 45,
		status: "12h00-15h00",
		active: true,
	},
	{
		name: "Ori 4",
		restaurant: "Trattoria",
		calls: 29,
		status: "11h30-14h30",
		active: true,
	},
];

export function AutomationPanel() {
	const { t } = useLocale();
	const d = t.dashboardPhone;

	return (
		<>
			<p className="font-display font-bold text-base lg:text-2xl text-text-primary dark:text-text mb-3 lg:mb-5">
				{d.aiAgents}
			</p>
			<div className="flex flex-col gap-2 lg:gap-3">
				{AGENTS.map((a) => (
					<div
						key={a.name}
						className="bg-background-secondary dark:bg-dark-elevated rounded-2xl py-2 px-3 lg:p-5 flex items-center gap-2 lg:gap-3 justify-between"
					>
						{/* Avatar + Nom/Restaurant */}
						<div className="flex items-center gap-2 lg:gap-3 min-w-0">
							<div
								className={`w-7 h-7 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl shrink-0 flex items-center justify-center ${
									a.active ? "bg-agent-active" : "bg-text-secondary"
								}`}
							>
								<RiPhoneLine
									className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-white"
									size={20}
								/>
							</div>
							<div className="min-w-0">
								<p className="font-display font-semibold text-xs lg:text-sm text-text-primary dark:text-text truncate">
									{a.name}
								</p>
								<p className="font-display font-normal text-xs lg:text-sm text-text-secondary dark:text-text-tertiary truncate">
									{a.restaurant}
								</p>
							</div>
						</div>

						{/* Appels reçus */}
						<div className="flex flex-col items-center text-center shrink-0 w-14 lg:w-24">
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary mb-0.5 whitespace-nowrap">
								{d.callsReceived}
							</p>
							<p className="font-display font-semibold text-sm text-text-primary dark:text-text">
								{a.calls}
							</p>
						</div>

						{/* Disponibilité */}
						<div className="hidden md:flex flex-col items-center text-center shrink-0 w-28">
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary mb-0.5 whitespace-nowrap">
								{d.availability}
							</p>
							<p className="font-display font-semibold text-sm text-text-primary dark:text-text whitespace-nowrap">
								{"statusKey" in a
									? (d as unknown as Record<string, string>)[
											a.statusKey as string
										]
									: (a.status ?? "")}
							</p>
						</div>

						{/* Activité toggle */}
						<div className="flex flex-col items-center shrink-0 text-center">
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary mb-1 hidden sm:block">
								{d.activity}
							</p>
							<div
								className={`relative w-8 h-5 lg:w-10 lg:h-6 rounded-full transition-colors ${
									a.active ? "bg-primary" : "bg-text-tertiary"
								}`}
							>
								<div
									className={`absolute top-[0.17rem] sm:top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white shadow-sm transition-transform ${
										a.active
											? "translate-x-3.5 lg:translate-x-5"
											: "translate-x-1 lg:translate-x-1"
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
