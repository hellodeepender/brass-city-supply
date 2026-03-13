'use client';

import Link from 'next/link';

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Error icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-8">
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-2.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Unable to Load Products
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          We had trouble loading our product catalog. This is usually temporary &mdash; please try again.
        </p>

        {error.message && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8 max-w-md mx-auto">
            <p className="text-sm text-gray-500 font-mono">{error.message}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={reset}
            className="bg-brass-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-brass-400 transition-all shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="bg-white border-2 border-navy-900 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-navy-900 hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
