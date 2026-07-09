"use client";

import Link from "next/link";
import { BlogListProps } from "@/types/components";
import { useBlogFilters } from "@/hooks/useBlogFilters";
import FormattedDate from "@/components/ui/FormattedDate";
import Tag from "@/components/ui/Tag";

export default function BlogList({ initialPosts }: BlogListProps) {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    handleCategoryChange,
    selectedTag,
    handleTagToggle,
    categories,
    tags,
    isFiltering,
    featuredPost,
    displayPosts
  } = useBlogFilters(initialPosts);

  return (
    <div className="w-full">

      <div className="mb-12 space-y-6">

        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 pl-12 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-1 focus:ring-black"
          />
          <svg
            className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>


        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}


        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-gray-800 text-white"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
              >
                <Tag name={tag} className={selectedTag === tag ? "text-white" : "text-gray-500"} />
              </button>
            ))}
          </div>
        )}
      </div>


      {featuredPost && (
        <div className="mb-12">
          <h2 className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">Featured</h2>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block rounded-2xl border border-gray-100 bg-gray-50/50 p-6 sm:p-8 transition-colors hover:bg-gray-50"
          >
            <div className="mb-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                {featuredPost.category}
              </span>
              <FormattedDate date={featuredPost.date} className="my-auto" />
            </div>
            <h3 className="mb-3 text-2xl font-bold decoration-2 underline-offset-4 group-hover:underline">
              {featuredPost.title}
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              {featuredPost.excerpt}
            </p>
            {featuredPost.tags && featuredPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map(tag => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>
            )}
          </Link>
        </div>
      )}


      <div className="flex flex-col gap-10">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          {isFiltering ? "Search Results" : "All Articles"}
        </h2>
        {displayPosts.length > 0 ? (
          displayPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-t border-gray-100 pt-6"
            >
              <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold decoration-2 underline-offset-4 group-hover:underline">
                    {post.title}
                  </h2>
                </div>
                <FormattedDate date={post.date} />
              </div>
              <p className="mb-4 leading-relaxed text-gray-600">{post.excerpt}</p>
              
              <div className="flex items-center gap-4 text-xs font-medium">
                <span className="text-gray-900">{post.category}</span>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span className="text-gray-300">•</span>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <Tag key={tag} name={tag} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 italic">No posts found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}
