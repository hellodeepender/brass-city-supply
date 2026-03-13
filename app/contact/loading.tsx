export default function ContactLoading() {
  return (
    <div className="animate-pulse py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-lg max-w-md mx-auto mb-4" />
          <div className="h-6 bg-gray-200 rounded max-w-2xl mx-auto mb-2" />
          <div className="h-6 bg-gray-200 rounded max-w-xl mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form skeleton */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <div className="space-y-6">
                {/* Name field */}
                <div>
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                  <div className="h-12 bg-gray-100 rounded-lg border-2 border-gray-200" />
                </div>
                {/* Company field */}
                <div>
                  <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
                  <div className="h-12 bg-gray-100 rounded-lg border-2 border-gray-200" />
                </div>
                {/* Email & Phone row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-28 mb-2" />
                    <div className="h-12 bg-gray-100 rounded-lg border-2 border-gray-200" />
                  </div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-28 mb-2" />
                    <div className="h-12 bg-gray-100 rounded-lg border-2 border-gray-200" />
                  </div>
                </div>
                {/* Message field */}
                <div>
                  <div className="h-4 bg-gray-200 rounded w-20 mb-2" />
                  <div className="h-32 bg-gray-100 rounded-lg border-2 border-gray-200" />
                </div>
                {/* Submit button */}
                <div className="h-14 bg-gray-200 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Sidebar skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="h-7 bg-gray-300 rounded w-48 mb-6" />
              <div className="space-y-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded flex-shrink-0" />
                    <div>
                      <div className="h-4 bg-gray-300 rounded w-24 mb-2" />
                      <div className="h-3 bg-gray-300 rounded w-36" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
