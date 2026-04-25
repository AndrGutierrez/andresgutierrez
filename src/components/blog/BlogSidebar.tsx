import React from "react";
import { Mail, ArrowRight, User } from "lucide-react";

export default function BlogSidebar() {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-8">
      {/* Author Card */}
      <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 group overflow-hidden">
        {/* L-Corner Accents */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />

        <div className="flex flex-col items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-brand/20 flex items-center justify-center border border-brand/40">
            <User className="text-brand w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-archivo text-white">
              Andrés Gutiérrez
            </h3>
            <p className="text-xs font-space-grotesk text-brand tracking-wider uppercase">
              Software Engineer
            </p>
          </div>
          <p className="text-sm font-space-grotesk text-white/60 leading-relaxed">
            Writing about the things I genuinely find interesting — cloud infra,
            full-stack dev, hardware, and the occasional engineering opinion.
          </p>
          <button className="flex items-center justify-between w-full px-4 py-3 rounded-full bg-gradient-brand hover:shadow-[0_0_20px_rgba(108,160,148,0.3)] shadow-[0_0_15px_rgba(108,160,148,0.2)] transition-all text-brand-950 font-space-grotesk font-medium text-sm group/btn">
            Say hello
            <div className="w-6 h-6 rounded-full bg-brand-950 flex items-center justify-center group-hover/btn:bg-brand-900 transition-colors">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Topics */}
      <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />

        <h3 className="text-xl font-archivo text-white mb-4">Topics</h3>
        <div className="h-px w-full bg-white/10 mb-6" />

        <div className="flex flex-col gap-4">
          {[
            { name: "Cloud & AWS", count: 4 },
            { name: "Full-Stack", count: 3 },
            { name: "DevOps", count: 6 },
            { name: "Hardware", count: 2 },
          ].map((topic) => (
            <div
              key={topic.name}
              className="flex items-center justify-between group cursor-pointer"
            >
              <span className="text-base font-space-grotesk text-white/60 group-hover:text-white transition-colors">
                {topic.name}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-white/40 group-hover:bg-brand group-hover:text-brand-950 transition-all">
                {topic.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe */}
      <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />

        <h3 className="text-xl font-archivo text-white mb-2">
          Stay in the loop
        </h3>
        <p className="text-sm font-space-grotesk text-white/60 mb-6">
          New post every couple of weeks. No spam, no newsletters about
          newsletters.
        </p>

        <div className="flex flex-col gap-3">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Your@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand/40 transition-colors"
            />
          </div>
          <button className="flex items-center justify-between w-full px-4 py-3 rounded-full bg-gradient-brand hover:shadow-[0_0_20px_rgba(108,160,148,0.3)] shadow-[0_0_15px_rgba(108,160,148,0.2)] transition-all text-brand-950 font-space-grotesk font-medium text-sm group/btn">
            Subscribe
            <div className="w-6 h-6 rounded-full bg-brand-950 flex items-center justify-center group-hover/btn:bg-brand-900 transition-colors">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Most Read */}
      <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />

        <h3 className="text-xl font-archivo text-white mb-4">Most read</h3>
        <div className="h-px w-full bg-white/10 mb-6" />

        <div className="flex flex-col gap-6">
          {[
            "01 How I set up a zero-downtime deployment pipeline on AWS",
            "02 Docker in local dev: the setup I wish I had from day one",
            "03 Django's ORM is quietly one of the best things in web development",
            "04 I’am roles demystified: what I got wrong for two years",
          ].map((title, i) => (
            <div key={i} className="flex flex-col gap-2 group cursor-pointer">
              <p className="text-sm font-space-grotesk text-white/60 group-hover:text-white transition-colors leading-snug">
                {title}
              </p>
              {i < 3 && <div className="h-px w-full bg-white/5" />}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
