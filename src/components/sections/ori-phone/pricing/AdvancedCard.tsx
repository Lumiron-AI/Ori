"use client";

import Link from "next/link";

import { Divider } from "./Divider";
import { FeatureList } from "./FeatureList";
import { buttonClass } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";

export function AdvancedCard() {
	const { t } = useLocale();
	const { advanced } = t.pricing;

	return (
		<div className="bg-background dark:bg-dark-surface rounded-3xl px-5 xs:px-7 py-5 xs:py-6 flex flex-col gap-3 xs:gap-3.5 shadow-card h-full border border-transparent hover:border-primary transition-colors">
			{/* Title */}
			<div>
				<p className="font-display font-bold text-2xl text-text-heading dark:text-text">
					{advanced.name}
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-0.5">
					{advanced.tagline}
				</p>
			</div>

			<Divider />

			{/* "Price" */}
			<div>
				<p className="font-display font-bold text-2xl xs:text-3xl text-text-heading dark:text-text">
					{advanced.price}
				</p>
				<p className="font-display font-normal text-base text-text-secondary dark:text-text-tertiary mt-2">
					{advanced.priceNote}
				</p>
			</div>

			{/* CTA */}
			<Link
				href="/contact"
				className={buttonClass({
					variant: "primary",
					size: "md",
					className: "sm:px-8 sm:text-lg sm:h-[50px] w-full",
				})}
			>
				{advanced.cta}
			</Link>

			<Divider />

			{/* Features */}
			<div className="flex-1">
				<FeatureList features={advanced.features as unknown as string[]} />
			</div>

			<Divider />

			{/* Bottom note */}
			<p className="font-display font-semibold text-sm text-text-secondary dark:text-text-tertiary text-center">
				{advanced.note}
			</p>
		</div>
	);
}
