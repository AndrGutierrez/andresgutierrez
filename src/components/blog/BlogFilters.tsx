import React from 'react';

const CATEGORIES = [
  'All posts',
  'Cloud & AWS',
  'Full-Stack',
  'DevOps',
  'Hardware'
];

interface BlogFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogFilters({ activeCategory, onCategoryChange }: BlogFiltersProps) {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="inline-flex items-center p-2 rounded-full bg-white/5 border border-white/10 overflow-x-auto no-scrollbar max-w-full">
        <div className="flex items-center gap-1 min-w-max">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-space-grotesk text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand/90 text-brand-950 font-medium shadow-[0_0_20px_rgba(108,160,148,0.3)]'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
