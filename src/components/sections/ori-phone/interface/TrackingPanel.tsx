"use client";

import { RiEyeLine, RiDownload2Line } from "react-icons/ri";
import { useLocale } from "@/context/locale-context";

const CALL_HISTORY = [
	{
		date: "23 janv. 2026",
		time: "17:12:23",
		number: "+33 6 15 24 77 14",
		duration: "0:33",
	},
	{
		date: "23 janv. 2026",
		time: "13:39:27",
		number: "+33 6 18 33 92 11",
		duration: "0:30",
	},
	{
		date: "23 janv. 2026",
		time: "13:38:19",
		number: "+33 6 47 43 23 52",
		duration: "0:23",
	},
	{
		date: "23 janv. 2026",
		time: "10:12:24",
		number: "+33 7 84 21 34 98",
		duration: "0:48",
	},
];

export function TrackingPanel() {
	const { t } = useLocale();
	const d = t.dashboardPhone;

	return (
		<>
			<p className="font-display font-bold text-base lg:text-2xl text-text-primary dark:text-text mb-3 lg:mb-5">
				{d.trackingTitle}
			</p>

			{/* Stat cards */}
			<div className="grid grid-cols-2 gap-2 lg:gap-3 mb-3 lg:mb-4">
				{[
					{ label: d.totalCalls, value: "12" },
					{ label: d.avgDuration, value: "0:28" },
				].map((s) => (
					<div
						key={s.label}
						className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-2 lg:p-4"
					>
						<p className="font-display font-normal text-xs lg:text-sm text-text-secondary dark:text-text-tertiary mb-0.5">
							{s.label}
						</p>
						<p className="font-display font-semibold text-base lg:text-2xl text-text-primary dark:text-text">
							{s.value}
						</p>
					</div>
				))}
			</div>

			{/* Call history table */}
			<div className="bg-background-secondary dark:bg-dark-elevated rounded-2xl overflow-hidden">
				<div className="overflow-x-auto">
					<div className="min-w-[260px] xs:min-w-[300px] p-2">
						<div className="grid grid-cols-[1fr_1fr_40px_56px] bg-dark-elevated px-2 lg:px-4 py-2 lg:py-3 gap-1 lg:gap-3">
							{d.tableHeaders.map((h) => (
								<p
									key={h}
									className="font-display font-semibold text-xs lg:text-sm text-text"
								>
									{h}
								</p>
							))}
						</div>
						{CALL_HISTORY.map((row, i) => (
							<div
								key={i}
								className={`grid grid-cols-[1fr_1fr_40px_56px] px-2 lg:px-4 py-1.5 lg:py-3 gap-1 lg:gap-3 items-center ${
									i < CALL_HISTORY.length - 1
										? "border-b border-background-tertiary dark:border-dark-overlay"
										: ""
								}`}
							>
								<div>
									<p className="font-display font-normal text-xs lg:text-sm text-text-primary dark:text-text">
										{row.date}
									</p>
									<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
										{row.time}
									</p>
								</div>
								<p className="font-display font-normal text-xs lg:text-sm text-text-primary dark:text-text truncate">
									{row.number}
								</p>
								<p className="font-display font-normal text-xs lg:text-sm text-text-primary dark:text-text">
									{row.duration}
								</p>
								<div className="flex gap-1">
									{[RiEyeLine, RiDownload2Line].map((Icon, j) => (
										<button
											key={j}
											className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-background-tertiary dark:bg-dark-overlay flex items-center justify-center hover:bg-background-secondary dark:hover:bg-dark-elevated transition-colors"
										>
											<Icon
												size={12}
												className="text-text-primary dark:text-text"
											/>
										</button>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
