import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutProof } from "@/components/about/AboutProof";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "About Hussein | Professional Website Developer & AI Automation Expert",
  description: "Meet Hussein Sbeiti—a professional website developer specializing in AI-powered automation and custom web solutions. From systems architecture to smart website builders.",
  keywords: [
    "Hussein Sbeiti",
    "professional website developer",
    "website designers for hire",
    "ai website maker",
    "automated website builder",
    "systems architect",
    "automation expert",
  ],
  alternates: {
    canonical: "https://hussbuilds.com/about",
  },
  openGraph: {
    title: "About Hussein | Professional Website Developer & AI Automation Expert",
    description: "Meet Hussein Sbeiti—a professional website developer specializing in AI-powered automation and custom web solutions.",
    url: "https://hussbuilds.com/about",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hussein | Professional Website Developer",
    description: "Professional website developer specializing in AI-powered automation and custom solutions.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutPrinciples />
        <AboutProof />
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}
