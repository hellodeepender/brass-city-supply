'use client';

export default function ContactPage() {
  const productCategories = [
    'Bar & Beverage',
    'Kitchen & Dining',
    'Home Décor',
    'Custom/OEM',
    'Multiple Categories',
    'Not Sure Yet',
  ];

  const orderQuantities = [
    '50-100 units',
    '100-500 units',
    '500-1,000 units',
    '1,000-5,000 units',
    '5,000+ units',
    'Need consultation',
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Request a Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your wholesale metalware needs and we'll get back to you
            within 24 hours with a detailed quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-navy-900 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors"
                    placeholder="Your Company LLC"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Product Interest */}
                <div>
                  <label htmlFor="product_interest" className="block text-sm font-semibold text-navy-900 mb-2">
                    Product Interest *
                  </label>
                  <select
                    id="product_interest"
                    name="product_interest"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select a category...</option>
                    {productCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Order Quantity */}
                <div>
                  <label htmlFor="order_quantity" className="block text-sm font-semibold text-navy-900 mb-2">
                    Estimated Order Quantity *
                  </label>
                  <select
                    id="order_quantity"
                    name="order_quantity"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select quantity range...</option>
                    {orderQuantities.map((quantity, index) => (
                      <option key={index} value={quantity}>
                        {quantity}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your needs: specific products, customization requirements, timeline, shipping destination, etc."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brass-500 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brass-400 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Quote Request
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours with pricing and availability
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-navy-900 text-white rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Location */}
                <div>
                  <div className="flex items-start space-x-3 mb-2">
                    <svg className="w-6 h-6 text-brass-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-brass-300 mb-1">Location</h4>
                      <p className="text-gray-300 text-sm">
                        Moradabad, Uttar Pradesh<br />
                        India 244001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div>
                  <div className="flex items-start space-x-3 mb-2">
                    <svg className="w-6 h-6 text-brass-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-brass-300 mb-1">Response Time</h4>
                      <p className="text-gray-300 text-sm">
                        Within 24 hours<br />
                        (Monday - Saturday)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div>
                  <div className="flex items-start space-x-3 mb-2">
                    <svg className="w-6 h-6 text-brass-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-brass-300 mb-1">Business Hours</h4>
                      <p className="text-gray-300 text-sm">
                        9:00 AM - 6:00 PM IST<br />
                        Monday - Saturday
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-navy-700 my-8"></div>

              {/* What to Expect */}
              <div>
                <h4 className="font-semibold text-brass-300 mb-4">What to Expect</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brass-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Detailed pricing breakdown
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brass-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Production timeline estimate
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brass-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Shipping options & costs
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brass-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Customization possibilities
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brass-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sample availability info
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
