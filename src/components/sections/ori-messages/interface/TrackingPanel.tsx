"use client";

import { useLocale } from "@/context/locale-context";

const CONVERSATIONS = [
	{
		name: "Sophia",
		preview: "Bonjour, est-ce que vous proposez des plats végétariens...",
		active: true,
	},
	{
		name: "Clément",
		preview: "Vous autorisez les animaux ? ...",
	},
	{
		name: "Martin",
		preview: "Et pour anniversaire de quinze personnes, c'est possible ? ...",
	},
];

const MESSAGES = [
	{
		sender: "Sophia",
		time: "18:03",
		text: "Bonjour, avez vous des créneaux pour 20h ?",
	},
	{
		sender: "Ori",
		time: "18:03",
		text: "20h est complet ce soir, mais nous avons des disponibilités après 20h30.",
	},
	{ sender: "Sophia", time: "18:03", text: "Ok pour 20h30 !" },
	{ sender: "Ori", time: "18:03", text: "Avez vous d'autres questions ?" },
	{
		sender: "Sophia",
		time: "18:03",
		text: "C'est tout pour moi, bonne journée.",
	},
	{ sender: "Ori", time: "18:03", text: "Avez vous d'autres questions ?" },
];

export function TrackingPanel() {
	const { t } = useLocale();
	const d = t.dashboardMessages;

	return (
		<div className="flex flex-col gap-3">
			<p className="font-display font-bold text-base lg:text-xl text-text-primary dark:text-text">
				{d.trackingTitle}
			</p>

			<div className="flex gap-3">
				{/* Conversation list */}
				<div className="flex flex-col gap-2 w-2/5">
					{CONVERSATIONS.map((conv) => (
						<div
							key={conv.name}
							className={`bg-background-secondary dark:bg-dark-elevated rounded-2xl p-3 ${
								conv.active
									? "border border-text-primary dark:border-text"
									: ""
							}`}
						>
							<p className="font-display font-semibold text-sm text-text-primary dark:text-text truncate">
								{conv.name}
							</p>
							<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary mt-1 leading-tight line-clamp-2">
								{conv.preview}
							</p>
						</div>
					))}
				</div>

				{/* Message thread */}
				<div className="flex-1 bg-background-secondary dark:bg-dark-elevated rounded-2xl overflow-hidden relative">
					<div className="px-4 py-3 border-b border-background-tertiary dark:border-dark-overlay">
						<p className="font-display font-semibold text-sm text-text-primary dark:text-text">
							Messages de Sophia
						</p>
					</div>
					<div className="flex flex-col gap-2 p-3">
						{MESSAGES.map((msg, i) => (
							<div
								key={i}
								className={`bg-background-tertiary dark:bg-dark-overlay rounded-xl p-2${i >= 3 ? " hidden lg:block" : ""}`}
							>
								<div className="flex items-center gap-2 mb-0.5">
									<span className="font-display font-semibold text-xs text-text-primary dark:text-text">
										{msg.sender}
									</span>
									<span className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
										{msg.time}
									</span>
								</div>
								<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary leading-tight">
									{msg.text}
								</p>
							</div>
						))}
					</div>
					<div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background-secondary dark:from-dark-elevated to-transparent" />
				</div>
			</div>
		</div>
	);
}
