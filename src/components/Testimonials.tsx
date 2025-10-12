"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Hussein transformed our entire business model. His AI system increased our revenue by 340% in just 3 months. The ROI was immediate and continues to compound.",
    author: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    company: "TechFlow Solutions",
    result: "+340% Revenue Growth",
    rating: 5,
    avatar: "SC"
  },
  {
    quote: "The automation system Hussein built eliminated 90% of our manual processes. We went from 40 hours/week of admin work to completely hands-off operations.",
    author: "Michael Rodriguez",
    role: "Founder, AutoScale Agency",
    company: "AutoScale Agency",
    result: "90% Process Automation",
    rating: 5,
    avatar: "MR"
  },
  {
    quote: "Best investment we've made. Hussein's funnel optimization increased our conversion rate from 2.1% to 18.5%. The system pays for itself every week.",
    author: "Jessica Kim",
    role: "CMO, GrowthLab",
    company: "GrowthLab",
    result: "+780% Conversion Rate",
    rating: 5,
    avatar: "JK"
  },
  {
    quote: "Hussein doesn't just build systems—he builds revenue machines. Our customer acquisition cost dropped 60% while our lifetime value doubled.",
    author: "David Thompson",
    role: "VP Marketing, ScaleUp Inc",
    company: "ScaleUp Inc",
    result: "60% Lower CAC, 2x LTV",
    rating: 5,
    avatar: "DT"
  },
  {
    quote: "Finally found someone who understands both the technical complexity and business impact. Hussein delivered a system that exceeded all expectations.",
    author: "Amanda Foster",
    role: "Operations Director, InnovateCorp",
    company: "InnovateCorp",
    result: "Exceeded All KPIs",
    rating: 5,
    avatar: "AF"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
          >
            Client Success Stories
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Transforming Businesses, Delivering Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it—see how I've helped businesses like yours achieve remarkable growth and efficiency
          </p>
        </motion.div>

        {/* Featured Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-emerald-500/10">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <Quote className="w-10 h-10 text-emerald-400/50 mb-4" />
                  
                  <blockquote className="text-white text-lg leading-relaxed mb-6 font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Result Badge */}
                  <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg p-3 mb-6 border border-emerald-500/20">
                    <div className="text-emerald-400 font-bold text-center">{testimonial.result}</div>
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-4 border-t border-gray-700/50 pt-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-300">{testimonial.role}</div>
                      <div className="text-xs text-emerald-400 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional testimonials in compact format */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.slice(3).map((testimonial, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border-gray-700/50 hover:border-emerald-500/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-white mb-4 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg p-2 mb-4 border border-emerald-500/20">
                        <div className="text-emerald-400 font-semibold text-sm text-center">{testimonial.result}</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white text-sm">{testimonial.author}</div>
                          <div className="text-xs text-gray-300">{testimonial.role}</div>
                          <div className="text-xs text-emerald-400 font-medium">{testimonial.company}</div>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$5M+</div>
                <div className="text-gray-300 text-sm">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.9★</div>
                <div className="text-gray-300 text-sm">Client Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
