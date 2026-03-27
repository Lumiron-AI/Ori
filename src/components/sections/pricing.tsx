"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingPlans } from "@/lib/stripe";

export function PricingSection() {
	const [loading, setLoading] = useState<string | null>(null);

	async function handleCheckout(priceId: string, planId: string) {
		if (!priceId) return;
		setLoading(planId);
		try {
			const res = await fetch("/api/stripe/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ priceId }),
			});
			const data = await res.json();
			if (data.url) window.location.href = data.url;
		} finally {
			setLoading(null);
		}
	}

	return (
		<div className="max-w-5xl mx-auto">
			<div className="text-center mb-14">
				<h1 className="font-display font-bold text-5xl text-text-primary mb-4">
					Tarifs simples et transparents
				</h1>
				<p className="font-sans font-normal text-lg text-text-secondary">
					7 jours gratuits sur tous les plans. Aucune carte requise.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
				{pricingPlans.map((plan, i) => (
					<motion.div
						key={plan.id}
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.1, duration: 0.5 }}
						className={cn(
							"rounded-2xl p-6 flex flex-col gap-5 border",
							plan.highlighted
								? "bg-accent border-primary/40 shadow-lg scale-[1.02]"
								: "bg-background-secondary border-transparent",
						)}
					>
						{plan.highlighted && (
							<span className="self-start font-sans font-medium text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
								Recommandé
							</span>
						)}

						<div>
							<h2
								className={cn(
									"font-display font-bold text-2xl mb-1",
									plan.highlighted ? "text-text" : "text-text-primary",
								)}
							>
								{plan.name}
							</h2>
							<p
								className={cn(
									"font-sans font-normal text-sm",
									plan.highlighted ? "text-text/70" : "text-text-primary",
								)}
							>
								{plan.description}
							</p>
						</div>

						<div className="flex items-end gap-1">
							<span
								className={cn(
									"font-display font-bold text-5xl",
									plan.highlighted ? "text-text" : "text-text-primary",
								)}
							>
								{plan.price}€
							</span>
							<span
								className={cn(
									"font-sans font-normal text-sm mb-2",
									plan.highlighted ? "text-text/60" : "text-text-secondary",
								)}
							>
								/ mois
							</span>
						</div>

						<ul className="flex flex-col gap-2">
							{plan.features.map((f) => (
								<li key={f} className="flex items-start gap-2">
									<Check
										size={16}
										className={cn(
											"mt-0.5 shrink-0",
											plan.highlighted ? "text-primary" : "text-primary",
										)}
									/>
									<span
										className={cn(
											"font-sans font-normal text-sm",
											plan.highlighted ? "text-text/80" : "text-text-secondary",
										)}
									>
										{f}
									</span>
								</li>
							))}
						</ul>

						<Button
							variant={plan.highlighted ? "primary" : "outline"}
							size="md"
							className="mt-auto w-full"
							disabled={loading === plan.id || !plan.stripePriceId}
							onClick={() => handleCheckout(plan.stripePriceId, plan.id)}
						>
							{loading === plan.id ? "Chargement…" : "Commencer gratuitement"}
						</Button>
					</motion.div>
				))}
			</div>
		</div>
	);
}
