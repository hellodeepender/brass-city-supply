'use client';

import Link from 'next/link';

export default function ProductDetailError({
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Unable to Load Product
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          We couldn&apos;t load this product&apos;s details. Please try again or browse our full catalog.
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
            href="/products"
            className="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-all"
          >
            Browse All Products
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
