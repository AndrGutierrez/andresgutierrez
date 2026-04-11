"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import BackgroundRays from "../ui/BackgroundRays";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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

    // Initial check if video is already loaded
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
    }

    // Fallback failsafe
    const timer = setTimeout(() => setIsVideoLoaded(true), 2000);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 overflow-hidden bg-bg-main min-h-screen flex items-center">
      {/* 1. Background Glows and Rays */}
      <BackgroundRays opacity={0.1} />

      {/* 2. Background Video Element - Repositioned and Scaled */}
      <div className={`absolute top-1/2 left-[45%] md:left-[50%] lg:left-[55%] -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[110%] lg:w-[90%] max-w-[1800px] aspect-square pointer-events-none z-0 transition-opacity duration-700 ${isVideoLoaded ? "opacity-40 md:opacity-60 lg:opacity-75" : "opacity-0"}`}>
        <div className="relative w-full h-full flex items-center justify-center">

          <video
            ref={videoRef}
            src="https://andresgutierrez.me/tux.webm"
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setIsVideoLoaded(true)}
            className="relative w-full h-full object-contain mix-blend-lighten "
            aria-label="Animated Tux penguin mascot"
            title="Tux Penguin"
          />
          {/* Screen reader description */}
          <span className="sr-only">
            A high-quality 3D animation of Tux, the Linux mascot, floating and interacting in the background.
          </span>
          {/* Subtle caption for the mascot */}
          <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 pointer-events-none">
            <span className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-white/40">
              Interactive Mascot: Tux
            </span>
          </div>
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

            <p className="font-space-grotesk text-white/85 text-base md:text-lg max-w-[600px] leading-relaxed mt-4">
              A full-stack engineer with 5 years of experience crafting production-grade web applications and AWS cloud architecture that businesses rely on.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto pt-6">
            <a
              href="mailto:mail@andresgutierrez.me"
              className="group flex items-center justify-center gap-4 px-8 py-4 rounded-full border border-brand-stroke bg-gradient-brand w-full sm:w-auto transition-transform hover:scale-[1.02] shadow-sm relative overflow-hidden"
              aria-label="Send an email to mail@andresgutierrez.me to work together"
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
              className="font-space-grotesk text-white/85 underline underline-offset-4 decoration-white/30 text-lg hover:text-white transition-colors"
              aria-label="Read my blog"
            >
              Read my blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
