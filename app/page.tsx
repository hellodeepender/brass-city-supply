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
      slug: 'bar-beverage',
    },
    {
      name: 'Kitchen & Dining',
      description: 'Cookware, serving bowls, utensils, and tableware',
      slug: 'kitchen-dining',
    },
    {
      name: 'Home D\u00e9cor',
      description: 'Vases, planters, candle holders, and decorative accents',
      slug: 'home-decor',
    },
    {
      name: 'Custom/OEM',
      description: 'Custom designs, private label, and made-to-order manufacturing',
      slug: 'custom-oem',
    },
  ];

  const trustBadges = [
    { icon: '\ud83c\udf0d', title: 'Worldwide Export', text: 'Shipping to USA & 50+ countries' },
    { icon: '\ud83d\udce6', title: 'Flexible MOQ', text: 'Minimum orders starting at 50 units' },
    { icon: '\u2699\ufe0f', title: 'Custom Orders', text: 'On-demand manufacturing & private label' },
    { icon: '\u2713', title: 'Quality Assured', text: 'Export-Ready & Globally Shipped' },
  ];

  const steps = [
    { number: '1', title: 'Browse & Discover', text: 'Explore our catalog of handcrafted metalware' },
    { number: '2', title: 'Request Samples', text: 'Get samples shipped within 5\u20137 business days' },
    { number: '3', title: 'Place Your Order', text: 'Receive a formal quote with itemized pricing' },
    { number: '4', title: 'We Ship It', text: 'Quality checked, packaged, and shipped to you' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Metalware<br />
              <span className="text-brass-400">from India&apos;s Brass City</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Direct-from-factory wholesale supplier of handcrafted brass, copper, aluminum and steel
              products. Browse our catalog, request samples, and place bulk orders &mdash; all with no
              minimums on samples.
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
                <div className="bg-gradient-to-br from-brass-100 to-brass-200 h-48 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-brass-600 font-semibold text-sm uppercase tracking-wide">
                    {category.name}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-brass-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <Link
                  href="/products"
                  className="inline-block bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brass-500 hover:text-navy-900 transition-all"
                >
                  Browse Products
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              How It Works &mdash; Simple as 1-2-3-4
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-brass-500 text-navy-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/how-it-works"
              className="inline-block text-brass-600 font-semibold hover:text-brass-700 transition-colors"
            >
              Learn more about our process &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center">
              <div className="w-14 h-14 bg-brass-100 text-brass-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">No Upfront Commitment</h3>
              <p className="text-gray-600">
                Browse and request samples before placing any bulk order
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center">
              <div className="w-14 h-14 bg-brass-100 text-brass-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Factory Direct Pricing</h3>
              <p className="text-gray-600">
                Cut out the middleman. Buy direct from Moradabad manufacturers.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center">
              <div className="w-14 h-14 bg-brass-100 text-brass-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Flexible MOQs</h3>
              <p className="text-gray-600">
                Starting from 50 units for most products. Custom orders welcome.
              </p>
            </div>
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
