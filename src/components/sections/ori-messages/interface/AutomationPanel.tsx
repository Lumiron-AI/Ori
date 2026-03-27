"use client";

import { Check } from "lucide-react";

const TASKS = [
	{ done: true, text: "Réservation — Table de 2, samedi 20h" },
	{ done: true, text: "FAQ — Horaires du restaurant" },
	{ done: true, text: "FAQ — Disponibilité menu végétarien" },
	{ done: false, text: "Réservation — Table de 6, dimanche midi" },
	{ done: false, text: "FAQ — Formule déjeuner prix" },
];

export function AutomationPanel() {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<p className="font-display font-medium text-xl text-text-primary dark:text-text">
					Gestion 100% autonome
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-0.5">
					Ori traite chaque message en temps réel, sans intervention de votre équipe.
				</p>
			</div>

			<div className="flex flex-col gap-2 mt-1">
				{TASKS.map((task, i) => (
					<div
						key={i}
						className="flex items-center gap-3 bg-background-secondary dark:bg-dark-overlay rounded-xl px-4 py-3"
					>
						<div
							className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
								task.done
									? "bg-ori-message border-ori-message"
									: "border-background-tertiary dark:border-dark-overlay bg-transparent"
							}`}
						>
							{task.done && <Check size={12} strokeWidth={3} className="text-text" />}
						</div>
						<span
							className={`font-display font-normal text-base ${
								task.done
									? "line-through text-text-secondary dark:text-text-tertiary"
									: "text-text-primary dark:text-text"
							}`}
						>
							{task.text}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
