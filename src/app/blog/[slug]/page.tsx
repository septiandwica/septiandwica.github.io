import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, markdownToHtml } from "../../../lib/api";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post({ params }: Params) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <article className="w-full max-w-3xl mx-auto px-6 pt-16 pb-24 flex-1">
      <Link href="/blog" className="text-sm font-medium text-gray-400 hover:text-black transition-colors mb-8 inline-block">
        ← Back to Blog
      </Link>
      
      <header className="mb-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">{post.title}</h1>
        <time className="text-gray-400 font-mono text-sm">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </header>

      <div 
        className="prose prose-lg prose-p:text-gray-600 prose-headings:font-bold prose-a:text-black prose-a:border-b prose-a:border-black prose-a:no-underline hover:prose-a:text-gray-600 hover:prose-a:border-gray-600 prose-a:transition-colors max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | tyann.`,
    description: post.excerpt,
  };
}
