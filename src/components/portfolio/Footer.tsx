import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="relative w-full bg-bg-main pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Brand Name */}
          <h2 className="font-archivo font-medium text-4xl md:text-5xl lg:text-6xl text-white tracking-widest uppercase mb-4">
            Andres Gutierrez
          </h2>
          
          {/* Subtitle */}
          <p className="font-space-grotesk text-white/60 text-base md:text-lg mb-12">
            Software Engineer focused on scalable solutions
          </p>

          {/* Site Navigation */}
          <div className="flex items-center justify-center gap-12 mb-16">
            <Link 
              href="/" 
              className="font-space-grotesk text-white/60 hover:text-white transition-colors text-lg"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="font-space-grotesk text-white/60 hover:text-white transition-colors text-lg"
            >
              Blog
            </Link>
          </div>

          {/* Divider line */}
          <div className="w-full h-px bg-white/10 mb-12" />

          {/* Bottom section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-4">
            {/* Copyright */}
            <p className="font-space-grotesk text-white/40 text-sm md:text-base">
              © {new Date().getFullYear()} Andres Gutierrez — All rights reserved
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#fcfcfd] hover:text-brand-400 transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-light transition-colors"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-light transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
