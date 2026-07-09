import { useState, useMemo } from "react";
import { Post } from "@/types/blog";

export function useBlogFilters(initialPosts: Post[]) {
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

  const isFiltering = searchQuery !== "" || selectedCategory !== "All" || selectedTag !== null;
  const featuredPost = !isFiltering ? initialPosts.find(p => p.featured) : null;
  
  const displayPosts = featuredPost 
    ? filteredPosts.filter(p => p.slug !== featuredPost.slug)
    : filteredPosts;

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSearchQuery(""); // clear search on category change
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return {
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
  };
}
