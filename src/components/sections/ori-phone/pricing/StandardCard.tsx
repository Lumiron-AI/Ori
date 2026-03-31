"use client";

import Link from "next/link";

import { Divider } from "./Divider";
import { FeatureList } from "./FeatureList";
import { buttonClass } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";

export function StandardCard({
	annual,
	setAnnual,
}: {
	annual: boolean;
	setAnnual: (v: boolean) => void;
}) {
	const monthlyPrice = 80;
	const annualPrice = 961;

	const { t } = useLocale();
	const { standard } = t.pricing;

	return (
		<div className="bg-background dark:bg-dark-surface rounded-3xl px-7 py-6 flex flex-col gap-3.5 shadow-card h-full border border-transparent hover:border-primary transition-colors">
			{/* Title */}
			<div>
				<p className="font-display font-bold text-2xl text-text-heading dark:text-text">
					{standard.name}
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-0.5">
					{standard.tagline}
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
						{annual ? standard.perYear : standard.perMonth}
					</span>
				</div>

				{/* Toggle */}
				<div className="flex items-center gap-2">
					<button
						onClick={() => setAnnual(!annual)}
						className={`relative w-12 h-6 rounded-full transition-colors shrink-0 ${
							annual
								? "bg-primary"
								: "bg-background-secondary dark:bg-dark-overlay"
						}`}
						aria-checked={annual}
						role="switch"
						aria-label={standard.annualLabel}
					>
						<span
							className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
								annual ? "translate-x-6" : "translate-x-0"
							}`}
						/>
					</button>
					<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
						{standard.annual}
					</span>
					<span className="font-display font-bold text-sm text-primary">
						{standard.discount}
					</span>
				</div>
			</div>

			{/* CTA */}
			<Link
				href="#trial"
				className={buttonClass({
					variant: "primary",
					size: "lg",
					className: "w-full",
				})}
			>
				{standard.cta}
			</Link>

			<Divider />

			{/* Features */}
			<div className="flex-1">
				<FeatureList features={standard.features as unknown as string[]} />
			</div>

			<p className="font-display font-normal text-xs text-text-secondary dark:text-text-tertiary">
				{standard.extraMinutes}
			</p>

			<Divider />

			{/* Bottom note */}
			<p className="font-display font-semibold text-sm text-text-secondary dark:text-text-tertiary text-center">
				{standard.trialNote}
				<br />
				{standard.billingNote}
			</p>
		</div>
	);
}
