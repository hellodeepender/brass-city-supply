/**
 * InternationalBadge - Shows "Ships Worldwide" with international pricing info.
 *
 * Usage: Import and place on product detail pages, e.g. in app/products/[id]/page.tsx
 * below the pricing section:
 *
 *   import InternationalBadge from '@/components/InternationalBadge';
 *   ...
 *   <InternationalBadge />
 */

export default function InternationalBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-navy-50 border border-navy-200 rounded-lg px-4 py-3 text-sm">
      {/* Globe Icon */}
      <svg
        className="w-5 h-5 text-navy-600 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.6 9h16.8M3.6 15h16.8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z"
        />
      </svg>
      <div>
        <p className="font-semibold text-navy-900">Ships Worldwide</p>
        <p className="text-navy-600 text-xs">
          Pricing in USD&nbsp;&nbsp;|&nbsp;&nbsp;Custom quotes for international buyers
        </p>
      </div>
    </div>
  );
}
