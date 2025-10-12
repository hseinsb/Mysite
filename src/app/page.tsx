import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhatIBuild } from "@/components/WhatIBuild";
import { CaseStudies } from "@/components/CaseStudies";
import { ServicesSnapshot } from "@/components/ServicesSnapshot";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { IntakeForm } from "@/components/IntakeForm";
import { Footer } from "@/components/Footer";

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
