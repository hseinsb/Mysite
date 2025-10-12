"use client";

import { motion } from "framer-motion";
import { Search, Building2, Code, TestTube, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description: "Deep dive into your business model, current systems, and growth goals. We map out exactly what needs to be built.",
    duration: "2-3 days",
    deliverables: ["Business analysis", "Technical audit", "Requirements doc"]
  },
  {
    number: "02", 
    title: "Architect",
    icon: Building2,
    description: "Design the complete system architecture with user flows, integrations, and technical specifications.",
    duration: "3-5 days",
    deliverables: ["System architecture", "User flow diagrams", "Tech stack plan"]
  },
  {
    number: "03",
    title: "Build",
    icon: Code,
    description: "Develop your custom system with real-time progress updates. You'll see your system come to life daily.",
    duration: "1-3 weeks",
    deliverables: ["Custom development", "Integration setup", "Progress updates"]
  },
  {
    number: "04",
    title: "Test",
    icon: TestTube,
    description: "Rigorous testing with real scenarios, load testing, and user acceptance testing to ensure everything works perfectly.",
    duration: "2-3 days", 
    deliverables: ["QA testing", "Performance optimization", "Bug fixes"]
  },
  {
    number: "05",
    title: "Handoff",
    icon: Handshake,
    description: "Complete documentation, training, and support setup. You'll know exactly how to operate and maintain your system.",
    duration: "1-2 days",
    deliverables: ["Documentation", "Training session", "Support setup"]
  }
];

export function ProcessSteps() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            The Build Process
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A proven 5-step process that delivers working systems on time, every time.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-2 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="text-accent font-mono text-sm font-semibold">Step {step.number}</div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-semibold text-accent mb-1">Duration</div>
                        <div className="text-sm text-muted">{step.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-accent mb-1">Deliverables</div>
                        <div className="text-sm text-muted">
                          {step.deliverables.join(", ")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 lg:max-w-md">
                  <div className="relative">
                    {/* Large Step Number */}
                    <div className="text-8xl md:text-9xl font-bold font-display text-white/5 select-none">
                      {step.number}
                    </div>
                    
                    {/* Floating elements for visual interest */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent-2/20 rounded-full blur-xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Ready to Start Your Build?</h3>
            <p className="text-muted mb-6">
              The process starts with a discovery call to understand your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#intake"
                className="bg-accent hover:bg-accent-2 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Discovery Process
              </motion.a>
              <motion.a
                href="/consulting"
                className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Strategy Call First
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
