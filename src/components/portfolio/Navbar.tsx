"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const AGLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.623 24.7539C18.9357 23.4411 21.0643 23.4411 22.377 24.7539L27.1309 29.5078C28.4435 30.8206 28.4435 32.9489 27.1309 34.2617L22.377 39.0156C21.0643 40.3283 18.9357 40.3283 17.623 39.0156L12.8691 34.2617C11.5565 32.949 11.5566 30.8206 12.8691 29.5078L17.623 24.7539ZM5.73828 12.8691C7.05098 11.5565 9.17942 11.5566 10.4922 12.8691L15.2461 17.623C16.5589 18.9357 16.5589 21.0643 15.2461 22.377L10.4922 27.1309C9.17942 28.4435 7.05101 28.4435 5.73828 27.1309L0.984375 22.377C-0.328252 21.0643 -0.328313 18.9357 0.984375 17.623L5.73828 12.8691ZM29.5078 12.8691C30.8206 11.5566 32.949 11.5565 34.2617 12.8691L39.0156 17.623C40.3283 18.9357 40.3283 21.0643 39.0156 22.377L34.2617 27.1309C32.9489 28.4435 30.8206 28.4435 29.5078 27.1309L24.7539 22.377C23.4411 21.0643 23.4411 18.9357 24.7539 17.623L29.5078 12.8691ZM17.623 0.984375C18.9357 -0.328316 21.0643 -0.328255 22.377 0.984375L27.1309 5.73828C28.4435 7.05105 28.4435 9.17938 27.1309 10.4922L22.377 15.2461C21.0643 16.5589 18.9357 16.5589 17.623 15.2461L12.8691 10.4922C11.5566 9.17938 11.5565 7.05102 12.8691 5.73828L17.623 0.984375Z"
      fill="url(#navGrad)"
    />
    <defs>
      <linearGradient
        id="navGrad"
        x1="20"
        y1="0"
        x2="20"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8DBBAF" />
        <stop offset="1" stopColor="#3D887D" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
      <nav
        className={`flex items-center justify-between w-full max-w-[1240px] px-4 py-4 rounded-full border border-white/20 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/30"
            : "backdrop-blur-[10px] bg-black/10"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <AGLogo />
          <span
            className="font-archivo font-extrabold text-xl text-gradient-brand"
            style={{ fontStretch: "125%" }}
          >
            AG.
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-space-grotesk text-[#FCFCFD] text-base leading-6 hover:text-white/80 transition-colors"
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="font-space-grotesk text-white/80 text-base leading-6 hover:text-white/70 transition-colors"
            aria-label="Read my blog"
          >
            Blog
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href="mailto:mail@andresgutierrez.me"
            className="flex items-center gap-1.5 pl-4 pr-1 py-1 rounded-full border border-[#8CBAAE] bg-gradient-to-b from-[#8DBBAF] to-[#3D887D] transition-opacity hover:opacity-90"
            aria-label="Send an email to mail@andresgutierrez.me"
          >
            <span className="font-space-grotesk text-[#0A0D0C] text-base leading-6">
              Get in touch
            </span>
            <div className="w-[30px] h-[30px] rounded-full bg-[#13201E] flex items-center justify-center flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M10.9378 4.0622L3.75 11.25M4.99969 3.75002H11.25V10.0003"
                  stroke="#FCFCFD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 rounded-2xl border border-white/20 bg-[#0B1211]/95 backdrop-blur-xl p-6 flex flex-col gap-4 md:hidden">
          <Link
            href="/"
            className="font-space-grotesk text-white text-lg"
            aria-label="Home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="font-space-grotesk text-white/80 text-lg"
            aria-label="Blog"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <a
            href="mailto:mail@andresgutierrez.me"
            className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-[#8CBAAE] bg-gradient-to-b from-[#8DBBAF] to-[#3D887D] mt-2"
            aria-label="Send an email to mail@andresgutierrez.me"
            onClick={() => setMenuOpen(false)}
          >
            <span className="font-space-grotesk text-[#0A0D0C] text-base">
              Get in touch
            </span>
          </a>
        </div>
      )}
    </header>
  );
}
