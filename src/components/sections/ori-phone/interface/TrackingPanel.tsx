"use client";

import { RiEyeLine, RiDownload2Line } from "react-icons/ri";

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
	return (
		<>
			<p className="font-display font-bold text-xl sm:text-2xl text-text-primary dark:text-text mb-4 sm:mb-5">
				Historique — Ori
			</p>

			{/* Stat cards */}
			<div className="grid grid-cols-2 gap-3 mb-4">
				{[
					{ label: "Total des appels passés", value: "12" },
					{ label: "Durée moyenne par appel", value: "0:28" },
				].map((s) => (
					<div
						key={s.label}
						className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-3 sm:p-4"
					>
						<p className="font-display font-normal text-xs sm:text-sm text-text-secondary dark:text-text-tertiary mb-1">
							{s.label}
						</p>
						<p className="font-display font-semibold text-xl sm:text-2xl text-text-primary dark:text-text">
							{s.value}
						</p>
					</div>
				))}
			</div>

			{/* Call history table — scrollable on small screens */}
			<div className="bg-background-secondary dark:bg-dark-elevated rounded-2xl overflow-hidden">
				<div className="overflow-x-auto">
					<div className="min-w-[340px]">
						<div className="grid grid-cols-[1fr_1fr_48px_64px] bg-dark-elevated px-3 sm:px-4 py-3 gap-2 sm:gap-3">
							{["Date & Heure", "De", "Durée", "Action"].map((h) => (
								<p
									key={h}
									className="font-display font-semibold text-xs sm:text-sm text-text"
								>
									{h}
								</p>
							))}
						</div>
						{CALL_HISTORY.map((row, i) => (
							<div
								key={i}
								className={`grid grid-cols-[1fr_1fr_48px_64px] px-3 sm:px-4 py-2.5 sm:py-3 gap-2 sm:gap-3 items-center ${
									i < CALL_HISTORY.length - 1
										? "border-b border-background-tertiary dark:border-dark-overlay"
										: ""
								}`}
							>
								<div>
									<p className="font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text">
										{row.date}
									</p>
									<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
										{row.time}
									</p>
								</div>
								<p className="font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text truncate">
									{row.number}
								</p>
								<p className="font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text">
									{row.duration}
								</p>
								<div className="flex gap-1">
									{[RiEyeLine, RiDownload2Line].map((Icon, j) => (
										<button
											key={j}
											className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background-tertiary dark:bg-dark-overlay flex items-center justify-center hover:bg-background-secondary dark:hover:bg-dark-elevated transition-colors"
										>
											<Icon size={12} className="text-text-primary dark:text-text" />
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
