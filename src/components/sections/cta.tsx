"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/context/locale-context";

export function Cta() {
	const { t } = useLocale();
	const { homeCta } = t;

	return (
		<section className="section-padding py-12 md:py-16 lg:py-20">
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="max-w-4xl mx-auto text-center flex flex-col items-center gap-3"
			>
				<h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary dark:text-text">
					{homeCta.title}{" "}
					<span className="text-primary">{homeCta.titleHighlight}</span>{" "}
					{homeCta.title2}
				</h2>

				<p className="font-display font-semibold text-base sm:text-xl lg:text-2xl/8 text-text-secondary dark:text-text-tertiary max-w-3xl">
					{homeCta.subtitle}
				</p>

				<div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 w-fit sm:w-auto">
					<Link
						href="/phone"
						className="inline-flex items-center justify-center gap-2.5 bg-primary shadow-orange-btn text-text font-display font-bold text-base sm:text-lg rounded-xl h-[46px] sm:h-[52px] px-5 sm:px-7 hover:bg-primary/90 active:bg-primary/80 transition-colors whitespace-nowrap"
					>
						{homeCta.ctaPhone}
						<ArrowRight size={18} strokeWidth={2.5} />
					</Link>
					<Link
						href="/messages"
						className="inline-flex items-center justify-center gap-2.5 bg-ori-message shadow-blue-btn text-text font-display font-bold text-base sm:text-lg rounded-xl h-[46px] sm:h-[52px] px-5 sm:px-7 hover:bg-ori-message/90 active:bg-ori-message/80 transition-colors whitespace-nowrap"
					>
						{homeCta.ctaMessages}
						<ArrowRight size={18} strokeWidth={2.5} />
					</Link>
				</div>

				<p className="font-sans font-normal text-sm text-text-secondary dark:text-text-tertiary mt-3">
					{homeCta.subtitleFooter}
				</p>
			</motion.div>
		</section>
	);
}
