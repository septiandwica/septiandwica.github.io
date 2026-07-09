import { getAllPosts } from "../../lib/api";
import BlogList from "../../components/blog/BlogList";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 pt-16 pb-24">
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
      <p className="mb-12 text-gray-500">Thoughts, tutorials, and insights about software engineering.</p>
      
      <BlogList initialPosts={posts} />
    </div>
  );
}
