import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhatIBuild } from "@/components/WhatIBuild";
import { CaseStudies } from "@/components/CaseStudies";
import { ServicesSnapshot } from "@/components/ServicesSnapshot";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { IntakeForm } from "@/components/IntakeForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hire Professional Website Developer | AI-Powered Automation & Custom Design",
  description: "Need a website designer for hire? I build automated, AI-powered websites for small businesses. From custom development to smart automation—get a site that works for you.",
  keywords: [
    "website designers for hire",
    "hire professional website developer",
    "website design for small business near me",
    "ai powered website builder",
    "automated website builder",
    "business without a website",
    "systems architect",
    "automation",
    "funnels",
    "payment systems",
    "AI workflows",
  ],
  alternates: {
    canonical: "https://hussbuilds.com",
  },
  openGraph: {
    title: "Hire Professional Website Developer | AI-Powered Automation & Custom Design",
    description: "Need a website designer for hire? I build automated, AI-powered websites for small businesses. Custom development meets smart automation.",
    url: "https://hussbuilds.com",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Professional Website Developer | AI-Powered Automation",
    description: "Build automated, AI-powered websites for small businesses. Custom development meets smart automation.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CaseStudies />
        <WhatIBuild />
        <ServicesSnapshot />
        <WhyWorkWithMe />
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}
