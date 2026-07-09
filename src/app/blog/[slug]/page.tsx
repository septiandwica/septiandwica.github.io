import { notFound } from "next/navigation";
import GiscusWrapper from "@/components/ui/GiscusWrapper";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { DynamicRouteParams } from "@/types/route";
import MarkdownViewer from "@/components/ui/MarkdownViewer";
import BackButton from "@/components/ui/BackButton";
import FormattedDate from "@/components/ui/FormattedDate";
import Tag from "@/components/ui/Tag";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: DynamicRouteParams<{ slug: string }>) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | tyann.`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: DynamicRouteParams<{ slug: string }>) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-6 pt-16 pb-24">
      <div className="mb-12">
        <BackButton href="/blog" text="Back to blog" />
      </div>

      <header className="mb-12">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
            {post.category}
          </span>
          <FormattedDate date={post.date} />
        </div>
        <h1 className="mb-4 text-4xl leading-tight font-bold tracking-tight md:text-5xl">{post.title}</h1>
      </header>

      <MarkdownViewer content={post.content} className="mb-24" />

      {post.tags && post.tags.length > 0 && (
        <div className="mb-12 flex flex-wrap gap-2 border-t border-gray-100 pt-8 items-center">
          <span className="text-sm font-medium text-gray-500 mr-2">Tags:</span>
          {post.tags.map(tag => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      )}

      <div className="border-t border-gray-100 pt-12 mt-12">
        <GiscusWrapper />
      </div>
    </article>
  );
}
