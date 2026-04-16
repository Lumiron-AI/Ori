"use client";

import { Eye, Download } from "lucide-react";
import { useLocale } from "@/context/locale-context";

const CALL_HISTORY = [
	{ iso: "2026-01-23T17:12:23", number: "+33 6 15 24 77 14", duration: "0:33" },
	{ iso: "2026-01-23T13:39:27", number: "+33 6 18 33 92 11", duration: "0:30" },
	{ iso: "2026-01-23T13:38:19", number: "+33 6 47 43 23 52", duration: "0:23" },
	{ iso: "2026-01-23T10:12:24", number: "+33 7 84 21 34 98", duration: "0:48" },
];

export function TrackingPanel() {
	const { t, locale } = useLocale();
	const d = t.dashboardPhone;

	return (
		<div className="flex flex-col gap-3">
			<p className="font-display font-bold text-base lg:text-xl text-text-primary dark:text-text">
				{d.trackingTitle}
			</p>

			{/* Stat cards */}
			<div className="grid grid-cols-2 gap-2 lg:gap-3">
				{[
					{ label: d.totalCalls, value: "12" },
					{ label: d.avgDuration, value: "0:28" },
				].map((stat) => (
					<div
						key={stat.label}
						className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-3 lg:p-4 flex flex-col gap-1"
					>
						<span className="font-display font-normal text-xs lg:text-sm text-text-secondary dark:text-text-tertiary leading-tight">
							{stat.label}
						</span>
						<span className="font-display font-semibold text-xl lg:text-2xl text-text-primary dark:text-text">
							{stat.value}
						</span>
					</div>
				))}
			</div>

			{/* History table */}
			<div className="rounded-2xl overflow-hidden">
				<table className="w-full">
					<thead className="bg-text-secondary">
						<tr>
							{d.tableHeaders.map((col, i) => (
								<th
									key={col}
									className={`font-display font-semibold text-xs text-text px-3 py-2 ${i === 0 ? "text-left" : "text-center"} ${i === 1 ? "hidden sm:table-cell" : ""}`}
								>
									{col}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="bg-background-secondary dark:bg-dark-elevated divide-y divide-background-tertiary dark:divide-dark-overlay">
						{CALL_HISTORY.map((row, i) => (
							<tr key={i}>
								<td className="px-3 py-2">
									<p className="font-display font-normal text-xs text-text-primary dark:text-text">
										{new Date(row.iso).toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", { day: "numeric", month: "short", year: "numeric" })}
									</p>
									<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
										{new Date(row.iso).toLocaleTimeString(locale === "en" ? "en-US" : "fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
									</p>
								</td>
								<td className="hidden sm:table-cell px-3 py-2 text-center">
									<p className="font-display font-normal text-xs text-text-primary dark:text-text truncate">
										{row.number}
									</p>
								</td>
								<td className="px-3 py-2 text-center">
									<p className="font-display font-normal text-xs text-text-primary dark:text-text">
										{row.duration}
									</p>
								</td>
								<td className="px-3 py-2 text-center">
									<div className="flex items-center justify-center gap-1">
										<button
											aria-label="View"
											className="w-6 h-6 rounded-full bg-background-tertiary dark:bg-dark-overlay flex items-center justify-center"
										>
											<Eye
												size={11}
												className="text-text-secondary dark:text-text-tertiary"
											/>
										</button>
										<button
											aria-label="Download"
											className="w-6 h-6 rounded-full bg-background-tertiary dark:bg-dark-overlay flex items-center justify-center"
										>
											<Download
												size={11}
												className="text-text-secondary dark:text-text-tertiary"
											/>
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
