import React from 'react';
import BackgroundRays from '@/components/ui/BackgroundRays';

export default function Loading() {
  return (
    <main className="bg-bg-main min-h-screen text-white relative overflow-hidden">
      {/* Background Glows and Rays */}
      <BackgroundRays opacity={0.1} />

      {/* Hero Skeleton */}
      <section className="relative pt-32 pb-8">
        <div className="container relative z-10 flex flex-col items-center">
          <div className="h-10 w-40 bg-white/5 border border-white/10 rounded-full mb-8 animate-pulse" />
          <div className="h-16 w-3/4 max-w-2xl bg-white/5 rounded-2xl mb-6 animate-pulse" />
          <div className="h-5 w-1/2 max-w-lg bg-white/5 rounded-xl mb-10 animate-pulse" />
          
          <div className="flex gap-12 border-t border-white/10 pt-10">
            <div className="flex flex-col gap-2">
              <div className="w-16 h-10 bg-white/5 rounded-lg animate-pulse" />
              <div className="w-12 h-4 bg-white/5 rounded animate-pulse" />
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="flex flex-col gap-2">
              <div className="w-16 h-10 bg-white/5 rounded-lg animate-pulse" />
              <div className="w-12 h-4 bg-white/5 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        {/* Filters Skeleton */}
        <div className="w-full flex justify-center py-8">
          <div className="h-[60px] w-full max-w-[600px] bg-white/5 border border-white/10 rounded-full animate-pulse" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-8">
          {/* Main Posts Grid Skeleton */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="group relative flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 animate-pulse">
                  {/* Thumbnail Skeleton */}
                  <div className="aspect-[16/7] w-full rounded-lg bg-white/5 border border-white/10" />
                  
                  <div className="flex flex-col gap-4">
                    {/* Meta Info Skeleton */}
                    <div className="flex gap-6">
                      <div className="h-4 w-24 bg-white/5 rounded" />
                      <div className="h-4 w-20 bg-white/5 rounded" />
                    </div>
                    {/* Title Skeleton */}
                    <div className="h-8 w-full bg-white/10 rounded-lg" />
                    {/* Excerpt Skeleton */}
                    <div className="space-y-4">
                       <div className="h-4 w-full bg-white/5 rounded" />
                       <div className="h-4 w-5/6 bg-white/5 rounded" />
                    </div>
                    {/* Tags Skeleton */}
                    <div className="flex gap-2">
                       <div className="h-6 w-16 bg-white/5 rounded-full" />
                       <div className="h-6 w-16 bg-white/5 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="hidden lg:flex w-80 flex-col gap-8">
            <div className="h-64 w-full bg-white/5 border border-white/10 rounded-2xl animate-pulse" />
            <div className="h-80 w-full bg-white/5 border border-white/10 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}

