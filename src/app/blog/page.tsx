import Link from "next/link";
import { getAllPosts } from "../../lib/api";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 pt-16 pb-24">
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
      <p className="mb-16 text-gray-500">Thoughts, tutorials, and insights about software engineering.</p>

      <div className="flex flex-col gap-10">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block border-t border-gray-100 pt-6"
            >
              <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <h2 className="text-xl font-semibold decoration-2 underline-offset-4 group-hover:underline">
                  {post.title}
                </h2>
                <time className="font-mono text-sm text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <p className="leading-relaxed text-gray-600">
                {post.excerpt}
              </p>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 italic">No posts yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
}
