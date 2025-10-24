"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Users, Zap, Shield, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative min-h-screen md:min-h-[700px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black pb-0">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />
        
        {/* Dark geometric shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        
        {/* Animated dark orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Clean grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* Main Content - Professional Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-end min-h-screen md:min-h-[700px] lg:min-h-screen pt-20 lg:pt-0 pb-0">
          
          {/* Text Content - High Converting */}
          <motion.div 
            className="space-y-6 lg:space-y-8 lg:text-left text-center order-1 pb-8 lg:pb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            {/* Powerful Headline */}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Turn Your Business Into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative">
                Revenue Machine
              </span>
              {" "}with AI
            </motion.h1>

            {/* Value Proposition */}
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl lg:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I build custom AI systems, automated funnels, and payment flows that work 24/7 to grow your business. No templates, no shortcuts—just results.
            </motion.p>

            {/* Key Benefits */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: TrendingUp, text: "Save 20+ Hours Per Week" },
                { icon: Zap, text: "90% Process Automation" },
                { icon: Shield, text: "10+ Industries Served" },
                { icon: Users, text: "Cut Your Costs by 50%" }
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300">
                  <Icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Strong CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center pt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 group text-sm md:text-base"
                >
                  Get My Free Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="#portfolio"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium rounded-xl hover:border-blue-500/50 hover:bg-blue-500/20 transition-all group text-sm md:text-base"
                >
                  <Award className="mr-2 w-4 h-4" />
                  View Success Stories
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 md:gap-8 pt-6 lg:justify-start justify-center border-t border-gray-800 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">$500K</div>
                <div className="text-xs md:text-sm text-gray-400">Revenue Generated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">150+</div>
                <div className="text-xs md:text-sm text-gray-400">Systems Deployed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-white ml-2">4.9</span>
                </div>
                <div className="text-xs md:text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Professional Portrait - No Background */}
          <motion.div 
            className="relative order-2 hidden md:flex items-end justify-center lg:justify-end md:mx-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-full">
              {/* Clean Portrait - Bottom Snapped */}
              <motion.div 
                className="relative w-full h-[500px] sm:h-[600px] md:h-[500px] lg:h-[900px] md:translate-y-16 lg:translate-y-12"
                whileHover={{ 
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full md:scale-[1.2] lg:scale-[1.75] scale-[1.75] origin-bottom">
                  <Image
                    src="/Hussein-about.png"
                    alt="Hussein Sbeiti - AI Systems Architect"
                    fill
                    className="object-contain object-bottom"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 70vw, 800px"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}