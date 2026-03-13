'use client';

import Link from 'next/link';

export default function BulkQuoteBar({
  selectedProducts,
  onClear,
}: {
  selectedProducts: string[];
  onClear: () => void;
}) {
  if (selectedProducts.length === 0) return null;

  const quoteUrl = `/contact?product=${encodeURIComponent(selectedProducts.join(', '))}&type=quote`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-900 border-t-4 border-brass-500 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="flex-shrink-0 bg-brass-500 text-navy-900 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
            {selectedProducts.length}
          </span>
          <span className="text-white font-medium text-sm sm:text-base truncate">
            {selectedProducts.length === 1
              ? '1 product selected'
              : `${selectedProducts.length} products selected`}
          </span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onClear}
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors px-3 py-2"
          >
            Clear
          </button>
          <Link
            href={quoteUrl}
            className="bg-brass-500 text-navy-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brass-400 transition-all shadow-lg"
          >
            Request Bulk Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
