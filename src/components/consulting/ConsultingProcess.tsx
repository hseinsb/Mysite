"use client";

import { motion } from "framer-motion";
import { FileText, Video, Map, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Pre-Session Prep",
    icon: FileText,
    description: "You'll receive a brief questionnaire to understand your business, current systems, and goals.",
    timeline: "24 hours before"
  },
  {
    number: "02", 
    title: "Strategy Session",
    icon: Video,
    description: "We dive deep into your business model, analyze current workflows, and design your ideal system architecture.",
    timeline: "30-75 minutes"
  },
  {
    number: "03",
    title: "Documentation Delivery",
    icon: Map,
    description: "Within 24 hours, you receive a complete system diagram, tool recommendations, and implementation roadmap.",
    timeline: "Next day"
  },
  {
    number: "04",
    title: "Implementation Support", 
    icon: Rocket,
    description: "Optional follow-up support to answer questions as you implement the recommended systems.",
    timeline: "Ongoing"
  }
];

const deliverables = [
  {
    title: "System Architecture Diagram",
    description: "Visual map of your complete system with all integrations and data flows"
  },
  {
    title: "Tool Recommendation Report",
    description: "Specific software recommendations with pricing, pros/cons, and implementation notes"
  },
  {
    title: "Implementation Roadmap",
    description: "Step-by-step action plan with priorities, timelines, and success metrics"
  },
  {
    title: "Session Recording",
    description: "Full video recording of our session for future reference"
  }
];

export function ConsultingProcess() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Process Steps */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A structured process designed to give you maximum value in minimum time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="text-accent font-mono text-sm font-semibold mb-2">
                  Step {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent to-accent-2 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-black" />
                </div>

                <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">{step.description}</p>
                
                <div className="text-xs font-medium text-accent bg-accent/10 rounded-full px-3 py-1 inline-block">
                  {step.timeline}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deliverables */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            What You'll Receive
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Comprehensive documentation and resources to implement your new systems successfully.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {deliverables.map((deliverable, index) => (
            <motion.div
              key={deliverable.title}
              className="flex space-x-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-2">{deliverable.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{deliverable.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted mb-6">
              Book your session now and walk away with a clear roadmap for scaling your business systems.
            </p>
            <motion.a
              href="#booking"
              className="bg-accent hover:bg-accent-2 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Choose Your Session</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
