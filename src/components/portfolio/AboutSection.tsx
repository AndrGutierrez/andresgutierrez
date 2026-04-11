import { User, Code, Heart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function AboutSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-bg-main overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-5 blur-[120px] bg-brand-400 translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-8 flex-1 w-full lg:w-auto">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-stroke/20 bg-white/[0.02] backdrop-blur-sm w-fit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="text-brand-400" />
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400" />
                </svg>
                <span className="text-sm font-space-grotesk text-brand-400 font-medium">About</span>
              </div>

              <h2 className="font-space-grotesk font-medium text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white">
                A bit about who I am today, honestly
              </h2>
            </div>

            <p className="font-space-grotesk text-white/70 text-base md:text-lg leading-relaxed">
              Explore what makes me tick beyond the technical resume.
            </p>

            {/* About Cards */}
            <div className="flex flex-col gap-6 pt-4">
              {/* Card 1 */}
              <div className="border border-white/10 bg-white/[0.01] backdrop-blur-md rounded-2xl p-6 hover:border-brand-stroke/40 hover:bg-white/[0.02] transition-all duration-300 overflow-hidden relative group">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-brand-stroke transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-brand-stroke transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 group-hover:border-brand-stroke transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-brand-stroke transition-colors" />

                <div className="flex items-start gap-4 relative z-10">
                  <div className="mt-1 p-2 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-brand-400/30 group-hover:text-brand-400 transition-colors text-white/60">
                    <Code className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space-grotesk text-white font-semibold text-xl mb-2 group-hover:text-brand-light transition-colors">
                      Software engineer
                    </h3>
                    <p className="font-space-grotesk text-white/70 text-sm leading-relaxed">
                      I love building software — 5 years in, still excited about solving problems, from responsive UIs to scalable AWS infrastructure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-white/10 bg-white/[0.01] backdrop-blur-md rounded-2xl p-6 hover:border-brand-stroke/40 hover:bg-white/[0.02] transition-all duration-300 overflow-hidden relative group">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-brand-stroke transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-brand-stroke transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 group-hover:border-brand-stroke transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-brand-stroke transition-colors" />

                <div className="flex items-start gap-4 relative z-10">
                  <div className="mt-1 p-2 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-brand-400/30 group-hover:text-brand-400 transition-colors text-white/60">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space-grotesk text-white font-semibold text-xl mb-2 group-hover:text-brand-light transition-colors">
                      I care about the craft
                    </h3>
                    <p className="font-space-grotesk text-white/70 text-sm leading-relaxed">
                      Clean code, thoughtful architecture, and interfaces that feel good to use matter to me personally.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-white/10 bg-white/[0.01] backdrop-blur-md rounded-2xl p-6 hover:border-brand-stroke/40 hover:bg-white/[0.02] transition-all duration-300 overflow-hidden relative group">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-brand-stroke transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-brand-stroke transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 group-hover:border-brand-stroke transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-brand-stroke transition-colors" />

                <div className="flex items-start gap-4 relative z-10">
                  <div className="mt-1 p-2 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-brand-400/30 group-hover:text-brand-400 transition-colors text-white/60">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space-grotesk text-white font-semibold text-xl mb-2 group-hover:text-brand-light transition-colors">
                      Tech is genuinely my hobby
                    </h3>
                    <p className="font-space-grotesk text-white/70 text-sm leading-relaxed">
                      Hardware tinkering, cloud infrastructure experiments, open-source contributions — I do this stuff for fun, not just for work.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <p className="font-space-grotesk text-white/60 text-base italic mt-4 pt-4 border-t border-white/10">
              "This site is a little bit about who I am as an engineer, and a little bit about who I am as a person. Both feel equally important to share."
            </p>
          </div>

          {/* Right - Profile Container */}
          <div className="relative w-full lg:w-auto h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center flex-1 rounded-3xl overflow-hidden border border-brand-stroke/20 bg-[#13201E] group">
            <div className="absolute inset-0 bg-gradient-brand opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute top-0 w-full h-[50%] bg-gradient-to-b from-brand-light/5 to-transparent pointer-events-none" />

            <div className="flex flex-col items-center gap-6 z-10 text-brand-light">
              <div className="w-24 h-24 rounded-full bg-brand-400/10 flex items-center justify-center p-6 border border-brand-stroke/30">
                <User className="w-full h-full text-brand-light opacity-50" />
              </div>
              <p className="font-space-grotesk text-brand-light/70 uppercase tracking-widest text-sm font-bold">
                Profile Placeholder
              </p>
            </div>

            {/* Social Icons */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[#13201E]/80 backdrop-blur-xl px-6 py-3 rounded-full border border-brand-stroke/30">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-[#13201E]" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-white/60 transition-colors border border-white/5"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-white/60 transition-colors border border-white/5"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
