"use client";

import { Settings, Globe, MapPin, Mail, Phone } from "lucide-react";
import { FiInfo, FiSettings, FiList } from "react-icons/fi";
import { useLocale } from "@/context/locale-context";

const TAB_ICONS = [FiInfo, FiSettings, FiList];

export function QuickSetUpPanel() {
	const { t } = useLocale();
	const d = t.dashboardMessages;
	const { fields } = d;

	return (
		<div className="flex flex-col gap-3">
			{/* Header */}
			<div className="mb-0.5">
				<p className="font-display font-medium text-base lg:text-xl text-text-primary dark:text-text">
					{d.welcome}
				</p>
				<p className="font-display font-normal text-xs lg:text-sm text-text-secondary dark:text-text-tertiary mt-0.5">
					{d.subtitle}
				</p>
			</div>

			{/* Tabs */}
			<div className="flex gap-1 mb-1">
				{d.tabs.map((tab, i) => {
					const Icon = TAB_ICONS[i];
					return (
						<div
							key={tab}
							className={`px-2.5 xs:px-3 lg:px-4 py-2.5 xs:py-1.5 lg:py-2 rounded-xl font-display font-medium text-xs lg:text-sm whitespace-nowrap cursor-default ${
								i === 0
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

			{/* Fields */}
			<div className="flex flex-col gap-2">
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
						className="bg-background-secondary dark:bg-dark-elevated rounded-xl p-2 lg:p-3 flex items-center gap-2 lg:gap-3"
					>
						<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-1.5 lg:p-2 shrink-0">
							<Icon
								size={14}
								className="text-text-secondary dark:text-text-tertiary"
							/>
						</div>
						<div className="flex flex-col min-w-0">
							<span className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
								{label}
							</span>
							<span className="font-display font-medium text-xs lg:text-sm text-text-primary dark:text-text truncate">
								{value}
							</span>
						</div>
					</div>
				))}

				<div className="grid grid-cols-2 gap-2">
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
							className="bg-background-secondary dark:bg-dark-elevated rounded-xl p-2 lg:p-3 flex items-center gap-2 lg:gap-3"
						>
							<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-1.5 lg:p-2 shrink-0">
								<Icon
									size={14}
									className="text-text-secondary dark:text-text-tertiary"
								/>
							</div>
							<div className="flex flex-col min-w-0">
								<span className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
									{label}
								</span>
								<span className="font-display font-medium text-xs lg:text-sm text-text-primary dark:text-text truncate">
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
