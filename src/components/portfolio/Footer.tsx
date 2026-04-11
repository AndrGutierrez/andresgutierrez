import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0A100E] border-t border-brand-stroke/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Footer Content */}
        <div className="flex flex-col gap-16 md:gap-20">
          {/* Top Section - Branding and Navigation */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            {/* Brand Info */}
            <div className="flex flex-col items-start gap-4 max-w-sm">
              <h2 className="font-archivo font-medium text-4xl text-white tracking-tight">
                Andres Gutierrez
              </h2>
              <p className="font-space-grotesk text-white/60 text-base leading-relaxed">
                Software Engineer focused on scalable solutions, clean code, and premium user experiences.
              </p>
            </div>

            {/* Navigation Grid */}
            <div className="flex flex-wrap gap-16 md:gap-24">
              {/* Sitemap */}
              <div className="flex flex-col gap-6">
                <h4 className="font-space-grotesk text-white font-semibold tracking-wider text-sm uppercase">Navigation</h4>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="font-space-grotesk text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    Home
                  </Link>
                  <Link
                    href="/blog"
                    className="font-space-grotesk text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    Blog
                  </Link>
                  <a
                    href="#"
                    className="font-space-grotesk text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    Resume <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-6">
                <h4 className="font-space-grotesk text-white font-semibold tracking-wider text-sm uppercase">Legal</h4>
                <div className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="font-space-grotesk text-white/60 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="font-space-grotesk text-white/60 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-brand-stroke/10" />

          {/* Bottom Section - Copyright and Social */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            {/* Copyright */}
            <p className="font-space-grotesk text-white/40 text-sm">
              © {new Date().getFullYear()} Andres Gutierrez. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-400/20 hover:border-brand-400/50 hover:text-brand-light text-white/60 transition-all duration-300"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-400/20 hover:border-brand-400/50 hover:text-brand-light text-white/60 transition-all duration-300"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-400/20 hover:border-brand-400/50 hover:text-brand-light text-white/60 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
