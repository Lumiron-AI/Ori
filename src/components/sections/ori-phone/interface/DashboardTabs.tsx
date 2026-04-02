"use client";

import { useLocale } from "@/context/locale-context";

export function DashboardTabs({ activeIndex }: { activeIndex: number }) {
	const { t } = useLocale();
	const tabs = t.dashboardPhone.tabs;
	return (
		<div className="flex gap-1 mb-5 flex-wrap">
			{tabs.map((tab, i) => (
				<div
					key={tab}
					className={`px-3 xs:px-4 py-1.5 xs:py-2 rounded-xl font-display font-medium text-sm xs:text-base whitespace-nowrap ${
						i === activeIndex ? "bg-primary text-text" : "text-text-secondary dark:text-text-tertiary"
					}`}
				>
					{tab}
				</div>
			))}
		</div>
	);
}
