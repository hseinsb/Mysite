"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-[#0F131A]" />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-24 md:py-32">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
            About <span className="text-accent">Hussein</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white max-w-3xl leading-relaxed mb-8">
            I build systems that turn attention into operations and revenue.
          </p>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg text-muted leading-relaxed">
              Lebanese, came to the U.S. at 16 with nothing but work ethic. I learned the game the hard way—labor jobs, deliveries, night shifts—then translated that grit into digital stacks that actually move a business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
