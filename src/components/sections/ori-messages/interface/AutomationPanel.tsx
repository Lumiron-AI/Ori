"use client";

import { RiWhatsappLine, RiInstagramLine } from "react-icons/ri";
import { useLocale } from "@/context/locale-context";

interface Agent {
	name: string;
	restaurant: string;
	platform: "whatsapp" | "instagram";
	messagesReceived: number;
	statusKey?: "statusAllDay" | "statusUnavailable";
	availability?: string;
	active: boolean;
}

const AGENTS: Agent[] = [
	{
		name: "Ori 1",
		restaurant: "Trattoria",
		platform: "whatsapp",
		messagesReceived: 78,
		statusKey: "statusAllDay",
		active: true,
	},
	{
		name: "Ori 2",
		restaurant: "Trattoria",
		platform: "instagram",
		messagesReceived: 0,
		statusKey: "statusUnavailable",
		active: false,
	},
	{
		name: "Ori 3",
		restaurant: "Trattoria",
		platform: "instagram",
		messagesReceived: 45,
		availability: "12h00-15h00",
		active: true,
	},
	{
		name: "Ori 4",
		restaurant: "Trattoria",
		platform: "whatsapp",
		messagesReceived: 45,
		availability: "12h00-15h00",
		active: true,
	},
];

function PlatformLogo({
	platform,
	active,
	iconSize,
}: {
	platform: Agent["platform"];
	active: boolean;
	iconSize: string;
}) {
	const Icon = platform === "whatsapp" ? RiWhatsappLine : RiInstagramLine;
	const bg = !active
		? "bg-text-secondary"
		: platform === "whatsapp"
			? "bg-green-500"
			: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600";

	return (
		<div className={`w-full h-full ${bg} flex items-center justify-center`}>
			<Icon className={`${iconSize} text-white`} />
		</div>
	);
}

export function AutomationPanel() {
	const { t } = useLocale();
	const d = t.dashboardMessages;

	return (
		<>
			<p className="font-display font-bold text-base lg:text-2xl text-text-primary dark:text-text mb-3 lg:mb-5">
				{d.aiAgents}
			</p>

			<div className="flex flex-col gap-2 lg:gap-3">
				{AGENTS.map((agent) => (
					<div
						key={agent.name}
						className="bg-background-secondary dark:bg-dark-elevated rounded-2xl py-2 px-3 lg:p-5 flex items-center gap-2 lg:gap-3 justify-between"
					>
						{/* Platform logo */}
						<div className="flex items-center gap-2 lg:gap-3 min-w-0">
							<div className="shrink-0 w-7 h-7 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl overflow-hidden">
								<PlatformLogo
									platform={agent.platform}
									active={agent.active}
									iconSize="w-[1.2rem] h-[1.2rem] lg:w-6 lg:h-6"
								/>
							</div>

							{/* Name + restaurant */}
							<div className="min-w-0">
								<p className="font-display font-semibold text-xs lg:text-sm text-text-primary dark:text-text truncate">
									{agent.name}
								</p>
								<p className="font-display font-normal text-xs lg:text-sm text-text-secondary dark:text-text-tertiary truncate">
									{agent.restaurant}
								</p>
							</div>
						</div>

						{/* Messages reçus */}
						<div className="flex flex-col items-center text-center shrink-0 w-14 lg:w-24">
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary mb-0.5 whitespace-nowrap">
								{d.messagesReceived}
							</p>
							<p className="font-display font-semibold text-sm text-text-primary dark:text-text">
								{agent.messagesReceived}
							</p>
						</div>

						{/* Disponibilité */}
						<div className="hidden md:flex flex-col items-center text-center shrink-0 w-28">
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary mb-0.5 whitespace-nowrap">
								{d.availability}
							</p>
							<p className="font-display font-semibold text-sm text-text-primary dark:text-text whitespace-nowrap">
								{agent.statusKey ? d[agent.statusKey] : agent.availability}
							</p>
						</div>

						{/* Toggle activité */}
						<div className="flex flex-col items-center shrink-0 text-center">
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary mb-1 hidden sm:block">
								{d.activity}
							</p>
							<div
								className={`relative w-8 h-5 lg:w-10 lg:h-6 rounded-full transition-colors ${
									agent.active ? "bg-ori-message" : "bg-text-tertiary"
								}`}
							>
								<div
									className={`absolute top-[0.17rem] sm:top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white shadow-sm transition-transform ${
										agent.active
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
