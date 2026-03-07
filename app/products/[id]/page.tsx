import type { Metadata } from 'next';
import Link from 'next/link';
import { getProducts, getProductById } from '@/lib/products';
import { notFound } from 'next/navigation';
import ProductImage from '@/components/ProductImage';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | Brass City Supply`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-brass-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-brass-600 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center min-h-[400px]">
            {product.image_url ? (
              <ProductImage
                src={product.image_url}
                alt={product.name}
                className="w-full max-h-[600px] object-contain rounded-lg"
              />
            ) : (
              <div className="w-full min-h-[400px] bg-gradient-to-br from-brass-100 to-brass-300 rounded-lg flex items-center justify-center">
                <span className="text-brass-700 font-bold text-xl uppercase tracking-wide text-center px-8">
                  {product.name}
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-brass-100 text-brass-800 text-sm font-semibold px-3 py-1 rounded">
                {product.category}
              </span>
              {product.status === 'Coming Soon' && (
                <span className="inline-block bg-navy-100 text-navy-800 text-sm font-semibold px-3 py-1 rounded">
                  Coming Soon
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">{product.name}</h1>

            <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>

            {/* Specs */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-navy-900 mb-4">Product Details</h3>
              <dl className="space-y-3">
                <div className="flex">
                  <dt className="w-32 flex-shrink-0 font-medium text-gray-500">Material</dt>
                  <dd className="text-gray-900">{product.material}</dd>
                </div>
                <div className="flex">
                  <dt className="w-32 flex-shrink-0 font-medium text-gray-500">Dimensions</dt>
                  <dd className="text-gray-900">{product.dimensions}</dd>
                </div>
                {product.capacity && (
                  <div className="flex">
                    <dt className="w-32 flex-shrink-0 font-medium text-gray-500">Capacity</dt>
                    <dd className="text-gray-900">{product.capacity}</dd>
                  </div>
                )}
                <div className="flex">
                  <dt className="w-32 flex-shrink-0 font-medium text-gray-500">MOQ</dt>
                  <dd className="text-gray-900">{product.moq}</dd>
                </div>
                {product.stock && (
                  <div className="flex">
                    <dt className="w-32 flex-shrink-0 font-medium text-gray-500">In Stock</dt>
                    <dd className="text-gray-900">{Number(product.stock).toLocaleString()} units</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Pricing */}
            <div className="bg-brass-50 border-2 border-brass-200 rounded-lg p-6 mb-8">
              <p className="text-lg font-bold text-navy-900">Wholesale pricing available on request</p>
              <p className="text-sm text-gray-600 mt-1">
                Contact us with your order quantity for a detailed quote
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}&type=sample`}
                className="flex-1 text-center bg-white border-2 border-navy-900 text-navy-900 px-6 py-4 rounded-lg text-lg font-semibold hover:bg-navy-900 hover:text-white transition-all"
              >
                Request a Sample
              </Link>
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}&type=quote`}
                className="flex-1 text-center bg-brass-500 text-navy-900 px-6 py-4 rounded-lg text-lg font-semibold hover:bg-brass-400 transition-all shadow-lg hover:shadow-xl"
              >
                Get a Wholesale Quote
              </Link>
            </div>

            {/* Note */}
            <p className="text-sm text-gray-500 italic">
              All products are handcrafted in Moradabad, India &mdash; the world&apos;s brass manufacturing capital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
