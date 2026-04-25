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
          <p className="font-space-grotesk text-white/85 text-base md:text-lg mb-12">
            Software Engineer focused on scalable solutions
          </p>

          {/* Site Navigation */}
          <div className="flex items-center justify-center gap-12 mb-16">
            <Link 
              href="/" 
              className="font-space-grotesk text-white/85 hover:text-white transition-colors text-lg"
              aria-label="Home"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="font-space-grotesk text-white/85 hover:text-white transition-colors text-lg"
              aria-label="Read my blog"
            >
              Blog
            </Link>
          </div>

          {/* Divider line */}
          <div className="w-full h-px bg-white/10 mb-12" />

          {/* Bottom section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-4">
            {/* Copyright */}
            <p className="font-space-grotesk text-white/70 text-sm md:text-base">
              © {new Date().getFullYear()} Andres Gutierrez — All rights reserved
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a 
                href="https://www.instagram.com/andresg.ut" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all"
                aria-label="Follow me on Instagram"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/AndrGutierrez" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all"
                aria-label="Visit my GitHub profile"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/andres-gutierrezo" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all"
                aria-label="Connect with me on LinkedIn"
                target="_blank" 
                rel="noopener noreferrer"
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
