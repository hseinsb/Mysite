"use client";

import { motion } from "framer-motion";
import { Shield, Target, Zap, ArrowRightLeft } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Ethics over hype",
    description: "No tricks. Systems that survive audits and time.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Target,
    title: "Outcomes over deliverables",
    description: "Fewer moving parts, more throughput.",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Zap,
    title: "Speed with clarity",
    description: "Ship fast, document, automate, hand off.",
    color: "from-yellow-500 to-amber-600"
  },
  {
    icon: ArrowRightLeft,
    title: "Bridge the gap",
    description: "Content → Conversion. Idea → Execution. Owner vision → Working system.",
    color: "from-green-500 to-emerald-600"
  }
];

export function AboutPrinciples() {
  return (
    <section className="pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Operating Principles
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            How I approach every project, every client, every system I build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-accent/30 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${principle.color} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <principle.icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                  {principle.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
              "You don't need another 'website.' You need infrastructure: a clear offer, a clean funnel, money in the right account, and follow-ups that happen without you."
            </blockquote>
            <cite className="text-accent font-semibold block mb-8">— Hussein Sbeiti</cite>
            
            {/* Personal Close */}
            <p className="text-lg text-muted leading-relaxed">
              If you're ready to stop patching tools and start building infrastructure, let's talk.
            </p>
          </div>
        </motion.div>

        {/* Emotional Climax */}
        <motion.div
          className="text-center mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
            Every system I build today started as survival. Now it's about helping others build their own.
          </p>
        </motion.div>

        {/* Visual Divider */}
        <div className="mt-20 md:mt-24 mb-0 flex items-center gap-3 md:gap-4 px-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <span className="text-gray-500 text-sm">•••</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
