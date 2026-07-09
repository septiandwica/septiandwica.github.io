import Link from "next/link";
import { notFound } from "next/navigation";
import GiscusWrapper from "@/components/GiscusWrapper";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { markdownToHtml } from "@/utils/markdown";
import { formatDate } from "@/utils/date";

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
    <article className="mx-auto w-full max-w-3xl flex-1 px-6 pt-16 pb-24">
      <Link href="/blog" className="mb-8 inline-block text-sm font-medium text-gray-400 transition-colors hover:text-black">
        ← Back to Blog
      </Link>
      
      <header className="mb-14">
        <div className="mb-4 flex flex-wrap gap-3">
          <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
            {post.category}
          </span>
          {post.tags && post.tags.map(tag => (
            <span key={tag} className="text-xs font-medium text-gray-400 my-auto">#{tag}</span>
          ))}
        </div>
        <h1 className="mb-4 text-4xl leading-tight font-bold tracking-tight md:text-5xl">{post.title}</h1>
        <time className="font-mono text-sm text-gray-400">
          {formatDate(post.date)}
        </time>
      </header>

      <div 
        className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-600 prose-a:border-b prose-a:border-black prose-a:text-black prose-a:no-underline prose-a:transition-colors hover:prose-a:border-gray-600 hover:prose-a:text-gray-600 mb-24"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      {/* Discussion Section */}
      <div className="mt-16 border-t border-gray-100 pt-16">
        <h3 className="mb-8 text-2xl font-bold tracking-tight">Discussion</h3>
        <GiscusWrapper />
      </div>
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
