"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";
import { ComparisonListSection } from "@/components/ui/comparison-list-section";
import { useSectionFade } from "@/hooks/use-section-fade";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useLocale } from "@/context/locale-context";

export function ComparisonSection() {
	const { ref, opacity } = useSectionFade();
	const { t } = useLocale();
	const { comparison } = t;

	return (
		<motion.section
			id="comparison"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-12 md:py-20 lg:py-24 px-5 md:px-10 3xl:px-16"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeader
					label={comparison.label}
					title={comparison.title}
					subtitle={comparison.subtitle}
					subtitleClassName="max-w-3xl"
				/>

				{/* Desktop table — hidden on mobile */}
				<div className="hidden sm:block overflow-x-auto overflow-y-hidden">
					<table className="w-full border-separate border-spacing-x-0 border-spacing-y-1.5 min-w-[560px]">
						<thead>
							<tr>
								<th className="w-[22%]" />
								<th className="w-[39%]">
									<div className="bg-dark-overlay text-text font-display font-semibold text-base md:text-lg rounded-tl-2xl rounded-tr-2xl px-3 md:px-5 py-3 text-center">
										{comparison.withoutHeader}
									</div>
								</th>
								<th className="w-[39%] border-l-4 border-background dark:border-x-dark-bg p-0!">
									<div className="bg-primary text-text font-display font-semibold text-base md:text-lg rounded-tl-2xl rounded-tr-2xl px-3 md:px-5 py-3 text-center">
										{comparison.withHeader}
									</div>
								</th>
							</tr>
						</thead>

						<tbody>
							{comparison.rows.map((row, i) => (
								<motion.tr
									key={i}
									initial={{ opacity: 0, y: 24 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
								>
									<td className={`${i % 2 === 0 ? "bg-background-secondary dark:bg-dark-surface" : "bg-background-tertiary dark:bg-dark-elevated"} border-r-4 border-background dark:border-x-dark-bg rounded-l-2xl`}>
										<div
											className={` px-5 py-4 font-display font-semibold text-lg text-text-primary dark:text-text  ${
												i === comparison.rows.length - 1 ? "rounded-bl-2xl" : ""
											}`}
										>
											{row.topic}
										</div>
									</td>

									<td className={`${i % 2 === 0 ? "bg-background-secondary dark:bg-dark-surface" : "bg-background-tertiary dark:bg-dark-elevated"} dark:border-dark-bg`}>
										<div className="  px-5 py-4 flex items-start gap-3">
											<AiOutlineMinusCircle
												size={20}
												className="text-text-secondary dark:text-text-tertiary shrink-0 mt-0.5"
												strokeWidth={2.5}
											/>
											<span className="font-display font-normal text-base text-text-primary dark:text-text">
												{row.without}
											</span>
										</div>
									</td>

									<td className={`${i % 2 === 0 ? "bg-background-secondary dark:bg-dark-surface" : "bg-background-tertiary dark:bg-dark-elevated"} border-l-4 border-background dark:border-dark-bg`}>
										<div
											className={`px-5 py-4 flex items-start gap-3 rounded-r-2xl ${
												i === comparison.rows.length - 1 ? "rounded-br-2xl" : ""
											}`}
										>
											<CheckCircle2
												size={20}
												className="text-primary shrink-0 mt-0.5"
												strokeWidth={2.5}
											/>
											<span className="font-display font-bold text-base text-text-primary dark:text-text">
												{row.with}
											</span>
										</div>
									</td>
								</motion.tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Mobile cards — shown only on mobile */}
				<div className="sm:hidden mt-8">
					<ComparisonListSection
						rows={comparison.rows}
						withoutLabel={comparison.withoutHeader}
						withLabel={comparison.withHeader}
						ctaLabel={comparison.ctaLabel}
						accentColor="primary"
					/>
				</div>

				<p className="font-display font-normal text-sm sm:text-base text-text-secondary dark:text-text-tertiary text-center mt-8 max-w-3xl mx-auto">
					{comparison.footer}
				</p>
			</div>
		</motion.section>
	);
}
