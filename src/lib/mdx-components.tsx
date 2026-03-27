import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="font-display font-bold text-4xl text-text-primary mt-10 mb-4" {...props} />
  ),
  h2: (props) => (
    <h2 className="font-display font-bold text-3xl text-text-primary mt-8 mb-3" {...props} />
  ),
  h3: (props) => (
    <h3 className="font-display font-medium text-2xl text-text-primary mt-6 mb-2" {...props} />
  ),
  p: (props) => (
    <p className="font-sans font-normal text-base text-text-primary leading-relaxed mb-4" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside mb-4 space-y-1 text-text-primary" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-4 space-y-1 text-text-primary" {...props} />
  ),
  li: (props) => (
    <li className="font-sans font-normal text-base text-text-primary" {...props} />
  ),
  a: ({ href = '#', ...props }) => (
    <Link href={href} className="text-primary underline hover:text-primary/80 transition-colors" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-primary pl-4 my-6 italic text-text-secondary"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-background-secondary rounded px-1.5 py-0.5 text-sm font-mono text-text-primary"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-accent text-text rounded-2xl p-6 overflow-x-auto my-6 text-sm font-mono"
      {...props}
    />
  ),
  hr: () => <hr className="border-background-secondary my-8" />,
};
