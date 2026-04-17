"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { Article } from "@/lib/articles";

interface ArticleCardProps {
	article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
	return (
		<Link
			href={`/ressources/${article.slug}`}
			className="group relative flex flex-col bg-background-element dark:bg-dark-surface border dark:border-text-secondary dark:shadow-[0_4px_30px_0_rgba(255,255,255,0.10)] rounded-4xl shadow-card overflow-hidden cursor-pointer"
		>
			{/* Cover image */}
			<div className="relative h-[110px] overflow-hidden rounded-t-4xl shrink-0">
				<Image
					src={article.image}
					alt={article.title}
					fill
					className="object-cover"
				/>
				{/* Category badge */}
				<span className="absolute top-3 right-4 bg-primary-tags text-primary font-display font-bold text-base rounded-full px-4 py-1">
					{article.category}
				</span>
			</div>

			{/* Content */}
			<div className="flex flex-col gap-3 p-5 flex-1">
				<h3 className="font-display font-bold text-lg sm:text-xl leading-snug text-text-heading dark:text-text line-clamp-3">
					{article.title}
				</h3>
				<div className="flex items-center gap-2 text-text-heading dark:text-text-tertiary">
					<Calendar size={16} className="shrink-0" />
					<span className="font-display font-normal text-sm sm:text-base">
						Publié le {article.date}
					</span>
				</div>
				<div className="flex items-center gap-2 text-text-heading dark:text-text-tertiary">
					<Clock size={16} className="shrink-0" />
					<span className="font-display font-normal text-sm sm:text-base">
						Temps de lecture : {article.readingTime}
					</span>
				</div>
			</div>

			{/* Hover: dark overlay */}
			<div className="absolute inset-0 bg-black/20 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 rounded-4xl pointer-events-none" />
			{/* Hover slide-up CTA */}
			<div className="absolute -bottom-px left-0 right-0 translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300 bg-primary rounded-b-4xl py-4 flex items-center justify-center gap-2">
				<span className="font-display font-bold text-lg text-text">
					Consulter
				</span>
				<ArrowRight size={18} className="text-text" />
			</div>
		</Link>
	);
}
