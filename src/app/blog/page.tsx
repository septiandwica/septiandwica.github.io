import { getAllPosts } from "@/lib/api";
import BlogContent from "@/components/blog/BlogContent";

export default function Blog() {
  const posts = getAllPosts();
  return <BlogContent posts={posts} />;
}
