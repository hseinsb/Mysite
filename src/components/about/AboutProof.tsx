"use client";

import { motion } from "framer-motion";
import { Users, Building, FileText, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Users,
    metric: "200K+",
    description: "Audience built in < 6 months with educational content",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Building,
    metric: "Complete OS",
    description: "Collision Shop OS: online estimates, invoicing, review engine, automations",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: FileText,
    metric: "Digital Funnels",
    description: "Shipped digital product funnels (PDFs/quizzes) with Stripe + email delivery and analytics",
    color: "from-accent to-accent-2"
  },
  {
    icon: TrendingUp,
    metric: "Six Figures",
    description: "Ran a lean agency to six figures, then pivoted to values-aligned work",
    color: "from-green-500 to-emerald-600"
  }
];

export function AboutProof() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Selected Proof
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Results speak louder than promises. Here's what I've built and scaled.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.metric}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-accent/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-accent mb-2 group-hover:text-accent-2 transition-colors duration-300">
                      {achievement.metric}
                    </div>
                    <p className="text-muted leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Bio */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/10 backdrop-blur-sm border border-white/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold mb-4 text-accent">Press Bio</h4>
            <p className="text-muted leading-relaxed italic">
              Hussein Sbeiti is a systems architect and operator who builds revenue infrastructure for creators and small businesses. 
              He's grown a 200k+ audience, engineered high-converting funnels and automations, and runs backend operations for a collision shop. 
              His work bridges real-world ops and modern digital stacks—fast, ethical, and measurable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
