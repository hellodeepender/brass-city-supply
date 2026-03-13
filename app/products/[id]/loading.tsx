export default function ProductDetailLoading() {
  return (
    <div className="animate-pulse py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="h-4 w-12 bg-gray-200 rounded" />
          <span className="text-gray-300">/</span>
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <span className="text-gray-300">/</span>
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image skeleton */}
          <div className="bg-gray-200 rounded-lg min-h-[400px]" />

          {/* Details skeleton */}
          <div>
            {/* Category badge */}
            <div className="h-7 w-28 bg-gray-200 rounded mb-4" />

            {/* Title */}
            <div className="h-10 bg-gray-200 rounded w-full mb-2" />
            <div className="h-10 bg-gray-200 rounded w-2/3 mb-6" />

            {/* Description */}
            <div className="space-y-3 mb-8">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>

            {/* Specs */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="h-6 bg-gray-200 rounded w-36 mb-4" />
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex">
                    <div className="w-32 h-4 bg-gray-200 rounded flex-shrink-0" />
                    <div className="h-4 bg-gray-200 rounded w-40 ml-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing box */}
            <div className="bg-brass-50 border-2 border-brass-200 rounded-lg p-6 mb-8">
              <div className="h-6 bg-gray-200 rounded w-64 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-48" />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 h-14 bg-gray-200 rounded-lg" />
              <div className="flex-1 h-14 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
