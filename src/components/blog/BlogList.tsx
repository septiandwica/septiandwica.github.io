"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Post } from "@/lib/api";

export default function BlogList({ initialPosts }: { initialPosts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique categories and tags
  const categories = useMemo(() => {
    const cats = new Set(initialPosts.map(p => p.category));
    return ["All", ...Array.from(cats)];
  }, [initialPosts]);

  const tags = useMemo(() => {
    const tgs = new Set<string>();
    initialPosts.forEach(p => p.tags?.forEach(t => tgs.add(t)));
    return Array.from(tgs);
  }, [initialPosts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesTag = !selectedTag || (post.tags && post.tags.includes(selectedTag));
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [initialPosts, searchQuery, selectedCategory, selectedTag]);

  // Featured post logic (only show if no active filters are applied, or just highlight the first featured one in the filtered list)
  const isFiltering = searchQuery !== "" || selectedCategory !== "All" || selectedTag !== null;
  const featuredPost = !isFiltering ? initialPosts.find(p => p.featured) : null;
  
  // The regular list excludes the featured post if we are showing it at the top
  const displayPosts = featuredPost 
    ? filteredPosts.filter(p => p.slug !== featuredPost.slug)
    : filteredPosts;

  return (
    <div className="w-full">
      {/* Search and Filters */}
      <div className="mb-12 space-y-6">
        {/* Search Bar */}
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

        {/* Categories */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSearchQuery(""); // clear search on category change
                }}
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

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-gray-800 text-white"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Featured Post */}
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
              <time className="font-mono text-sm text-gray-400 my-auto">
                {new Date(featuredPost.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
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
                  <span key={tag} className="text-xs font-medium text-gray-400">#{tag}</span>
                ))}
              </div>
            )}
          </Link>
        </div>
      )}

      {/* Post List */}
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
                <time className="font-mono text-sm text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="mb-4 leading-relaxed text-gray-600">{post.excerpt}</p>
              
              <div className="flex items-center gap-4 text-xs font-medium">
                <span className="text-gray-900">{post.category}</span>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span className="text-gray-300">•</span>
                    <div className="flex flex-wrap gap-2 text-gray-400">
                      {post.tags.map(tag => (
                        <span key={tag}>#{tag}</span>
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
