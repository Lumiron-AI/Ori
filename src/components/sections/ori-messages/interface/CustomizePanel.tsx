"use client";

import { Volume2, Clock, X, Plus, Copy } from "lucide-react";

const SCHEDULE = [
	{ day: "Lundi", on: true, start: "11:00", end: "23:00" },
	{ day: "Mardi", on: true, start: "11:00", end: "23:00" },
	{ day: "Mercredi", on: false, start: "", end: "" },
];

export function CustomizePanel() {
	return (
		<div className="flex flex-col gap-4">
			{/* Header */}
			<div className="mb-1">
				<p className="font-display font-medium text-xl text-text-primary dark:text-text">
					Bienvenue dans votre espace
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-0.5">
					Je suis Ori, votre assistant vocal
				</p>
			</div>

			{/* Tabs — "Fonctionnement" active */}
			<div className="flex items-center gap-2">
				<button className="px-4 py-2 rounded-xl text-text-secondary dark:text-text-tertiary font-display font-medium text-sm cursor-default">
					Informations
				</button>
				<button className="px-4 py-2 rounded-xl bg-ori-message text-text font-display font-medium text-sm cursor-default">
					Fonctionnement
				</button>
				<button className="px-4 py-2 rounded-xl text-text-secondary dark:text-text-tertiary font-display font-medium text-sm cursor-default">
					Récapitulatif
				</button>
			</div>

			{/* Card 1 — Choix du ton */}
			<div className="bg-background-secondary dark:bg-dark-overlay rounded-2xl p-4 flex flex-col gap-3">
				<div className="flex items-center gap-3">
					<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
						<Volume2
							size={18}
							className="text-text-secondary dark:text-text-tertiary"
						/>
					</div>
					<span className="font-display font-medium text-base text-text-primary dark:text-text">
						Choix du ton
					</span>
				</div>
				<div className="flex items-center gap-4 flex-wrap">
					<span className="font-display font-normal text-sm text-text-primary dark:text-text">
						Genre :
					</span>
					<div className="flex items-center gap-1.5">
						<div className="w-4 h-4 rounded-full border-2 border-ori-message flex items-center justify-center">
							<div className="w-2 h-2 rounded-full bg-ori-message" />
						</div>
						<span className="font-display font-normal text-sm text-text-primary dark:text-text">
							Professionnel
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						<div className="w-4 h-4 rounded-full border-2 border-background-tertiary dark:border-dark-overlay" />
						<span className="font-display font-normal text-sm text-text-primary dark:text-text">
							Décontracté
						</span>
					</div>
				</div>
			</div>

			{/* Card 2 — Plages d'activité */}
			<div className="bg-background-secondary dark:bg-dark-overlay rounded-2xl p-4 flex flex-col gap-3">
				<div className="flex items-center gap-3">
					<div className="bg-background-tertiary dark:bg-dark-elevated rounded-lg p-2 shrink-0">
						<Clock
							size={18}
							className="text-text-secondary dark:text-text-tertiary"
						/>
					</div>
					<span className="font-display font-medium text-base text-text-primary dark:text-text">
						Plages d&apos;activité de l&apos;agent IA
					</span>
				</div>
				<p className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
					Indiquez les heures pendant lesquelles votre agent IA doit être actif
				</p>
				<div className="flex flex-col gap-4">
					{SCHEDULE.map(({ day, on, start, end }) => (
						<div key={day} className="flex items-center gap-2">
							<div
								className={`w-9 h-5 rounded-full flex items-center px-0.5 shrink-0 ${
									on
										? "bg-ori-message"
										: "bg-background-tertiary dark:bg-dark-elevated"
								}`}
							>
								<div
									className={`w-3.5 h-3.5 rounded-full bg-text transition-transform ${
										on ? "translate-x-4" : "translate-x-0"
									}`}
								/>
							</div>
							<span className="font-display font-normal text-sm text-text-primary dark:text-text w-14 shrink-0">
								{day}
							</span>
							{on ? (
								<div className="flex items-center gap-1.5 flex-1">
									<div className="flex items-center gap-1 border border-text-primary/30 dark:border-text/30 rounded-lg px-2 py-0.5">
										<span className="font-display font-normal text-sm text-text-primary dark:text-text">
											{start}
										</span>
										<Clock
											size={11}
											className="text-text-secondary dark:text-text-tertiary"
										/>
									</div>
									<span className="text-text-secondary dark:text-text-tertiary text-sm">
										—
									</span>
									<div className="flex items-center gap-1 border border-text-primary/30 dark:border-text/30 rounded-lg px-2 py-0.5">
										<span className="font-display font-normal text-sm text-text-primary dark:text-text">
											{end}
										</span>
										<Clock
											size={11}
											className="text-text-secondary dark:text-text-tertiary"
										/>
									</div>
									<button
										className="w-6 h-6 rounded-full dark:bg-dark-elevated flex items-center justify-center shrink-0 cursor-default"
										aria-label="Supprimer"
									>
										<X
											size={11}
											className="text-text-secondary dark:text-text-tertiary"
										/>
									</button>
									<button
										className="w-6 h-6 rounded-full bg-background-tertiary dark:bg-dark-elevated flex items-center justify-center shrink-0 cursor-default"
										aria-label="Ajouter"
									>
										<Plus
											size={11}
											className="text-text-secondary dark:text-text-tertiary"
										/>
									</button>
									<button
										className="w-6 h-6 rounded-full bg-background-tertiary dark:bg-dark-elevated flex items-center justify-center shrink-0 cursor-default"
										aria-label="Copier"
									>
										<Copy
											size={11}
											className="text-text-secondary dark:text-text-tertiary"
										/>
									</button>
								</div>
							) : (
								<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary italic">
									Fermé
								</span>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
