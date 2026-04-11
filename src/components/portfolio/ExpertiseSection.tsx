import { Code2, Cloud, Rocket, Microscope } from "lucide-react";

export default function ExpertiseSection() {
  const expertise = [
    {
      icon: "code",
      lucideIcon: Code2,
      title: "Full-Stack Development",
      description: "Pixel-perfect frontends paired with robust APIs. React, Next.js, and Django to deliver cohesive user experiences.",
    },
    {
      icon: "cloud",
      lucideIcon: Cloud,
      title: "AWS Cloud Architecture",
      description: "Scalable, cost-effective infrastructure design. EC2, S3, Lambda, RDS — built to grow with your product.",
    },
    {
      icon: "rocket",
      lucideIcon: Rocket,
      title: "DevOps & CI/CD",
      description: "Containerised deployments with Docker and automated pipelines. Ship faster with confidence.",
    },
    {
      icon: "search",
      lucideIcon: Microscope,
      title: "Open Source & Tech R&D",
      description: "Passionate about hardware, cloud infra, and contributing to the open-source ecosystem.",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-bg-section overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[120px] bg-brand-light" />
      </div>

      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-stroke/20 bg-white/[0.02] backdrop-blur-sm">
                <span className="text-xs font-space-grotesk text-brand-400 font-medium tracking-wider uppercase">What I deliver</span>
              </div>

              <h2 className="font-archivo font-medium text-4xl md:text-[48px] text-center text-white tracking-tight leading-tight">
                End-to-end engineering expertise
              </h2>
            </div>

            <p className="font-space-grotesk text-white/90 text-base md:text-lg text-center max-w-2xl leading-relaxed">
              A proven stack of modern technologies for building reliable, performant apps.
            </p>
          </div>
        </div>

        {/* Infinite Carousel Container */}
        <div className="relative w-full overflow-hidden py-10">
          {/* Gradient Fades for Smooth Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-section to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-section to-transparent z-20" />

          <div 
            className="flex w-max animate-marquee translate-z-0"
            style={{ '--duration': '80s', '--gap': '2rem' } as React.CSSProperties}
          >
            {/* Triple the items to ensure seamless loop on all screen sizes */}
            {[...expertise, ...expertise, ...expertise].map((item, idx) => (
              <div
                key={idx}
                className="relative group border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-2xl p-8 md:p-10 hover:border-brand-stroke/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[600px] h-auto min-h-[250px] md:min-h-[320px] mx-4 shrink-0"
              >
                {/* Large Background Faded Icon */}
                <div className="absolute -top-4 -right-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12 select-none">
                  <item.lucideIcon size={280} strokeWidth={0.5} className="text-white" />
                </div>

                {/* Corner Decorators */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20 group-hover:border-brand-stroke/60 transition-colors duration-500" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/20 group-hover:border-brand-stroke/60 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/20 group-hover:border-brand-stroke/60 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20 group-hover:border-brand-stroke/60 transition-colors duration-500" />

                {/* Icon Wrapper (Guaranteed Circular and Symmetric) */}
                <div className="relative z-10 aspect-square w-24 h-24 md:w-[120px] md:h-[120px] flex-shrink-0 rounded-full bg-gradient-to-br from-[#32534D] to-[#13201E] flex items-center justify-center shadow-lg border border-brand-stroke/20 group-hover:shadow-brand-glow/20 transition-all duration-500">
                  <item.lucideIcon className="w-10 h-10 md:w-14 md:h-14 text-white" strokeWidth={1} />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col justify-center text-center md:text-left">
                  <h3 className="font-archivo font-medium text-2xl md:text-[28px] text-white leading-tight mb-3 group-hover:text-brand-light transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-space-grotesk text-white/90 text-base md:text-lg leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
