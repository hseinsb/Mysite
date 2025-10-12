"use client";

import { motion } from "framer-motion";
import { Calendar, TrendingUp, Building, Zap } from "lucide-react";

const timeline = [
  {
    period: "16–18",
    icon: Building,
    title: "Foundation Years",
    description: "Signs shop, janitorial work, soccer, DoorDash. Learned discipline and cash-flow reality.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    period: "19–22", 
    icon: TrendingUp,
    title: "Business Education",
    description: "Tried wholesaling, Amazon FBA, dropshipping. Studied offers, ads, margins, and what not to do.",
    color: "from-purple-500 to-violet-600"
  },
  {
    period: "2023–2024",
    icon: Zap,
    title: "Agency Success",
    description: "Built a digital talent management agency on subscription platforms—scaled to six-figure revenue, then exited for values.",
    color: "from-accent to-accent-2"
  },
  {
    period: "2025–Now",
    icon: Calendar,
    title: "Systems Architect",
    description: "Grew a personal brand to 200k+ in months. Built funnels, payment flows, and automations that sell products and save time. Manage a collision shop's estimates, ops, and backend systems. I bridge real-world operations + digital infrastructure.",
    color: "from-green-500 to-emerald-600"
  }
];

const currentWork = [
  {
    title: "Done-For-You Systems",
    description: "Funnels, Stripe/PayPal, CRM, AI automations, owner dashboards."
  },
  {
    title: "Consulting",
    description: "Architecture sessions that map the stack you actually need."
  },
  {
    title: "Education",
    description: "Courses and templates for operators who want to build it themselves."
  }
];

export function AboutStory() {
  return (
    <section className="py-24 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* The Short Story */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            The Short Story
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From immigrant hustle to systems architect—every step taught me something about building things that work.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 mb-24">
          {timeline.map((item, index) => (
            <motion.div
              key={item.period}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-accent font-mono text-sm font-semibold">{item.period}</div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 lg:max-w-md">
                  <div className="relative">
                    {/* Large Period Text */}
                    <div className="text-6xl md:text-7xl font-bold font-display text-white/5 select-none text-center">
                      {item.period.split('–')[0]}
                    </div>
                    
                    {/* Floating accent */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-full blur-xl opacity-20`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < timeline.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* What I Do Now */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            What I Do Now
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Three ways to work with me, depending on your timeline and goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentWork.map((work, index) => (
            <motion.div
              key={work.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-4 text-accent">{work.title}</h3>
                <p className="text-muted leading-relaxed">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
