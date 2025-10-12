"use client";

import { motion } from "framer-motion";
import { Zap, MessageCircle, GraduationCap, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Zap,
    title: "Done-For-You Systems",
    description: "Complete automation systems built for your business",
    href: "/services",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: MessageCircle,
    title: "Consulting Calls",
    description: "Strategic sessions to map your perfect tech stack",
    href: "/consulting",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: GraduationCap,
    title: "Courses",
    description: "Learn to build systems yourself with step-by-step guides",
    href: "/courses",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Package,
    title: "Templates",
    description: "Plug-and-play automation templates ready to deploy",
    href: "/templates",
    color: "from-purple-500 to-pink-600"
  }
];

export function ServicesSnapshot() {
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
            How We Can Work Together
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Choose the approach that fits your timeline, budget, and goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group h-full"
            >
              <Card className="bg-card/30 backdrop-blur-sm border-white/10 hover:border-accent/30 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-0.5`}>
                      <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
