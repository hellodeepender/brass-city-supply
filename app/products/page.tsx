import type { Metadata } from 'next';
import Link from 'next/link';
import { getProducts } from '@/lib/products';
import ProductCatalog from './ProductCatalog';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Wholesale Metal Products | Brass City Supply',
  description: 'Browse our wholesale catalog of copper mugs, stainless bar tools, aluminum kitchenware, and custom metalware. Flexible MOQs for US buyers.',
};

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Product Catalog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Handcrafted in Moradabad, India
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCatalog products={products} categories={categories} />
        </div>
      </section>

      {/* Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Ordering Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">Wholesale Pricing</h4>
                <p className="text-gray-600 text-sm">
                  All pricing available on request. Contact us for a detailed quote tailored to your order size.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">Lead Time</h4>
                <p className="text-gray-600 text-sm">
                  Typical lead time: 8&ndash;12 weeks from confirmed order. Stock items ship faster.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">Samples</h4>
                <p className="text-gray-600 text-sm">
                  Samples available for most products. $15&ndash;30 per item, credited toward your first bulk order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
