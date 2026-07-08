import Link from "next/link";
import { getAllPosts } from "../../lib/api";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-16 pb-24 flex-1">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
      <p className="text-gray-500 mb-16">Thoughts, tutorials, and insights about software engineering.</p>

      <div className="flex flex-col gap-10">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block border-t border-gray-100 pt-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <h2 className="text-xl font-semibold group-hover:underline decoration-2 underline-offset-4">
                  {post.title}
                </h2>
                <time className="text-sm text-gray-400 font-mono">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <p className="text-gray-600 leading-relaxed">
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
