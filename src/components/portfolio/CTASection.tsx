import { Send } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-bg-section overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[150px] bg-gradient-brand" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Container */}
        <div className="border border-brand-stroke/20 bg-white/[0.01] backdrop-blur-md rounded-[2rem] p-12 md:p-20 overflow-hidden relative group">
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-brand opacity-5 group-hover:opacity-10 transition-opacity duration-500" />

          {/* Corner Decorators */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand-stroke/40 group-hover:border-brand-400 transition-colors" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-stroke/40 group-hover:border-brand-400 transition-colors" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-stroke/40 group-hover:border-brand-400 transition-colors" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand-stroke/40 group-hover:border-brand-400 transition-colors" />

          <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12">
            {/* Heading */}
            <div className="flex flex-col items-center gap-6 max-w-3xl">
              <h2 className="font-archivo font-medium text-5xl md:text-6xl text-center text-white tracking-tight leading-tight">
                Have a Project in Mind?
              </h2>

              <p className="font-space-grotesk text-white/90 text-base md:text-lg text-center leading-relaxed">
                Let's build something scalable, efficient, and built for growth. Whether you need a full-stack platform or a specialized infrastructure review, I'm here to help.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:mail@andresgutierrez.me"
              className="group/btn flex items-center justify-center gap-4 px-10 py-5 rounded-full border border-brand-stroke hover:border-brand-light bg-gradient-brand transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(108,160,148,0.2)] hover:shadow-[0_0_40px_rgba(108,160,148,0.4)] relative overflow-hidden"
              aria-label="Send an email to mail@andresgutierrez.me"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              <span className="font-space-grotesk text-bg-main font-bold text-lg tracking-wide z-10">
                Get in Touch
              </span>
              <div className="bg-brand-950 rounded-full p-2 group-hover/btn:-rotate-12 group-hover/btn:translate-x-1 transition-transform duration-300 z-10">
                <Send className="w-4 h-4 text-white" fill="currentColor" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
