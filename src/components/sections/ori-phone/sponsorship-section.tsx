"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";
import { buttonClass } from "@/components/ui/button";
import { SponsorshipModal } from "@/components/ui/sponsorship-modal";
import { useSectionFade } from "@/hooks/use-section-fade";
import { useSponsorshipModal } from "@/hooks/use-sponsorship-modal";
import { useLocale } from "@/context/locale-context";

export function SponsorshipSection() {
	const { ref, opacity } = useSectionFade();
	const modal = useSponsorshipModal();
	const { t } = useLocale();
	const { sponsorship } = t;

	return (
		<>
			<motion.section
				id="sponsorship"
				ref={ref}
				style={{ opacity }}
				className="bg-background dark:bg-dark-bg py-12 md:py-20 lg:py-24 px-5 md:px-10 3xl:px-16"
			>
				<div className="max-w-8xl lg:max-w-9xl mx-auto">
					<SectionHeader
						label={sponsorship.label}
						title={sponsorship.title}
						subtitle={sponsorship.subtitle}
						subtitleClassName="max-w-8xl"
					/>

					<div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
						{sponsorship.cards.map((card, i) => (
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
								className="flex flex-col items-center mt-4 sm:mt-2 gap-2 sm:gap-5 w-full sm:w-[40%]"
							>
								<div className="flex flex-col items-center gap-1 sm:gap-2">
									<p className="font-display font-semibold text-base xs:text-lg md:text-2xl text-text-primary dark:text-text text-center">
										{card.tag}
									</p>
									<div className="w-24 h-0.5 bg-primary" />
								</div>

								<div className="w-full bg-dark-elevated dark:bg-dark-surface border border-transparent dark:border-text-secondary/30 rounded-4xl flex items-center justify-center py-8 sm:py-12 px-4 xs:px-6">
									<p className="font-display font-bold text-xl xs:text-2xl md:text-3xl text-center">
										<span className="text-primary">{card.highlight}</span>
										<span className="text-text">{card.rest}</span>
									</p>
								</div>
							</motion.div>
						))}
					</div>

					<div className="flex justify-center">
						<button
							type="button"
							onClick={modal.open}
							className={buttonClass({
								variant: "ghost-primary",
								size: "md",
								className:
									"sm:px-8 sm:text-lg sm:h-[50px] dark:shadow-orange-btn-soft w-fit sm:w-auto",
							})}
						>
							{sponsorship.seeCta}
						</button>
					</div>
				</div>
			</motion.section>

			<SponsorshipModal
				isOpen={modal.isOpen}
				form={modal.form}
				status={modal.status}
				errorMessage={modal.errorMessage}
				onClose={modal.close}
				onSetField={modal.setField}
				onSubmit={modal.handleSubmit}
			/>
		</>
	);
}
