import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutProof } from "@/components/about/AboutProof";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "About Hussein Sbeiti — Systems Architect & Automation Strategist",
  description: "From immigrant hustle to systems architecture. Hussein Sbeiti builds scalable funnels, automations, and AI workflows that turn attention into measurable revenue.",
  keywords: [
    "Hussein Sbeiti",
    "systems architect",
    "automation strategist",
    "funnel builder",
    "AI workflows",
    "business automation",
    "revenue systems",
    "digital infrastructure",
  ],
  alternates: {
    canonical: "https://hussbuilds.com/about",
  },
  openGraph: {
    title: "About Hussein Sbeiti — Systems Architect & Automation Strategist",
    description: "From immigrant hustle to systems architecture. Hussein Sbeiti builds scalable funnels, automations, and AI workflows that turn attention into measurable revenue.",
    url: "https://hussbuilds.com/about",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hussein Sbeiti — Systems Architect & Automation Strategist",
    description: "From immigrant hustle to systems architecture. Building funnels, automations, and AI workflows that turn attention into revenue.",
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
