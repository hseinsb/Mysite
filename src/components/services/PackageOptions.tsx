"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for testing the waters with automation",
    features: [
      "1 focused funnel",
      "1 automation workflow", 
      "Payment processing (Stripe/PayPal)",
      "Basic email sequences",
      "Mobile responsive design",
      "2 weeks delivery",
      "1 month support"
    ],
    bestFor: "Small businesses, new creators, simple products",
    popular: false,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Pro",
    icon: Star,
    description: "Complete system for serious business growth",
    features: [
      "Multi-step funnel system",
      "Stripe + PayPal integration",
      "CRM with lead scoring",
      "Email & SMS automation",
      "Review collection system",
      "Analytics dashboard",
      "Mobile app integration",
      "3 weeks delivery",
      "3 months support"
    ],
    bestFor: "Growing businesses, established creators, product launches",
    popular: true,
    color: "from-accent to-accent-2"
  },
  {
    name: "Elite",
    icon: Crown,
    description: "Custom architecture for complex operations",
    features: [
      "Custom multi-flow systems",
      "Advanced AI workflows",
      "Real-time dashboards",
      "Multi-platform integration",
      "Advanced analytics & reporting",
      "Custom API development",
      "Team collaboration tools",
      "Priority support",
      "6 months maintenance"
    ],
    bestFor: "Enterprises, agencies, complex multi-stream businesses",
    popular: false,
    color: "from-purple-500 to-pink-600"
  }
];

export function PackageOptions() {
  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Choose Your System Package
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From simple automations to enterprise-grade systems. All packages include full documentation and training.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-accent text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`h-full ${pkg.popular ? 'border-accent/50 bg-card/50' : 'bg-card/30'} backdrop-blur-sm border-white/10 hover:border-accent/30 transition-all duration-300`}>
                <CardHeader className="text-center pb-8">
                  <div className="mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${pkg.color} p-0.5`}>
                      <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                        <pkg.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                  <p className="text-muted text-sm">{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-white">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="font-semibold mb-2 text-white">Best For:</h4>
                    <p className="text-muted text-sm">{pkg.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-muted">
              All packages include full documentation and training tailored to your specific requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
