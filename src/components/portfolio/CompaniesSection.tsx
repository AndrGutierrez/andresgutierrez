export default function CompaniesSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-bg-section overflow-hidden border-t border-brand-stroke/5">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-5 blur-[100px] bg-brand-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-stroke/20 bg-white/[0.02] backdrop-blur-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="text-brand-400" />
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400" />
              </svg>
              <span className="text-sm font-space-grotesk text-brand-400 font-medium">Trusted by</span>
            </div>

            <h2 className="font-archivo font-medium text-4xl md:text-5xl lg:text-6xl text-center text-white tracking-tight">
              Companies I've worked with
            </h2>
          </div>

          <p className="font-space-grotesk text-white/90 text-base md:text-lg text-center max-w-2xl leading-relaxed">
            From early-stage startups to growing companies — delivering solutions that scale with the business.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Company 1 */}
          <div className="relative group border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-2xl h-[140px] md:h-[147px] flex items-center justify-center hover:border-brand-stroke/30 transition-all duration-500 hover:bg-white/[0.03]">
            {/* Corner Decorators */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />

            <div className="w-full h-full flex items-center justify-center p-8">
              <img
                src="https://andresgutierrez.me/images/clients/gobuyside.webp"
                alt="Company 1"
                className="max-w-full max-h-[50px] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Company 2 */}
          <div className="relative group border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-2xl h-[140px] md:h-[147px] flex items-center justify-center hover:border-brand-stroke/30 transition-all duration-500 hover:bg-white/[0.03]">
            {/* Corner Decorators */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />

            <div className="w-full h-full flex items-center justify-center p-8">
              <img
                // TODO: change to webp
                src="https://andresgutierrez.me/images/clients/zeitfur.svg"
                alt="Company 2"
                className="max-w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Company 3 */}
          <div className="relative group border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-2xl h-[140px] md:h-[147px] flex items-center justify-center hover:border-brand-stroke/30 transition-all duration-500 hover:bg-white/[0.03]">
            {/* Corner Decorators */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-brand-stroke transition-colors duration-500" />

            <div className="w-full h-full flex items-center justify-center p-8">
              <img
                src="https://andresgutierrez.me/images/clients/uprospect.webp"
                alt="Company 3"
                className="max-w-full max-h-[25px] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
