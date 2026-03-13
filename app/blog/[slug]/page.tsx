import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
  metaDescription: string;
  content: string[];
}

const blogPosts: Record<string, BlogPost> = {
  'how-to-choose-wholesale-brass-supplier': {
    slug: 'how-to-choose-wholesale-brass-supplier',
    title: 'How to Choose a Wholesale Brass Supplier',
    date: '2025-01-15',
    author: 'Brass City Supply Team',
    category: 'Sourcing Guide',
    readingTime: '6 min read',
    metaDescription:
      'A comprehensive guide for importers on evaluating wholesale brass suppliers. Learn what to look for in quality, pricing, MOQs, and reliability.',
    content: [
      'Choosing the right wholesale brass supplier is one of the most critical decisions for any importer, retailer, or distributor. The quality of your supplier directly impacts your product quality, profit margins, lead times, and ultimately your brand reputation. With hundreds of manufacturers in India alone, narrowing down the right partner requires careful evaluation across several key dimensions.',
      'Start by assessing the supplier\'s manufacturing capabilities and specializations. A reputable brass supplier should be transparent about their production capacity, material sourcing, and finishing options. Ask for detailed product specifications including material composition (solid brass vs. brass-plated), wall thickness, and weight. Request samples before committing to large orders — any serious supplier will accommodate this. Look for consistency in finish quality, dimensions, and weight across sample batches. At Brass City Supply, we encourage every new buyer to start with samples so they can evaluate our craftsmanship firsthand.',
      'Pricing and MOQ (Minimum Order Quantity) flexibility are equally important. While the cheapest option may be tempting, suspiciously low prices often signal inferior materials or poor quality control. Look for suppliers who offer transparent pricing structures and are willing to discuss tiered pricing based on order volume. A good supplier will work with you on MOQs, especially as you scale — starting from as low as 50 units for initial orders and offering better rates as quantities increase. Also factor in shipping costs, customs duties, and lead times when comparing suppliers, as these hidden costs can significantly impact your total landed cost.',
    ],
  },
  'heritage-of-moradabad-metalwork': {
    slug: 'heritage-of-moradabad-metalwork',
    title: 'The Heritage of Moradabad Metalwork',
    date: '2025-02-08',
    author: 'Brass City Supply Team',
    category: 'Industry Story',
    readingTime: '8 min read',
    metaDescription:
      'Discover the centuries-old tradition of metalworking in Moradabad, India — the world-famous Brass City and its journey from Mughal artisans to modern export hub.',
    content: [
      'Nestled in the state of Uttar Pradesh, India, the city of Moradabad has been synonymous with brass craftsmanship for over four centuries. Known globally as "Peetal Nagri" (The Brass City), Moradabad contributes to approximately 40% of India\'s total brass export, making it one of the most significant metalworking hubs in the world. The city\'s legacy traces back to the Mughal era, when artisans began crafting intricate brassware for royal courts, blending Persian design influences with indigenous Indian techniques.',
      'What makes Moradabad truly unique is the intergenerational transfer of knowledge. Skills are passed down from master craftsmen to apprentices over years of hands-on training, preserving techniques that cannot be replicated by machines alone. From the precise art of hand-engraving (known locally as "nakashi") to the delicate process of silver and gold plating, each piece that leaves a Moradabad workshop carries centuries of accumulated expertise. Today, the city is home to over 5,000 brass manufacturing units employing hundreds of thousands of skilled artisans, making it one of the largest clusters of metalware production anywhere on Earth.',
      'Modern Moradabad has evolved far beyond traditional brassware. The city\'s manufacturers now work with copper, aluminum, stainless steel, iron, and mixed metals, producing everything from contemporary home decor and barware to industrial components and architectural fittings. Advanced CNC machines work alongside traditional hand-tools, allowing manufacturers like Brass City Supply to offer both the authenticity of handcrafted pieces and the precision of modern manufacturing. This unique combination of heritage craftsmanship and modern capability is what makes Moradabad the go-to sourcing destination for wholesale buyers worldwide.',
    ],
  },
  'top-trending-metal-home-decor-2025': {
    slug: 'top-trending-metal-home-decor-2025',
    title: 'Top 5 Trending Metal Home Decor Items in 2025',
    date: '2025-03-12',
    author: 'Brass City Supply Team',
    category: 'Product Trends',
    readingTime: '5 min read',
    metaDescription:
      'Stay ahead of the curve with the hottest metal home decor trends for 2025. From hammered copper accents to minimalist brass fixtures.',
    content: [
      'The metal home decor market is experiencing a renaissance in 2025, driven by a consumer shift toward artisanal, sustainable, and statement-making pieces. Wholesale buyers who stay ahead of these trends can capture significant market share. At the top of the list are hammered copper barware sets — Moscow mule mugs, cocktail shakers, and bar carts in hand-hammered copper finishes continue to dominate both retail and hospitality channels. The warm, rustic aesthetic pairs perfectly with the craft cocktail movement that shows no signs of slowing down.',
      'Minimalist brass candle holders and vases are another hot category, with clean geometric shapes and brushed finishes replacing the ornate designs of previous years. The trend toward "quiet luxury" in home decor has made understated brass pieces a staple in high-end interior design. Similarly, mixed-metal wall art combining brass, copper, and iron elements is gaining traction among retailers targeting the millennial and Gen-Z homeowner demographic. These pieces serve as focal points in living spaces and command premium price points.',
      'Rounding out the top trends are brass storage containers (both decorative and functional kitchen storage) and large-format brass planters designed for indoor plants. The biophilic design movement — bringing nature indoors — has created strong demand for premium metal planters that complement greenery. For wholesale buyers, these trending categories represent strong margin opportunities, especially when sourced directly from manufacturers in Moradabad where production costs are significantly lower than Western alternatives. At Brass City Supply, we are seeing a 35% year-over-year increase in orders across these categories.',
    ],
  },
  'understanding-moq-buyers-guide': {
    slug: 'understanding-moq-buyers-guide',
    title: "Understanding MOQ: A Buyer's Guide to Wholesale Orders",
    date: '2025-04-05',
    author: 'Brass City Supply Team',
    category: 'Buyer Education',
    readingTime: '7 min read',
    metaDescription:
      'Learn how Minimum Order Quantities work in wholesale trade, how to negotiate MOQs, and what to expect when ordering from overseas manufacturers.',
    content: [
      'Minimum Order Quantity (MOQ) is one of the most important concepts for anyone entering the wholesale buying space, yet it is frequently misunderstood. Simply put, MOQ is the smallest number of units a manufacturer is willing to produce or sell in a single order. MOQs exist because manufacturers need to cover fixed costs — machine setup, raw material procurement, labor allocation, and quality control processes — that make producing very small quantities economically unviable. Understanding how MOQs work and how to navigate them effectively can save you thousands of dollars and months of frustration.',
      'MOQs vary widely depending on the product type, material, complexity, and customization level. For standard catalog items made from common materials, MOQs tend to be lower because the manufacturer can batch your order with other clients. Custom-designed or private-label products typically carry higher MOQs because the manufacturer must set up dedicated tooling and production lines. At Brass City Supply, we offer MOQs starting at just 50 units for most of our standard catalog products — one of the most flexible thresholds in the industry. For custom orders, MOQs may start at 100-200 units depending on the complexity of the design and finishing requirements.',
      'The key to negotiating favorable MOQs is building a relationship with your supplier. Start with a smaller initial order to test the waters — evaluate product quality, packaging, shipping reliability, and communication. Once you have established trust and demonstrated your intent to reorder, most suppliers will work with you on more flexible terms. Consider consolidating orders across multiple SKUs to meet value-based minimums rather than per-item minimums. For example, ordering 50 units each of three different products is often more favorable than trying to negotiate 25 units of a single product. Planning ahead and providing demand forecasts also helps suppliers allocate production capacity more efficiently, which can translate into better MOQ terms for you.',
    ],
  },
};

