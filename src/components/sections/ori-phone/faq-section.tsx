"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionFade } from "@/hooks/use-section-fade";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { SectionHeader } from "@/components/ui/section-header";
import { buttonClass } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";

export function FAQSection() {
	const [open, setOpen] = useState<number | null>(null);
	const { ref, opacity } = useSectionFade();
	const { t } = useLocale();
	const { faq } = t;

	return (
		<motion.section
			id="faq"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-16 sm:py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
					{/* Left: title block */}
					<div className="lg:w-[560px] shrink-0 flex flex-col">
						<SectionHeader
							label={faq.label}
							title={faq.title}
							subtitle={faq.subtitle}
							className="mb-0"
						/>

						<Link
							href="/contact"
							className={buttonClass({
								variant: "ghost-primary",
								size: "lg",
								className: "w-full sm:w-[292px] shadow-orange-btn",
							})}
						>
							{faq.seeAll}
						</Link>
					</div>

					{/* Right: accordion */}
					<div className="flex-1">
						{faq.items.map((item, i) => (
							<div
								key={i}
								className="border-b border-background-secondary dark:border-dark-elevated"
							>
								<button
									onClick={() => setOpen(open === i ? null : i)}
									className="w-full flex items-center gap-4 sm:gap-6 text-left group min-h-[80px] sm:min-h-[82px]"
								>
									<div className="w-1.5 h-[28px] sm:h-[33px] rounded-sm shrink-0 transition-colors bg-primary" />
									<span className="flex-1 font-display font-semibold text-base sm:text-xl lg:text-2xl text-text-primary dark:text-text">
										{item.question}
									</span>
									<ChevronDown
										size={22}
										strokeWidth={2}
										className={`shrink-0 text-text-secondary dark:text-text transition-transform ${
											open === i ? "rotate-180" : ""
										}`}
									/>
								</button>

								<AnimatePresence initial={false}>
									{open === i && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
											className="overflow-hidden"
										>
											<p className="font-display font-normal text-sm sm:text-base text-text-primary dark:text-text-tertiary pb-6 sm:pb-8 pl-4 sm:pl-6 leading-relaxed">
												{item.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
}
