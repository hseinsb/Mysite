import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, DollarSign, Wrench, Sparkles, TrendingUp, Shield } from "lucide-react";
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
    excerpt: "97% of customers search online first. Without a website, you're invisible—and losing revenue to competitors who show up.",
    category: "Business Strategy",
    icon: TrendingUp,
    readTime: "5 min read",
    author: "Hussein Sbeiti",
    updated: "Sep 2024",
  },
  {
    title: "The True Cost of Running a Business Without a Website",
    slug: "cost-of-business-without-website",
    excerpt: "Lost leads, missed automation, higher ad costs. Running without a site costs $10K-$50K+ annually in hidden losses.",
    category: "Business Strategy",
    icon: DollarSign,
    readTime: "6 min read",
    author: "Hussein Sbeiti",
    updated: "Sep 2024",
  },
  {
    title: "Website Development Cost Guide: What You Should Actually Pay",
    slug: "website-development-cost-guide",
    excerpt: "Quotes range from $500 to $50K. Discover what most businesses overlook when budgeting—and how to avoid paying twice.",
    category: "Web Design",
    icon: DollarSign,
    readTime: "8 min read",
    author: "Hussein Sbeiti",
    updated: "Aug 2024",
  },
  {
    title: "AI Website Maker vs Custom Development: Which Is Right for You?",
    slug: "ai-website-maker-vs-custom-development",
    excerpt: "AI builders promise fast sites for cheap. But what are you actually giving up? The truth about templates vs. custom code.",
    category: "AI Development",
    icon: Sparkles,
    readTime: "7 min read",
    author: "Hussein Sbeiti",
    updated: "Aug 2024",
  },
  {
    title: "Website Redesign Cost Breakdown: Budget & Timeline Guide",
    slug: "website-redesign-cost-breakdown",
    excerpt: "Your site's outdated and hurting conversions. Here's exactly what a redesign costs, how long it takes, and what to expect.",
    category: "Web Design",
    icon: Wrench,
    readTime: "6 min read",
    author: "Hussein Sbeiti",
    updated: "Jul 2024",
  },
  {
    title: "Cheap Websites for Small Business: Worth It or Waste of Money?",
    slug: "cheap-websites-small-business",
    excerpt: "Cheap sites save money upfront but cost more long-term. When DIY makes sense—and when it's better to invest.",
    category: "SEO & Maintenance",
    icon: Shield,
    readTime: "5 min read",
    author: "Hussein Sbeiti",
    updated: "Jul 2024",
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
            <p className="text-xl text-gray-300 leading-relaxed">
              Actionable guides on website design, pricing, and automation. Learn how to build, scale, and maintain your business website in 2025.
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
                      {/* Icon */}
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <post.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Category & Read Time */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <CardTitle className="text-xl text-white hover:text-accent transition-colors mb-3">
                        {post.title}
                      </CardTitle>

                      {/* Author & Date */}
                      <p className="text-xs text-gray-500 mb-4">
                        By {post.author} · Updated {post.updated}
                      </p>
                    </CardHeader>
                    <CardContent>
                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center text-accent text-sm font-semibold group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 border border-purple-500/50"
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

