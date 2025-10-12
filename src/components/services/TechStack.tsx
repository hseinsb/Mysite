"use client";

import { motion } from "framer-motion";
import { 
  CreditCard, 
  Workflow, 
  Database, 
  Globe, 
  Mail, 
  BarChart3,
  Smartphone,
  Cloud,
  Zap,
  Bot
} from "lucide-react";

const techCategories = [
  {
    category: "Payments & Billing",
    icon: CreditCard,
    tools: ["Stripe", "PayPal", "Shopify Payments", "WooCommerce"],
    color: "from-green-500 to-emerald-600"
  },
  {
    category: "Automation & Workflows", 
    icon: Workflow,
    tools: ["Make (Integromat)", "Zapier", "N8N", "Microsoft Power Automate"],
    color: "from-purple-500 to-violet-600"
  },
  {
    category: "Databases & CRM",
    icon: Database,
    tools: ["Airtable", "Notion", "HubSpot", "Pipedrive", "Monday.com"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    category: "Website & Landing Pages",
    icon: Globe,
    tools: ["Framer", "Webflow", "WordPress", "Next.js", "React"],
    color: "from-orange-500 to-red-600"
  },
  {
    category: "Email & SMS Marketing",
    icon: Mail,
    tools: ["ConvertKit", "Mailchimp", "Klaviyo", "Twilio", "SendGrid"],
    color: "from-pink-500 to-rose-600"
  },
  {
    category: "Analytics & Tracking",
    icon: BarChart3,
    tools: ["Google Analytics", "Mixpanel", "Plausible", "Hotjar", "Segment"],
    color: "from-indigo-500 to-purple-600"
  },
  {
    category: "Mobile & Apps",
    icon: Smartphone,
    tools: ["React Native", "Flutter", "Bubble", "Glide", "FlutterFlow"],
    color: "from-teal-500 to-green-600"
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    tools: ["Vercel", "AWS", "Google Cloud", "Netlify", "Railway"],
    color: "from-gray-500 to-slate-600"
  },
  {
    category: "AI & Intelligence",
    icon: Bot,
    tools: ["OpenAI", "Anthropic", "Pinecone", "LangChain", "Voiceflow"],
    color: "from-yellow-500 to-amber-600"
  }
];

const specialtyTools = [
  "CCC ONE (Auto Industry)",
  "Square (POS Systems)", 
  "Calendly (Booking)",
  "Loom (Video)",
  "Typeform (Forms)",
  "Discord (Community)"
];

export function TechStack() {
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
            Technology Stack
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            I work with best-in-class tools to build systems that are reliable, scalable, and maintainable.
          </p>
        </motion.div>

        {/* Main Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-accent/30 transition-all duration-300">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-muted border border-white/10 group-hover:border-accent/30 transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialty Tools */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Specialty & Industry Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {specialtyTools.map((tool, index) => (
              <motion.span
                key={tool}
                className="px-4 py-2 text-sm font-medium bg-accent/10 border border-accent/20 rounded-full text-accent hover:bg-accent/20 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="mt-12 bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <Zap className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Not Listed? No Problem.</h3>
            <p className="text-muted leading-relaxed">
              If you're already using a specific tool or platform, I can integrate with it. 
              My approach is tool-agnostic—we choose the right technology for your specific needs, 
              not the other way around.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
