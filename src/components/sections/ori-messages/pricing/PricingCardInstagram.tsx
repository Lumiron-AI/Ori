"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Divider } from "../../ori-phone/pricing/Divider";

const FEATURES = [
	"Jusqu'à 500 discussions",
	"Réponses automatiques 24/7",
	"Prise de réservation intégrée",
	"100% des messages traités",
	"0,10€ par discussion supplémentaire",
];

export function PricingCardInstagram({
	annual,
	setAnnual,
}: {
	annual: boolean;
	setAnnual: (v: boolean) => void;
}) {
	const monthlyPrice = 39;
	const annualPrice = Math.round(monthlyPrice * 12 * 0.9);

	return (
		<div className="bg-background-element dark:bg-dark-surface rounded-3xl p-8 flex flex-col gap-5 shadow-card h-full border border-transparent hover:border-ori-message transition-colors">
			{/* Title */}
			<div>
				<p className="font-display font-bold text-2xl text-text-heading dark:text-text">
					ASSISTANT INSTAGRAM
				</p>
				<p className="font-display font-normal text-lg text-text-secondary dark:text-text-tertiary mt-1">
					Boostez vos DMs
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

				<div className="flex items-center gap-3">
					<button
						onClick={() => setAnnual(!annual)}
						className={`relative w-16 h-7 rounded-full transition-colors shrink-0 ${
							annual
								? "bg-ori-message"
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
					<span className="font-display font-bold text-lg text-ori-message">
						-10%
					</span>
				</div>
			</div>

			{/* CTA */}
			<Link
				href="#trial"
				className="inline-flex items-center justify-center gap-2 font-display font-bold rounded-2xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ori-message focus-visible:ring-offset-2 w-full text-xl px-8 h-[50px] bg-ori-message text-text shadow-blue-btn hover:bg-ori-message/90 active:bg-ori-message/80"
			>
				Activer Instagram
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
							<span className="font-display font-normal text-base text-text-heading dark:text-text-tertiary">
								{f}
							</span>
						</li>
					))}
				</ul>
			</div>

			<Divider />

			<p className="font-display font-semibold text-lg text-text-secondary dark:text-text-tertiary text-center">
				Essai gratuit 7 jours — sans engagement
				<br />
				Facturation uniquement après l&apos;essai
			</p>
		</div>
	);
}
