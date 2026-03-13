export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gray-200 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-12 bg-gray-300 rounded-lg max-w-2xl mx-auto mb-6" />
          <div className="h-6 bg-gray-300 rounded max-w-xl mx-auto mb-4" />
          <div className="h-6 bg-gray-300 rounded max-w-lg mx-auto mb-8" />
          <div className="flex justify-center gap-4">
            <div className="h-14 w-44 bg-gray-300 rounded-lg" />
            <div className="h-14 w-44 bg-gray-300 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Trust badges skeleton */}
      <div className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="h-10 w-10 bg-gray-300 rounded-full mx-auto mb-3" />
                <div className="h-4 bg-gray-300 rounded w-32 mx-auto mb-2" />
                <div className="h-3 bg-gray-300 rounded w-40 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 bg-gray-200 rounded max-w-md mx-auto mb-4" />
          <div className="h-5 bg-gray-200 rounded max-w-sm mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-200 h-64" />
                <div className="p-6">
                  <div className="h-5 bg-gray-200 rounded w-20 mb-3" />
                  <div className="h-5 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
