"use client";

import { motion } from "framer-motion";

import { SectionHeaderMessages } from "@/components/ui/section-header-messages";
import { buttonClass } from "@/components/ui/button";
import { SponsorshipModal } from "@/components/ui/sponsorship-modal";
import { useSectionFade } from "@/hooks/use-section-fade";
import { useSponsorshipModal } from "@/hooks/use-sponsorship-modal";

const CARDS = [
	{
		tag: "POUR LE RESTAURANT PARRAIN",
		highlight: "200 discussions",
		rest: " offertes",
	},
	{
		tag: "POUR LE RESTAURANT RECOMMANDÉ",
		highlight: "1 mois",
		rest: " offert",
	},
];

export function OriMessagesSponsorshipSection() {
	const { ref, opacity } = useSectionFade();
	const modal = useSponsorshipModal();

	return (
		<>
			<motion.section
				id="sponsorship"
				ref={ref}
				style={{ opacity }}
				className="bg-background dark:bg-dark-bg py-16 sm:py-20 px-5"
			>
				<div className="max-w-8xl lg:max-w-9xl mx-auto">
					<SectionHeaderMessages
						label="PARRAINAGE"
						title="Parrainez vos confrères."
						subtitle="Recommandez Ori à vos confrères et profitez d'avantages exclusifs sur votre abonnement."
						subtitleClassName="max-w-8xl"
					/>

					<div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
						{CARDS.map((card, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.5 }}
								className="flex flex-col items-center gap-5 w-full sm:w-[45%]"
							>
								<div className="flex flex-col items-center gap-2">
									<p className="font-display font-semibold text-lg sm:text-2xl text-text-primary dark:text-text text-center">
										{card.tag}
									</p>
									<div className="w-24 h-0.5 bg-ori-message" />
								</div>

								<div className="w-full bg-dark-elevated dark:bg-dark-surface border border-transparent dark:border-text-secondary/30 rounded-4xl flex items-center justify-center py-10 sm:py-14 px-6">
									<p className="font-display font-bold text-2xl sm:text-3xl text-center">
										<span className="text-ori-message">{card.highlight}</span>
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
								size: "lg",
								className: "shadow-blue-btn border-ori-message text-ori-message bg-ori-message/10 hover:bg-ori-message/20 w-full sm:w-auto",
							})}
						>
							Voir les conditions
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
			/>
		</>
	);
}
