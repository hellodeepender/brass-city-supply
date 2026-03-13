'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('https://formspree.io/f/xwvrkgap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="border-t border-navy-700 mt-8 pt-8">
      <div className="text-center max-w-md mx-auto">
        <h4 className="text-lg font-semibold mb-1">Stay Updated</h4>
        <p className="text-sm text-gray-400 mb-4">
          Get the latest products and wholesale deals in your inbox.
        </p>

        {status === 'success' ? (
          <p className="text-brass-300 font-semibold text-sm">
            Thanks for subscribing! We&apos;ll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brass-500 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-brass-500 text-navy-900 px-5 py-2 rounded-lg font-semibold text-sm hover:bg-brass-400 transition-all disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-sm mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
