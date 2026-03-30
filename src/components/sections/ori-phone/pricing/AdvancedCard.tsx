"use client";

import Link from "next/link";

import { Divider } from "./Divider";
import { FeatureList } from "./FeatureList";
import { buttonClass } from "@/components/ui/button";

const ADVANCED_FEATURES = [
	"Multi-établissements",
	"Modules complémentaires",
	"Règles spécifiques",
	"Intégrations techniques",
	"Suivi centralisé",
];

export function AdvancedCard() {
	return (
		<div className="bg-background dark:bg-dark-surface rounded-3xl px-7 py-6 flex flex-col gap-3.5 shadow-card h-full border border-transparent hover:border-primary transition-colors">
			{/* Title */}
			<div>
				<p className="font-display font-bold text-2xl text-text-heading dark:text-text">
					AVANCÉ
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-0.5">
					Multi-sites et options personnalisés
				</p>
			</div>

			<Divider />

			{/* "Price" */}
			<div>
				<p className="font-display font-bold text-3xl text-text-heading dark:text-text">
					Sur-mesure
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-2">
					Configuration adaptée
				</p>
			</div>

			{/* CTA */}
			<Link
				href="/contact"
				className={buttonClass({
					variant: "primary",
					size: "lg",
					className: "w-full",
				})}
			>
				Planifier un appel
			</Link>

			<Divider />

			{/* Features */}
			<div className="flex-1">
				<FeatureList features={ADVANCED_FEATURES} />
			</div>

			<Divider />

			{/* Bottom note */}
			<p className="font-display font-semibold text-sm text-text-secondary dark:text-text-tertiary text-center">
				Solution et tarification personnalisée selon votre organisation.
			</p>
		</div>
	);
}
