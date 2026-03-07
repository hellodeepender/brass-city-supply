'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ContactForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product') || '';
  const typeParam = searchParams.get('type') || '';

  const requestTypeMap: Record<string, string> = {
    sample: 'Request a Sample',
    quote: 'Get a Wholesale Quote',
  };
  const defaultRequestType = requestTypeMap[typeParam] || '';

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Request a Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your wholesale metalware needs and we&apos;ll get back to you
            within 24 hours with a detailed quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <form
                action="https://formspree.io/f/xwvrkgap"
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

                {/* Email & Phone */}
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

                {/* Website */}
                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-navy-900 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors"
                    placeholder="https://yourcompany.com"
                  />
                </div>

                {/* Product of Interest */}
                <div>
                  <label htmlFor="product_interest" className="block text-sm font-semibold text-navy-900 mb-2">
                    Product of Interest
                  </label>
                  <input
                    type="text"
                    id="product_interest"
                    name="product_interest"
                    defaultValue={productParam}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors"
                    placeholder="e.g. Copper Moscow Mule Mug, Storage Containers..."
                  />
                </div>

                {/* Request Type & Order Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="request_type" className="block text-sm font-semibold text-navy-900 mb-2">
                      Request Type *
                    </label>
                    <select
                      id="request_type"
                      name="request_type"
                      required
                      defaultValue={defaultRequestType}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select type...</option>
                      <option value="Request a Sample">Request a Sample</option>
                      <option value="Get a Wholesale Quote">Get a Wholesale Quote</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="order_quantity" className="block text-sm font-semibold text-navy-900 mb-2">
                      Estimated Order Quantity
                    </label>
                    <select
                      id="order_quantity"
                      name="order_quantity"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select quantity...</option>
                      <option value="1-10 samples">1-10 samples</option>
                      <option value="50-100 units">50-100 units</option>
                      <option value="100-500 units">100-500 units</option>
                      <option value="500+ units">500+ units</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>

                {/* Buyer Type & How Did You Hear */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="buyer_type" className="block text-sm font-semibold text-navy-900 mb-2">
                      Are you a
                    </label>
                    <select
                      id="buyer_type"
                      name="buyer_type"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Importer">Importer</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Individual">Individual</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="referral_source" className="block text-sm font-semibold text-navy-900 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="referral_source"
                      name="referral_source"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="Google Search">Google Search</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Trade Show">Trade Show</option>
                      <option value="Referral">Referral</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                    Message / Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brass-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your needs: specific products, customization requirements, timeline, shipping destination, etc."
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-brass-500 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brass-400 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We&apos;ll respond within 24 hours with pricing and availability
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-navy-900 text-white rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brass-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-brass-300 mb-1">Location</h4>
                    <p className="text-gray-300 text-sm">
                      Tampa, FL 33614
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brass-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-brass-300 mb-1">Phone</h4>
                    <a
                      href="tel:+17473561110"
                      className="text-gray-300 text-sm hover:text-brass-300 transition-colors"
                    >
                      (747) 356-1110
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brass-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-brass-300 mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/919760380050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 text-sm hover:text-brass-300 transition-colors"
                    >
                      +91 97603 80050
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brass-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-brass-300 mb-1">Response Time</h4>
                    <p className="text-gray-300 text-sm">
                      Within 24 hours<br />(Monday - Saturday)
                    </p>
                  </div>
                </div>

                {/* Lead Time */}
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brass-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-brass-300 mb-1">Lead Time</h4>
                    <p className="text-gray-300 text-sm">
                      Typical lead time: 8&ndash;12 weeks<br />from confirmed order
                    </p>
                  </div>
                </div>

                {/* Payment Terms */}
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brass-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-brass-300 mb-1">Payment Terms</h4>
                    <p className="text-gray-300 text-sm">
                      Wire transfer, PayPal,<br />and Letter of Credit
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-navy-700 my-8"></div>

              {/* What to Expect */}
              <div>
                <h4 className="font-semibold text-brass-300 mb-4">What to Expect</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  {['Detailed pricing breakdown', 'Production timeline estimate', 'Shipping options & costs', 'Customization possibilities', 'Sample availability info'].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-5 h-5 text-brass-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-16 text-center text-gray-500">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
