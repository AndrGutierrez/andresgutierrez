export default function LoadingWheel() {
  return (
    <div className="flex justify-center items-center h-full top-0 left-0 right-0 absolute">
      <div className="relative">
        <svg
          className="animate-spin h-20 w-20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" /> {/* blue-400 */}
              <stop offset="100%" stopColor="#a855f7" /> {/* purple-500 */}
            </linearGradient>
          </defs>
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="url(#loadingGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="20, 100"
            fill="none"
            opacity="0.9"
          />
        </svg>
        <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-md"></div>
      </div>
    </div>
  )
}
