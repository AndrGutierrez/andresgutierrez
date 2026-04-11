import { Code2, Cloud, Rocket, Microscope } from "lucide-react";

export default function ExpertiseSection() {
  const expertise = [
    {
      icon: "code",
      title: "Full-Stack Development",
      description: "Pixel-perfect frontends paired with robust APIs. React, Next.js, and Django to deliver cohesive user experiences.",
    },
    {
      icon: "cloud",
      title: "AWS Cloud Architecture",
      description: "Scalable, cost-effective infrastructure design. EC2, S3, Lambda, RDS — built to grow with your product.",
    },
    {
      icon: "rocket",
      title: "DevOps & CI/CD",
      description: "Containerised deployments with Docker and automated pipelines. Ship faster with confidence.",
    },
    {
      icon: "search",
      title: "Open Source & Tech R&D",
      description: "Passionate about hardware, cloud infra, and contributing to the open-source ecosystem.",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-bg-section overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-5 blur-[100px] bg-brand-light" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-stroke/20 bg-white/[0.02] backdrop-blur-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="text-brand-400" />
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400" />
              </svg>
              <span className="text-sm font-space-grotesk text-brand-400 font-medium">Expertise</span>
            </div>

            <h2 className="font-archivo font-medium text-4xl md:text-5xl lg:text-6xl text-center text-white tracking-tight">
              End-to-end engineering expertise
            </h2>
          </div>

          <p className="font-space-grotesk text-white/70 text-base md:text-lg text-center max-w-2xl leading-relaxed">
            A proven stack of modern technologies for building reliable, performant apps from the database to the browser.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {expertise.map((item, idx) => (
            <div
              key={idx}
              className="relative group border border-white/10 bg-white/[0.01] backdrop-blur-md rounded-2xl p-8 md:p-10 hover:border-brand-stroke/40 hover:bg-white/[0.02] transition-all duration-300 overflow-hidden min-h-[320px] flex flex-col justify-between"
            >
              {/* Corner Decorators */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-brand-stroke transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-brand-stroke transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 group-hover:border-brand-stroke transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-brand-stroke transition-colors" />

              <div className="relative z-10 flex flex-col gap-8">
                {/* Icon */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[#32534D] to-[#13201E] flex items-center justify-center shadow-lg border border-brand-stroke/20 group-hover:scale-105 transition-transform duration-300">
                  {item.icon === "code" && <Code2 className="w-10 h-10 text-brand-light" strokeWidth={1.5} />}
                  {item.icon === "cloud" && <Cloud className="w-10 h-10 text-brand-light" strokeWidth={1.5} />}
                  {item.icon === "rocket" && <Rocket className="w-10 h-10 text-brand-light" strokeWidth={1.5} />}
                  {item.icon === "search" && <Microscope className="w-10 h-10 text-brand-light" strokeWidth={1.5} />}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-archivo font-medium text-2xl text-white leading-tight group-hover:text-brand-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-space-grotesk text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
