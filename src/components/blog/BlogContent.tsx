"use client";

import React, { useState } from "react";
import { PostPreviewType } from "@/types";
import BlogFilters from "@/components/blog/BlogFilters";
import PostItem from "@/components/blog/PostItem";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { ChevronDown } from "lucide-react";

interface BlogContentProps {
  initialPosts: PostPreviewType[];
}

export default function BlogContent({ initialPosts }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState("All posts");

  // Currently just showing all posts for any category for visual demo
  // In a real scenario, we would filter based on post tags
  const filteredPosts =
    activeCategory === "All posts"
      ? initialPosts
      : initialPosts.filter((post) =>
          post.tags?.some((tag) => {
            const cat = activeCategory.toLowerCase();
            const t = tag.toLowerCase();
            // Match direct or partial (e.g. "Cloud & AWS" matches "Cloud")
            return t === cat || cat.includes(t) || t.includes(cat);
          }),
        );

  return (
    <div className="container py-8">
      {/* Filters Section */}
      <BlogFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="flex flex-col lg:flex-row gap-12 mt-8">
        {/* Main Posts Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, i) => (
              <PostItem post={post} key={post.id || i} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <BlogSidebar />
      </div>

      {/* Load More Button (Centered outside the layout flexbox) */}
      <div className="flex justify-center mt-20">
        <button className="flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-brand text-brand-950 font-space-grotesk font-semibold text-xl hover:shadow-[0_0_40px_rgba(108,160,148,0.5)] transition-all group scale-100 hover:scale-105 active:scale-95">
          Load more posts
          <div className="w-12 h-12 rounded-full bg-brand-950 flex items-center justify-center group-hover:rotate-90 transition-transform shadow-lg">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    </div>
  );
}
