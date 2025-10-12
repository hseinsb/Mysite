"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, Zap, Shield } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Operator first, dev second",
    description: "Real-world + digital experience means systems that actually work in practice"
  },
  {
    icon: Zap,
    title: "Built 200k audience in months",
    description: "Shipped revenue systems for both creators and shops—I understand both sides"
  },
  {
    icon: Shield,
    title: "Fast deployment. Clear ownership",
    description: "No fluff, no endless meetings. You get working systems and know exactly how they work"
  }
];

export function WhyWorkWithMe() {
  return (
    <section className="py-24 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Why Work With Me
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Outcomes, not deliverables. Systems that scale, not just pretty interfaces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6 h-full group-hover:border-accent/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional proof points */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">200K+</div>
                <div className="text-sm text-muted">Audience Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">6-Fig</div>
                <div className="text-sm text-muted">Digital Ops Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24hr</div>
                <div className="text-sm text-muted">Avg. Deployment</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
