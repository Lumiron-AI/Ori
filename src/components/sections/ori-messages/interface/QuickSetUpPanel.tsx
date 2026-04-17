"use client";

import {
	RiSettings3Line,
	RiGlobalLine,
	RiMapPin2Line,
	RiMailLine,
	RiPhoneLine,
} from "react-icons/ri";
import { FiInfo, FiSettings, FiList } from "react-icons/fi";
import { useLocale } from "@/context/locale-context";

const TAB_ICONS = [FiInfo, FiSettings, FiList];

export function QuickSetUpPanel() {
	const { t } = useLocale();
	const d = t.dashboardMessages;
	const { fields } = d;

	const fieldDefs = [
		{ label: fields.name, value: "La Table du Phocéen", Icon: RiSettings3Line, full: true },
		{ label: fields.website, value: "https://www.latableduphoceen.fr", Icon: RiGlobalLine, full: true },
		{ label: fields.address, value: "18 Rue de la Mer, 13001 Marseille, France", Icon: RiMapPin2Line, full: true },
		{ label: fields.email, value: "latableduphoceen.fr@gmail.com", Icon: RiMailLine, full: false },
		{ label: fields.phone, value: "04 91 23 45 67", Icon: RiPhoneLine, full: false },
	];

	return (
		<>
			{/* Header */}
			<p className="font-display font-medium text-base xs:text-lg lg:text-2xl text-text-primary dark:text-text">
				{d.welcome}
			</p>
			<p className="font-display font-normal text-xs lg:text-base text-text-secondary dark:text-text-tertiary mt-0.5 mb-3 lg:mb-5">
				{d.subtitle}
			</p>

			{/* Tabs */}
			<div className="flex gap-1 mb-3 lg:mb-5">
				{d.tabs.map((tab, i) => {
					const Icon = TAB_ICONS[i];
					return (
						<div
							key={tab}
							className={`px-2.5 xs:px-3 lg:px-4 py-2.5 xs:py-1.5 lg:py-2 rounded-xl font-display font-medium text-xs lg:text-base whitespace-nowrap cursor-default ${
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
			<div className="grid grid-cols-2 gap-2 lg:gap-3">
				{fieldDefs.map(({ label, value, Icon, full }) => (
					<div
						key={label}
						className={`bg-background-secondary dark:bg-dark-elevated rounded-xl p-2 lg:p-3 flex items-center gap-2 lg:gap-3 ${
							full ? "col-span-2" : "col-span-1"
						}`}
					>
						<Icon size={24} className="w-4 h-4 lg:w-6 lg:h-6 text-text-primary dark:text-text-tertiary shrink-0 mt-0.5 mx-1" />
						<div className="min-w-0">
							<p className="font-display font-normal text-xs lg:text-sm text-text-primary dark:text-text-tertiary">
								{label}
							</p>
							<p className="font-display font-medium text-xs lg:text-base text-text-primary dark:text-text truncate">
								{value}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
