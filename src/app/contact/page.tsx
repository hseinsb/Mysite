import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Contact | Hussein Sbeiti - Get Your Free Strategy Call",
  description: "Get in touch to discuss your project. Fill out the form and let's build something great together. Free strategy call included.",
  keywords: ["contact", "get in touch", "project inquiry", "consultation", "free strategy call", "automation consultation"],
  alternates: {
    canonical: "https://hussbuilds.com/contact",
  },
  openGraph: {
    title: "Contact | Hussein Sbeiti - Get Your Free Strategy Call",
    description: "Get in touch to discuss your project. Fill out the form and let's build something great together.",
    url: "https://hussbuilds.com/contact",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Hussein Sbeiti",
    description: "Get in touch to discuss your project. Free strategy call included.",
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

