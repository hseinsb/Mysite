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

        {/* Pricing Details Section */}
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              Website Design Packages & Prices
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* WordPress Pricing */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  WordPress Website Design Cost
                </h3>
                <p className="text-gray-300 mb-6">
                  Custom WordPress sites with modern design, SEO optimization, and mobile responsiveness. 
                  Includes monthly maintenance packages for ongoing support.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li>✓ Custom theme development</li>
                  <li>✓ Plugin integration & optimization</li>
                  <li>✓ SEO-ready structure</li>
                  <li>✓ WordPress monthly maintenance package available</li>
                </ul>
              </div>

              {/* Ecommerce Pricing */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  Ecommerce Website Development Cost
                </h3>
                <p className="text-gray-300 mb-6">
                  Full-featured online stores with payment processing, inventory management, 
                  and automated workflows. Shopify, WooCommerce, or custom solutions.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li>✓ Payment gateway integration</li>
                  <li>✓ Product catalog setup</li>
                  <li>✓ Automated order processing</li>
                  <li>✓ Analytics & reporting</li>
                </ul>
              </div>
            </div>

            {/* Maintenance Packages */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Monthly Website Maintenance Packages
              </h3>
              <p className="text-gray-300 mb-6">
                Keep your site secure, fast, and up-to-date with ongoing maintenance. 
                Includes updates, backups, security monitoring, and technical support.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-accent mb-2">Basic</h4>
                  <p className="text-sm text-gray-400">Updates, backups, monitoring</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Professional</h4>
                  <p className="text-sm text-gray-400">+ Performance optimization, SEO</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Enterprise</h4>
                  <p className="text-sm text-gray-400">+ Priority support, custom dev</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}

