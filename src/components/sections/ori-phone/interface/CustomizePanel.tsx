"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { RiVolumeUpLine, RiMessage3Line } from "react-icons/ri";

import { useLocale } from "@/context/locale-context";
import { DashboardTabs } from "./DashboardTabs";
import { FieldIconBox } from "./FieldIconBox";

export function CustomizePanel() {
	const { t } = useLocale();
	const d = t.dashboardPhone;

	const [voiceIndex, setVoiceIndex] = useState<0 | 1>(1);
	const voices = [d.voiceMale, d.voiceFemale] as const;

	return (
		<>
			<p className="font-display font-medium text-2xl text-text-primary dark:text-text">
				{d.welcome}
			</p>
			<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-1 mb-5">
				{d.subtitle}
			</p>
			<DashboardTabs activeIndex={1} />
			<div className="flex flex-col gap-3">
				{/* Voix de l'agent */}
				<div className="bg-background-secondary dark:bg-dark-elevated rounded-2xl flex items-center justify-between p-4">
					<div className="flex items-center gap-3">
						<FieldIconBox icon={RiVolumeUpLine} />
						<p className="font-display font-medium text-base text-text-primary dark:text-text">
							{d.voiceAgent}
						</p>
					</div>
					<div className="flex gap-5 items-center">
						<p className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
							{d.voiceGender}
						</p>
						{voices.map((label, i) => (
							<label
								key={label}
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setVoiceIndex(i as 0 | 1)}
							>
								<div
									className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
										voiceIndex === i ? "border-primary" : "border-text-secondary"
									}`}
								>
									{voiceIndex === i && (
										<div className="w-2 h-2 rounded-full bg-primary" />
									)}
								</div>
								<span className="font-display font-normal text-sm text-text-primary dark:text-text">
									{label}
								</span>
							</label>
						))}
					</div>
				</div>

				{/* Phrase d'accueil */}
				<div className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-4">
					<div className="flex items-center gap-3 mb-3">
						<FieldIconBox icon={RiMessage3Line} />
						<p className="font-display font-medium text-base text-text-primary dark:text-text">
							{d.greeting}
						</p>
					</div>
					<div className="border border-text-secondary/30 dark:border-dark-overlay rounded bg-background-element dark:bg-dark-overlay px-3 py-2">
						<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary">
							Bonjour, je suis Ori, comment puis-je vous aider&nbsp;?
						</p>
					</div>
				</div>

				{/* Transfert */}
				<div className="bg-background-secondary dark:bg-dark-elevated rounded-2xl p-4 gap-6">
					<div className="flex items-center gap-3 mb-3">
						<FieldIconBox icon={RiVolumeUpLine} />
						<p className="font-display font-medium text-base text-text-primary dark:text-text">
							{d.transfer}
						</p>
					</div>
					<p className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary mb-3">
						{d.transferSubtitle}
					</p>
					<div className="flex flex-wrap gap-2">
						{d.transferChips.map((chip) => (
							<div
								key={chip}
								className="flex items-center gap-1.5 bg-background-tertiary dark:bg-dark-overlay border border-text-secondary/30 dark:border-dark-overlay rounded px-2.5 py-1"
							>
								<span className="font-display font-normal text-sm text-text-primary dark:text-text">
									{chip}
								</span>
								<X
									size={12}
									className="text-text-secondary dark:text-text-tertiary shrink-0"
									strokeWidth={2.5}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
