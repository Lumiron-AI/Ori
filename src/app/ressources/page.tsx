"use client";

import { useState } from "react";
import { BigArticleCard } from "@/components/ui/big-article-card";
import { getAllArticles } from "@/lib/articles";

const CATEGORIES = [
	"Tout voir",
	"Tech",
	"Réformes légales",
	"Entrepreneuriat",
	"Podcast",
];

const ALL_ARTICLES = getAllArticles();

export default function RessourcesPage() {
	const [activeCategory, setActiveCategory] = useState("Tout voir");

	const filtered =
		activeCategory === "Tout voir"
			? ALL_ARTICLES
			: ALL_ARTICLES.filter((a) => a.category === activeCategory);

	return (
		<main className="bg-background dark:bg-dark-bg min-h-screen">
			<div className="max-w-9xl mx-auto px-5 md:px-10 lg:pt-24 pb-20 lg:pb-24">
				{/* Page heading */}
				<h1 className="font-display font-bold text-6xl text-text-heading dark:text-text leading-[80px]">
					Ressources
				</h1>

				{/* Filter tabs */}
				<div className="flex flex-wrap gap-2 mt-7 mb-8">
					{CATEGORIES.map((cat) => (
						<button
							key={cat}
							onClick={() => setActiveCategory(cat)}
							className={`font-display font-bold text-lg rounded-full px-6 py-3 transition-colors ${
								activeCategory === cat
									? "bg-primary/10 text-primary"
									: "text-text-heading dark:text-text hover:bg-background-secondary dark:hover:bg-dark-elevated"
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Card grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{filtered.map((article) => (
						<BigArticleCard key={article.slug} article={article} />
					))}
				</div>

				{filtered.length === 0 && (
					<p className="font-display font-normal text-lg text-text-secondary dark:text-text-tertiary text-center py-20">
						Aucun article dans cette catégorie pour le moment.
					</p>
				)}
			</div>
		</main>
	);
}
