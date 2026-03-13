import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog & Resources | Brass City Supply - Wholesale Metalware Insights',
  description: 'Industry insights, product trends, and sourcing guides for wholesale metalware buyers. Learn about brass manufacturing, MOQs, and trending home decor.',
  openGraph: {
    title: 'Blog & Resources | Brass City Supply',
    description: 'Industry insights, product trends, and sourcing guides for wholesale metalware buyers.',
    url: 'https://brasscitysupply.com/blog',
    type: 'website',
    siteName: 'Brass City Supply',
  },
};

const blogPosts = [
  {
    slug: 'how-to-choose-wholesale-brass-supplier',
    title: 'How to Choose a Wholesale Brass Supplier',
    excerpt:
      'A comprehensive guide for importers and retailers on evaluating wholesale brass suppliers. Learn what to look for in quality, pricing, MOQs, and reliability.',
    date: '2025-01-15',
    author: 'Brass City Supply Team',
    category: 'Sourcing Guide',
    readingTime: '6 min read',
  },
  {
    slug: 'heritage-of-moradabad-metalwork',
    title: 'The Heritage of Moradabad Metalwork',
    excerpt:
      'Discover the centuries-old tradition of metalworking in Moradabad, India — the world-famous Brass City. From Mughal artisans to modern export powerhouse.',
    date: '2025-02-08',
    author: 'Brass City Supply Team',
    category: 'Industry Story',
    readingTime: '8 min read',
  },
  {
    slug: 'top-trending-metal-home-decor-2025',
    title: 'Top 5 Trending Metal Home Decor Items in 2025',
    excerpt:
      'Stay ahead of the curve with the hottest metal home decor trends for 2025. From hammered copper accents to minimalist brass fixtures, here is what buyers want.',
    date: '2025-03-12',
    author: 'Brass City Supply Team',
    category: 'Product Trends',
    readingTime: '5 min read',
  },
  {
    slug: 'understanding-moq-buyers-guide',
    title: "Understanding MOQ: A Buyer's Guide to Wholesale Orders",
    excerpt:
      'Minimum Order Quantities can make or break a wholesale deal. Learn how MOQs work, how to negotiate them, and what to expect when ordering from overseas manufacturers.',
    date: '2025-04-05',
    author: 'Brass City Supply Team',
    category: 'Buyer Education',
    readingTime: '7 min read',
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Blog &amp; Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry insights, sourcing guides, and product trends for wholesale metalware buyers
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brass-500 hover:shadow-xl transition-all"
              >
                {/* Thumbnail placeholder */}
                <div className="bg-gradient-to-br from-brass-100 to-brass-200 h-48 flex items-center justify-center">
                  <span className="text-brass-600 font-semibold text-sm uppercase tracking-wide px-4 text-center">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-brass-100 text-brass-800 text-xs font-semibold px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readingTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-brass-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Have Questions About Wholesale Sourcing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help you find the right products at the right price
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-brass-500 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brass-400 transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
