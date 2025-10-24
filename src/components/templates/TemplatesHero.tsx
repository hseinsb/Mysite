"use client";

import { motion } from "framer-motion";
import { Package, ArrowRight, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Deploy in minutes, not months",
  "Proven workflows that convert", 
  "Complete documentation included",
  "Lifetime updates"
];

const stats = [
  { label: "Templates", value: "50+" },
  { label: "Categories", value: "12" },
  { label: "Downloads", value: "5,000+" }
];

export function TemplatesHero() {
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
            <Package className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Ready-to-Deploy Templates</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Plug-and-play
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              automation templates
            </span>
            <br />
            <span className="text-white">
              ready to deploy.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Skip the development time. Get proven automation workflows for Make, Zapier, Notion, and more. 
            Each template includes setup instructions, customization guides, and best practices.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
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

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-2 text-black font-semibold px-8 py-3 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              <a href="#templates" className="flex items-center space-x-2">
                <span>Browse Templates</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <a href="#categories" className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>View Categories</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
