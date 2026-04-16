import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import {
	getAllArticles,
	getArticleBySlug,
	getRelatedArticles,
	type ContentBlock,
} from "@/lib/articles";
import { ArticleCard } from "@/components/ui/article-card";

interface PageProps {
	params: { slug: string };
}

export function generateStaticParams() {
	return getAllArticles().map((a) => ({ slug: a.slug }));
}

function ContentBlockRenderer({
	block,
}: {
	block: ContentBlock;
}) {
	switch (block.type) {
		case "p":
			return (
				<p className="font-sans font-normal text-xl text-text-primary dark:text-text/80 leading-relaxed">
					{block.text}
				</p>
			);
		case "bold":
			return (
				<p className="font-display font-bold text-xl text-text-primary dark:text-text">
					{block.text}
				</p>
			);
		case "ul":
			return (
				<ul className="list-disc ms-8 flex flex-col gap-1">
					{block.items.map((item, i) => (
						<li
							key={i}
							className="font-sans font-normal text-xl text-text-primary dark:text-text/80 leading-relaxed"
						>
							{item}
						</li>
					))}
				</ul>
			);
		case "ol":
			return (
				<ol className="list-decimal ms-8 flex flex-col gap-1">
					{block.items.map((item, i) => (
						<li
							key={i}
							className="font-sans font-normal text-xl text-text-primary dark:text-text/80 leading-relaxed"
						>
							{item}
						</li>
					))}
				</ol>
			);
		case "source":
			return (
				<a
					href={block.text}
					target="_blank"
					rel="noopener noreferrer"
					className="font-sans font-normal text-sm text-primary underline break-all"
				>
					{block.text}
				</a>
			);
	}
}

export default function ArticlePage({ params }: PageProps) {
	const article = getArticleBySlug(params.slug);
	if (!article) notFound();

	const related = getRelatedArticles(params.slug).slice(0, 3);

	return (
		<main className="bg-background dark:bg-dark-bg min-h-screen">
			{/* Article content */}
			<div className="max-w-8xl mx-auto px-5 md:px-10 pt-36 pb-20">
				{/* Breadcrumb + back */}
				<div className="flex items-center gap-6 mb-8">
					<Link
						href="/ressources"
						className="flex items-center gap-2 font-display font-bold text-xl text-text-heading dark:text-text hover:text-primary dark:hover:text-primary transition-colors"
					>
						<ArrowLeft size={20} />
						Retour
					</Link>
					<p className="font-sans font-normal text-lg text-text-secondary dark:text-text-tertiary">
						<Link
							href="/ressources"
							className="hover:text-text-primary dark:hover:text-text transition-colors"
						>
							Ressources
						</Link>
						{" / "}
						Article
					</p>
				</div>

				{/* Hero */}
				<div className="flex flex-col lg:flex-row gap-10 mb-12">
					{/* Hero image */}
					<div className="relative w-full lg:w-[461px] h-[280px] lg:h-[348px] shrink-0 rounded-4xl overflow-hidden">
						<Image
							src={article.image}
							alt={article.title}
							fill
							className="object-cover"
							priority
						/>
					</div>

					{/* Hero metadata */}
					<div className="flex flex-col gap-4 justify-center">
						<h1 className="font-display font-bold text-6xl leading-[1.2] text-text-heading dark:text-text">
							{article.title}
						</h1>
						<div className="flex flex-wrap items-center gap-4 mt-2">
							<div className="flex items-center gap-2 text-text-heading dark:text-text-tertiary">
								<Calendar size={20} className="shrink-0" />
								<span className="font-display font-semibold text-xl">
									Publié le {article.date}
								</span>
							</div>
							<div className="flex items-center gap-2 text-text-heading dark:text-text-tertiary">
								<Clock size={20} className="shrink-0" />
								<span className="font-display font-semibold text-xl">
									Temps de lecture : {article.readingTime}
								</span>
							</div>
						</div>
						<span className="inline-flex w-fit bg-primary/10 text-primary font-display font-bold text-xl rounded-full px-4 py-2">
							{article.category}
						</span>
					</div>
				</div>

				{/* Intro */}
				<div className="flex flex-col gap-4 mb-10">
					{article.intro.split("\n\n").map((para, i) => (
						<p
							key={i}
							className="font-sans font-normal text-xl text-text-primary dark:text-text/80 leading-relaxed"
						>
							{para}
						</p>
					))}
				</div>

				<hr className="border-background-tertiary dark:border-dark-overlay mb-10" />

				{/* Sections */}
				<div className="flex flex-col gap-10">
					{article.sections.map((section, si) => (
						<div key={si} className="flex flex-col gap-4">
							<h2 className="font-display font-bold text-5xl text-text-primary dark:text-text">
								{section.heading}
							</h2>
							<div className="flex flex-col gap-3">
								{section.blocks.map((block, bi) => (
									<ContentBlockRenderer key={bi} block={block} />
								))}
							</div>
						</div>
					))}
				</div>

				{/* Conclusion */}
				<div className="mt-12 bg-background-secondary dark:bg-dark-elevated rounded-4xl p-8 md:p-10 flex flex-col gap-4">
					<h2 className="font-display font-bold text-5xl text-text-primary dark:text-text">
						{article.conclusion.heading}
					</h2>
					<div className="flex flex-col gap-3">
						{article.conclusion.blocks.map((block, bi) => (
							<ContentBlockRenderer key={bi} block={block} />
						))}
					</div>
				</div>
			</div>

			{/* Related articles */}
			{related.length > 0 && (
				<section className="bg-background dark:bg-dark-bg py-16 px-5 md:px-10">
					<div className="max-w-8xl mx-auto">
						<h2 className="font-display font-bold text-5xl text-text-primary dark:text-text mb-8">
							À lire également
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
							{related.map((a) => (
								<ArticleCard key={a.slug} article={a} />
							))}
						</div>
					</div>
				</section>
			)}
		</main>
	);
}
