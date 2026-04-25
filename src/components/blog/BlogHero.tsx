import { Plus } from 'lucide-react';
import Tag from '@/components/ui/Tag';

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-8">

      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Subtitle Pill */}
        <div className="mb-8">
          <Tag variant="solid" className="px-4 py-2 gap-2">
            <div className="w-4 h-4 rounded-sm bg-brand-950 flex items-center justify-center">
              <Plus className="w-3 h-3 text-brand" />
            </div>
            <span className="uppercase tracking-widest text-xs font-bold">
              Personal blog
            </span>
          </Tag>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-archivo font-medium tracking-tight text-white mb-6 max-w-4xl">
          Things I&apos;ve <span className="text-brand">learned.</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl font-space-grotesk text-white/60 max-w-2xl mb-10 leading-relaxed">
          Writing about software engineering, cloud infrastructure, open-source, and the occasional hardware rabbit hole. No fluff — just things I&apos;ve actually built, broken, and figured out.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-12 border-t border-white/10 pt-10">
          <div className="flex flex-col items-start">
            <span className="text-4xl md:text-5xl font-archivo text-white/80 leading-none mb-2">12</span>
            <span className="text-base font-space-grotesk text-white/40">Articles</span>
          </div>
          <div className="w-px h-16 bg-white/10" />
          <div className="flex flex-col items-start">
            <span className="text-4xl md:text-5xl font-archivo text-white/80 leading-none mb-2">4</span>
            <span className="text-base font-space-grotesk text-white/40">Topics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
