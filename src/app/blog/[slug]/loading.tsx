export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-main text-white font-space-grotesk relative overflow-hidden">
      {/* Hero Skeleton */}
      <section className="relative pt-12 pb-20 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="max-w-[1240px] mx-auto space-y-8 animate-pulse">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand/20"></div>
            <div className="h-4 w-20 bg-white/5 rounded"></div>
          </div>

          <div className="space-y-4">
            <div className="h-12 w-3/4 bg-white/5 rounded-lg"></div>
            <div className="h-12 w-1/2 bg-white/5 rounded-lg"></div>
          </div>

          <div className="w-full aspect-[21/9] md:h-[400px] bg-white/5 rounded-2xl border border-white/10"></div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="pb-32 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_287px] gap-12 xl:gap-24">
          
          <div className="space-y-8 animate-pulse">
            <div className="space-y-4">
              <div className="h-4 w-full bg-white/5 rounded"></div>
              <div className="h-4 w-11/12 bg-white/5 rounded"></div>
              <div className="h-4 w-10/12 bg-white/5 rounded"></div>
              <div className="h-4 w-full bg-white/5 rounded"></div>
            </div>
            
            <div className="h-64 w-full bg-white/5 rounded-2xl border border-white/10"></div>
            
            <div className="space-y-4">
              <div className="h-4 w-full bg-white/5 rounded"></div>
              <div className="h-4 w-11/12 bg-white/5 rounded"></div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <aside className="space-y-8 lg:block hidden">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6 animate-pulse">
              <div className="space-y-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-white/5">
                    <div className="h-4 w-20 bg-white/5 rounded"></div>
                    <div className="h-4 w-24 bg-white/5 rounded"></div>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="h-6 w-3/4 bg-white/5 rounded"></div>
                <div className="h-4 w-full bg-white/5 rounded"></div>
                <div className="h-12 w-full bg-brand/10 rounded-full"></div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
