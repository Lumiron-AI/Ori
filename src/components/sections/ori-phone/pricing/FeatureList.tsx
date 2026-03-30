"use client";

import { Check } from "lucide-react";

export function FeatureList({ features }: { features: string[] }) {
	return (
		<ul className="flex flex-col gap-1.5">
			{features.map((f, i) => (
				<li key={i} className="flex items-start gap-1.5">
					<Check
						size={13}
						className="text-primary shrink-0 mt-0.5"
						strokeWidth={2.5}
					/>
					<span className="font-display font-normal text-xs text-text-heading dark:text-text-tertiary">
						{f}
					</span>
				</li>
			))}
		</ul>
	);
}
