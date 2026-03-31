"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Divider } from "../../ori-phone/pricing/Divider";

const FEATURES = [
	"Jusqu'à 500 discussions",
	"Réponses automatiques 24/7",
	"Prise de réservation intégrée",
	"Centralisation complète",
	"0,10€ par discussion supplémentaire",
];

export function PricingCardDuo({
	annual,
	setAnnual,
}: {
	annual: boolean;
	setAnnual: (v: boolean) => void;
}) {
	const monthlyPrice = 79;
	const annualPrice = Math.round(monthlyPrice * 12 * 0.9);

	return (
		<div className="relative bg-background-element dark:bg-dark-surface rounded-3xl px-7 py-6 flex flex-col gap-3.5 shadow-card h-full border border-ori-message transition-colors">
			{/* "Le plus populaire" badge */}
			<div className="absolute -top-4 left-1/2 -translate-x-1/2">
				<div className="bg-brand-accent/20 border-2 border-ori-message rounded-xl px-5 py-1.5">
					<span className="font-display font-bold text-base text-ori-message whitespace-nowrap">
						Le plus populaire
					</span>
				</div>
			</div>

			{/* Title */}
			<div className="mt-2">
				<p className="font-display font-bold text-2xl text-text-heading dark:text-text">
					PACK DUO
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-0.5">
					Le combo complet.
				</p>
			</div>

			<Divider />

			{/* Price + toggle */}
			<div className="flex flex-col gap-2">
				<div className="flex items-baseline gap-2">
					<span className="font-display font-bold text-3xl text-text-heading dark:text-text">
						{annual ? annualPrice : monthlyPrice}€
					</span>
					<span className="font-display font-semibold text-base text-text-secondary dark:text-text-tertiary">
						{annual ? "/ an" : "/ mois"}
					</span>
				</div>

				<div className="flex items-center gap-2">
					<button
						onClick={() => setAnnual(!annual)}
						className={`relative w-12 h-6 rounded-full transition-colors shrink-0 ${
							annual
								? "bg-ori-message"
								: "bg-background-secondary dark:bg-dark-overlay"
						}`}
						aria-checked={annual}
						role="switch"
						aria-label="Facturation annuelle"
					>
						<span
							className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
								annual ? "translate-x-6" : "translate-x-0"
							}`}
						/>
					</button>
					<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
						Annuel
					</span>
					<span className="font-display font-bold text-sm text-ori-message">
						-10%
					</span>
				</div>
			</div>

			{/* CTA */}
			<Link
				href="#trial"
				className="inline-flex items-center justify-center gap-2 font-display font-bold rounded-2xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ori-message focus-visible:ring-offset-2 w-full text-lg px-8 h-[46px] bg-ori-message text-text shadow-blue-btn hover:bg-ori-message/90 active:bg-ori-message/80"
			>
				Activer le Pack Duo
			</Link>

			<Divider />

			{/* Features */}
			<div className="flex-1">
				<ul className="flex flex-col gap-3">
					{FEATURES.map((f, i) => (
						<li key={i} className="flex items-start gap-3">
							<Check
								size={24}
								className="text-ori-message shrink-0 mt-0.5"
								strokeWidth={2.5}
							/>
							<span className="font-display font-normal text-sm text-text-heading dark:text-text-tertiary">
								{f}
							</span>
						</li>
					))}
				</ul>
			</div>

			<Divider />

			<p className="font-display font-semibold text-sm text-text-secondary dark:text-text-tertiary text-center">
				Essai gratuit 7 jours — sans engagement
				<br />
				Facturation uniquement après l&apos;essai
			</p>
		</div>
	);
}
