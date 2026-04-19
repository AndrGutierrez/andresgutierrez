import React from 'react';
import { PostPreviewType } from "@/types";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import Tag from '@/components/ui/Tag';

export default function PostItem({ post }: { post: PostPreviewType }) {
  const dateStr = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/[0.08]"
      aria-label={`Read article: ${post.title}`}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Post Image / Thumbnail Placeholder */}
      <div className="aspect-[16/7] w-full rounded-lg overflow-hidden bg-white/5 border border-white/10">
        {post.thumbnailUrl ? (
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/posts/${post.slug}/${post.thumbnailUrl}`}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/10 uppercase tracking-widest font-archivo">
            Thumbnail
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {/* Meta Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-white/60">
            <Calendar className="w-4 h-4 text-brand" />
            <span className="text-sm font-space-grotesk">{dateStr}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Clock className="w-4 h-4 text-brand" />
            <span className="text-sm font-space-grotesk">5 min read</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-archivo text-white leading-tight group-hover:text-brand transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm font-space-grotesk text-white/60 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags?.length ? (
            post.tags.map((tag) => (
              <Tag key={tag} variant="outline">
                {tag}
              </Tag>
            ))
          ) : (
            <Tag variant="ghost">Personal</Tag>
          )}
        </div>

        {/* Read Post Link */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-base font-space-grotesk text-white border-b border-white group-hover:text-brand group-hover:border-brand transition-all">
            Read post
          </span>
          <ArrowRight className="w-4 h-4 text-brand transform -rotate-45 group-hover:rotate-0 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
