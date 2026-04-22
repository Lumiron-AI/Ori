"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Divider } from "../../ori-phone/pricing/Divider";
import { useLocale } from "@/context/locale-context";

export function PricingCardWhatsApp({
	annual,
	setAnnual,
}: {
	annual: boolean;
	setAnnual: (v: boolean) => void;
}) {
	const { t } = useLocale();
	const p = t.messagesPricing;
	const d = p.whatsapp;

	const monthlyPrice = 59;
	const annualPrice = Math.round(monthlyPrice * 12 * 0.9);

	return (
		<div className="bg-background-element dark:bg-dark-surface rounded-3xl px-5 xs:px-7 py-5 xs:py-6 flex flex-col gap-3 xs:gap-3.5 shadow-card h-full border border-transparent hover:border-ori-message transition-colors">
			{/* Title */}
			<div>
				<p className="font-display font-bold text-2xl text-text-heading dark:text-text">
					{d.title}
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-0.5">
					{d.tagline}
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
						{annual ? p.perYear : p.perMonth}
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
						aria-label={p.annual}
					>
						<span
							className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
								annual ? "translate-x-6" : "translate-x-0"
							}`}
						/>
					</button>
					<span className="font-display font-normal text-sm text-text-secondary dark:text-text-tertiary">
						{p.annual}
					</span>
					<span className="font-display font-bold text-sm text-ori-message">
						{p.discount}
					</span>
				</div>
			</div>

			{/* CTA */}
			<Link
				href="https://app.lumiron.ai/register"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center justify-center gap-2 font-display font-bold rounded-2xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ori-message focus-visible:ring-offset-2 w-full text-base px-6 h-11 sm:text-lg sm:px-8 sm:h-[50px] bg-ori-message text-text shadow-blue-btn hover:bg-ori-message/90 active:bg-ori-message/80"
			>
				{d.cta}
			</Link>

			<Divider />

			{/* Features */}
			<div className="flex-1">
				<ul className="flex flex-col gap-3">
					{d.features.map((f, i) => (
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
				{p.trialNote}
				<br />
				{p.billingNote}
			</p>
		</div>
	);
}
