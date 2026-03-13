import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Brass City Supply',
  description: 'The page you are looking for could not be found. Browse our wholesale metalware catalog or contact us for assistance.',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Badge */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-brass-100 rounded-full mb-8">
          <span className="text-4xl font-bold text-brass-600">404</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-brass-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-brass-400 transition-all shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-all"
          >
            Browse Products
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
