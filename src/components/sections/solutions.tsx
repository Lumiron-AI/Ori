"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Check, ChevronRight } from "lucide-react";
import { useLocale } from "@/context/locale-context";

const SOLUTION_META = [
	{
		id: "phone",
		icon: Phone,
		href: "/solutions/phone",
		iconBg: "bg-primary",
		ctaBg: "bg-primary",
		ctaShadow: "shadow-orange-btn",
	},
	{
		id: "message",
		icon: MessageCircle,
		href: "/solutions/messages",
		iconBg: "bg-ori-message",
		ctaBg: "bg-ori-message",
		ctaShadow: "shadow-blue-btn",
	},
];

export function Solutions() {
	const { t } = useLocale();
	const { homeSolutions } = t;

	return (
		<section id="solutions" className="section-padding py-12 md:py-16 lg:py-20">
			<div className="max-w-8xl mx-auto">
				<div className="text-center mb-8 md:mb-10">
					<p className="font-display font-semibold text-lg sm:text-2xl text-primary uppercase tracking-wide mb-2">
						{homeSolutions.label}
					</p>
					<h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary dark:text-text mb-3">
						{homeSolutions.title}
					</h2>
					<p className="font-display font-semibold text-base sm:text-xl lg:text-2xl/8 text-text-secondary dark:text-text-tertiary max-w-3xl mx-auto">
						{homeSolutions.subtitle}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-6">
					{SOLUTION_META.map((meta, i) => {
						const sol = homeSolutions.solutions[i];
						const Icon = meta.icon;
						return (
							<motion.div
								key={meta.id}
								initial={{ opacity: 0, y: 28 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.12, duration: 0.55 }}
								className="bg-background-element dark:bg-dark-elevated rounded-4xl shadow-card dark:shadow-none dark:border dark:border-dark-overlay p-5 md:p-7 flex flex-col gap-4 md:gap-5"
							>
								<div className="flex items-start gap-4 sm:gap-5">
									<div
										className={`${meta.iconBg} w-12 h-12 sm:w-14 sm:h-14 rounded-xl shrink-0 flex items-center justify-center`}
									>
										<Icon size={28} className="text-text" strokeWidth={1.5} />
									</div>
									<div className="flex flex-col gap-1 pt-1">
										<h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary dark:text-text leading-snug">
											{sol.title}
										</h3>
										<p className="font-display font-normal text-sm sm:text-base text-text-secondary dark:text-text-tertiary">
											{sol.label}
										</p>
									</div>
								</div>

								<p className="font-display font-normal text-sm sm:text-base text-text-secondary dark:text-text-tertiary">
									{sol.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{sol.features.map((f) => (
										<span
											key={f}
											className="inline-flex items-center gap-2 bg-background-secondary dark:bg-dark-overlay rounded-full h-9 sm:h-10 px-3 font-display font-normal text-xs sm:text-sm text-text-primary dark:text-text-tertiary whitespace-nowrap"
										>
											<Check
												size={14}
												className="text-text-secondary dark:text-text-tertiary shrink-0"
												strokeWidth={2.5}
											/>
											{f}
										</span>
									))}
								</div>

								<div className="flex justify-end mt-1">
									<Link
										href={meta.href}
										className={`inline-flex items-center justify-center gap-2 ${meta.ctaBg} ${meta.ctaShadow} text-text font-display font-bold text-base rounded-xl h-[40px] sm:h-[44px] px-4 sm:px-6 hover:opacity-90 active:opacity-80 transition-opacity`}
									>
										{sol.cta}
										<ChevronRight size={18} strokeWidth={2.5} />
									</Link>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
