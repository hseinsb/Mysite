import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Get a Quote | Website Development Cost & Free Consultation",
  description: "Ready to hire a professional website developer? Get transparent pricing, discuss your website development cost, and start with a free strategy call.",
  keywords: [
    "website development cost",
    "hire professional website developer",
    "website designers for hire",
    "get a quote",
    "free consultation",
    "website pricing",
  ],
  alternates: {
    canonical: "https://hussbuilds.com/contact",
  },
  openGraph: {
    title: "Get a Quote | Website Development Cost & Free Consultation",
    description: "Ready to hire a professional website developer? Get transparent pricing and start with a free strategy call.",
    url: "https://hussbuilds.com/contact",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Quote | Website Development Cost",
    description: "Hire a professional website developer. Free consultation included.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}

