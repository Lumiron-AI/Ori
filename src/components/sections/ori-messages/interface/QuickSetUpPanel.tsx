"use client";

import { Settings, Globe, MapPin, Mail, Phone } from "lucide-react";
import { useLocale } from "@/context/locale-context";

export function QuickSetUpPanel() {
	const { t } = useLocale();
	const d = t.dashboardMessages;
	const { fields } = d;

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

			{/* Tabs */}
			<div className="flex items-center gap-2">
				{d.tabs.map((tab, i) => (
					<button
						key={tab}
						className={`px-4 py-2 rounded-xl font-display font-medium text-sm cursor-default ${
							i === 0
								? "bg-ori-message text-text"
								: "text-text-secondary dark:text-text-tertiary"
						}`}
					>
						{tab}
					</button>
				))}
			</div>

			{/* Fields */}
			<div className="flex flex-col gap-3 mt-1">
				{[
					{ label: fields.name, value: "La Table du Phocéen", Icon: Settings },
					{
						label: fields.website,
						value: "https://www.latableduphoceen.fr",
						Icon: Globe,
					},
					{
						label: fields.address,
						value: "18 Rue de la Mer, 13001 Marseille, France",
						Icon: MapPin,
					},
				].map(({ label, value, Icon }) => (
					<div
						key={label}
						className="bg-background-secondary dark:bg-dark-elevated rounded-xl p-3 flex items-center gap-3"
					>
						<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
							<Icon
								size={18}
								className="text-text-secondary dark:text-text-tertiary"
							/>
						</div>
						<div className="flex flex-col min-w-0">
							<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
								{label}
							</span>
							<span className="font-display font-medium text-base text-text-primary dark:text-text truncate">
								{value}
							</span>
						</div>
					</div>
				))}

				<div className="grid grid-cols-2 gap-3">
					{[
						{
							label: fields.email,
							value: "latableduphoceen.fr@gmail.com",
							Icon: Mail,
						},
						{ label: fields.phone, value: "04 91 23 45 67", Icon: Phone },
					].map(({ label, value, Icon }) => (
						<div
							key={label}
							className="bg-background-secondary dark:bg-dark-elevated rounded-xl p-3 flex items-center gap-3"
						>
							<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
								<Icon
									size={18}
									className="text-text-secondary dark:text-text-tertiary"
								/>
							</div>
							<div className="flex flex-col min-w-0">
								<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
									{label}
								</span>
								<span className="font-display font-medium text-base text-text-primary dark:text-text truncate">
									{value}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
