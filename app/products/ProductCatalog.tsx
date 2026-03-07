'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/lib/products';

export default function ProductCatalog({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeCategory === 'All'
              ? 'bg-navy-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-navy-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brass-500 hover:shadow-xl transition-all flex flex-col"
          >
            {/* Image */}
            <Link href={`/products/${product.id}`}>
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ) : (
                <div className="w-full h-56 bg-gradient-to-br from-brass-100 to-brass-300 flex items-center justify-center">
                  <span className="text-brass-700 font-semibold text-sm uppercase tracking-wide text-center px-4">
                    {product.name}
                  </span>
                </div>
              )}
            </Link>

            <div className="p-6 flex flex-col flex-1">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-block bg-brass-100 text-brass-800 text-xs font-semibold px-2.5 py-1 rounded">
                  {product.category}
                </span>
                {product.status === 'Coming Soon' && (
                  <span className="inline-block bg-navy-100 text-navy-800 text-xs font-semibold px-2.5 py-1 rounded">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Name */}
              <Link href={`/products/${product.id}`}>
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-brass-600 transition-colors">
                  {product.name}
                </h3>
              </Link>

              {/* Details */}
              <div className="space-y-1 text-sm text-gray-600 mb-4">
                <p><span className="font-medium text-gray-700">Material:</span> {product.material}</p>
                <p><span className="font-medium text-gray-700">Dimensions:</span> {product.dimensions}</p>
                <p><span className="font-medium text-gray-700">MOQ:</span> {product.moq}</p>
              </div>

              {/* Pricing */}
              <p className="text-sm font-semibold text-brass-600 mb-4">
                Wholesale pricing on request
              </p>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}&type=sample`}
                  className="flex-1 text-center bg-white border-2 border-navy-900 text-navy-900 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-900 hover:text-white transition-all"
                >
                  Request Sample
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}&type=quote`}
                  className="flex-1 text-center bg-brass-500 text-navy-900 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-brass-400 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12">No products found in this category.</p>
      )}
    </>
  );
}
