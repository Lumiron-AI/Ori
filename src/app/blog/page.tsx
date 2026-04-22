"use client";

import { useState } from "react";
import { BigArticleCard } from "@/components/ui/big-article-card";
import { getAllArticles } from "@/lib/articles";
import { useLocale } from "@/context/locale-context";

export default function RessourcesPage() {
	const { t, locale } = useLocale();
	const r = t.blog;

	const ALL_ARTICLES = getAllArticles(locale);
	const CATEGORIES = [
		{ key: "all", label: r.seeAll },
		{ key: "Tech", label: "Tech" },
	];

	const [activeCategory, setActiveCategory] = useState<string>("all");

	const filtered =
		activeCategory === "all"
			? ALL_ARTICLES
			: ALL_ARTICLES.filter((a) => a.category === activeCategory);

	return (
		<main className="bg-background dark:bg-dark-bg min-h-screen">
			<div className="max-w-9xl mx-auto px-5 md:px-10 pt-24 lg:pt-32 pb-12 lg:pb-24">
				{/* Page heading */}
				<h1 className="font-display font-bold text-4xl text-text-heading dark:text-text">
					{r.title}
				</h1>

				<div className="flex flex-wrap gap-2 mt-4 mb-8">
					{/* {CATEGORIES.map((cat) => (
						<button
							key={cat.key}
							onClick={() => setActiveCategory(cat.key)}
							className={`font-display font-bold text-sm rounded-full px-4 py-2 transition-colors ${
								activeCategory === cat.key
									? "bg-primary/10 text-primary"
									: "text-text-heading dark:text-text hover:bg-background-secondary dark:hover:bg-dark-elevated"
							}`}
						>
							{cat.label}
						</button>
					))} */}
				</div>
				{/* Card grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{filtered.map((article) => (
						<BigArticleCard
							key={article.slug}
							article={article}
							publishedOn={r.publishedOn}
							readingTime={r.readingTime}
						/>
					))}
				</div>
				{filtered.length === 0 && (
					<p className="font-display font-normal text-lg text-text-secondary dark:text-text-tertiary text-center py-20">
						{r.empty}
					</p>
				)}
			</div>
		</main>
	);
}
