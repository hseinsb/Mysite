"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  const scrollToForm = () => {
    const formSection = document.getElementById('intake');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to get started?
          </h2>
          
          <p className="text-lg text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and let's discuss how we can work together.
          </p>

          <button 
            onClick={scrollToForm}
            className="h-12 px-8 rounded-xl bg-accent hover:bg-accent-2 text-black font-semibold flex items-center space-x-2 group transition-all duration-200 hover:scale-105 mx-auto"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
