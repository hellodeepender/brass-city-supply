'use client';

import type { Product } from '@/lib/products';

export default function CatalogContent({ products }: { products: Product[] }) {
  return (
    <>
      {/* Print Button */}
      <div className="mb-6 flex justify-end no-print">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Print / Download PDF
        </button>
      </div>

      {/* Products Grid */}
      <div className="catalog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="catalog-item bg-white border border-gray-200 rounded-lg p-4 hover:border-brass-400 transition-colors"
          >
            {/* Image */}
            <div className="mb-3">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-36 object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-full h-36 bg-gradient-to-br from-brass-100 to-brass-300 rounded flex items-center justify-center">
                  <span className="text-brass-700 font-semibold text-xs uppercase tracking-wide text-center px-2">
                    {product.name}
                  </span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex items-start gap-2 mb-2">
              <h3 className="text-sm font-bold text-navy-900 leading-tight flex-1">
                {product.name}
              </h3>
              {product.status === 'Coming Soon' && (
                <span className="text-[10px] bg-navy-100 text-navy-800 font-semibold px-1.5 py-0.5 rounded flex-shrink-0">
                  Soon
                </span>
              )}
            </div>

            <div className="space-y-0.5 text-xs text-gray-600">
              <p>
                <span className="font-medium text-gray-700">Material:</span>{' '}
                {product.material}
              </p>
              <p>
                <span className="font-medium text-gray-700">Size:</span>{' '}
                {product.dimensions}
              </p>
              {product.capacity && (
                <p>
                  <span className="font-medium text-gray-700">Capacity:</span>{' '}
                  {product.capacity}
                </p>
              )}
              <p>
                <span className="font-medium text-gray-700">MOQ:</span>{' '}
                {product.moq}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-gray-100">
              <span className="text-xs font-semibold text-brass-600">
                Wholesale pricing on request
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
