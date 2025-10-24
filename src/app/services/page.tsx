import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Website Development Cost & Pricing Packages | Transparent Web Design Rates",
  description: "Explore website development costs, design packages, and pricing. From low-cost website design to ecommerce solutions and WordPress maintenance packages—clear, upfront pricing.",
  keywords: [
    "website development cost",
    "website design packages prices",
    "low cost website design",
    "wordpress website design cost",
    "ecommerce website development cost",
    "website maintenance packages",
    "web design pricing",
    "website development charges",
    "website design services cost",
    "monthly website maintenance packages",
  ],
  alternates: {
    canonical: "https://hussbuilds.com/services",
  },
  openGraph: {
    title: "Website Development Cost & Pricing Packages | Transparent Rates",
    description: "Clear website development costs and design packages. From low-cost solutions to ecommerce and WordPress maintenance.",
    url: "https://hussbuilds.com/services",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Cost & Pricing Packages",
    description: "Transparent pricing for website development, design packages, and maintenance.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Services Hero Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Website Development Cost & Design Packages
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transparent pricing for custom websites, automation systems, and ongoing maintenance. 
              From low-cost website design to enterprise ecommerce solutions.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="pt-16 pb-8 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Website Design & Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom website design, ecommerce development, and ongoing maintenance built for growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* WordPress Services */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-accent/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  WordPress Website Design
                </h3>
                <p className="text-accent font-semibold mb-6 text-lg">
                  Starting at $1,500
                </p>
                <p className="text-gray-300 mb-6">
                  Custom WordPress sites with modern design, SEO optimization, and mobile responsiveness for businesses ready to grow online.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-300">Custom-built themes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-300">Optimized plugin setup.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-300">SEO-ready structure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-300">Mobile-responsive design.</span>
                  </li>
                </ul>
              </div>

              {/* Ecommerce Services */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-accent/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Ecommerce Website Development
                </h3>
                <p className="text-accent font-semibold mb-6 text-lg">
                  Starting at $3,000
                </p>
                <p className="text-gray-300 mb-6">
                  Full-featured online stores with payment processing, inventory management, and automated workflows. Shopify, WooCommerce, or custom solutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-300">Payment gateway integration.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-300">Product catalog setup.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-300">Automated order processing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-300">Analytics & reporting.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Maintenance Packages */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Website Maintenance Packages
              </h3>
              <p className="text-accent font-semibold mb-6 text-lg">
                From $99/month
              </p>
              <p className="text-gray-300 mb-8">
                Keep your site secure, fast, and up-to-date with ongoing maintenance. Includes updates, backups, security monitoring, and technical support.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-3 text-lg">Basic</h4>
                  <p className="text-accent font-semibold mb-2">$99/mo</p>
                  <p className="text-sm text-gray-400">Updates, backups, and monitoring.</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-accent/30">
                  <h4 className="font-bold text-white mb-3 text-lg">Professional</h4>
                  <p className="text-accent font-semibold mb-2">$199/mo</p>
                  <p className="text-sm text-gray-400">+ Performance optimization and SEO.</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-3 text-lg">Enterprise</h4>
                  <p className="text-accent font-semibold mb-2">$399/mo</p>
                  <p className="text-sm text-gray-400">+ Priority support and custom dev.</p>
                </div>
              </div>
            </div>

            {/* Visual Divider */}
            <div className="mt-20 md:mt-24 mb-0 flex items-center gap-3 md:gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              <span className="text-gray-500 text-sm">•••</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
          </div>
        </section>

        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}

