import React from "react";

interface BackgroundRaysProps {
  opacity?: number;
  className?: string;
  showGlow?: boolean;
}

export default function BackgroundRays({
  opacity = 0.15,
  className = "",
  showGlow = true,
}: BackgroundRaysProps) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-[1200px] overflow-hidden pointer-events-none ${className}`}
    >
      {/* Background Glow */}
      {showGlow && (
        <div className="absolute top-[-10%] right-[-10%] w-[70%] md:w-full max-w-[1000px] aspect-square rounded-[100%] blur-[275px] opacity-40 md:opacity-20 bg-[#1F8B83]" />
      )}

      <svg
        className="absolute -top-[10%] -right-[15%] md:-top-[10%] md:-right-[10%] w-[160%] md:w-[120%] h-[120%] md:h-[120%]"
        style={{ opacity }}
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g filter="url(#rayFilter)">
          <path
            d="M1150 -200L550 800H540L950 -200Z"
            fill="url(#rayGrad)"
            opacity="0.6"
          />
          <path d="M750 -200L350 600H345L600 -200Z" fill="url(#rayGrad)" />
          <path
            d="M1450 -200L870 900H865L1350 -200Z"
            fill="url(#rayGrad)"
            opacity="0.8"
          />
          <path d="M500 -200L80 500H75L400 -200Z" fill="url(#rayGrad)" />
          <path
            d="M1800 -200L800 750H780L1600 -200Z"
            fill="url(#rayGrad)"
            opacity="0.4"
          />
          <path
            d="M900 -200L450 550H448L850 -200Z"
            fill="url(#rayGrad)"
            opacity="0.7"
          />
          <path
            d="M1280 -200L820 700H818L1250 -200Z"
            fill="url(#rayGrad)"
            opacity="0.9"
          />
          <path
            d="M1700 -200L1100 850H1098L1650 -200Z"
            fill="url(#rayGrad)"
            opacity="0.6"
          />
        </g>
        <defs>
          <linearGradient id="rayGrad" x1="50%" y1="0%" x2="30%" y2="100%">
            <stop stopColor="#ADFFEC" stopOpacity="0.8" />
            <stop offset="0.8" stopColor="#3D887D" stopOpacity="0" />
            <stop offset="1" stopColor="#3D887D" stopOpacity="0" />
          </linearGradient>
          <filter
            id="rayFilter"
            x="-400"
            y="-100"
            width="2600"
            height="1400"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
