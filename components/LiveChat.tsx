'use client';

import { useState } from 'react';

/**
 * LiveChat - A self-contained chat bubble component.
 *
 * To add this to your site, import and place it in app/layout.tsx
 * just above the WhatsApp floating button:
 *
 *   import LiveChat from '@/components/LiveChat';
 *   ...
 *   <LiveChat />
 *   // WhatsApp Floating Button follows below
 */

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://formspree.io/f/xpwzgdoj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
    } catch {
      // Silently handle - user can retry
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Chat Bubble Button - positioned above WhatsApp button */}
      <button
        onClick={() => { setIsOpen(!isOpen); setSubmitted(false); }}
        aria-label="Chat with us"
        className="fixed bottom-24 right-6 z-50 bg-navy-900 hover:bg-navy-800 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-navy-900 px-5 py-4">
            <h3 className="text-white font-bold text-lg">Chat with Us</h3>
            <p className="text-brass-300 text-sm">We typically respond within a few hours</p>
          </div>

          {submitted ? (
            <div className="p-6 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-navy-900 font-bold text-lg mb-2">Message Sent!</h4>
              <p className="text-gray-600 text-sm">
                Thank you for reaching out. We&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => { setIsOpen(false); setSubmitted(false); }}
                className="mt-4 text-brass-600 hover:text-brass-700 font-medium text-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label htmlFor="chat-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="chat-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brass-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="chat-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="chat-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brass-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="chat-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="chat-message"
                  name="message"
                  required
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brass-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brass-500 hover:bg-brass-400 text-navy-900 font-semibold py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
