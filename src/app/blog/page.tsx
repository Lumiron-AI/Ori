import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Conseils, actualités et ressources pour automatiser votre service client.",
};

export default async function BlogPage() {
	const posts = await getAllPosts();

	return (
		<div className="min-h-screen bg-background pt-24 pb-20 section-padding">
			<div className="max-w-4xl mx-auto">
				<h1 className="font-display font-bold text-5xl text-text-primary mb-4">
					Blog
				</h1>
				<p className="font-sans font-normal text-lg text-text-secondary mb-12">
					Conseils, actualités et ressources pour automatiser votre service
					client.
				</p>

				<div className="flex flex-col gap-8">
					{posts.map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="group bg-background-secondary rounded-2xl p-6 hover:shadow-md transition-shadow"
						>
							<p className="font-sans font-normal text-sm text-text-tertiary mb-2">
								{new Date(post.date).toLocaleDateString("fr-FR", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</p>
							<h2 className="font-display font-bold text-2xl text-text-primary mb-3 group-hover:text-primary transition-colors">
								{post.title}
							</h2>
							<p className="font-sans font-normal text-base text-text-primary">
								{post.description}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
