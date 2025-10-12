"use client";

import { motion } from "framer-motion";
import { 
  Infinity, 
  Download, 
  Users, 
  HeadphonesIcon,
  CheckCircle,
  Shield,
  Trophy,
  BookOpen
} from "lucide-react";

const benefits = [
  {
    icon: Infinity,
    title: "Lifetime Access",
    description: "Once you buy, it's yours forever. No monthly fees, no expiration dates.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Download,
    title: "Downloadable Resources",
    description: "Templates, checklists, and tools you can use immediately in your business.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Users,
    title: "Private Community",
    description: "Connect with other system builders, share wins, and get help when stuck.",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: HeadphonesIcon,
    title: "Direct Support",
    description: "Get answers to your questions and guidance on implementation.",
    color: "from-orange-500 to-red-600"
  }
];

const guarantees = [
  {
    icon: Shield,
    title: "30-Day Money Back",
    description: "If you don't see value in the first 30 days, get a full refund. No questions asked."
  },
  {
    icon: Trophy,
    title: "Results Guarantee",
    description: "Follow the system and see results, or we'll work with you personally until you do."
  },
  {
    icon: BookOpen,
    title: "Always Updated",
    description: "Courses are updated regularly with new tools, strategies, and case studies."
  }
];

const testimonials = [
  {
    quote: "Built my first automated funnel in 2 weeks. Made back the course cost in the first month.",
    author: "Sarah K.",
    role: "Course Creator",
    course: "System School"
  },
  {
    quote: "Finally understanding how to monetize my 50k Instagram following. Revenue up 300%.",
    author: "Mike T.", 
    role: "Influencer",
    course: "Monetize Your Influence"
  },
  {
    quote: "App downloads increased 180% using the exact scripts from the course.",
    author: "David L.",
    role: "App Developer", 
    course: "App Promo Playbook"
  }
];

export function CourseBenefits() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Benefits */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            What Makes These Different
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            More than just courses—complete learning systems with everything you need to succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 h-full">
                <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${benefit.color} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Risk-Free Learning
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Your success is guaranteed. Here's how we make sure you win.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 h-full">
                <guarantee.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{guarantee.title}</h3>
                <p className="text-muted leading-relaxed">{guarantee.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Student Results */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Student Results
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Real outcomes from students who implemented what they learned.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="w-4 h-4 text-accent" />
                ))}
              </div>
              
              <blockquote className="text-white mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-accent">{testimonial.author}</div>
                <div className="text-sm text-muted">{testimonial.role}</div>
                <div className="text-xs text-accent/70 mt-1">{testimonial.course}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
