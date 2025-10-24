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
  title: "FAQ | Website Development Cost, Web Design Fees & Pricing Questions",
  description: "Common questions about website development charges, web design fees, WordPress maintenance packages, and ecommerce website costs. Get transparent answers to your pricing questions.",
  keywords: [
    "website development charges",
    "web design fees",
    "wordpress monthly maintenance package",
    "website redesign quote",
    "web design rates per hour",
    "ecommerce website costs",
    "website development cost",
    "web design pricing",
  ],
  alternates: {
    canonical: "https://hussbuilds.com/faq",
  },
  openGraph: {
    title: "FAQ | Website Development Cost & Web Design Pricing",
    description: "Answers to common questions about website development charges, design fees, and maintenance packages.",
    url: "https://hussbuilds.com/faq",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Website Development Cost & Pricing",
    description: "Common questions about web design fees and development charges.",
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

