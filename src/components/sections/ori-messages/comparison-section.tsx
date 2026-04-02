"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AiOutlineMinusCircle } from "react-icons/ai";

import { SectionHeaderMessages } from "@/components/ui/section-header-messages";
import { useSectionFade } from "@/hooks/use-section-fade";
import { useLocale } from "@/context/locale-context";

export function OriMessagesComparisonSection() {
	const { ref, opacity } = useSectionFade();
	const { t } = useLocale();
	const d = t.messagesComparison;

	return (
		<motion.section
			id="comparison"
			ref={ref}
			style={{ opacity }}
			className="bg-background dark:bg-dark-bg py-16 sm:py-20 px-5"
		>
			<div className="max-w-8xl lg:max-w-9xl mx-auto">
				<SectionHeaderMessages
					label={d.label}
					title={d.title}
					subtitle={d.subtitle}
					subtitleClassName="max-w-6xl"
				/>

				{/* Desktop table */}
				<div className="hidden sm:block overflow-x-auto overflow-y-hidden">
					<table className="w-full border-separate border-spacing-x-0 border-spacing-y-1.5 min-w-[560px]">
						<thead>
							<tr>
								<th className="w-[22%]" />
								<th className="w-[39%]">
									<div className="bg-dark-overlay text-text font-display font-semibold text-lg rounded-tl-2xl rounded-tr-2xl px-5 py-3 text-center">
										{d.headerManual}
									</div>
								</th>
								<th className="w-[39%] border-l-4 border-background dark:border-x-dark-bg p-0!">
									<div className="bg-ori-message text-text font-display font-semibold text-lg rounded-tl-2xl rounded-tr-2xl px-5 py-3 text-center">
										{d.headerOri}
									</div>
								</th>
							</tr>
						</thead>

						<tbody>
							{d.rows.map((row, i) => (
								<motion.tr
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
									<td className="bg-background-secondary dark:bg-dark-elevated border-r-4 border-background dark:border-x-dark-bg rounded-l-2xl">
										<div
											className={`px-5 py-4 font-display font-semibold text-lg text-text-primary dark:text-text ${
												i === d.rows.length - 1 ? "rounded-bl-2xl" : ""
											}`}
										>
											{row.topic}
										</div>
									</td>

									<td className="bg-background-secondary dark:border-dark-bg dark:bg-dark-elevated">
										<div className="px-5 py-4 flex items-start gap-3">
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

									<td className="bg-background-secondary dark:bg-dark-elevated border-l-4 border-background dark:border-dark-bg">
										<div
											className={`px-5 py-4 flex items-start gap-3 rounded-r-2xl ${
												i === d.rows.length - 1 ? "rounded-br-2xl" : ""
											}`}
										>
											<CheckCircle2
												size={20}
												className="text-ori-message shrink-0 mt-0.5"
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

				{/* Mobile cards */}
				<div className="flex flex-col gap-4 sm:hidden overflow-hidden">
					<div className="grid grid-cols-2 gap-2">
						<div className="bg-dark-overlay text-text font-display font-semibold text-lg rounded-2xl px-4 py-2.5 text-center">
							{d.headerManual}
						</div>
						<div className="bg-ori-message text-text font-display font-semibold text-lg rounded-2xl px-4 py-2.5 text-center">
							{d.headerOri}
						</div>
					</div>

					{d.rows.map((row, i) => (
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
							className="rounded-2xl overflow-hidden"
						>
							<div className="bg-background-tertiary dark:bg-dark-overlay px-4 py-2">
								<span className="font-display font-semibold text-lg text-text-primary dark:text-text">
									{row.topic}
								</span>
							</div>
							<div className="grid grid-cols-2 gap-px bg-background-tertiary dark:bg-dark-overlay">
								<div className="bg-background-secondary dark:bg-dark-elevated px-3 py-3 flex items-start gap-2">
									<AiOutlineMinusCircle
										size={14}
										className="text-text-secondary dark:text-text-tertiary shrink-0 mt-0.5"
										strokeWidth={2.5}
									/>
									<span className="font-display font-normal text-base text-text-primary dark:text-text leading-relaxed">
										{row.without}
									</span>
								</div>
								<div className="bg-background-secondary dark:bg-dark-elevated px-3 py-3 flex items-start gap-2">
									<CheckCircle2
										size={14}
										className="text-ori-message shrink-0 mt-0.5"
										strokeWidth={2.5}
									/>
									<span className="font-display font-bold text-base text-text-primary dark:text-text leading-relaxed">
										{row.with}
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<p className="font-display font-semibold text-sm sm:text-base text-text-secondary dark:text-text-tertiary text-center mt-8 sm:mt-10 max-w-3xl mx-auto">
					{d.footer}
				</p>
			</div>
		</motion.section>
	);
}
