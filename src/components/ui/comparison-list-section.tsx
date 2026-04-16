"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { AiOutlineMinusCircle } from "react-icons/ai";

interface ComparisonRow {
	topic: string;
	without: string;
	with: string;
}

interface ComparisonListSectionProps {
	rows: readonly ComparisonRow[];
	withoutLabel: string;
	withLabel: string;
	ctaLabel: string;
	accentColor: "primary" | "ori-message";
}

export function ComparisonListSection({
	rows,
	withoutLabel,
	withLabel,
	ctaLabel,
	accentColor,
}: ComparisonListSectionProps) {
	const [activeTab, setActiveTab] = useState<"without" | "with">("without");

	const isWithout = activeTab === "without";

	const accent = {
		bg: accentColor === "primary" ? "bg-primary" : "bg-ori-message",
		text: accentColor === "primary" ? "text-primary" : "text-ori-message",
		border: accentColor === "primary" ? "border-primary" : "border-ori-message",
		bgLight: accentColor === "primary" ? "bg-primary/10" : "bg-ori-message/10",
	};

	return (
		<div className="flex flex-col gap-5">
			{/* Toggle */}
			<div className="flex bg-background-secondary dark:bg-dark-surface rounded-xl p-1">
				<button
					onClick={() => setActiveTab("without")}
					className={`flex-1 py-2.5 px-3 rounded-lg font-display font-bold text-sm transition-all ${
						isWithout
							? "bg-dark-elevated text-text"
							: "text-text-secondary dark:text-text-tertiary"
					}`}
				>
					{withoutLabel}
				</button>
				<button
					onClick={() => setActiveTab("with")}
					className={`flex-1 py-2.5 px-3 rounded-lg font-display font-bold text-sm transition-all ${
						!isWithout
							? `${accent.bg} text-text`
							: "text-text-secondary dark:text-text-tertiary"
					}`}
				>
					{withLabel}
				</button>
			</div>

			{/* Cards */}
			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-2">
					{rows.map((row, i) => (
						<div
							key={i}
							className="bg-background-element dark:bg-dark-surface rounded-2xl px-4 py-3.5 shadow-card-sm flex items-center justify-between gap-3"
						>
							<div className="flex flex-col gap-0.5 flex-1 min-w-0">
								<span className="font-display font-medium text-base mb-1 text-text-primary dark:text-text">
									{row.topic}
								</span>
								<div className="flex gap-2">
									{isWithout ? (
										<AiOutlineMinusCircle
											size={20}
											className="text-text-secondary dark:text-text-tertiary shrink-0"
										/>
									) : (
										<CheckCircle2
											size={20}
											className={`${accent.text} shrink-0`}
											strokeWidth={2.5}
										/>
									)}
									<div className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
										{isWithout ? row.without : row.with}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* CTA — visible uniquement côté "Sans Ori" */}
			{isWithout && (
				<div className="flex justify-center mt-1">
					<button
						onClick={() => setActiveTab("with")}
						className={`h-11 px-8 w-fit rounded-2xl border ${accent.border} ${accent.bgLight} ${accent.text} font-display font-bold text-base inline-flex items-center justify-center ${accentColor === "ori-message" ? "dark:shadow-blue-btn-soft" : "dark:shadow-orange-btn-soft"}`}
					>
						{ctaLabel}
					</button>
				</div>
			)}
		</div>
	);
}
