import { ArrowRight } from "lucide-react";

export default function TechSection() {
  return (
    <section className="relative w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left - Orbit Visualization */}
          <div className="relative w-full lg:w-auto h-[400px] md:h-[500px] flex items-center justify-center flex-1">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full opacity-10 blur-[200px]"
                style={{
                  background: "linear-gradient(135deg, #6CA094 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Orbit Container */}
            <div className="absolute w-[280px] md:w-[380px] h-[280px] md:h-[380px]">
              {/* Outer Dashed Circle */}
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow"
                viewBox="0 0 380 357"
                fill="none"
              >
                <circle
                  cx="190"
                  cy="178.5"
                  r="174"
                  stroke="white"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                  strokeDasharray="25.58 25.58"
                />
              </svg>

              {/* Inner Dashed Circle */}
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow-reverse"
                viewBox="0 0 380 357"
                fill="none"
              >
                <circle
                  cx="190"
                  cy="178.5"
                  r="110"
                  stroke="#6CA094"
                  strokeOpacity="0.3"
                  strokeWidth="2"
                  strokeDasharray="25.58 25.58"
                />
              </svg>

              {/* AG Center Circle */}
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 flex-shrink-0 z-20 drop-shadow-[0_0_30px_rgba(108,160,148,0.2)]"
                viewBox="0 0 120 120"
                fill="none"
              >
                <circle cx="60" cy="60" r="60" fill="#13201E" stroke="#6CA094" strokeWidth="2" strokeOpacity="0.3" />
                <path
                  d="M51 60L60 68.5L74 54"
                  stroke="#8DBBAF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Tech Logos - positioned around outer orbit */}
              <div className="absolute inset-0 animate-spin-slow z-10 w-full h-full">
                {/* Top - React */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-[#6CA094]/30 bg-bg-main backdrop-blur-md flex items-center justify-center animate-spin-slow-reverse shadow-lg -translate-y-[10%]">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="#61DAFB" strokeWidth="2" strokeOpacity="0.8" />
                    <circle cx="24" cy="24" r="4" fill="#61DAFB" />
                    <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#61DAFB" strokeWidth="2" fill="none" />
                    <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 24 24)" />
                    <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 24 24)" />
                  </svg>
                </div>

                {/* Right - Node.js */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[20%] w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-[#6CA094]/30 bg-bg-main backdrop-blur-md flex items-center justify-center animate-spin-slow-reverse shadow-lg">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 6 L42 16 L42 32 L24 42 L6 32 L6 16 Z" stroke="#68A063" strokeWidth="2" fill="none" />
                    <circle cx="24" cy="24" r="5" fill="#68A063" />
                  </svg>
                </div>

                {/* Left - AWS */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[20%] w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-[#6CA094]/30 bg-bg-main backdrop-blur-md flex items-center justify-center animate-spin-slow-reverse shadow-lg">
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                    <path d="M10 32 Q10 16 24 10 Q38 16 38 32" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="16" cy="28" r="3" fill="#FF9900" />
                    <circle cx="24" cy="24" r="3" fill="#FF9900" />
                    <circle cx="32" cy="28" r="3" fill="#FF9900" />
                  </svg>
                </div>
              </div>

              {/* Tech Logos - positioned around inner orbit */}
              <div className="absolute inset-[60px] md:inset-[90px] animate-spin-slow-reverse z-10">
                {/* Top Inner - TypeScript */}
                <div className="absolute top-0 right-0 translate-x-[20%] -translate-y-[20%] w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-[#6CA094]/30 bg-bg-section flex items-center justify-center animate-spin-slow shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="4" fill="#3178C6" />
                    <text x="24" y="32" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="monospace">TS</text>
                  </svg>
                </div>

                {/* Bottom Inner - PostgreSQL */}
                <div className="absolute bottom-0 left-0 -translate-x-[20%] translate-y-[20%] w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-[#6CA094]/30 bg-bg-section flex items-center justify-center animate-spin-slow shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                    <ellipse cx="24" cy="18" rx="12" ry="6" stroke="#336791" strokeWidth="2" fill="none" />
                    <rect x="12" y="18" width="24" height="18" stroke="#336791" strokeWidth="2" fill="none" />
                    <path d="M12 27 Q12 33 24 33 Q36 33 36 27" stroke="#336791" strokeWidth="2" fill="none" />
                  </svg>
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

              <h2 className="font-futura font-medium text-5xl md:text-6xl leading-tight tracking-tight text-white">
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
