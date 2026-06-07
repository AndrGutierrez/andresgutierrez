import CTAButton from "@/components/ui/CTAButton";

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
                Want to reach out?
              </h2>

              <p className="font-space-grotesk text-white/90 text-base md:text-lg text-center leading-relaxed">
                Let's talk, wether you need engineering advice, help building a project or just want to have a conversation, send an email to mail@andresgutierrez.me .
              </p>
            </div>

            <CTAButton
              variant="cta"
              ariaLabel="Send an email to mail@andresgutierrez.me"
            >
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
