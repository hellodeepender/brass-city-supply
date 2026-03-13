'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import type { Product } from '@/lib/products';
import BulkQuoteBar from '@/components/BulkQuoteBar';

// Helper to parse numeric MOQ from string like "50 units"
function parseMoq(moq: string): number {
  const match = moq.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

// MOQ range options
const MOQ_RANGES = [
  { label: 'All MOQs', min: 0, max: Infinity },
  { label: 'Under 25', min: 0, max: 24 },
  { label: '25 - 50', min: 25, max: 50 },
  { label: '50 - 100', min: 50, max: 100 },
  { label: '100+', min: 100, max: Infinity },
];

export default function ProductCatalog({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMaterial, setActiveMaterial] = useState('All');
  const [activeMoqRange, setActiveMoqRange] = useState(0); // index into MOQ_RANGES
  const [bulkMode, setBulkMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Extract unique materials from products
  const materials = useMemo(() => {
    const mats = Array.from(new Set(products.map((p) => p.material).filter(Boolean)));
    mats.sort();
    return mats;
  }, [products]);

  // Filtered products
  const filtered = useMemo(() => {
    let result = products;

    // Category filter
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Material filter
    if (activeMaterial !== 'All') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    // MOQ range filter
    if (activeMoqRange !== 0) {
      const range = MOQ_RANGES[activeMoqRange];
      result = result.filter((p) => {
        const moq = parseMoq(p.moq);
        return moq >= range.min && moq <= range.max;
      });
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return result;
  }, [products, activeCategory, activeMaterial, activeMoqRange, searchQuery]);

  // Selection helpers
  const selectedProducts = useMemo(
    () => products.filter((p) => selectedIds.has(p.id)).map((p) => p.name),
    [products, selectedIds]
  );

  function toggleSelect(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function clearSelection() {
    setSelectedIds(new Set());
  }

  function toggleBulkMode() {
    if (bulkMode) {
      // exiting bulk mode clears selection
      setSelectedIds(new Set());
    }
    setBulkMode(!bulkMode);
  }

  // Check if any filters are active
  const hasActiveFilters =
    activeCategory !== 'All' ||
    activeMaterial !== 'All' ||
    activeMoqRange !== 0 ||
    searchQuery.trim() !== '';

  function clearAllFilters() {
    setActiveCategory('All');
    setActiveMaterial('All');
    setActiveMoqRange(0);
    setSearchQuery('');
  }

  return (
    <>
      {/* Search + Bulk Mode Toggle */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, material, or description..."
            className="w-full pl-11 pr-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-brass-500 focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <button
          onClick={toggleBulkMode}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex-shrink-0 ${
            bulkMode
              ? 'bg-brass-500 text-navy-900'
              : 'bg-white border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          {bulkMode ? 'Exit Bulk Quote' : 'Bulk Quote'}
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Category</label>
        <div className="flex flex-wrap gap-2">
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
      </div>

      {/* Material + MOQ Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Material Filter */}
        <div className="flex-1 sm:max-w-xs">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Material</label>
          <select
            value={activeMaterial}
            onChange={(e) => setActiveMaterial(e.target.value)}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm font-medium focus:border-brass-500 focus:outline-none transition-colors bg-white text-gray-700"
          >
            <option value="All">All Materials</option>
            {materials.map((mat) => (
              <option key={mat} value={mat}>
                {mat}
              </option>
            ))}
          </select>
        </div>

        {/* MOQ Range Filter */}
        <div className="flex-1 sm:max-w-xs">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Min. Order Qty</label>
          <select
            value={activeMoqRange}
            onChange={(e) => setActiveMoqRange(Number(e.target.value))}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm font-medium focus:border-brass-500 focus:outline-none transition-colors bg-white text-gray-700"
          >
            {MOQ_RANGES.map((range, i) => (
              <option key={range.label} value={i}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Clear All Filters */}
        {hasActiveFilters && (
          <div className="flex items-end">
            <button
              onClick={clearAllFilters}
              className="px-4 py-2.5 text-sm font-medium text-brass-700 hover:text-brass-900 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          {hasActiveFilters ? ' matching filters' : ''}
        </p>
        {bulkMode && (
          <p className="text-sm text-brass-700 font-medium">
            Click products to select them for a bulk quote
          </p>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => {
          const isSelected = selectedIds.has(product.id);

          return (
            <div
              key={product.id}
              className={`group bg-white border-2 rounded-lg overflow-hidden hover:shadow-xl transition-all flex flex-col relative ${
                bulkMode && isSelected
                  ? 'border-brass-500 ring-2 ring-brass-300 shadow-lg'
                  : bulkMode
                  ? 'border-gray-200 hover:border-brass-400 cursor-pointer'
                  : 'border-gray-200 hover:border-brass-500'
              }`}
              onClick={bulkMode ? () => toggleSelect(product.id) : undefined}
            >
              {/* Selection Checkbox (bulk mode) */}
              {bulkMode && (
                <div className="absolute top-3 right-3 z-10">
                  <div
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-brass-500 border-brass-500'
                        : 'bg-white border-gray-300 group-hover:border-brass-400'
                    }`}
                  >
                    {isSelected && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              )}

              {/* Image */}
              {bulkMode ? (
                <div className="cursor-pointer">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-56 bg-gradient-to-br from-brass-100 to-brass-300 flex items-center justify-center">
                      <span className="text-brass-700 font-semibold text-sm uppercase tracking-wide text-center px-4">
                        {product.name}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={`/products/${product.id}`}>
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-56 bg-gradient-to-br from-brass-100 to-brass-300 flex items-center justify-center">
                      <span className="text-brass-700 font-semibold text-sm uppercase tracking-wide text-center px-4">
                        {product.name}
                      </span>
                    </div>
                  )}
                </Link>
              )}

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
                {bulkMode ? (
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-brass-600 transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                ) : (
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-brass-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                )}

                {/* Details */}
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>
                    <span className="font-medium text-gray-700">Material:</span> {product.material}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Dimensions:</span> {product.dimensions}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">MOQ:</span> {product.moq}
                  </p>
                </div>

                {/* Pricing */}
                <p className="text-sm font-semibold text-brass-600 mb-4">Wholesale pricing on request</p>

                {/* Buttons */}
                {!bulkMode && (
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
                )}

                {/* Bulk mode select indicator */}
                {bulkMode && (
                  <div className="mt-auto">
                    <div
                      className={`text-center py-2.5 rounded-lg text-sm font-semibold transition-all ${
                        isSelected
                          ? 'bg-brass-500 text-navy-900'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {isSelected ? 'Selected' : 'Click to select'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-3">No products found matching your criteria.</p>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-brass-600 hover:text-brass-800 text-sm font-semibold transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}

      {/* Bulk Quote Floating Bar */}
      {bulkMode && (
        <BulkQuoteBar selectedProducts={selectedProducts} onClear={clearSelection} />
      )}

      {/* Bottom spacer when bulk bar is visible */}
      {bulkMode && selectedProducts.length > 0 && <div className="h-20" />}
    </>
  );
}
