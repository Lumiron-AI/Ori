"use client";

import { Eye, Download } from "lucide-react";
import { useLocale } from "@/context/locale-context";

const HISTORY = [
	{
		date: "23 janv. 2026",
		time: "17:12:23",
		from: "+33615247714",
		duration: "0:33",
	},
	{
		date: "23 janv. 2026",
		time: "13:39:27",
		from: "+33618339211",
		duration: "0:30",
	},
	{
		date: "23 janv. 2026",
		time: "13:38:19",
		from: "+33647432352",
		duration: "0:23",
	},
	{
		date: "23 janv. 2026",
		time: "10:12:24",
		from: "+33784213498",
		duration: "0:48",
	},
];

export function TrackingPanel() {
	const { t } = useLocale();
	const d = t.dashboardMessages;

	return (
		<div className="flex flex-col gap-4">
			<p className="font-display font-bold text-xl text-text-primary dark:text-text">
				{d.trackingTitle}
			</p>

			{/* Stat cards */}
			<div className="grid grid-cols-2 gap-3">
				{[
					{ label: d.totalCalls, value: "12" },
					{ label: d.avgDuration, value: "0:28" },
				].map((stat) => (
					<div
						key={stat.label}
						className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-4 flex flex-col gap-1"
					>
						<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary leading-tight">
							{stat.label}
						</span>
						<span className="font-display font-semibold text-2xl text-text-primary dark:text-text">
							{stat.value}
						</span>
					</div>
				))}
			</div>

			{/* History table */}
			<div className="rounded-2xl overflow-hidden">
				{/* Header */}
				<div className="bg-text-secondary grid grid-cols-[2fr_2fr_1fr_auto] gap-2 px-4 py-2.5">
					{d.tableHeaders.map((col) => (
						<span
							key={col}
							className="font-display font-semibold text-sm text-text text-center first:text-left"
						>
							{col}
						</span>
					))}
				</div>
				{/* Rows */}
				<div className="bg-background-secondary dark:bg-dark-elevated divide-y divide-background-secondary dark:divide-dark-overlay">
					{HISTORY.map((row, i) => (
						<div
							key={i}
							className="grid grid-cols-[2fr_2fr_1fr_auto] gap-2 items-center px-4 py-2.5"
						>
							<div>
								<p className="font-display font-normal text-sm text-text-primary dark:text-text">
									{row.date}
								</p>
								<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
									{row.time}
								</p>
							</div>
							<p className="font-display font-normal text-sm text-text-primary dark:text-text">
								{row.from}
							</p>
							<p className="font-display font-normal text-sm text-text-primary dark:text-text text-center">
								{row.duration}
							</p>
							<div className="flex items-center gap-1">
								<button
									aria-label="View"
									className="w-7 h-7 rounded-full bg-background-secondary dark:bg-dark-overlay flex items-center justify-center"
								>
									<Eye
										size={13}
										className="text-text-secondary dark:text-text-tertiary"
									/>
								</button>
								<button
									aria-label="Download"
									className="w-7 h-7 rounded-full bg-background-secondary dark:bg-dark-overlay flex items-center justify-center"
								>
									<Download
										size={13}
										className="text-text-secondary dark:text-text-tertiary"
									/>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
