'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-navy-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brass-500 flex items-center justify-center rounded">
              <span className="text-navy-900 font-bold text-xl">BC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Brass City Supply</h1>
              <p className="text-xs text-brass-300">Premium Metalware Since 2017</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-200 hover:text-brass-300 transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-200 hover:text-brass-300 transition-colors font-medium">
              Products
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-brass-300 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-200 hover:text-brass-300 transition-colors font-medium">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-brass-500 text-navy-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-brass-400 transition-all shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-navy-700 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-200 hover:text-brass-300 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-200 hover:text-brass-300 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-gray-200 hover:text-brass-300 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-200 hover:text-brass-300 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-brass-500 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-brass-400 transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
