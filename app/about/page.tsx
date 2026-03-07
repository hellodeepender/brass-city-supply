import Link from 'next/link';

export default function AboutPage() {
  const capabilities = [
    {
      title: 'Material Expertise',
      items: ['Brass', 'Copper', 'Aluminum', 'Stainless Steel', 'Mixed Metals'],
    },
    {
      title: 'Finishing Options',
      items: ['Silver Plating', 'Gold Plating', 'Antique Finish', 'Polished', 'Brushed'],
    },
    {
      title: 'Manufacturing',
      items: ['Handcrafted', 'Machine-Assisted', 'Custom Tooling', 'Prototyping', 'Mass Production'],
    },
    {
      title: 'Services',
      items: ['Custom Design', 'Private Label', 'Logo Engraving', 'Packaging Solutions', 'Quality Control'],
    },
  ];

  const certifications = [
    { icon: '🏭', label: 'ISO Certified Facility' },
    { icon: '🌍', label: 'Worldwide Export License' },
    { icon: '✓', label: 'Quality Assurance System' },
    { icon: '📦', label: 'Secure Packaging Standards' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            About Brass City Supply
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for premium metalware manufacturing from Moradabad, India —
            the world's renowned "Brass City"
          </p>
        </div>

        {/* Moradabad Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-brass-100 to-brass-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-brass-700 font-bold text-2xl">Moradabad, India</span>
            </div>

            {/* Story Content */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                The Brass City Heritage
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Moradabad, located in Uttar Pradesh, India, has earned its reputation as the
                  world's "Brass City" for over 400 years. This ancient craft hub is home to
                  thousands of skilled artisans who have perfected the art of metalworking across
                  generations.
                </p>
                <p>
                  Our facility sits at the heart of this manufacturing ecosystem, giving us access
                  to India's finest metalworkers, traditional techniques, and modern production
                  capabilities — all in one location.
                </p>
                <p>
                  We combine centuries-old handcrafting traditions with contemporary design sensibilities
                  and quality standards, making us the ideal manufacturing partner for US wholesale buyers
                  seeking authentic, high-quality metalware.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Factory Credentials */}
        <div className="bg-navy-900 text-white rounded-lg p-8 sm:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Credentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brass-400 mb-2">2017</div>
              <div className="text-gray-300">Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brass-400 mb-2">51-100</div>
              <div className="text-gray-300">Skilled Staff</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brass-400 mb-2">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brass-400 mb-2">10K+</div>
              <div className="text-gray-300">Products Shipped</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 pt-8 border-t border-navy-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <div className="text-sm text-gray-300">{cert.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manufacturing Capabilities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Manufacturing Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Full-service metalware production from concept to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-brass-500 transition-all"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  {capability.title}
                </h3>
                <ul className="space-y-2">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-brass-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-8 sm:p-12 mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            Why US Buyers Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Direct manufacturer pricing with no middlemen. Benefit from India's
                competitive labor costs and our efficient production processes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                Flexible Production
              </h3>
              <p className="text-gray-600">
                From small test orders (50 units) to large-scale production runs.
                We adapt to your business needs and growth trajectory.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous inspection at every stage. We understand US market expectations
                and maintain consistent quality standards.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
            Ready to Start Your Order?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your wholesale metalware requirements
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brass-500 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brass-400 transition-all shadow-lg hover:shadow-xl"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
