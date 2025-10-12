"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Play, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Students", value: "2,500+", icon: Users },
  { label: "Hours of Content", value: "50+", icon: Clock },
  { label: "Completion Rate", value: "89%", icon: Play }
];

export function CoursesHero() {
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
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">System Building Courses</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Build it yourself
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              with step-by-step
            </span>
            <br />
            <span className="text-white">
              guidance.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Learn to build complete automation systems from scratch. No coding required—just proven frameworks, 
            real examples, and actionable templates you can implement immediately.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-2 text-black font-semibold px-8 py-3 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              <a href="#courses" className="flex items-center space-x-2">
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <a href="#preview">Watch Preview</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
