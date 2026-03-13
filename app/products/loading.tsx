export default function ProductsLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gray-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-12 bg-gray-300 rounded-lg max-w-lg mx-auto mb-4" />
          <div className="h-6 bg-gray-300 rounded max-w-sm mx-auto" />
        </div>
      </div>

      {/* Filter bar skeleton */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 w-28 bg-gray-200 rounded-lg" />
            ))}
          </div>

          {/* Product grid skeleton - 6 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-200 h-64" />
                <div className="p-6">
                  <div className="h-5 bg-gray-200 rounded w-24 mb-3" />
                  <div className="h-6 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-44" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info section skeleton */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="h-7 bg-gray-200 rounded w-56 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i}>
                  <div className="h-5 bg-gray-200 rounded w-36 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-1" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
