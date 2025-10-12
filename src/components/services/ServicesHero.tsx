"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const benefits = [
  "No hiring headaches",
  "Built in weeks, not months", 
  "Full system ownership",
  "Clear documentation"
];

export function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 opacity-[0.02] mix-blend-soft-light">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%),
                                radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`
             }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Done-For-You Systems</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Custom systems.
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              Built to scale
            </span>
            <br />
            <span className="text-white">
              without hiring a team.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            End-to-end automation systems that handle everything from lead capture to payment processing. 
            No technical team required—just working systems that grow your business.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center space-x-2 text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-2 text-black font-semibold px-8 py-3 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              <Link href="#packages" className="flex items-center space-x-2">
                <span>View Packages</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="#intake">Start Your Build</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
