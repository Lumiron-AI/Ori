"use client";

import Link from "next/link";

import { Divider } from "./Divider";
import { FeatureList } from "./FeatureList";
import { buttonClass } from "@/components/ui/button";

const STANDARD_FEATURES = [
	"Jusqu'à 400 minutes d'appels entrants",
	"Réservations, annulations et réponses aux questions fréquentes prises en charge",
	"Transfert vers l'équipe si nécessaire",
	"Statistiques en temps réel",
	"Interface de gestion complète",
];

export function StandardCard({
	annual,
	setAnnual,
}: {
	annual: boolean;
	setAnnual: (v: boolean) => void;
}) {
	const monthlyPrice = 80;
	const annualPrice = 961;

	return (
		<div className="bg-background-element dark:bg-dark-surface rounded-3xl p-8 flex flex-col gap-5 shadow-card h-full border border-transparent hover:border-primary transition-colors">
			{/* Title */}
			<div>
				<p className="font-display font-bold text-2xl text-text-heading dark:text-text">
					STANDARD
				</p>
				<p className="font-display font-normal text-lg text-text-secondary dark:text-text-tertiary mt-1">
					1 établissement
				</p>
			</div>

			<Divider />

			{/* Price + toggle */}
			<div className="flex flex-col gap-3">
				<div className="flex items-baseline gap-2">
					<span className="font-display font-bold text-4xl text-text-heading dark:text-text">
						{annual ? annualPrice : monthlyPrice}€
					</span>
					<span className="font-display font-semibold text-2xl text-text-secondary dark:text-text-tertiary">
						{annual ? "/ an" : "/ mois"}
					</span>
				</div>

				{/* Toggle */}
				<div className="flex items-center gap-3">
					<button
						onClick={() => setAnnual(!annual)}
						className={`relative w-16 h-7 rounded-full transition-colors shrink-0 ${
							annual
								? "bg-primary"
								: "bg-background-secondary dark:bg-dark-overlay"
						}`}
						aria-checked={annual}
						role="switch"
						aria-label="Facturation annuelle"
					>
						<span
							className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
								annual ? "translate-x-8" : "translate-x-0"
							}`}
						/>
					</button>
					<span className="font-display font-normal text-lg text-text-secondary dark:text-text-tertiary">
						Annuel
					</span>
					<span className="font-display font-bold text-lg text-primary">
						-10%
					</span>
				</div>
			</div>

			{/* CTA */}
			<Link
				href="#trial"
				className={buttonClass({
					variant: "primary",
					size: "lg",
					className: "w-full text-xl",
				})}
			>
				Commencer l&apos;essai gratuit
			</Link>

			<Divider />

			{/* Features */}
			<div className="flex-1">
				<FeatureList features={STANDARD_FEATURES} />
			</div>

			<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary">
				Minutes supplémentaires : 0,20 € / minute
			</p>

			<Divider />

			{/* Bottom note */}
			<p className="font-display font-semibold text-lg text-text-secondary dark:text-text-tertiary text-center">
				Essai gratuit 7 jours — sans engagement
				<br />
				Facturation uniquement après l&apos;essai
			</p>
		</div>
	);
}
