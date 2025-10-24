import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";

// This would typically come from a CMS or database
const blogPosts: Record<string, any> = {
  "do-i-need-website-for-business": {
    title: "Do I Need a Website for My Business in 2025?",
    description: "Discover why having a website is essential for business growth, credibility, and customer reach—even for small local businesses.",
    content: `
      <p>If you're asking "do I need a website for my business," the short answer is: <strong>yes, absolutely</strong>. In 2025, a website isn't just a nice-to-have—it's essential for credibility, customer reach, and business growth.</p>

      <h2>Why Every Business Needs a Website</h2>
      
      <h3>1. Customers Expect It</h3>
      <p>97% of consumers search online before making a purchase decision. If your business doesn't have a website, you're invisible to most potential customers. Even if they hear about you through word-of-mouth, they'll search for your website to verify you're legitimate.</p>

      <h3>2. 24/7 Marketing That Never Sleeps</h3>
      <p>Your website works around the clock, answering questions, showcasing products, and generating leads while you sleep. It's the most cost-effective marketing tool you'll ever invest in.</p>

      <h3>3. Credibility and Trust</h3>
      <p>A professional website signals that you're a real, established business. Without one, potential customers may question your legitimacy or assume you're outdated.</p>

      <h3>4. Control Your Brand Story</h3>
      <p>Social media is great, but you don't own those platforms. A website gives you complete control over your brand message, design, and customer experience.</p>

      <h3>5. Compete with Larger Businesses</h3>
      <p>A well-designed website levels the playing field. Small businesses can compete with larger competitors by showcasing expertise, customer testimonials, and unique value propositions.</p>

      <h2>What About Social Media? Isn't That Enough?</h2>
      <p>While social media is important, it's not a replacement for a website. Here's why:</p>
      <ul>
        <li>You don't own your social media presence—platforms can change algorithms or shut down</li>
        <li>Limited customization and branding options</li>
        <li>No SEO benefits for your business name and services</li>
        <li>Professional clients often expect a website, not just an Instagram page</li>
      </ul>

      <h2>How Much Does a Website Cost?</h2>
      <p>Website development costs vary widely:</p>
      <ul>
        <li><strong>DIY builders (Wix, Squarespace):</strong> $200-$500/year</li>
        <li><strong>Basic professional website:</strong> $1,000-$2,500</li>
        <li><strong>Custom business website:</strong> $3,000-$7,500</li>
        <li><strong>Ecommerce or complex sites:</strong> $5,000-$15,000+</li>
      </ul>

      <h2>What If I Can't Afford a Website Right Now?</h2>
      <p>If budget is tight, start with a simple one-page website that includes:</p>
      <ul>
        <li>Your business name and what you do</li>
        <li>Contact information</li>
        <li>A few customer testimonials</li>
        <li>Clear call-to-action</li>
      </ul>
      <p>Even a basic site is better than nothing. You can always expand later as your business grows.</p>

      <h2>The Bottom Line</h2>
      <p>If you're serious about growing your business, a website isn't optional—it's essential. The question isn't "do I need a website," but "how quickly can I get one up and running?"</p>

      <p>Ready to get started? <a href="/contact" class="text-accent hover:underline">Get a free quote</a> and let's build a website that works for your business.</p>
    `,
    publishedAt: "2025-01-15",
    category: "Business Strategy",
    readTime: "5 min read",
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | HussBuilds Blog`,
    description: post.description,
    alternates: {
      canonical: `https://hussbuilds.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://hussbuilds.com/blog/${params.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: ["/og-image.png"],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-accent font-semibold">{post.category}</span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
              <span className="text-sm text-gray-500">{post.publishedAt}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300">
              {post.description}
            </p>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-gray-300 prose-ul:my-6
              prose-li:my-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Build Your Website?
            </h3>
            <p className="text-gray-300 mb-6">
              Get a free consultation and transparent pricing for your project.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent hover:bg-accent-2 text-black font-semibold rounded-xl transition-all duration-200 hover:scale-105"
            >
              Get Your Free Quote
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

