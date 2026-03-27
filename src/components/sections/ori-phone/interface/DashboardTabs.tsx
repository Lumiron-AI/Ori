"use client";

export function DashboardTabs({ active }: { active: string }) {
	const tabs = ["Informations", "Fonctionnement", "Récapitulatif"];
	return (
		<div className="flex gap-1 mb-5 flex-wrap">
			{tabs.map((t) => (
				<div
					key={t}
					className={`px-4 py-2 rounded-xl font-display font-medium text-base whitespace-nowrap ${
						t === active ? "bg-primary text-text" : "text-text-secondary dark:text-text-tertiary"
					}`}
				>
					{t}
				</div>
			))}
		</div>
	);
}
