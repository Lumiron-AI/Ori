"use client";

import { RiWhatsappLine, RiInstagramLine } from "react-icons/ri";
import { useLocale } from "@/context/locale-context";

type AvailabilityStatus = "active" | "inactive";

interface Agent {
	name: string;
	restaurant: string;
	platform: "whatsapp" | "instagram";
	messagesReceived: number;
	statusKey?: "statusAllDay" | "statusUnavailable";
	availability?: string;
	availabilityStatus: AvailabilityStatus;
	active: boolean;
}

const AGENTS: Agent[] = [
	{
		name: "Ori 1",
		restaurant: "Trattoria",
		platform: "whatsapp",
		messagesReceived: 78,
		statusKey: "statusAllDay",
		availabilityStatus: "active",
		active: true,
	},
	{
		name: "Ori 2",
		restaurant: "Trattoria",
		platform: "instagram",
		messagesReceived: 0,
		statusKey: "statusUnavailable",
		availabilityStatus: "inactive",
		active: false,
	},
	{
		name: "Ori 3",
		restaurant: "Trattoria",
		platform: "instagram",
		messagesReceived: 45,
		availability: "12h00-15h00",
		availabilityStatus: "active",
		active: true,
	},
	{
		name: "Ori 4",
		restaurant: "Trattoria",
		platform: "whatsapp",
		messagesReceived: 45,
		availability: "12h00-15h00",
		availabilityStatus: "active",
		active: true,
	},
];

const STATUS_DOT: Record<AvailabilityStatus, string> = {
	active: "bg-green-500",
	inactive: "bg-red-500",
};

function PlatformLogo({ platform }: { platform: Agent["platform"] }) {
	if (platform === "whatsapp") {
		return (
			<div className="w-full h-full bg-green-500 flex items-center justify-center">
				<RiWhatsappLine size={22} className="text-white" />
			</div>
		);
	}
	return (
		<div className="w-full h-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
			<RiInstagramLine size={22} className="text-white" />
		</div>
	);
}

export function AutomationPanel() {
	const { t } = useLocale();
	const d = t.dashboardMessages;

	return (
		<div className="flex flex-col gap-4">
			<p className="font-display font-bold text-xl text-text-primary dark:text-text">
				{d.aiAgents}
			</p>

			<div className="flex flex-col gap-3">
				{AGENTS.map((agent) => (
					<div
						key={agent.name}
						className="bg-background-secondary dark:bg-dark-elevated rounded-2xl px-4 py-6 flex items-center gap-3"
					>
						{/* Platform logo */}
						<div className="shrink-0 w-10 h-10 rounded-xl overflow-hidden">
							<PlatformLogo platform={agent.platform} />
						</div>

						{/* Name + restaurant */}
						<div className="w-16 shrink-0">
							<p className="font-display font-semibold text-sm text-text-primary dark:text-text">
								{agent.name}
							</p>
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
								{agent.restaurant}
							</p>
						</div>

						{/* Messages reçus */}
						<div className="flex-1 text-center">
							<p className="font-display font-medium text-sm text-text-primary dark:text-text">
								{d.messagesReceived}
							</p>
							<p className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
								{agent.messagesReceived}
							</p>
						</div>

						{/* Disponibilité */}
						<div className="flex-1 text-center">
							<p className="font-display font-medium text-sm text-text-primary dark:text-text">
								{d.availability}
							</p>
							<div className="flex items-center justify-center gap-1.5 mt-0.5">
								<div
									className={`w-2 h-2 rounded-full shrink-0 ${STATUS_DOT[agent.availabilityStatus]}`}
								/>
								<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
									{agent.statusKey ? d[agent.statusKey] : agent.availability}
								</p>
							</div>
						</div>

						{/* Toggle activité */}
						<div className="shrink-0 text-center">
							<p className="font-display font-medium text-sm text-text-primary dark:text-text mb-1">
								{d.activity}
							</p>
							<div
								className={`w-9 h-5 rounded-full flex items-center px-0.5 mx-auto ${
									agent.active
										? "bg-ori-message"
										: "bg-background-tertiary dark:bg-dark-elevated"
								}`}
							>
								<div
									className={`w-3.5 h-3.5 rounded-full bg-text transition-transform ${
										agent.active ? "translate-x-4" : "translate-x-0"
									}`}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
