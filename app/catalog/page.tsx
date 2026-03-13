import type { Metadata } from 'next';
import Link from 'next/link';
import { getProducts } from '@/lib/products';
import CatalogContent from './CatalogContent';

export const metadata: Metadata = {
  title: 'Product Catalog | Brass City Supply',
  description:
    'Browse and download the full Brass City Supply wholesale product catalog. Premium brass, copper, and iron metalware from Moradabad, India.',
  openGraph: {
    title: 'Product Catalog | Brass City Supply',
    description:
      'Browse and download the full Brass City Supply wholesale product catalog.',
  },
};

export const revalidate = 60;

export default async function CatalogPage() {
  const products = await getProducts();

  return (
    <>
      {/* Print-specific styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              header, footer, nav,
              .no-print,
              a[aria-label="Chat on WhatsApp"] {
                display: none !important;
              }

              body {
                background: white !important;
                color: black !important;
                font-size: 11pt !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }

              main {
                padding: 0 !important;
              }

              .catalog-grid {
                display: grid !important;
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 16px !important;
                page-break-inside: auto;
              }

              .catalog-item {
                page-break-inside: avoid;
                border: 1px solid #ddd !important;
                padding: 12px !important;
                font-size: 10pt !important;
              }

              .catalog-item img {
                max-height: 120px !important;
                width: auto !important;
              }

              .print-header {
                display: block !important;
              }

              @page {
                margin: 0.75in;
              }
            }
          `,
        }}
      />

      <div className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Print-only header */}
          <div className="print-header hidden mb-8 border-b-2 border-gray-300 pb-4">
            <h1 className="text-2xl font-bold">Brass City Supply</h1>
            <p className="text-sm text-gray-600">
              Premium Wholesale Metalware from Moradabad, India
            </p>
            <p className="text-xs text-gray-500 mt-1">
              www.brasscitysupply.com &nbsp;|&nbsp; Tampa, FL &nbsp;|&nbsp; (747)
              356-1110
            </p>
          </div>

          {/* Screen header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Link
                  href="/"
                  className="hover:text-brass-600 transition-colors"
                >
                  Home
                </Link>
                <span>/</span>
                <span className="text-navy-900 font-medium">
                  Product Catalog
                </span>
              </nav>
              <h1 className="text-3xl sm:text-4xl font-bold text-navy-900">
                Product Catalog
              </h1>
              <p className="text-gray-600 mt-2">
                {products.length} products available for wholesale
              </p>
            </div>
          </div>

          {/* Client component with print button and product grid */}
          <CatalogContent products={products} />

          {/* Footer note */}
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>
              All products are handcrafted in Moradabad, India. Prices and
              availability subject to change.
            </p>
            <p className="mt-1">
              For wholesale inquiries, contact us at{' '}
              <Link
                href="/contact"
                className="text-brass-600 hover:text-brass-700 font-medium no-print"
              >
                brasscitysupply.com/contact
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
