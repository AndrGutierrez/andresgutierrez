"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loopStart = 1.66;
    const loopEnd = 4.54;

    let frameId: number;

    const checkTime = () => {
      if (video.currentTime >= loopEnd) {
        video.currentTime = loopStart;
      }
      frameId = requestAnimationFrame(checkTime);
    };

    frameId = requestAnimationFrame(checkTime);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 overflow-hidden bg-bg-main min-h-screen flex items-center">
      {/* 1. Background Glows and Rays */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-full max-w-[1000px] aspect-square rounded-[100%] blur-[275px] opacity-20 bg-[#1F8B83]" />

        <svg
          className="absolute -top-[10%] -right-[10%] w-[120%] h-[120%] opacity-[0.15]"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <g filter="url(#rayFilter)">
            <path d="M1150 -200L550 800H540L950 -200Z" fill="url(#rayGrad)" opacity="0.6" />
            <path d="M750 -200L350 600H345L600 -200Z" fill="url(#rayGrad)" />
            <path d="M1450 -200L870 900H865L1350 -200Z" fill="url(#rayGrad)" opacity="0.8" />
            <path d="M500 -200L80 500H75L400 -200Z" fill="url(#rayGrad)" />
            <path d="M1800 -200L800 750H780L1600 -200Z" fill="url(#rayGrad)" opacity="0.4" />
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

      {/* 2. Background Video Element - Repositioned and Scaled */}
      <div className="absolute top-1/2 left-[45%] md:left-[50%] lg:left-[55%] -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[110%] lg:w-[90%] max-w-[1800px] aspect-square pointer-events-none z-0 opacity-40 md:opacity-60 lg:opacity-75">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-400/10 blur-[150px] rounded-full" />

          <video
            ref={videoRef}
            src="https://andresgutierrez.me/tux.webm"
            autoPlay
            loop
            muted
            playsInline
            className="relative w-full h-full object-contain mix-blend-lighten "
          />
        </div>
      </div>

      {/* 3. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-start gap-8 w-full lg:max-w-2xl py-20">
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
      </div>
    </section>
  );
}
