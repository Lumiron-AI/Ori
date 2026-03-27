"use client";

export function CustomizePanel() {
	return (
		<div className="flex flex-col gap-4">
			<p className="font-display font-medium text-xl text-text-primary dark:text-text">
				Personnalisation métier
			</p>
			<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary">
				Définissez le ton de vos réponses, les horaires d&apos;activité et les règles propres à votre établissement.
			</p>

			<div className="flex flex-col gap-3 mt-1">
				{[
					{ label: "Ton des réponses", value: "Chaleureux et professionnel" },
					{ label: "Horaires d'activité", value: "Lundi – Dimanche, 9h – 23h" },
					{ label: "Langue principale", value: "Français" },
					{ label: "Réponse en cas d'absence", value: "Transfert vers le responsable" },
				].map((field) => (
					<div
						key={field.label}
						className="bg-background-secondary dark:bg-dark-overlay rounded-xl p-3"
					>
						<span className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
							{field.label}
						</span>
						<p className="font-display font-medium text-base text-text-primary dark:text-text mt-0.5">
							{field.value}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
