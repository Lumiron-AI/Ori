"use client";

import {
	RiSettings3Line,
	RiGlobalLine,
	RiMapPin2Line,
	RiMailLine,
	RiPhoneLine,
} from "react-icons/ri";

import { useLocale } from "@/context/locale-context";
import { DashboardTabs } from "./DashboardTabs";
import { FieldIconBox } from "./FieldIconBox";

export function QuickSetUpPanel() {
	const { t } = useLocale();
	const { fields } = t.dashboardPhone;

	const fieldDefs = [
		{
			label: fields.name,
			value: "Trattoria Bellagio",
			Icon: RiSettings3Line,
			full: true,
		},
		{
			label: fields.website,
			value: "https://www.trattoria-bellagio.fr/",
			Icon: RiGlobalLine,
			full: true,
		},
		{
			label: fields.address,
			value: "13 rue de Courtville, 75018 Paris, France",
			Icon: RiMapPin2Line,
			full: true,
		},
		{
			label: fields.email,
			value: "trattoria@gmail.com",
			Icon: RiMailLine,
			full: false,
		},
		{
			label: fields.phone,
			value: "07 52 55 42 32",
			Icon: RiPhoneLine,
			full: false,
		},
	];

	return (
		<>
			<p className="font-display font-medium text-base xs:text-lg lg:text-2xl text-text-primary dark:text-text">
				{t.dashboardPhone.welcome}
			</p>
			<p className="font-display font-normal text-xs lg:text-base text-text-secondary dark:text-text-tertiary mt-0.5 mb-3 lg:mb-5">
				{t.dashboardPhone.subtitle}
			</p>
			<DashboardTabs activeIndex={0} />
			<div className="grid grid-cols-2 gap-2 lg:gap-3">
				{fieldDefs.map((f) => (
					<div
						key={f.label}
						className={`bg-background-secondary dark:bg-dark-elevated rounded-xl p-2 lg:p-3 flex items-center gap-2 lg:gap-3 ${
							f.full ? "col-span-2" : "col-span-1"
						}`}
					>
						<FieldIconBox icon={f.Icon} />
						<div className="min-w-0">
							<p className="font-display font-normal text-xs lg:text-sm text-text-primary dark:text-text-tertiary">
								{f.label}
							</p>
							<p className="font-display font-medium text-xs lg:text-base text-text-primary dark:text-text truncate">
								{f.value}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
