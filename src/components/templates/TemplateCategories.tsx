"use client";

import { motion } from "framer-motion";
import { 
  Workflow, 
  Mail, 
  CreditCard, 
  Database,
  Calendar,
  FileText,
  BarChart3,
  Users,
  Bot,
  Globe,
  ShoppingCart,
  MessageSquare
} from "lucide-react";

const categories = [
  {
    name: "Sales Funnels",
    icon: Workflow,
    count: "12 templates",
    description: "Complete funnel systems from lead capture to conversion",
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Email Automation",
    icon: Mail,
    count: "8 templates", 
    description: "Welcome sequences, nurture campaigns, and follow-ups",
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Payment Processing",
    icon: CreditCard,
    count: "6 templates",
    description: "Stripe, PayPal integration with delivery automation",
    color: "from-purple-500 to-violet-600"
  },
  {
    name: "CRM & Lead Management",
    icon: Database,
    count: "10 templates",
    description: "Lead scoring, qualification, and nurturing systems",
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Booking & Scheduling",
    icon: Calendar,
    count: "5 templates",
    description: "Automated booking flows with confirmations and reminders",
    color: "from-pink-500 to-rose-600"
  },
  {
    name: "Content Creation",
    icon: FileText,
    count: "7 templates",
    description: "Blog posting, social media, and content distribution",
    color: "from-indigo-500 to-blue-600"
  },
  {
    name: "Analytics & Reporting",
    icon: BarChart3,
    count: "4 templates",
    description: "Dashboard creation and automated reporting systems",
    color: "from-teal-500 to-cyan-600"
  },
  {
    name: "Team Collaboration",
    icon: Users,
    count: "6 templates",
    description: "Project management and team communication workflows",
    color: "from-amber-500 to-yellow-600"
  },
  {
    name: "AI Workflows",
    icon: Bot,
    count: "8 templates",
    description: "GPT integration, content generation, and smart automation",
    color: "from-violet-500 to-purple-600"
  },
  {
    name: "Website Integration",
    icon: Globe,
    count: "5 templates",
    description: "Form submissions, chat integration, and visitor tracking",
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    count: "9 templates",
    description: "Order processing, inventory management, and fulfillment",
    color: "from-emerald-500 to-green-600"
  },
  {
    name: "Customer Support",
    icon: MessageSquare,
    count: "6 templates",
    description: "Ticket routing, auto-responses, and follow-up systems",
    color: "from-rose-500 to-pink-600"
  }
];

export function TemplateCategories() {
  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Template Categories
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Find the exact automation you need across 12 different categories. Each template is battle-tested and ready to deploy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-accent/30 transition-all duration-300 group-hover:bg-card/50">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="text-muted text-sm mb-3 leading-relaxed">
                  {category.description}
                </p>

                <div className="text-xs font-medium text-accent">
                  {category.count}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Can't Find What You Need?</h3>
            <p className="text-muted mb-6">
              I'm constantly adding new templates based on client requests and market needs. 
              Let me know what automation you're looking for.
            </p>
            <motion.a
              href="/contact"
              className="bg-accent hover:bg-accent-2 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Request Custom Template</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
