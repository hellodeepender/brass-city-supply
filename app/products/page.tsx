import Link from 'next/link';

export default function ProductsPage() {
  const productCategories = [
    {
      name: 'Bar & Beverage',
      items: [
        'Cocktail Shakers',
        'Muddlers & Bar Spoons',
        'Jiggers & Measuring Tools',
        'Ice Buckets & Tongs',
        'Wine Accessories',
        'Serving Trays',
      ],
      description: 'Professional-grade barware for restaurants, hotels, and bars',
    },
    {
      name: 'Kitchen & Dining',
      items: [
        'Serving Bowls',
        'Cookware Sets',
        'Utensil Sets',
        'Tableware Collections',
        'Food Storage',
        'Kitchen Tools',
      ],
      description: 'Functional and elegant pieces for culinary professionals',
    },
    {
      name: 'Home Décor',
      items: [
        'Decorative Vases',
        'Planters & Pots',
        'Candle Holders',
        'Wall Art',
        'Sculptures',
        'Decorative Bowls',
      ],
      description: 'Handcrafted accent pieces for retail and hospitality',
    },
    {
      name: 'Custom/OEM',
      items: [
        'Custom Designs',
        'Private Label',
        'Logo Engraving',
        'Made-to-Order',
        'Bulk Production',
        'Product Development',
      ],
      description: 'Tailored manufacturing solutions for your brand',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Product Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our comprehensive range of premium metalware products.
            All items available for wholesale orders with flexible MOQ.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brass-500 hover:shadow-xl transition-all"
            >
              {/* Category Image Placeholder */}
              <div className="bg-gradient-to-br from-brass-100 to-brass-200 h-64 flex items-center justify-center">
                <span className="text-brass-600 font-bold text-2xl uppercase tracking-wide">
                  {category.name}
                </span>
              </div>

              {/* Category Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>

                {/* Product Items */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-brass-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-block w-full bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brass-500 hover:text-navy-900 transition-all text-center"
                >
                  Request Quote for {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">
            Ordering Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-navy-900 mb-2">Minimum Order Quantity</h4>
              <p className="text-gray-600 text-sm">
                Starting at 50 units per design. Flexible MOQ for established buyers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-navy-900 mb-2">Lead Time</h4>
              <p className="text-gray-600 text-sm">
                Standard orders: 4-6 weeks. Custom designs: 6-8 weeks after approval.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-navy-900 mb-2">Materials Available</h4>
              <p className="text-gray-600 text-sm">
                Brass, copper, aluminum, steel. Silver & gold plating options available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
