export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="h-12 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mb-8 animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 animate-pulse">
            <div className="relative aspect-video overflow-hidden bg-gray-300 dark:bg-gray-600"></div>

            <div className="p-5 space-y-3">
              <div className="h-7 w-4/5 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-5 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="flex items-center pt-2">
                <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
