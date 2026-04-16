"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { SectionHeaderMessages } from "@/components/ui/section-header-messages";
import { buttonClass } from "@/components/ui/button";
import { useSectionFade } from "@/hooks/use-section-fade";
import { useLocale } from "@/context/locale-context";

export function OriMessagesFAQSection() {
	const [open, setOpen] = useState<number | null>(null);
	const { ref, opacity } = useSectionFade();
	const { t } = useLocale();
	const d = t.messagesFaq;

	return (
		<motion.section
			id="faq"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-12 sm:py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
					{/* Left: title block */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="lg:w-[560px] shrink-0 flex flex-col"
					>
						<SectionHeaderMessages
							label={d.label}
							title={d.title}
							subtitle={d.subtitle}
							className="mb-0"
						/>

						<Link
							href="/contact"
							className={buttonClass({
								variant: "ghost-primary",
								size: "md",
								className:
									"sm:px-8 sm:text-lg sm:h-[50px] w-fit sm:w-[292px] border-ori-message text-ori-message bg-ori-message/10 hover:bg-ori-message/20 dark:shadow-blue-btn-soft mt-6 sm:mt-0",
							})}
						>
							{d.seeAll}
						</Link>
					</motion.div>

					{/* Right: accordion */}
					<div className="flex-1">
						{d.items.map((faq, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									delay: i * 0.12,
									duration: 0.6,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								<div className="border-b border-background-secondary dark:border-dark-elevated">
									<button
										onClick={() => setOpen(open === i ? null : i)}
										className="w-full flex items-center gap-4 sm:gap-6 text-left group min-h-[80px] sm:min-h-[82px]"
									>
										<div className="w-1.5 h-[28px] sm:h-[28px] rounded-sm shrink-0 transition-colors bg-ori-message" />
										<span className="flex-1 font-display font-semibold text-base sm:text-xl lg:text-2xl text-text-primary dark:text-text">
											{faq.question}
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
													{faq.answer}
												</p>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
}
