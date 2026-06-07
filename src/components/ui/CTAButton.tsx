import React from "react";
import Link from "next/link";
import { Send } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  variant?: "hero" | "cta" | "tech" | "navbar" | "mobile-nav" | "blog-sidebar";
  className?: string;
}

export default function CTAButton({
  href = "mailto:mail@andresgutierrez.me",
  onClick,
  children,
  ariaLabel,
  variant = "hero",
  className = "",
}: CTAButtonProps) {
  // Determine if it should use Next.js Link
  const isInternal = href.startsWith("/") || href.startsWith("#");

  let styles = "";
  let content: React.ReactNode = null;

  switch (variant) {
    case "hero":
      styles =
        "group/btn flex items-center justify-center gap-4 px-10 py-5 rounded-full border border-brand-stroke hover:border-brand-light bg-gradient-brand transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(108,160,148,0.2)] hover:shadow-[0_0_40px_rgba(108,160,148,0.4)] relative overflow-hidden";
      content = (
        <>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          <span className="font-space-grotesk text-bg-main font-bold text-lg tracking-wide z-10">
            {children}
          </span>
          <div className="bg-brand-950 rounded-full p-2 group-hover/btn:-rotate-12 group-hover/btn:translate-x-1 transition-all duration-300 z-10">
            <Send className="w-4 h-4 text-white" fill="currentColor" />
          </div>
        </>
      );
      break;

    case "cta":
      styles =
        "group/btn flex items-center justify-center gap-4 px-10 py-5 rounded-full border border-brand-stroke hover:border-brand-light bg-gradient-brand transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(108,160,148,0.2)] hover:shadow-[0_0_40px_rgba(108,160,148,0.4)] relative overflow-hidden";
      content = (
        <>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          <span className="font-space-grotesk text-bg-main font-bold text-lg tracking-wide z-10">
            {children}
          </span>
          <div className="bg-brand-950 rounded-full p-2 group-hover/btn:-rotate-12 group-hover/btn:translate-x-1 transition-all duration-300 z-10">
            <Send className="w-4 h-4 text-white" fill="currentColor" />
          </div>
        </>
      );
      break;

    case "tech":
      styles =
        "group flex items-center justify-center gap-4 px-8 py-4 rounded-full border border-brand-stroke bg-gradient-brand transition-transform hover:scale-[1.02] shadow-sm relative overflow-hidden";
      content = (
        <>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="font-space-grotesk text-bg-main font-bold text-lg z-10">
            {children}
          </span>
          <div className="bg-bg-main rounded-[50%] p-2 group-hover:-rotate-12 group-hover:translate-x-1 transition-all duration-300 z-10">
            <Send className="w-4 h-4 text-brand-light" fill="currentColor" />
          </div>
        </>
      );
      break;

    case "navbar":
      styles =
        "group flex items-center gap-1.5 pl-4 pr-1 py-1 rounded-full border border-[#8CBAAE] bg-gradient-to-b from-[#8DBBAF] to-[#3D887D] transition-opacity hover:opacity-90";
      content = (
        <>
          <span className="font-space-grotesk text-[#0A0D0C] text-base leading-6 font-bold">
            {children}
          </span>
          <div className="w-[30px] h-[30px] rounded-full bg-[#13201E] flex items-center justify-center flex-shrink-0 group-hover:-rotate-12 group-hover:translate-x-0.5 transition-all duration-300">
            <Send className="w-3 h-3 text-[#FCFCFD]" fill="currentColor" />
          </div>
        </>
      );
      break;

    case "mobile-nav":
      styles =
        "group flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#8CBAAE] bg-gradient-to-b from-[#8DBBAF] to-[#3D887D]";
      content = (
        <>
          <span className="font-space-grotesk text-[#0A0D0C] text-base font-bold">
            {children}
          </span>
          <Send className="w-3.5 h-3.5 text-[#0A0D0C]" fill="currentColor" />
        </>
      );
      break;

    case "blog-sidebar":
      styles =
        "group flex items-center justify-between w-full px-6 py-3 bg-gradient-brand text-brand-950 font-bold rounded-full hover:shadow-[0_0_20px_rgba(108,160,148,0.3)] transition-all shadow-[0_0_15px_rgba(108,160,148,0.2)]";
      content = (
        <>
          <span className="font-bold">{children}</span>
          <span className="w-6 h-6 rounded-full bg-brand-950 flex items-center justify-center transition-all group-hover:-rotate-12 group-hover:translate-x-0.5 duration-300">
            <Send className="w-2.5 h-2.5 text-white" fill="currentColor" />
          </span>
        </>
      );
      break;
  }

  const combinedClassName = `${styles} ${className}`.trim();

  if (isInternal) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={combinedClassName}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {content}
    </a>
  );
}
