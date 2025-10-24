import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ | Do I Need a Website? Cost, Pricing & Small Business Questions Answered",
  description: "Answers to 'Does my business need a website?', 'How much does a 5-page website cost?', 'Is Wix or WordPress better?', web design fees, DIY vs hiring a designer, and more business website questions.",
  keywords: [
    "does my business need a website",
    "can i run a business without a website",
    "how much does a 5 page website cost",
    "how much is a 20 page website",
    "how much to charge for a 10 page website",
    "is it cheaper to diy website design",
    "which website builder is best for small business",
    "is wordpress or wix better",
    "do people still hire web designers",
    "how much does it cost to hire a web designer",
    "website development cost",
    "web design fees",
    "wordpress vs wix",
    "website management cost",
  ],
  alternates: {
    canonical: "https://hussbuilds.com/faq",
  },
  openGraph: {
    title: "FAQ | Does My Business Need a Website? Cost & Pricing Answered",
    description: "Get answers about website necessity, costs (5-page, 10-page, 20-page sites), DIY vs hiring designers, WordPress vs Wix, and more.",
    url: "https://hussbuilds.com/faq",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Website Cost & Business Questions",
    description: "Answers to common questions about website necessity, costs, and choosing the right solution.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  // Trust-Building Questions First
  {
    question: "Does my business really need a website in 2025?",
    answer: "Yes, absolutely. 97% of consumers search online before buying, and without a website you're invisible to most potential customers. A website builds credibility, generates leads 24/7, and gives you control over your brand.",
  },
  {
    question: "Can I run a business without a website?",
    answer: "While possible, businesses without websites lose 10-50% of potential customers to competitors. You'll rely on expensive advertising and word-of-mouth only, severely limiting growth.",
  },
  {
    question: "Do people still hire web designers in 2025?",
    answer: "Absolutely. Professional web designer demand is growing despite DIY tools. Businesses hire designers for custom functionality, SEO optimization, and conversion-focused design that DIY tools can't match.",
  },
  {
    question: "What's included in your website development packages?",
    answer: "All packages include responsive design, SEO optimization, security setup, content management system, contact forms, basic analytics, testing, deployment, and initial training. Ongoing costs like hosting and maintenance are separate.",
  },
  {
    question: "What's your website development process?",
    answer: "Discovery & strategy (1-2 weeks) → Design & approval (1-2 weeks) → Development & testing (2-4 weeks) → Launch & training (1 week). You get regular updates and 2-3 revision rounds at each phase.",
  },
  
  // Timeline Questions
  {
    question: "How long does it take to build a professional website?",
    answer: "Simple sites take 2-3 weeks, business sites with custom features take 4-6 weeks, and ecommerce or complex applications take 8-12 weeks. Rush projects available for an additional 25% fee.",
  },
  {
    question: "Do you provide ongoing website maintenance and support?",
    answer: "Yes! All projects include 30 days post-launch support. After that, choose monthly maintenance packages ($99-$399/month) or pay-as-you-go hourly support for updates, backups, security monitoring, and technical help.",
  },
  
  // Pricing Questions
  {
    question: "How much does it cost to build a professional website in 2025?",
    answer: "Basic websites start at $999-$2,500, custom business sites run $3,000-$7,500, and ecommerce or enterprise solutions range from $5,000-$15,000+. Cost depends on complexity, features, customization, and integrations.",
  },
  {
    question: "What's the average price for a small business website?",
    answer: "Expect $2,000-$5,000 for a quality business website with custom design, SEO, and professional functionality. Budget templates ($500-$1,500) lack customization; premium custom sites ($5,000+) include advanced features and comprehensive SEO.",
  },
  {
    question: "How much does a 5-page website cost?",
    answer: "Professional 5-page websites cost $2,000-$4,000 including custom design, mobile responsiveness, SEO, and integrations. DIY builders are cheaper ($300-$800) but lack the polish that converts visitors into customers.",
  },
  {
    question: "How much does a 10-page website cost?",
    answer: "A 10-page custom website costs $3,500-$7,500 including professional design, responsive development, SEO optimization, and launch support. Price varies based on e-commerce, custom forms, or specialized functionality.",
  },
  {
    question: "How much is a 20-page website?",
    answer: "A 20-page website ranges from $5,000-$12,000 depending on complexity and features. Includes content management, advanced SEO, custom functionality, and multiple integrations. Enterprise sites can exceed $15,000.",
  },
  {
    question: "What are typical ecommerce website costs?",
    answer: "Ecommerce sites range from $3,000 for basic Shopify setups to $15,000+ for custom WooCommerce solutions. Includes design, catalog setup, payment processing, shipping integration, and security. Monthly costs run $200-$500.",
  },
  {
    question: "Are there any hidden fees in your pricing?",
    answer: "Absolutely not. Pricing is transparent and all-inclusive for the agreed scope. The only additional costs are third-party services you choose (hosting, domains, premium plugins), which you purchase directly.",
  },
  
  // Payment & Process Questions
  {
    question: "What payment terms do you offer?",
    answer: "50% deposit to start development and 50% upon completion before handoff. Larger projects can be split into milestones (33% deposit, 33% midpoint, 34% launch).",
  },
  {
    question: "Do you charge for website redesign consultations?",
    answer: "No! Initial consultations and redesign quotes are completely free. Get honest feedback and a clear path forward with no obligation.",
  },
  
  // Platform Comparison Questions
  {
    question: "Is WordPress or Wix better for small business?",
    answer: "WordPress is better for most small businesses—unlimited customization, better SEO, no transaction fees, and true ownership. Wix is easier to start but limits growth with platform lock-in, slower speeds, and less flexibility.",
  },
  {
    question: "What is the downside of Wix?",
    answer: "Platform lock-in (can't move your site), slower load speeds, limited SEO capabilities, monthly fees that add up, generic templates, and restricted customization. Growing businesses often need a costly rebuild within 2-3 years.",
  },
  {
    question: "Which website builder is the best for small business?",
    answer: "WordPress (self-hosted) offers the best long-term value with full customization and ownership. Shopify is ideal for e-commerce. Custom-built sites provide maximum performance and flexibility for serious businesses.",
  },
  {
    question: "Is Wix or Shopify better for small business?",
    answer: "Depends on your business type. Shopify is superior for product-based businesses with powerful e-commerce features. Wix works better for service businesses or simple informational sites.",
  },
  {
    question: "Is it cheaper to DIY website design?",
    answer: "DIY is cheaper upfront ($10-$50/month) but often costs more long-term. You'll spend 40-80 hours learning and troubleshooting—time better spent running your business. Professional design typically pays for itself within 6-12 months.",
  },
  {
    question: "How much should I pay for website management services?",
    answer: "Website management costs $99-$399/month depending on services. Basic maintenance (updates, backups, security) runs $99-$199/month. Comprehensive management with content updates, SEO, and analytics costs $299-$399/month.",
  },
];

export default function FAQPage() {
  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen">
      {/* FAQ Schema Markup */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300">
              Get answers about website development costs, web design fees, and pricing. 
              Transparent information about charges, rates, and what to expect.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-900 border border-gray-800 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Didn't Find Your Question?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a free strategy call—we'll answer it personally and give you a custom quote for your project.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 border border-purple-500/50"
            >
              Book Your Free Strategy Call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

