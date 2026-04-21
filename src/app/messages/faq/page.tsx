"use client";

import { useState } from "react";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
	ChevronDown,
	ArrowLeft,
	Rocket,
	Cpu,
	CalendarCheck,
	SlidersHorizontal,
	Zap,
	ShieldCheck,
} from "lucide-react";
import { useLocale } from "@/context/locale-context";

interface FAQItem {
	question: string;
	answer: string;
}

interface FAQGroup {
	theme: string;
	icon: React.ReactNode;
	items: FAQItem[];
}

const ICONS = [
	<Rocket key="rocket" size={15} />,
	<Cpu key="cpu" size={15} />,
	<CalendarCheck key="calendar" size={15} />,
	<SlidersHorizontal key="sliders" size={15} />,
	<Zap key="zap" size={15} />,
	<ShieldCheck key="shield" size={15} />,
];

function AccordionItem({
	item,
	index,
	globalIndex,
	open,
	onToggle,
}: {
	item: FAQItem;
	index: number;
	globalIndex: number;
	open: number | null;
	onToggle: (i: number) => void;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: index * 0.08,
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1],
			}}
		>
			<div className="border-b border-background-secondary dark:border-dark-elevated">
				<button
					onClick={() => onToggle(globalIndex)}
					className="w-full flex items-center gap-3 xs:gap-4 md:gap-6 text-left group min-h-[72px] xs:min-h-[80px] md:min-h-[82px]"
				>
					<div className="w-1.5 h-[24px] xs:h-[28px] md:h-[33px] rounded-sm shrink-0 bg-ori-message" />
					<span className="flex-1 font-display font-semibold text-sm xs:text-base md:text-xl lg:text-2xl text-text-primary dark:text-text">
						{item.question}
					</span>
					<ChevronDown
						size={22}
						strokeWidth={2}
						className={`shrink-0 text-text-secondary dark:text-text transition-transform ${
							open === globalIndex ? "rotate-180" : ""
						}`}
					/>
				</button>

				<AnimatePresence initial={false}>
					{open === globalIndex && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
							className="overflow-hidden"
						>
							<p className="font-display font-normal text-sm md:text-base text-text-primary dark:text-text-tertiary pb-5 md:pb-8 pl-4 md:pl-6 leading-relaxed">
								{item.answer}
							</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}

export default function MessagesFAQPage() {
	const { t } = useLocale();
	const page = t.messagesFaqPage;

	const faqGroups: FAQGroup[] = page.groups.map((g, i) => ({
		theme: g.theme,
		icon: ICONS[i] ?? <Rocket size={15} />,
		items: (g.items as unknown) as FAQItem[],
	}));

	const ALL_THEMES = page.seeAll;
	const [open, setOpen] = useState<number | null>(null);
	const [activeTheme, setActiveTheme] = useState<string>(ALL_THEMES);

	const tabs = [ALL_THEMES, ...faqGroups.map((g) => g.theme)];
	const visibleGroups =
		activeTheme === ALL_THEMES
			? faqGroups
			: faqGroups.filter((g) => g.theme === activeTheme);

	let globalIndex = 0;

	return (
		<main className="bg-background dark:bg-dark-bg min-h-screen">
			<div className="max-w-4xl mx-auto px-5 md:px-10 pt-24 lg:pt-32 pb-16 lg:pb-24">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<Link
						href="/messages"
						className="flex items-center gap-2 font-display font-normal text-lg text-text-heading dark:text-text hover:text-ori-message dark:hover:text-ori-message transition-colors mb-6"
					>
						<ArrowLeft size={20} />
						{page.back}
					</Link>
					<h1 className="font-display font-bold text-5xl text-text-primary dark:text-text mt-3">
						{page.title}
					</h1>
					<p className="font-sans font-normal text-lg text-text-secondary dark:text-text-tertiary mt-3">
						{page.subtitle}
					</p>
				</motion.div>

				{/* Filter — select on mobile, tabs on desktop */}
				<div className="mt-8">
					{/* Mobile dropdown */}
					<div className="md:hidden">
						<Select
							value={activeTheme}
							onValueChange={(v) => {
								setActiveTheme(v);
								setOpen(null);
							}}
						>
							<SelectTrigger className="w-full focus:ring-ori-message">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{tabs.map((tab) => {
									const group = faqGroups.find((g) => g.theme === tab);
									return (
										<SelectItem key={tab} value={tab}>
											<span className="flex items-center gap-2">
												{group && (
													<span className="text-text-secondary dark:text-text-tertiary">
														{group.icon}
													</span>
												)}
												{tab}
											</span>
										</SelectItem>
									);
								})}
							</SelectContent>
						</Select>
					</div>

					{/* Desktop tabs */}
					<div className="hidden md:flex flex-wrap gap-2">
						{tabs.map((tab) => {
							const group = faqGroups.find((g) => g.theme === tab);
							const isActive = activeTheme === tab;
							return (
								<button
									key={tab}
									onClick={() => {
										setActiveTheme(tab);
										setOpen(null);
									}}
									className={`flex items-center gap-1.5 font-display font-bold text-sm rounded-full px-4 py-2 transition-colors ${
										isActive
											? "bg-ori-message/10 text-ori-message"
											: "text-text-heading dark:text-text hover:bg-background-secondary dark:hover:bg-dark-elevated"
									}`}
								>
									{group && (
										<span
											className={
												isActive
													? "text-ori-message"
													: "text-text-secondary dark:text-text-tertiary"
											}
										>
											{group.icon}
										</span>
									)}
									{tab}
								</button>
							);
						})}
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-12">
					{visibleGroups.map((group) => {
						const startIndex = globalIndex;
						globalIndex += group.items.length;

						return (
							<div key={group.theme}>
								<h2 className="flex items-center gap-3 font-display font-bold text-3xl text-text-heading dark:text-text mb-2">
									<span className="text-text-heading dark:text-text [&>svg]:size-[18px]">
										{group.icon}
									</span>
									{group.theme}
								</h2>
								<div>
									{group.items.map((item, i) => (
										<AccordionItem
											key={i}
											item={item}
											index={i}
											globalIndex={startIndex + i}
											open={open}
											onToggle={(idx) => setOpen(open === idx ? null : idx)}
										/>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}
