"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderMessagesProps {
	label: string;
	title: string;
	subtitle?: string;
	className?: string;
	subtitleClassName?: string;
	titleClassName?: string;
}

export function SectionHeaderMessages({
	label,
	title,
	subtitle,
	className,
	subtitleClassName,
	titleClassName,
}: SectionHeaderMessagesProps) {
	return (
		<div className={cn("mb-8 sm:mb-12", className)}>
			<div className="flex items-center gap-1 mb-3 sm:mb-4">
				<span className="font-display font-bold text-base sm:text-xl text-ori-message">
					{label}
				</span>
				<ChevronRight size={18} className="text-ori-message" strokeWidth={2.5} />
			</div>

			<h2
				className={cn(
					"font-display font-bold text-3xl sm:text-4xl text-text-primary dark:text-text leading-tight mb-2 sm:mb-3",
					titleClassName,
				)}
			>
				{title}
			</h2>

			{subtitle && (
				<p
					className={cn(
						"font-display font-semibold text-base sm:text-xl lg:text-2xl text-text-primary dark:text-text-tertiary",
						subtitleClassName,
					)}
				>
					{subtitle}
				</p>
			)}
		</div>
	);
}
