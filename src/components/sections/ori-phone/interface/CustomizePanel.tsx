"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { RiVolumeUpLine, RiMessage3Line } from "react-icons/ri";

import { DashboardTabs } from "./DashboardTabs";
import { FieldIconBox } from "./FieldIconBox";

export function CustomizePanel() {
	const [voice, setVoice] = useState<"Homme" | "Femme">("Femme");
	return (
		<>
			<p className="font-display font-medium text-2xl text-text-primary dark:text-text">
				Bienvenue dans votre espace
			</p>
			<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-1 mb-5">
				Je suis Ori, votre assistant vocal
			</p>
			<DashboardTabs active="Fonctionnement" />
			<div className="flex flex-col gap-3">
				{/* Voix de l'agent */}
				<div className="bg-background-secondary dark:bg-dark-elevated rounded-2xl flex items-center justify-between p-4">
					<div className="flex items-center gap-3">
						<FieldIconBox icon={RiVolumeUpLine} />
						<p className="font-display font-medium text-base text-text-primary dark:text-text">
							Voix de l&apos;agent
						</p>
					</div>
					<div className="flex gap-5 items-center">
						<p className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
							Genre :
						</p>
						{(["Homme", "Femme"] as const).map((g) => (
							<label
								key={g}
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setVoice(g)}
							>
								<div
									className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
										voice === g ? "border-primary" : "border-text-secondary"
									}`}
								>
									{voice === g && (
										<div className="w-2 h-2 rounded-full bg-primary" />
									)}
								</div>
								<span className="font-display font-normal text-sm text-text-primary dark:text-text">
									{g}
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
							Phrase prononcée au début de l&apos;appel
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
							Transfert de l&apos;appel à votre équipe
						</p>
					</div>
					<p className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary mb-3">
						Choisissez les situations où l&apos;agent doit vous passer
						l&apos;appel
					</p>
					<div className="flex flex-wrap gap-2">
						{["Annulation d'une réservation", "Demande urgente"].map(
							(chip) => (
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
							),
						)}
					</div>
				</div>
			</div>
		</>
	);
}
