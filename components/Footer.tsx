import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Brass City Supply</h3>
            <p className="text-gray-300 mb-4">
              Premium wholesale metalware manufacturer based in Moradabad, India —
              the world's Brass City. Serving US wholesale buyers since 2017.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Moradabad, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brass-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-brass-300 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brass-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brass-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/contact" className="hover:text-brass-300 transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li className="text-sm text-gray-400">
                Worldwide Export Available
              </li>
              <li className="text-sm text-gray-400">
                Custom Orders Welcome
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Brass City Supply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
