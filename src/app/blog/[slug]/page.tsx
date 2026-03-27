import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { mdxComponents } from '@/lib/mdx-components';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 section-padding">
      <article className="max-w-3xl mx-auto">
        <p className="font-sans font-normal text-sm text-text-tertiary mb-3">
          {new Date(post.date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <h1 className="font-display font-bold text-5xl text-text-primary mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="font-sans font-normal text-lg text-text-secondary mb-10 pb-10 border-b border-background-secondary">
          {post.description}
        </p>
        <div className="prose-ori">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
