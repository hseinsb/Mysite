"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, Sparkles, ExternalLink, Home, Car, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    title: "Premium Real Estate Website",
    category: "Real Estate",
    url: "https://zjaber.com",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Lead Forms"],
    icon: Home,
    image: "/zjaber-hero.png",
    results: "Modern, conversion-optimized real estate platform with seamless property browsing and contact flows",
    benefits: [
      { label: "Professional Online Presence", description: "Establish credibility with modern design", icon: Sparkles },
      { label: "Lead Generation System", description: "Capture and manage property inquiries", icon: Target },
      { label: "Mobile-First Experience", description: "Reach clients on any device", icon: Zap }
    ]
  },
  {
    title: "Auto Repair Business Website",
    category: "Auto Repair",
    url: "https://whitticoscollision.co",
    tech: ["WordPress", "Custom Forms", "SEO", "Local Business"],
    icon: Car,
    image: "/whitticos-hero.png",
    results: "Complete digital transformation for collision repair shop with streamlined customer experience",
    benefits: [
      { label: "24/7 Online Booking", description: "Customers can schedule anytime", icon: Zap },
      { label: "Instant Estimates", description: "Automated quote request system", icon: Target },
      { label: "Local SEO Optimized", description: "Be found by nearby customers", icon: Sparkles }
    ]
  },
  {
    title: "High-Converting Product Landing Page",
    category: "Digital Product",
    url: "https://husseinsbeiti.com",
    tech: ["Stripe", "Email Automation", "Analytics", "A/B Testing"],
    icon: BookOpen,
    image: "/husseinsbeiti-hero.png",
    results: "Fully automated digital product sales funnel with seamless payment and delivery system",
    benefits: [
      { label: "Fully Automated Sales", description: "Sell while you sleep", icon: Zap },
      { label: "Instant Delivery", description: "Products delivered automatically", icon: Target },
      { label: "Payment Processing", description: "Secure Stripe integration", icon: Sparkles }
    ]
  }
];

export function CaseStudies() {
  return (
    <section id="portfolio" className="pt-16 pb-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
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
            Success Stories
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to conversion—see how I've transformed businesses with custom AI systems and automated solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden h-full group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                <CardContent className="p-0">
                  {/* Hero Screenshot */}
                  <div className="h-56 relative overflow-hidden group-hover:shadow-lg">
                    <Image
                      src={study.image}
                      alt={`${study.title} hero section`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {study.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {study.results}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      {study.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                          <benefit.icon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-white font-semibold text-sm">{benefit.label}</div>
                            <div className="text-gray-400 text-xs">{benefit.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25"
                    >
                      <Link href={study.url} target="_blank" rel="noopener noreferrer">
                        View Live Project
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's build a custom AI system that transforms your business and drives real results. Your success story could be next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    Get My Free Strategy Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50"
                >
                  <Link href="#services">
                    View All Services
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}