export default function Loading() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="prose prose-lg prose-slate dark:prose-invert max-w-none animate-pulse">
        {/* Featured Image Skeleton */}
        <div
          className="w-full mb-6 rounded-lg bg-gray-300 dark:bg-gray-700"
          style={{ height: '300px' }}
        ></div>

        {/* Title Skeleton */}
        <div className="h-10 w-full bg-gray-200 dark:bg-gray-600 rounded mb-4"></div>
        <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-600 rounded mb-8"></div>

        {/* Meta Info Skeleton */}
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded"></div>
          <span className="mx-2">•</span>
          <div className="h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded"></div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded"></div>

          {/* Code block skeleton */}
          <div className="my-6 rounded-md overflow-hidden">
            <div className="h-8 bg-gray-800 dark:bg-gray-900 flex items-center px-4">
              <div className="h-3 w-16 bg-gray-600 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800">
              <div className="space-y-3">
                <div className="h-4 w-11/12 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="h-4 w-10/12 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="h-4 w-9/12 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>

          {/* More content */}
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    </main>
  )
}
