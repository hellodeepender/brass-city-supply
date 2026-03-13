import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Customer Portal — Coming Soon | Brass City Supply',
  description:
    'Track your orders, manage quotes, and access your purchase history with the Brass City Supply Customer Portal. Coming soon.',
  openGraph: {
    title: 'Customer Portal — Coming Soon | Brass City Supply',
    description:
      'Track your orders, manage quotes, and access your purchase history. Coming soon.',
  },
};

const features = [
  {
    title: 'Order Tracking',
    description: 'Real-time updates on your shipments from Moradabad to your door.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Quote Management',
    description: 'View, compare, and approve wholesale quotes in one place.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Purchase History',
    description: 'Access past orders, invoices, and reorder with a single click.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Account Settings',
    description: 'Manage shipping addresses, payment methods, and preferences.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function PortalPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-brass-100 text-brass-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-brass-500 rounded-full animate-pulse" />
          Coming Soon
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
          Customer Portal
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Track your orders, manage quotes, and access your purchase history
          &mdash; all in one place.
        </p>

        {/* Features Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-brass-400 transition-colors"
            >
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center text-navy-700 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-navy-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Get Notified Form */}
        <div className="bg-navy-900 rounded-2xl p-8 sm:p-10 text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Get Notified</h2>
          <p className="text-navy-300 mb-6">
            Be the first to know when the Customer Portal launches.
          </p>
          <NotifyForm />
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <Link
            href="/"
            className="text-navy-900 hover:text-brass-600 font-medium transition-colors"
          >
            &larr; Back to Home
          </Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <Link
            href="/contact"
            className="text-brass-600 hover:text-brass-700 font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Client-side form for email signup.
 * Uses Formspree for submission.
 */
function NotifyForm() {
  return (
    <form
      action="https://formspree.io/f/xpwzgdoj"
      method="POST"
      className="flex flex-col sm:flex-row gap-3"
    >
      <input type="hidden" name="_subject" value="Portal Launch Notification Signup" />
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg bg-navy-800 text-white placeholder-navy-400 border border-navy-700 focus:outline-none focus:ring-2 focus:ring-brass-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-brass-500 hover:bg-brass-400 text-navy-900 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap"
      >
        Notify Me
      </button>
    </form>
  );
}