const allSlugs = Object.keys(blogPosts);

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) {
    return { title: 'Post Not Found | Brass City Supply' };
  }
  return {
    title: `${post.title} | Brass City Supply Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://brasscitysupply.com/blog/${post.slug}`,
      type: 'article',
      siteName: 'Brass City Supply',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  // Find related posts (exclude current)
  const relatedPosts = allSlugs
    .filter((s) => s !== slug)
    .slice(0, 2)
    .map((s) => blogPosts[s]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block bg-brass-500 text-navy-900 text-sm font-semibold px-3 py-1 rounded">
              {post.category}
            </span>
            <span className="text-gray-400">{post.readingTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <span>{post.author}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-brass-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brass-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-navy-900 font-medium truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-brass-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-navy-900 font-bold text-xl">BC</span>
              </div>
              <div>
                <p className="font-semibold text-navy-900">{post.author}</p>
                <p className="text-sm text-gray-600">
                  Sharing insights on wholesale metalware sourcing, manufacturing, and industry trends from Moradabad, India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Banner */}
      <section className="bg-brass-50 border-y border-brass-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
            Ready to Source Premium Metalware?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our catalog of handcrafted brass, copper, and aluminum products or get a custom quote for your wholesale needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-all"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="bg-brass-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-brass-400 transition-all shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8 text-center">
            More from Our Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brass-500 hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-br from-brass-100 to-brass-200 h-40 flex items-center justify-center">
                  <span className="text-brass-600 font-semibold text-sm uppercase tracking-wide">
                    {related.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block bg-brass-100 text-brass-800 text-xs font-semibold px-2.5 py-1 rounded">
                      {related.category}
                    </span>
                    <span className="text-sm text-gray-500">{related.readingTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-brass-600 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{formatDate(related.date)}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-block text-brass-600 font-semibold hover:text-brass-700 transition-colors"
            >
              View all articles &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
