"use client";

import { FiInfo, FiSettings, FiList } from "react-icons/fi";
import { useLocale } from "@/context/locale-context";

const TAB_ICONS = [FiInfo, FiSettings, FiList];

export function DashboardTabs({ activeIndex }: { activeIndex: number }) {
	const { t } = useLocale();
	const tabs = t.dashboardPhone.tabs;
	return (
		<div className="flex gap-1 mb-3 lg:mb-5">
			{tabs.map((tab, i) => {
				const Icon = TAB_ICONS[i];
				return (
					<div
						key={tab}
						className={`px-2.5 xs:px-3 lg:px-4 py-2.5 xs:py-1.5 lg:py-2 rounded-xl lg:rounded-xl font-display font-medium text-xs lg:text-base whitespace-nowrap ${
							i === activeIndex
								? "bg-primary text-text"
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
	);
}
