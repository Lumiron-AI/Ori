"use client";

import {
	RiSettings3Line,
	RiGlobalLine,
	RiMapPin2Line,
	RiMailLine,
	RiPhoneLine,
} from "react-icons/ri";

import { DashboardTabs } from "./DashboardTabs";
import { FieldIconBox } from "./FieldIconBox";

export function QuickSetUpPanel() {
	const fields = [
		{
			label: "Nom de l'établissement",
			value: "Trattoria Bellagio",
			Icon: RiSettings3Line,
			full: true,
		},
		{
			label: "Site web",
			value: "https://www.trattoria-bellagio.fr/",
			Icon: RiGlobalLine,
			full: true,
		},
		{
			label: "Adresse",
			value: "13 rue de Courtville, 75018 Paris, France",
			Icon: RiMapPin2Line,
			full: true,
		},
		{
			label: "Email",
			value: "trattoria@gmail.com",
			Icon: RiMailLine,
			full: false,
		},
		{
			label: "Téléphone",
			value: "07 52 55 42 32",
			Icon: RiPhoneLine,
			full: false,
		},
	];
	return (
		<>
			<p className="font-display font-medium text-2xl text-text-primary dark:text-text">
				Bienvenue dans votre espace
			</p>
			<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-1 mb-5">
				Je suis Ori, votre assistant vocal
			</p>
			<DashboardTabs active="Informations" />
			<div className="grid grid-cols-2 gap-3">
				{fields.map((f) => (
					<div
						key={f.label}
						className={`bg-background-secondary dark:bg-dark-elevated rounded-xl p-3 flex items-center gap-3 ${
							f.full ? "col-span-2" : "col-span-1"
						}`}
					>
						<FieldIconBox icon={f.Icon} />
						<div className="min-w-0">
							<p className="font-display font-normal text-sm text-text-primary dark:text-text-tertiary">
								{f.label}
							</p>
							<p className="font-display font-medium text-base text-text-primary dark:text-text truncate">
								{f.value}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
