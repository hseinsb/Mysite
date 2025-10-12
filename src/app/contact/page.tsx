import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Contact | Hussein Sbeiti",
  description: "Get in touch to discuss your project. Fill out the form and let's build something great together.",
  keywords: ["contact", "get in touch", "project inquiry", "consultation"],
  openGraph: {
    title: "Contact | Hussein Sbeiti",
    description: "Get in touch to discuss your project. Fill out the form and let's build something great together.",
    url: "https://husseinsbeiti.com/contact",
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

