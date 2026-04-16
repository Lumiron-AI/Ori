"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { Article } from "@/lib/articles";

interface BigArticleCardProps {
	article: Article;
}

export function BigArticleCard({ article }: BigArticleCardProps) {
	return (
		<Link
			href={`/ressources/${article.slug}`}
			className="group relative flex flex-col bg-background-element dark:bg-dark-elevated rounded-4xl shadow-card overflow-hidden cursor-pointer"
		>
			{/* Cover image */}
			<div className="relative h-[164px] overflow-hidden rounded-t-4xl shrink-0">
				<Image
					src={article.image}
					alt={article.title}
					fill
					className="object-cover"
				/>
				{/* Category badge */}
				<span className="absolute top-3 right-4 bg-primary/10 text-primary font-display font-bold text-lg rounded-full px-3 py-1">
					{article.category}
				</span>
			</div>

			{/* Content */}
			<div className="flex flex-col gap-3 p-5 flex-1">
				<h3 className="font-display font-bold text-xl leading-snug text-text-heading dark:text-text line-clamp-3">
					{article.title}
				</h3>
				<div className="flex items-center gap-2 text-text-heading dark:text-text-tertiary">
					<Calendar size={16} className="shrink-0" />
					<span className="font-display font-normal text-base">
						Publié le {article.date}
					</span>
				</div>
				<div className="flex items-center gap-2 text-text-heading dark:text-text-tertiary">
					<Clock size={16} className="shrink-0" />
					<span className="font-display font-normal text-base">
						Temps de lecture : {article.readingTime}
					</span>
				</div>
			</div>

			{/* Hover: dark overlay */}
			<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-4xl pointer-events-none" />
			{/* Hover: circular CTA button */}
			<div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<ArrowRight size={20} className="text-text" />
			</div>
		</Link>
	);
}
