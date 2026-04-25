import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faReact, faLinux } from "@fortawesome/free-brands-svg-icons";

const NextJsIcon = ({ className }: { className?: string }) => (
  <svg viewBox=".5 -.2 1023 1024.1" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"/>
    <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"/>
  </svg>
);
const AwsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="-.1 1.1 304.9 179.8" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="m86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9l-23.5-77.3c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9s2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4s-2.2 1-4 1zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.9-5.1-2.7-7s-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2s8.2-1.7 12.6-1.7c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6s3.2 1.2 4.2 1.8c1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1s5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z" fill="currentColor"/>
    <g fill="#FF9900">
      <path d="m273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"/>
      <path d="m287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"/>
    </g>
  </svg>
);
const PythonIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g transform="translate(0, 0)">
      <path
        d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z"
        fill="#306998"
      />
    </g>
    <g transform="translate(0, 0)">
      <path
        d="M21.07 5.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
        fill="#FFE873"
      />
    </g>
  </svg>
);

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
                <span className="font-archivo font-extrabold text-[#F4F9F7] text-4xl mt-1 tracking-tighter shadow-sm">
                  AG.
                </span>
              </div>

              {/* Orbiting Elements - Outer Ring - INDIVIDUAL ORBITS */}
              {/* Icon 1: Code2 */}
              <div className="absolute inset-0 animate-spin-slow z-10 w-full h-full">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="animate-spin-slow-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border border-[#2496ED]/30 shadow-[0_0_15px_rgba(36,150,237,0.2)] text-[#2496ED] backdrop-blur-md">
                    <FontAwesomeIcon icon={faDocker} className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Icon 2: Database */}
              <div className="absolute inset-0 animate-spin-medium z-10 w-full h-full rotate-[90deg]">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  {/* Compensate for initial 90deg offset to start upright */}
                  <div className="rotate-[-90deg]">
                    <div className="animate-spin-medium-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border-[#FFE873]/30 shadow-[0_0_15px_rgba(255,232,115,0.2)] backdrop-blur-md">
                      <PythonIcon className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon 3: Cloud */}
              <div className="absolute inset-0 animate-spin-inner z-10 w-full h-full rotate-[180deg]">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  {/* Compensate for initial 180deg offset to start upright */}
                  <div className="rotate-[-180deg]">
                    <div className="animate-spin-inner-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border-[#FF9900]/30 shadow-[0_0_15px_rgba(255,153,0,0.2)] text-white backdrop-blur-md">
                      <AwsIcon className="w-7 h-7" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon 4: Terminal */}
              <div className="absolute inset-0 animate-spin-extra-slow z-10 w-full h-full rotate-[270deg]">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  {/* Compensate for initial 270deg offset to start upright */}
                  <div className="rotate-[-270deg]">
                    <div className="animate-spin-extra-slow-reverse flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-main border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white backdrop-blur-md">
                      <FontAwesomeIcon icon={faLinux} className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements - Inner Ring - INDIVIDUAL ORBITS */}
              {/* Icon 5: Cpu */}
              <div className="absolute inset-[60px] md:inset-[90px] animate-spin-inner-reverse z-10">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="animate-spin-inner flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-bg-section border border-[#61DAFB]/30 shadow-[0_0_15px_rgba(97,218,251,0.2)] text-[#61DAFB]">
                    <FontAwesomeIcon icon={faReact} className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Icon 6: Blocks */}
              <div className="absolute inset-[60px] md:inset-[90px] animate-spin-slow-reverse z-10 rotate-[180deg]">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  {/* Compensate for initial 180deg offset */}
                  <div className="rotate-[-180deg]">
                    <div className="animate-spin-slow flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-bg-section border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white">
                      <NextJsIcon className="w-8 h-8" />
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
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-brand-400"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-400"
                  />
                </svg>
                <span className="text-sm font-space-grotesk text-brand-400 font-medium">
                  Technologies
                </span>
              </div>

              <h2 className="font-archivo font-medium text-5xl md:text-6xl leading-tight tracking-tight text-white">
                Technologies I love working with
              </h2>
            </div>

            <p className="font-space-grotesk text-white/90 text-base md:text-lg leading-relaxed max-w-[500px]">
              These are the tools I've spent real time with — not just
              tutorials, but production systems, side projects, and everything
              in between.
            </p>

            {/* Tech List */}
            <div className="flex flex-col gap-5 w-full pt-4">
              <div className="flex items-start gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 mt-1"
                >
                  <path
                    d="M9 12L11 14L15 10M2.65203 5.58577C2.65203 4.80769 2.96112 4.06148 3.5113 3.5113C4.06148 2.96112 4.80769 2.65203 5.58577 2.65203H6.91929C7.69393 2.65158 8.43695 2.34479 8.98624 1.79857L9.91971 0.865111C10.1923 0.590939 10.5165 0.373365 10.8735 0.224898C11.2305 0.0764306 11.6133 0 12 0C12.3867 0 12.7695 0.0764306 13.1265 0.224898C13.4835 0.373365 13.8077 0.590939 14.0803 0.865111L15.0138 1.79857C15.5632 2.34532 16.3073 2.65203 17.0807 2.65203H18.4142C19.1923 2.65203 19.9385 2.96112 20.4887 3.5113C21.0389 4.06148 21.348 4.80769 21.348 5.58577V6.91929C21.348 7.69273 21.6547 8.43683 22.2014 8.98624L23.1349 9.91971C23.4091 10.1923 23.6266 10.5165 23.7751 10.8735C23.9236 11.2305 24 11.6133 24 12C24 12.3867 23.9236 12.7695 23.7751 13.1265C23.6266 13.4835 23.4091 13.8077 23.1349 14.0803L22.2014 15.0138C21.6552 15.563 21.3484 16.3061 21.348 17.0807V18.4142C21.348 19.1923 21.0389 19.9385 20.4887 20.4887C19.9385 21.0389 19.1923 21.348 18.4142 21.348H17.0807C16.3061 21.3484 15.563 21.6552 15.0138 22.2014L14.0803 23.1349C13.8077 23.4091 13.4835 23.6266 13.1265 23.7751C12.7695 23.9236 12.3867 24 12 24C11.6133 24 11.2305 23.9236 10.8735 23.7751C10.5165 23.6266 10.1923 23.4091 9.91971 23.1349L8.98624 22.2014C8.43695 21.6552 7.69393 21.3484 6.91929 21.348H5.58577C4.80769 21.348 4.06148 21.0389 3.5113 20.4887C2.96112 19.9385 2.65203 19.1923 2.65203 18.4142V17.0807C2.65158 16.3061 2.34479 15.563 1.79857 15.0138L0.865111 14.0803C0.590939 13.8077 0.373365 13.4835 0.224898 13.1265C0.0764306 12.7695 0 12.3867 0 12C0 11.6133 0.0764306 11.2305 0.224898 10.8735C0.373365 10.5165 0.590939 10.1923 0.865111 9.91971L1.79857 8.98624C2.34479 8.43695 2.65158 7.69393 2.65203 6.91929V5.58577Z"
                    stroke="#8DBBAF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className="font-space-grotesk text-white font-medium text-lg tracking-wide">
                    Years of production experience
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 mt-1"
                >
                  <path
                    d="M9 12L11 14L15 10M2.65203 5.58577C2.65203 4.80769 2.96112 4.06148 3.5113 3.5113C4.06148 2.96112 4.80769 2.65203 5.58577 2.65203H6.91929C7.69393 2.65158 8.43695 2.34479 8.98624 1.79857L9.91971 0.865111C10.1923 0.590939 10.5165 0.373365 10.8735 0.224898C11.2305 0.0764306 11.6133 0 12 0C12.3867 0 12.7695 0.0764306 13.1265 0.224898C13.4835 0.373365 13.8077 0.590939 14.0803 0.865111L15.0138 1.79857C15.5632 2.34532 16.3073 2.65203 17.0807 2.65203H18.4142C19.1923 2.65203 19.9385 2.96112 20.4887 3.5113C21.0389 4.06148 21.348 4.80769 21.348 5.58577V6.91929C21.348 7.69273 21.6547 8.43683 22.2014 8.98624L23.1349 9.91971C23.4091 10.1923 23.6266 10.5165 23.7751 10.8735C23.9236 11.2305 24 11.6133 24 12C24 12.3867 23.9236 12.7695 23.7751 13.1265C23.6266 13.4835 23.4091 13.8077 23.1349 14.0803L22.2014 15.0138C21.6552 15.563 21.3484 16.3061 21.348 17.0807V18.4142C21.348 19.1923 21.0389 19.9385 20.4887 20.4887C19.9385 21.0389 19.1923 21.348 18.4142 21.348H17.0807C16.3061 21.3484 15.563 21.6552 15.0138 22.2014L14.0803 23.1349C13.8077 23.4091 13.4835 23.6266 13.1265 23.7751C12.7695 23.9236 12.3867 24 12 24C11.6133 24 11.2305 23.9236 10.8735 23.7751C10.5165 23.6266 10.1923 23.4091 9.91971 23.1349L8.98624 22.2014C8.43695 21.6552 7.69393 21.3484 6.91929 21.348H5.58577C4.80769 21.348 4.06148 21.0389 3.5113 20.4887C2.96112 19.9385 2.65203 19.1923 2.65203 18.4142V17.0807C2.65158 16.3061 2.34479 15.563 1.79857 15.0138L0.865111 14.0803C0.590939 13.8077 0.373365 13.4835 0.224898 13.1265C0.0764306 12.7695 0 12.3867 0 12C0 11.6133 0.0764306 11.2305 0.224898 10.8735C0.373365 10.5165 0.590939 10.1923 0.865111 9.91971L1.79857 8.98624C2.34479 8.43695 2.65158 7.69393 2.65203 6.91929V5.58577Z"
                    stroke="#8DBBAF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className="font-space-grotesk text-white font-medium text-lg tracking-wide">
                    Full-stack ownership capability
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 mt-1"
                >
                  <path
                    d="M9 12L11 14L15 10M2.65203 5.58577C2.65203 4.80769 2.96112 4.06148 3.5113 3.5113C4.06148 2.96112 4.80769 2.65203 5.58577 2.65203H6.91929C7.69393 2.65158 8.43695 2.34479 8.98624 1.79857L9.91971 0.865111C10.1923 0.590939 10.5165 0.373365 10.8735 0.224898C11.2305 0.0764306 11.6133 0 12 0C12.3867 0 12.7695 0.0764306 13.1265 0.224898C13.4835 0.373365 13.8077 0.590939 14.0803 0.865111L15.0138 1.79857C15.5632 2.34532 16.3073 2.65203 17.0807 2.65203H18.4142C19.1923 2.65203 19.9385 2.96112 20.4887 3.5113C21.0389 4.06148 21.348 4.80769 21.348 5.58577V6.91929C21.348 7.69273 21.6547 8.43683 22.2014 8.98624L23.1349 9.91971C23.4091 10.1923 23.6266 10.5165 23.7751 10.8735C23.9236 11.2305 24 11.6133 24 12C24 12.3867 23.9236 12.7695 23.7751 13.1265C23.6266 13.4835 23.4091 13.8077 23.1349 14.0803L22.2014 15.0138C21.6552 15.563 21.3484 16.3061 21.348 17.0807V18.4142C21.348 19.1923 21.0389 19.9385 20.4887 20.4887C19.9385 21.0389 19.1923 21.348 18.4142 21.348H17.0807C16.3061 21.3484 15.563 21.6552 15.0138 22.2014L14.0803 23.1349C13.8077 23.4091 13.4835 23.6266 13.1265 23.7751C12.7695 23.9236 12.3867 24 12 24C11.6133 24 11.2305 23.9236 10.8735 23.7751C10.5165 23.6266 10.1923 23.4091 9.91971 23.1349L8.98624 22.2014C8.43695 21.6552 7.69393 21.3484 6.91929 21.348H5.58577C4.80769 21.348 4.06148 21.0389 3.5113 20.4887C2.96112 19.9385 2.65203 19.1923 2.65203 18.4142V17.0807C2.65158 16.3061 2.34479 15.563 1.79857 15.0138L0.865111 14.0803C0.590939 13.8077 0.373365 13.4835 0.224898 13.1265C0.0764306 12.7695 0 12.3867 0 12C0 11.6133 0.0764306 11.2305 0.224898 10.8735C0.373365 10.5165 0.590939 10.1923 0.865111 9.91971L1.79857 8.98624C2.34479 8.43695 2.65158 7.69393 2.65203 6.91929V5.58577Z"
                    stroke="#8DBBAF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className="font-space-grotesk text-white font-medium text-lg tracking-wide">
                    Cloud-first design mindset
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 mt-1"
                >
                  <path
                    d="M9 12L11 14L15 10M2.65203 5.58577C2.65203 4.80769 2.96112 4.06148 3.5113 3.5113C4.06148 2.96112 4.80769 2.65203 5.58577 2.65203H6.91929C7.69393 2.65158 8.43695 2.34479 8.98624 1.79857L9.91971 0.865111C10.1923 0.590939 10.5165 0.373365 10.8735 0.224898C11.2305 0.0764306 11.6133 0 12 0C12.3867 0 12.7695 0.0764306 13.1265 0.224898C13.4835 0.373365 13.8077 0.590939 14.0803 0.865111L15.0138 1.79857C15.5632 2.34532 16.3073 2.65203 17.0807 2.65203H18.4142C19.1923 2.65203 19.9385 2.96112 20.4887 3.5113C21.0389 4.06148 21.348 4.80769 21.348 5.58577V6.91929C21.348 7.69273 21.6547 8.43683 22.2014 8.98624L23.1349 9.91971C23.4091 10.1923 23.6266 10.5165 23.7751 10.8735C23.9236 11.2305 24 11.6133 24 12C24 12.3867 23.9236 12.7695 23.7751 13.1265C23.6266 13.4835 23.4091 13.8077 23.1349 14.0803L22.2014 15.0138C21.6552 15.563 21.3484 16.3061 21.348 17.0807V18.4142C21.348 19.1923 21.0389 19.9385 20.4887 20.4887C19.9385 21.0389 19.1923 21.348 18.4142 21.348H17.0807C16.3061 21.3484 15.563 21.6552 15.0138 22.2014L14.0803 23.1349C13.8077 23.4091 13.4835 23.6266 13.1265 23.7751C12.7695 23.9236 12.3867 24 12 24C11.6133 24 11.2305 23.9236 10.8735 23.7751C10.5165 23.6266 10.1923 23.4091 9.91971 23.1349L8.98624 22.2014C8.43695 21.6552 7.69393 21.3484 6.91929 21.348H5.58577C4.80769 21.348 4.06148 21.0389 3.5113 20.4887C2.96112 19.9385 2.65203 19.1923 2.65203 18.4142V17.0807C2.65158 16.3061 2.34479 15.563 1.79857 15.0138L0.865111 14.0803C0.590939 13.8077 0.373365 13.4835 0.224898 13.1265C0.0764306 12.7695 0 12.3867 0 12C0 11.6133 0.0764306 11.2305 0.224898 10.8735C0.373365 10.5165 0.590939 10.1923 0.865111 9.91971L1.79857 8.98624C2.34479 8.43695 2.65158 7.69393 2.65203 6.91929V5.58577Z"
                    stroke="#8DBBAF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className="font-space-grotesk text-white font-medium text-lg tracking-wide">
                    Delivery quality (iterations, handoffs, docs)
                  </h3>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="mailto:mail@andresgutierrez.me"
                className="group flex items-center justify-center gap-4 px-8 py-4 rounded-full border border-brand-stroke bg-gradient-brand w-fit transition-transform hover:scale-[1.02] shadow-sm relative overflow-hidden"
                aria-label="Send an email to mail@andresgutierrez.me to start a project"
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
