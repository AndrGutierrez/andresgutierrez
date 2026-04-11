import { ArrowRight, Code2, Database, Cloud, Terminal, Cpu, Blocks } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 overflow-hidden bg-bg-main min-h-screen flex items-center">
      {/* Background Glows and Rays */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        {/* Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-full max-w-[1000px] aspect-square rounded-[100%] blur-[275px] opacity-20 bg-[#1F8B83]" />

        {/* Decorative Rays */}
        <svg
          className="absolute -top-[10%] -right-[10%] w-[120%] h-[120%] opacity-[0.15]"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <g filter="url(#rayFilter)">
            {/* Primary background ray - Ends at y=800 */}
            <path d="M1150 -200L550 800H540L950 -200Z" fill="url(#rayGrad)" opacity="0.6" />
            {/* Medium ray - Shorter, ends at y=600 */}
            <path d="M750 -200L350 600H345L600 -200Z" fill="url(#rayGrad)" />
            {/* Long sharp ray - Ends at y=900 */}
            <path d="M1450 -200L870 900H865L1350 -200Z" fill="url(#rayGrad)" opacity="0.8" />
            {/* Small subtle ray - Very short, ends at y=500 */}
            <path d="M500 -200L80 500H75L400 -200Z" fill="url(#rayGrad)" />
            {/* Faint wide depth ray - Ends at y=750 */}
            <path d="M1800 -200L800 750H780L1600 -200Z" fill="url(#rayGrad)" opacity="0.4" />

            {/* --- New Smaller Delicate Rays --- */}
            <path d="M900 -200L450 550H448L850 -200Z" fill="url(#rayGrad)" opacity="0.7" />
            <path d="M1280 -200L820 700H818L1250 -200Z" fill="url(#rayGrad)" opacity="0.9" />
            <path d="M1700 -200L1100 850H1098L1650 -200Z" fill="url(#rayGrad)" opacity="0.6" />
          </g>
          <defs>
            <linearGradient id="rayGrad" x1="50%" y1="0%" x2="30%" y2="100%">
              <stop stopColor="#ADFFEC" stopOpacity="0.8" />
              <stop offset="0.8" stopColor="#3D887D" stopOpacity="0" />
              <stop offset="1" stopColor="#3D887D" stopOpacity="0" />
            </linearGradient>
            <filter id="rayFilter" x="-400" y="-100" width="2600" height="1400" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10 w-full">

        {/* Left Content */}
        <div className="flex flex-col items-start gap-8 flex-1 w-full lg:max-w-2xl">
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-archivo font-medium text-[50px] md:text-[80px] lg:text-[100px] leading-[1.0] tracking-[-0.02em] text-white">
              <span className="flex items-center gap-4 text-[30px] md:text-[50px] font-normal mb-2 text-[#E7E6E2]">
                <span className="origin-bottom-right hover:animate-[spin_1s_ease-in-out]">👋</span>
                Hi, I'm
              </span>
              Andrés<br />Gutiérrez.
            </h1>

            <p className="font-space-grotesk text-white/70 text-base md:text-lg max-w-[600px] leading-relaxed mt-4">
              A full-stack engineer with 5 years of experience crafting production-grade web applications and AWS cloud architecture that businesses rely on.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto pt-6">
            <a
              href="mailto:contact@andresgutierrez.dev"
              className="group flex items-center justify-center gap-4 px-8 py-4 rounded-full border border-brand-stroke bg-gradient-brand w-full sm:w-auto transition-transform hover:scale-[1.02] shadow-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-space-grotesk text-bg-main font-semibold text-lg z-10">
                Let's work together
              </span>
              <div className="bg-bg-main rounded-[50%] p-2 group-hover:-rotate-45 transition-transform duration-300 z-10">
                <ArrowRight className="w-4 h-4 text-brand-light" />
              </div>
            </a>

            <a
              href="/blog"
              className="font-space-grotesk text-white/70 underline underline-offset-4 decoration-white/30 text-lg hover:text-white transition-colors"
            >
              Read my blog
            </a>
          </div>
        </div>

        {/* Right - Animated Orbit */}
        <div className="relative w-full lg:w-1/2 min-h-[400px] md:min-h-[500px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">

          <div className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-400/30 blur-[60px] rounded-full" />

            {/* Outer dashed track */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin-slow" />

            {/* Inner dashed track */}
            <div className="absolute inset-[60px] md:inset-[90px] rounded-full border border-dashed border-brand-400/30 animate-spin-slow-reverse" />

            {/* Center AG Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-brand-stroke/30 bg-[#13201E] flex items-center justify-center shadow-[0_0_80px_rgba(108,160,148,0.2)] z-20">
              <span className="font-archivo font-extrabold text-[#F4F9F7] text-4xl mt-1 tracking-tighter shadow-sm">AG.</span>
            </div>

            {/* Orbiting Elements - Outer Ring */}
            <div className="absolute inset-0 animate-spin-slow z-10 w-full h-full">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <div className="animate-spin-slow-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border border-brand-stroke/40 shadow-lg text-brand-light backdrop-blur-md">
                  <Code2 className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>

              <div className="absolute top-1/2 -right-7 -translate-y-1/2">
                <div className="animate-spin-slow-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border border-brand-stroke/40 shadow-lg text-brand-light backdrop-blur-md">
                  <Database className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>

              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                <div className="animate-spin-slow-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border border-brand-stroke/40 shadow-lg text-brand-light backdrop-blur-md">
                  <Cloud className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>

              <div className="absolute top-1/2 -left-7 -translate-y-1/2">
                <div className="animate-spin-slow-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border border-brand-stroke/40 shadow-lg text-brand-light backdrop-blur-md">
                  <Terminal className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Orbiting Elements - Inner Ring */}
            <div className="absolute inset-[60px] md:inset-[90px] animate-spin-slow-reverse z-10">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="animate-spin-slow flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-bg-section border border-brand-400/30 shadow-lg text-brand-400">
                  <Cpu className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <div className="animate-spin-slow flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-bg-section border border-brand-400/30 shadow-lg text-brand-400">
                  <Blocks className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

