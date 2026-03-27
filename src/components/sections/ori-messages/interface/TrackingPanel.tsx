"use client";

const STATS = [
	{ label: "Messages traités", value: "247", sub: "cette semaine" },
	{ label: "Taux de réponse", value: "100%", sub: "en moins de 5s" },
	{ label: "Réservations prises", value: "38", sub: "cette semaine" },
	{ label: "Temps économisé", value: "9h", sub: "cette semaine" },
];

export function TrackingPanel() {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<p className="font-display font-medium text-xl text-text-primary dark:text-text">
					Historique complet
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-0.5">
					Retrouvez l&apos;activité complète d&apos;Ori et mesurez son impact sur votre établissement.
				</p>
			</div>

			<div className="grid grid-cols-2 gap-3 mt-1">
				{STATS.map((stat) => (
					<div
						key={stat.label}
						className="bg-background-secondary dark:bg-dark-overlay rounded-2xl p-4 flex flex-col gap-1"
					>
						<span className="font-display font-bold text-3xl text-ori-message">
							{stat.value}
						</span>
						<span className="font-display font-semibold text-base text-text-primary dark:text-text leading-tight">
							{stat.label}
						</span>
						<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
							{stat.sub}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
