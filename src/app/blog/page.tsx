import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog | Website Development Guides, Cost Breakdowns & Business Tips",
  description: "Learn about website development costs, whether you need a website for your business, AI website builders vs custom development, and redesign pricing guides.",
  keywords: [
    "do i need a website for my business",
    "business without a website",
    "cheap websites for small business",
    "ai website maker free",
    "website redesign cost",
    "cost of website redesign",
  ],
  alternates: {
    canonical: "https://hussbuilds.com/blog",
  },
  openGraph: {
    title: "Blog | Website Development Guides & Cost Breakdowns",
    description: "Expert guides on website costs, business needs, and development strategies.",
    url: "https://hussbuilds.com/blog",
    images: ["/og-image.png"],
  },
};

const blogPosts = [
  {
    title: "Do I Need a Website for My Business in 2025?",
    slug: "do-i-need-website-for-business",
    excerpt: "Discover why having a website is essential for business growth, credibility, and customer reach—even for small local businesses.",
    category: "Business Strategy",
    readTime: "5 min read",
  },
  {
    title: "The True Cost of Running a Business Without a Website",
    slug: "cost-of-business-without-website",
    excerpt: "Calculate the hidden costs of not having an online presence: lost customers, missed opportunities, and competitive disadvantage.",
    category: "Business Strategy",
    readTime: "6 min read",
  },
  {
    title: "Website Development Cost Guide: What You Should Actually Pay",
    slug: "website-development-cost-guide",
    excerpt: "Transparent breakdown of website development costs, from basic sites to complex ecommerce platforms. Know what's fair before you hire.",
    category: "Pricing & Costs",
    readTime: "8 min read",
  },
  {
    title: "AI Website Maker vs Custom Development: Which Is Right for You?",
    slug: "ai-website-maker-vs-custom-development",
    excerpt: "Compare AI website builders with custom development. Learn the pros, cons, and when each approach makes sense for your business.",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    title: "Website Redesign Cost Breakdown: Budget & Timeline Guide",
    slug: "website-redesign-cost-breakdown",
    excerpt: "Planning a website redesign? Understand the costs, timeline, and process to budget effectively and avoid surprises.",
    category: "Pricing & Costs",
    readTime: "6 min read",
  },
  {
    title: "Cheap Websites for Small Business: Worth It or Waste of Money?",
    slug: "cheap-websites-small-business",
    excerpt: "Exploring budget website options for small businesses. When to save money and when to invest in quality development.",
    category: "Small Business",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Website Development Blog
            </h1>
            <p className="text-xl text-gray-300">
              Guides, cost breakdowns, and strategies for building better websites. 
              Learn about development costs, business needs, and smart technology choices.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full bg-gray-900 border-gray-800 hover:border-accent/50 transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-accent font-semibold">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-accent">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-accent text-sm font-semibold">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free consultation and transparent pricing for your website.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent hover:bg-accent-2 text-black font-semibold rounded-xl transition-all duration-200 hover:scale-105"
            >
              Get Your Free Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

