import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Brass City Supply | Wholesale Metalware Supplier from India',
  description: "US wholesale supplier of handcrafted brass, copper, aluminum and steel products. Sourced from Moradabad, India. MOQ from 50 units. Bar accessories, kitchenware, home decor.",
};

export default function Home() {
  const categories = [
    {
      name: 'Bar & Beverage',
      description: 'Shakers, muddlers, jiggers, barware, and serving pieces',
      slug: 'bar-beverage'
    },
    {
      name: 'Kitchen & Dining',
      description: 'Cookware, serving bowls, utensils, and tableware',
      slug: 'kitchen-dining'
    },
    {
      name: 'Home Décor',
      description: 'Vases, planters, candle holders, and decorative accents',
      slug: 'home-decor'
    },
    {
      name: 'Custom/OEM',
      description: 'Custom designs, private label, and made-to-order manufacturing',
      slug: 'custom-oem'
    },
  ];

  const trustBadges = [
    { icon: '🌍', title: 'Worldwide Export', text: 'Shipping to USA & 50+ countries' },
    { icon: '📦', title: 'Flexible MOQ', text: 'Minimum orders starting at 50 units' },
    { icon: '⚙️', title: 'Custom Orders', text: 'On-demand manufacturing & private label' },
    { icon: '✓', title: 'Quality Assured', text: 'Export-Ready & Globally Shipped' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Metalware<br />
              <span className="text-brass-400">from India's Brass City</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Wholesale supplier of handcrafted brass, copper, and aluminum products
              for US hospitality, retail, and corporate buyers
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-brass-500 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brass-400 transition-all shadow-lg hover:shadow-xl"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h3 className="font-semibold text-navy-900 mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of premium metalware designed for wholesale buyers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-brass-500 hover:shadow-xl transition-all"
              >
                {/* Placeholder Image */}
                <div className="bg-gradient-to-br from-brass-100 to-brass-200 h-48 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-brass-600 font-semibold text-sm uppercase tracking-wide">
                    {category.name}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-brass-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brass-500 hover:text-navy-900 transition-all"
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Place an Order?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom quote for your wholesale metalware needs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brass-500 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brass-400 transition-all shadow-lg hover:shadow-xl"
          >
            Get a Quote Today
          </Link>
        </div>
      </section>
    </>
  );
}
