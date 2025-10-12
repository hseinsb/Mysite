"use client";

import { motion } from "framer-motion";
import { Brain, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Get unstuck in 60 minutes",
  "Clear action plan delivered", 
  "Tech stack recommendations",
  "Recording + documentation"
];

export function ConsultingHero() {
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
            <Brain className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Strategy Consulting</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Rent my brain.
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              Map your stack
            </span>
            <br />
            <span className="text-white">
              in 60–75 minutes.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Skip months of research and testing. Get a clear systems architecture, 
            tool recommendations, and actionable next steps from someone who's built hundreds of workflows.
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

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-muted">Systems Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">$2M+</div>
              <div className="text-sm text-muted">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">24hr</div>
              <div className="text-sm text-muted">Avg. Response</div>
            </div>
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
              <a href="#booking" className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Book Your Session</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
