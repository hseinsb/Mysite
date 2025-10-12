import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutProof } from "@/components/about/AboutProof";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "About Hussein Sbeiti | Systems Architect",
  description: "Lebanese immigrant turned systems architect. From labor jobs at 16 to building six-figure revenue systems. Ethics over hype, outcomes over deliverables.",
  keywords: ["Hussein Sbeiti", "systems architect", "entrepreneur", "automation", "Lebanese", "immigrant story"],
  openGraph: {
    title: "About Hussein Sbeiti | Systems Architect",
    description: "Lebanese immigrant turned systems architect. From labor jobs at 16 to building six-figure revenue systems. Ethics over hype, outcomes over deliverables.",
    url: "https://husseinsbeiti.com/about",
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
