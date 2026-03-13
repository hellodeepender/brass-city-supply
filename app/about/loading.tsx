export default function AboutLoading() {
  return (
    <div className="animate-pulse py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-lg max-w-lg mx-auto mb-6" />
          <div className="h-6 bg-gray-200 rounded max-w-2xl mx-auto mb-2" />
          <div className="h-6 bg-gray-200 rounded max-w-xl mx-auto" />
        </div>

        {/* Story section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg" />
            <div>
              <div className="h-8 bg-gray-200 rounded w-64 mb-6" />
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
              </div>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-gray-200 rounded-lg p-8 sm:p-12 mb-20">
          <div className="h-8 bg-gray-300 rounded max-w-xs mx-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="h-10 bg-gray-300 rounded w-20 mx-auto mb-2" />
                <div className="h-4 bg-gray-300 rounded w-24 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded max-w-md mx-auto mb-4" />
            <div className="h-5 bg-gray-200 rounded max-w-sm mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <div className="h-6 bg-gray-200 rounded w-36 mb-4" />
                <div className="space-y-2">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="h-4 bg-gray-200 rounded w-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
