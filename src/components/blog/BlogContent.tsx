'use client';

import React, { useState } from 'react';
import { PostPreviewType } from '@/types';
import BlogFilters from '@/components/blog/BlogFilters';
import PostItem from '@/components/blog/PostItem';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { ChevronDown } from 'lucide-react';

interface BlogContentProps {
  initialPosts: PostPreviewType[];
}

export default function BlogContent({ initialPosts }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState('All posts');

  // Currently just showing all posts for any category for visual demo
  // In a real scenario, we would filter based on post tags
  const filteredPosts = activeCategory === 'All posts' 
    ? initialPosts 
    : initialPosts.filter(post => 
        post.tags?.some(tag => {
          const cat = activeCategory.toLowerCase();
          const t = tag.toLowerCase();
          // Match direct or partial (e.g. "Cloud & AWS" matches "Cloud")
          return t === cat || cat.includes(t) || t.includes(cat);
        })
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

          {/* Load More Button */}
          <div className="flex justify-center mt-16">
            <button className="flex items-center gap-4 px-8 py-4 rounded-full bg-brand text-brand-950 font-space-grotesk font-medium text-lg hover:shadow-[0_0_30px_rgba(108,160,148,0.4)] transition-all group">
              Load more posts
              <div className="w-10 h-10 rounded-full bg-brand-950 flex items-center justify-center group-hover:rotate-90 transition-transform">
                <ChevronDown className="w-5 h-5 text-brand" />
              </div>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <BlogSidebar />
      </div>
    </div>
  );
}
