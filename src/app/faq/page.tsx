import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
  {
    question: "How much does website development cost?",
    answer: "Website development costs vary based on complexity, features, and customization. A basic website starts around $1,000-$2,500, while custom ecommerce or enterprise solutions range from $5,000-$15,000+. Factors include design complexity, functionality, integrations, and ongoing maintenance needs.",
  },
  {
    question: "What are typical web design fees?",
    answer: "Web design fees depend on project scope and designer experience. Hourly rates typically range from $75-$200/hour. Fixed-price projects offer more predictability—simple sites ($1,500-$3,000), business sites ($3,000-$7,500), and complex applications ($7,500+). All my projects include transparent, upfront pricing.",
  },
  {
    question: "Do you offer WordPress monthly maintenance packages?",
    answer: "Yes! WordPress monthly maintenance packages include regular updates, security monitoring, backups, performance optimization, and technical support. Packages start at $150/month for basic maintenance and scale up to $500+/month for comprehensive enterprise support with priority response times.",
  },
  {
    question: "How do I get a website redesign quote?",
    answer: "Getting a website redesign quote is simple: fill out the contact form with your current site URL, goals, and timeline. I'll review your existing site, discuss your vision, and provide a detailed quote within 24-48 hours. Most redesigns range from $2,500-$10,000 depending on scope.",
  },
  {
    question: "What are your web design rates per hour?",
    answer: "My web design rates are $125/hour for custom development work. However, I primarily work on fixed-price projects to give you cost certainty. This approach ensures you know exactly what you'll pay upfront, with no surprise hourly charges or scope creep.",
  },
  {
    question: "What are typical ecommerce website costs?",
    answer: "Ecommerce website costs range from $3,000 for basic Shopify setups to $15,000+ for custom WooCommerce or headless commerce solutions. Costs include design, product catalog setup, payment processing, shipping integration, and security. Monthly costs for hosting, maintenance, and transaction fees typically run $200-$500/month.",
  },
  {
    question: "What's included in website development charges?",
    answer: "Website development charges cover design, development, testing, deployment, and initial training. This includes responsive design, SEO optimization, security setup, content management system, contact forms, and basic analytics. Ongoing costs like hosting, maintenance, and updates are separate and clearly outlined.",
  },
  {
    question: "Do you charge for website redesign consultations?",
    answer: "No! Initial consultations and website redesign quotes are completely free. During our 30-minute call, we'll discuss your current site, goals, timeline, and budget. You'll get honest feedback and a clear path forward—no obligation to move forward.",
  },
  {
    question: "What payment terms do you offer?",
    answer: "I offer flexible payment terms: 50% deposit to start, 50% upon completion for projects under $5,000. Larger projects can be split into milestone payments (e.g., 33% deposit, 33% at midpoint, 34% at launch). All terms are clearly outlined in the project agreement before work begins.",
  },
  {
    question: "Are there hidden fees in your web design pricing?",
    answer: "Absolutely not. My web design pricing is transparent and all-inclusive for the agreed scope. You'll receive a detailed quote covering design, development, revisions, and launch. The only additional costs are third-party services you choose (hosting, domains, premium plugins), which I'll recommend but you'll purchase directly.",
  },
  {
    question: "How long does website development take?",
    answer: "Timeline depends on project complexity: simple sites (2-3 weeks), business sites with custom features (4-6 weeks), ecommerce or complex applications (8-12 weeks). Rush projects available for an additional 25% fee. Timeline is confirmed in your project proposal.",
  },
  {
    question: "Do you offer website maintenance after launch?",
    answer: "Yes! All projects include 30 days of post-launch support. After that, you can choose a monthly maintenance package or pay-as-you-go hourly support. Maintenance includes updates, backups, security monitoring, and technical support to keep your site running smoothly.",
  },
  {
    question: "Does my business really need a website?",
    answer: "Yes, absolutely. In 2025, 97% of consumers search online before making a purchase. Without a website, you're invisible to most potential customers. A website builds credibility, works 24/7 to generate leads, and gives you control over your brand—something social media alone can't provide.",
  },
  {
    question: "Can I run a business without a website?",
    answer: "While technically possible, running a business without a website means lost revenue. Studies show businesses without websites lose 10-50% of potential customers to competitors with online presence. You'll rely on expensive advertising and word-of-mouth only, limiting your growth potential significantly.",
  },
  {
    question: "How much does a 5 page website cost?",
    answer: "A professional 5-page website typically costs $2,000-$4,000. This includes custom design, mobile responsiveness, SEO optimization, contact forms, and basic integrations. DIY builders are cheaper ($300-$800) but lack customization and professional polish that converts visitors into customers.",
  },
  {
    question: "How much is a 20 page website?",
    answer: "A 20-page website ranges from $5,000-$12,000 depending on complexity, custom features, and content requirements. This typically includes content management system, advanced SEO, custom functionality, and multiple integrations. Enterprise sites with custom applications can exceed $15,000.",
  },
  {
    question: "How much to charge for a 10 page website?",
    answer: "A 10-page custom website typically costs $3,500-$7,500. This includes professional design, responsive development, SEO optimization, content integration, and launch support. The exact price depends on features like e-commerce, custom forms, API integrations, or specialized functionality.",
  },
  {
    question: "How much does it cost to hire a web designer?",
    answer: "Hiring a web designer costs $1,000-$15,000+ depending on project scope. Freelancers charge $50-$150/hour, while agencies charge $100-$300/hour. Fixed-price projects are more common and predictable—simple sites ($1,500-$3,000), business sites ($3,000-$7,500), complex sites ($7,500+).",
  },
  {
    question: "How much should I expect to pay for a website design?",
    answer: "Expect to pay $2,000-$5,000 for a quality business website. Budget sites ($500-$1,500) often use templates with minimal customization. Premium custom designs ($5,000-$15,000+) include advanced features, custom development, and comprehensive SEO. Your investment should match your business goals and competitive position.",
  },
  {
    question: "Do people still hire web designers?",
    answer: "Absolutely. Despite DIY tools, professional web designer demand is growing. Businesses hire designers for custom functionality, professional branding, SEO optimization, and conversion-focused design that DIY tools can't match. Good design pays for itself through increased conversions and professional credibility.",
  },
  {
    question: "Is it cheaper to DIY website design?",
    answer: "DIY website design is cheaper upfront ($10-$50/month) but often costs more long-term. You'll spend 40-80 hours learning, designing, and troubleshooting—time better spent running your business. DIY sites often underperform in conversions, SEO, and mobile experience, costing you customers. Professional design typically pays for itself within 6-12 months.",
  },
  {
    question: "Which website builder is the best for small business?",
    answer: "For small businesses, WordPress (self-hosted) offers the best long-term value with full customization and ownership. Shopify is ideal for e-commerce. Wix and Squarespace work for very simple needs but limit growth. Custom-built sites on Next.js or similar frameworks provide maximum performance and flexibility for serious businesses.",
  },
  {
    question: "Is WordPress or Wix better for small business?",
    answer: "WordPress is better for most small businesses. It offers unlimited customization, better SEO capabilities, no transaction fees, and true ownership. Wix is easier to start but limits growth with platform lock-in, slower speeds, and less flexibility. WordPress sites also have higher resale value if you ever sell your business.",
  },
  {
    question: "What is the downside of Wix?",
    answer: "Wix downsides include platform lock-in (can't move your site), slower load speeds, limited SEO capabilities, monthly fees that add up, generic templates competitors also use, and restricted customization. For growing businesses, these limitations often force a costly rebuild to a more flexible platform within 2-3 years.",
  },
  {
    question: "How much should I pay for someone to manage my website?",
    answer: "Website management costs $100-$500/month depending on services. Basic maintenance (updates, backups, security) runs $100-$200/month. Comprehensive management including content updates, SEO, analytics, and support costs $300-$500/month. Pay-as-you-go hourly support runs $75-$150/hour for occasional needs.",
  },
  {
    question: "Do you still need a website in 2025?",
    answer: "More than ever. In 2025, a website is non-negotiable for credible businesses. 84% of consumers research businesses online before buying. AI search tools and voice assistants prioritize businesses with strong websites. Social media alone isn't enough—algorithms change overnight, but you own your website forever.",
  },
  {
    question: "Is Wix or Shopify better for small business?",
    answer: "It depends on your business type. Shopify is superior for product-based businesses with its powerful e-commerce features, while Wix works better for service businesses or simple informational sites. For serious online stores, Shopify's inventory management, payment processing, and sales features justify the higher cost.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free consultation and personalized quote for your project.
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

