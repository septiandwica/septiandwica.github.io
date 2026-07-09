import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { DynamicRouteParams } from "@/types/route";
import BlogPostContent from "@/components/blog/BlogPostContent";

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

  return <BlogPostContent post={post} />;
}
