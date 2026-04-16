"use client";

import { motion } from "framer-motion";

import { SectionHeaderMessages } from "@/components/ui/section-header-messages";
import { buttonClass } from "@/components/ui/button";
import { SponsorshipModal } from "@/components/ui/sponsorship-modal";
import { useSectionFade } from "@/hooks/use-section-fade";
import { useSponsorshipModal } from "@/hooks/use-sponsorship-modal";
import { useLocale } from "@/context/locale-context";

export function OriMessagesSponsorshipSection() {
	const { ref, opacity } = useSectionFade();
	const modal = useSponsorshipModal();
	const { t } = useLocale();
	const d = t.messagesSponsorship;

	return (
		<>
			<motion.section
				id="sponsorship"
				ref={ref}
				style={{ opacity }}
				className="bg-background dark:bg-dark-bg py-12 sm:py-20 px-5"
			>
				<div className="max-w-8xl lg:max-w-9xl mx-auto">
					<SectionHeaderMessages
						label={d.label}
						title={d.title}
						subtitle={d.subtitle}
						subtitleClassName="max-w-8xl"
					/>

					<div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
						{d.cards.map((card, i) => (
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
								className="flex flex-col items-center gap-5 w-full sm:w-[40%]"
							>
								<div className="flex flex-col items-center gap-2">
									<p className="font-display font-semibold text-lg sm:text-2xl text-text-primary dark:text-text text-center">
										{card.tag}
									</p>
									<div className="w-24 h-0.5 bg-ori-message" />
								</div>

								<div className="w-full bg-dark-elevated dark:bg-dark-surface border border-transparent dark:border-text-secondary/30 rounded-4xl flex items-center justify-center py-10 sm:py-12 px-6">
									<p className="font-display font-bold text-2xl sm:text-3xl text-center">
										<span className="text-[#89A3D7]">{card.highlight}</span>
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
									"sm:px-8 sm:text-lg sm:h-[50px] dark:shadow-blue-btn-soft border-ori-message text-ori-message bg-ori-message/10 hover:bg-ori-message/20 w-fit sm:w-auto",
							})}
						>
							{d.seeConditions}
						</button>
					</div>
				</div>
			</motion.section>

			<SponsorshipModal
				isOpen={modal.isOpen}
				form={modal.form}
				onClose={modal.close}
				onSetField={modal.setField}
				onSubmit={modal.handleSubmit}
				product="ori-messages"
			/>
		</>
	);
}
