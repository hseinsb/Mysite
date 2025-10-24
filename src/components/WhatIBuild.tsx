"use client";

import { motion } from "framer-motion";
import { Zap, Bot, BarChart3, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Bot,
    title: "AI Systems & Automation",
    description: "AI that takes work off your plate. From answering customer questions to qualifying leads, we automate the busywork so your business runs 24/7.",
    features: ["Instant customer support", "Automatic lead follow-up", "Processes that never sleep", "Save 20+ hours per week"],
    results: "Save 20+ hours per week",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "High-Converting Funnels",
    description: "Sales systems built to convert. From landing pages to payment flows, we design funnels that turn traffic into loyal customers.",
    features: ["Websites that sell for you", "Seamless payment integration", "Automated email follow-up", "Proven conversion optimization"],
    results: "More sales, less work",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Know your numbers in real-time. We build dashboards that show your revenue, costs, and growth — so you always know where to focus.",
    features: ["Custom dashboards for your business", "Real-time performance insights", "Track what's working (and what's not)", "Make data-driven decisions with confidence"],
    results: "Make better decisions faster",
    color: "from-orange-500 to-red-600"
  }
];

export function WhatIBuild() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            Services & Solutions
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What I Can Build For You
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple solutions that save you time, make you money, and help your business run smoother
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Results Badge */}
                <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg p-4 mb-6 border border-emerald-500/20">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span className="text-white font-semibold">{service.results}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <Link href="#contact">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not Sure Which Solution Fits Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your specific needs and create a custom solution that drives real results for your business.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25"
              >
                <Link href="#contact">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}