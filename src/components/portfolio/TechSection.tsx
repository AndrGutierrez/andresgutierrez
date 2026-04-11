import { ArrowRight, Code2, Database, Cloud, Terminal, Cpu, Blocks } from "lucide-react";

export default function TechSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left - Hero Atom Moved Here */}
          <div className="relative w-full lg:w-1/2 min-h-[400px] md:min-h-[500px] flex items-center justify-center flex-1">
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

              {/* Orbiting Elements - Outer Ring - INDIVIDUAL ORBITS */}
              {/* Icon 1: Code2 */}
              <div className="absolute inset-0 animate-spin-slow z-10 w-full h-full">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="animate-spin-slow-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border border-brand-stroke/40 shadow-lg text-brand-light backdrop-blur-md">
                    <Code2 className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Icon 2: Database */}
              <div className="absolute inset-0 animate-spin-medium z-10 w-full h-full rotate-[90deg]">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  {/* Compensate for initial 90deg offset to start upright */}
                  <div className="rotate-[-90deg]">
                    <div className="animate-spin-medium-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border border-brand-stroke/40 shadow-lg text-brand-light backdrop-blur-md">
                      <Database className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon 3: Cloud */}
              <div className="absolute inset-0 animate-spin-inner z-10 w-full h-full rotate-[180deg]">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  {/* Compensate for initial 180deg offset to start upright */}
                  <div className="rotate-[-180deg]">
                    <div className="animate-spin-inner-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border border-brand-stroke/40 shadow-lg text-brand-light backdrop-blur-md">
                      <Cloud className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon 4: Terminal */}
              <div className="absolute inset-0 animate-spin-extra-slow z-10 w-full h-full rotate-[270deg]">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  {/* Compensate for initial 270deg offset to start upright */}
                  <div className="rotate-[-270deg]">
                    <div className="animate-spin-extra-slow-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border border-brand-stroke/40 shadow-lg text-brand-light backdrop-blur-md">
                      <Terminal className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements - Inner Ring - INDIVIDUAL ORBITS */}
              {/* Icon 5: Cpu */}
              <div className="absolute inset-[60px] md:inset-[90px] animate-spin-inner-reverse z-10">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="animate-spin-inner flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-bg-section border border-brand-400/30 shadow-lg text-brand-400">
                    <Cpu className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Icon 6: Blocks */}
              <div className="absolute inset-[60px] md:inset-[90px] animate-spin-slow z-10 rotate-[180deg]">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  {/* Compensate for initial 180deg offset */}
                  <div className="rotate-[-180deg]">
                    <div className="animate-spin-slow-reverse flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-bg-section border border-brand-400/30 shadow-lg text-brand-400">
                      <Blocks className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col items-start gap-8 flex-1 w-full lg:w-auto">
            <div className="flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-stroke/20 bg-white/[0.02] backdrop-blur-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="text-brand-400" />
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400" />
                </svg>
                <span className="text-sm font-space-grotesk text-brand-400 font-medium">Technologies</span>
              </div>

              <h2 className="font-space-grotesk font-medium text-5xl md:text-6xl leading-tight tracking-tight text-white">
                Technologies I love working with
              </h2>
            </div>

            <p className="font-space-grotesk text-white/70 text-base md:text-lg leading-relaxed max-w-[500px]">
              These are the tools I've spent real time with — not just tutorials, but production systems, side projects, and everything in between.
            </p>

            {/* Tech List */}
            <div className="flex flex-col gap-5 w-full pt-4">
              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
                  <path d="M9 12L11 14L15 10M2.65203 5.58577C2.65203 4.80769 2.96112 4.06148 3.5113 3.5113C4.06148 2.96112 4.80769 2.65203 5.58577 2.65203H6.91929C7.69393 2.65158 8.43695 2.34479 8.98624 1.79857L9.91971 0.865111C10.1923 0.590939 10.5165 0.373365 10.8735 0.224898C11.2305 0.0764306 11.6133 0 12 0C12.3867 0 12.7695 0.0764306 13.1265 0.224898C13.4835 0.373365 13.8077 0.590939 14.0803 0.865111L15.0138 1.79857C15.5632 2.34532 16.3073 2.65203 17.0807 2.65203H18.4142C19.1923 2.65203 19.9385 2.96112 20.4887 3.5113C21.0389 4.06148 21.348 4.80769 21.348 5.58577V6.91929C21.348 7.69273 21.6547 8.43683 22.2014 8.98624L23.1349 9.91971C23.4091 10.1923 23.6266 10.5165 23.7751 10.8735C23.9236 11.2305 24 11.6133 24 12C24 12.3867 23.9236 12.7695 23.7751 13.1265C23.6266 13.4835 23.4091 13.8077 23.1349 14.0803L22.2014 15.0138C21.6552 15.563 21.3484 16.3061 21.348 17.0807V18.4142C21.348 19.1923 21.0389 19.9385 20.4887 20.4887C19.9385 21.0389 19.1923 21.348 18.4142 21.348H17.0807C16.3061 21.3484 15.563 21.6552 15.0138 22.2014L14.0803 23.1349C13.8077 23.4091 13.4835 23.6266 13.1265 23.7751C12.7695 23.9236 12.3867 24 12 24C11.6133 24 11.2305 23.9236 10.8735 23.7751C10.5165 23.6266 10.1923 23.4091 9.91971 23.1349L8.98624 22.2014C8.43695 21.6552 7.69393 21.3484 6.91929 21.348H5.58577C4.80769 21.348 4.06148 21.0389 3.5113 20.4887C2.96112 19.9385 2.65203 19.1923 2.65203 18.4142V17.0807C2.65158 16.3061 2.34479 15.563 1.79857 15.0138L0.865111 14.0803C0.590939 13.8077 0.373365 13.4835 0.224898 13.1265C0.0764306 12.7695 0 12.3867 0 12C0 11.6133 0.0764306 11.2305 0.224898 10.8735C0.373365 10.5165 0.590939 10.1923 0.865111 9.91971L1.79857 8.98624C2.34479 8.43695 2.65158 7.69393 2.65203 6.91929V5.58577Z" stroke="#8DBBAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-space-grotesk text-white font-medium text-lg tracking-wide">Years of production experience</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
                  <path d="M9 12L11 14L15 10M2.65203 5.58577C2.65203 4.80769 2.96112 4.06148 3.5113 3.5113C4.06148 2.96112 4.80769 2.65203 5.58577 2.65203H6.91929C7.69393 2.65158 8.43695 2.34479 8.98624 1.79857L9.91971 0.865111C10.1923 0.590939 10.5165 0.373365 10.8735 0.224898C11.2305 0.0764306 11.6133 0 12 0C12.3867 0 12.7695 0.0764306 13.1265 0.224898C13.4835 0.373365 13.8077 0.590939 14.0803 0.865111L15.0138 1.79857C15.5632 2.34532 16.3073 2.65203 17.0807 2.65203H18.4142C19.1923 2.65203 19.9385 2.96112 20.4887 3.5113C21.0389 4.06148 21.348 4.80769 21.348 5.58577V6.91929C21.348 7.69273 21.6547 8.43683 22.2014 8.98624L23.1349 9.91971C23.4091 10.1923 23.6266 10.5165 23.7751 10.8735C23.9236 11.2305 24 11.6133 24 12C24 12.3867 23.9236 12.7695 23.7751 13.1265C23.6266 13.4835 23.4091 13.8077 23.1349 14.0803L22.2014 15.0138C21.6552 15.563 21.3484 16.3061 21.348 17.0807V18.4142C21.348 19.1923 21.0389 19.9385 20.4887 20.4887C19.9385 21.0389 19.1923 21.348 18.4142 21.348H17.0807C16.3061 21.3484 15.563 21.6552 15.0138 22.2014L14.0803 23.1349C13.8077 23.4091 13.4835 23.6266 13.1265 23.7751C12.7695 23.9236 12.3867 24 12 24C11.6133 24 11.2305 23.9236 10.8735 23.7751C10.5165 23.6266 10.1923 23.4091 9.91971 23.1349L8.98624 22.2014C8.43695 21.6552 7.69393 21.3484 6.91929 21.348H5.58577C4.80769 21.348 4.06148 21.0389 3.5113 20.4887C2.96112 19.9385 2.65203 19.1923 2.65203 18.4142V17.0807C2.65158 16.3061 2.34479 15.563 1.79857 15.0138L0.865111 14.0803C0.590939 13.8077 0.373365 13.4835 0.224898 13.1265C0.0764306 12.7695 0 12.3867 0 12C0 11.6133 0.0764306 11.2305 0.224898 10.8735C0.373365 10.5165 0.590939 10.1923 0.865111 9.91971L1.79857 8.98624C2.34479 8.43695 2.65158 7.69393 2.65203 6.91929V5.58577Z" stroke="#8DBBAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-space-grotesk text-white font-medium text-lg tracking-wide">Full-stack ownership capability</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
                  <path d="M9 12L11 14L15 10M2.65203 5.58577C2.65203 4.80769 2.96112 4.06148 3.5113 3.5113C4.06148 2.96112 4.80769 2.65203 5.58577 2.65203H6.91929C7.69393 2.65158 8.43695 2.34479 8.98624 1.79857L9.91971 0.865111C10.1923 0.590939 10.5165 0.373365 10.8735 0.224898C11.2305 0.0764306 11.6133 0 12 0C12.3867 0 12.7695 0.0764306 13.1265 0.224898C13.4835 0.373365 13.8077 0.590939 14.0803 0.865111L15.0138 1.79857C15.5632 2.34532 16.3073 2.65203 17.0807 2.65203H18.4142C19.1923 2.65203 19.9385 2.96112 20.4887 3.5113C21.0389 4.06148 21.348 4.80769 21.348 5.58577V6.91929C21.348 7.69273 21.6547 8.43683 22.2014 8.98624L23.1349 9.91971C23.4091 10.1923 23.6266 10.5165 23.7751 10.8735C23.9236 11.2305 24 11.6133 24 12C24 12.3867 23.9236 12.7695 23.7751 13.1265C23.6266 13.4835 23.4091 13.8077 23.1349 14.0803L22.2014 15.0138C21.6552 15.563 21.3484 16.3061 21.348 17.0807V18.4142C21.348 19.1923 21.0389 19.9385 20.4887 20.4887C19.9385 21.0389 19.1923 21.348 18.4142 21.348H17.0807C16.3061 21.3484 15.563 21.6552 15.0138 22.2014L14.0803 23.1349C13.8077 23.4091 13.4835 23.6266 13.1265 23.7751C12.7695 23.9236 12.3867 24 12 24C11.6133 24 11.2305 23.9236 10.8735 23.7751C10.5165 23.6266 10.1923 23.4091 9.91971 23.1349L8.98624 22.2014C8.43695 21.6552 7.69393 21.3484 6.91929 21.348H5.58577C4.80769 21.348 4.06148 21.0389 3.5113 20.4887C2.96112 19.9385 2.65203 19.1923 2.65203 18.4142V17.0807C2.65158 16.3061 2.34479 15.563 1.79857 15.0138L0.865111 14.0803C0.590939 13.8077 0.373365 13.4835 0.224898 13.1265C0.0764306 12.7695 0 12.3867 0 12C0 11.6133 0.0764306 11.2305 0.224898 10.8735C0.373365 10.5165 0.590939 10.1923 0.865111 9.91971L1.79857 8.98624C2.34479 8.43695 2.65158 7.69393 2.65203 6.91929V5.58577Z" stroke="#8DBBAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-space-grotesk text-white font-medium text-lg tracking-wide">Cloud-first design mindset</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
                  <path d="M9 12L11 14L15 10M2.65203 5.58577C2.65203 4.80769 2.96112 4.06148 3.5113 3.5113C4.06148 2.96112 4.80769 2.65203 5.58577 2.65203H6.91929C7.69393 2.65158 8.43695 2.34479 8.98624 1.79857L9.91971 0.865111C10.1923 0.590939 10.5165 0.373365 10.8735 0.224898C11.2305 0.0764306 11.6133 0 12 0C12.3867 0 12.7695 0.0764306 13.1265 0.224898C13.4835 0.373365 13.8077 0.590939 14.0803 0.865111L15.0138 1.79857C15.5632 2.34532 16.3073 2.65203 17.0807 2.65203H18.4142C19.1923 2.65203 19.9385 2.96112 20.4887 3.5113C21.0389 4.06148 21.348 4.80769 21.348 5.58577V6.91929C21.348 7.69273 21.6547 8.43683 22.2014 8.98624L23.1349 9.91971C23.4091 10.1923 23.6266 10.5165 23.7751 10.8735C23.9236 11.2305 24 11.6133 24 12C24 12.3867 23.9236 12.7695 23.7751 13.1265C23.6266 13.4835 23.4091 13.8077 23.1349 14.0803L22.2014 15.0138C21.6552 15.563 21.3484 16.3061 21.348 17.0807V18.4142C21.348 19.1923 21.0389 19.9385 20.4887 20.4887C19.9385 21.0389 19.1923 21.348 18.4142 21.348H17.0807C16.3061 21.3484 15.563 21.6552 15.0138 22.2014L14.0803 23.1349C13.8077 23.4091 13.4835 23.6266 13.1265 23.7751C12.7695 23.9236 12.3867 24 12 24C11.6133 24 11.2305 23.9236 10.8735 23.7751C10.5165 23.6266 10.1923 23.4091 9.91971 23.1349L8.98624 22.2014C8.43695 21.6552 7.69393 21.3484 6.91929 21.348H5.58577C4.80769 21.348 4.06148 21.0389 3.5113 20.4887C2.96112 19.9385 2.65203 19.1923 2.65203 18.4142V17.0807C2.65158 16.3061 2.34479 15.563 1.79857 15.0138L0.865111 14.0803C0.590939 13.8077 0.373365 13.4835 0.224898 13.1265C0.0764306 12.7695 0 12.3867 0 12C0 11.6133 0.0764306 11.2305 0.224898 10.8735C0.373365 10.5165 0.590939 10.1923 0.865111 9.91971L1.79857 8.98624C2.34479 8.43695 2.65158 7.69393 2.65203 6.91929V5.58577Z" stroke="#8DBBAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-space-grotesk text-white font-medium text-lg tracking-wide">Delivery quality (iterations, handoffs, docs)</h3>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="mailto:contact@andresgutierrez.dev"
                className="group flex items-center justify-center gap-4 px-8 py-4 rounded-full border border-brand-stroke bg-gradient-brand w-fit transition-transform hover:scale-[1.02] shadow-sm relative overflow-hidden"
                aria-label="Send an email to contact@andresgutierrez.dev to start a project"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-space-grotesk text-bg-main font-semibold text-lg z-10">
                  Work with me
                </span>
                <div className="bg-bg-main rounded-[50%] p-2 group-hover:-rotate-45 transition-transform duration-300 z-10">
                  <ArrowRight className="w-4 h-4 text-brand-light" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
