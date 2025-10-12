"use client";

import { motion } from "framer-motion";
import { Clock, Target, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const offers = [
  {
    name: "Quick Audit",
    duration: "30 minutes",
    price: "$200",
    icon: Clock,
    description: "Fast teardown of your current setup with immediate next actions",
    includes: [
      "Current system review",
      "3 priority improvements",
      "Tool recommendations",
      "15-min follow-up email"
    ],
    bestFor: "Quick wins, specific problems, immediate guidance",
    popular: false,
    calendlyLink: "https://calendly.com/husseinsbeiti/30min-audit",
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Strategy Session",
    duration: "75 minutes", 
    price: "$500",
    icon: Target,
    description: "Deep-dive architecture session with complete system design",
    includes: [
      "Full business analysis",
      "Custom system architecture",
      "Detailed flow diagrams",
      "Tool selection & reasoning",
      "Implementation roadmap",
      "Recording + documentation",
      "2-week follow-up"
    ],
    bestFor: "Complete system overhaul, new business launch, scaling preparation",
    popular: true,
    calendlyLink: "https://calendly.com/husseinsbeiti/75min-strategy",
    color: "from-accent to-accent-2"
  }
];

export function ConsultingOffers() {
  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Choose Your Session Type
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Whether you need quick guidance or complete system architecture, 
            I'll give you clarity and a path forward.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-accent text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`h-full ${offer.popular ? 'border-accent/50 bg-card/50' : 'bg-card/30'} backdrop-blur-sm border-white/10 hover:border-accent/30 transition-all duration-300`}>
                <CardHeader className="text-center pb-6">
                  <div className="mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${offer.color} p-0.5`}>
                      <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                        <offer.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold mb-2">{offer.name}</CardTitle>
                  <div className="text-3xl font-bold text-accent mb-1">{offer.price}</div>
                  <div className="text-sm text-muted mb-3">{offer.duration}</div>
                  <p className="text-muted text-sm">{offer.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* What's Included */}
                  <div>
                    <h4 className="font-semibold mb-3 text-white">What's Included:</h4>
                    <ul className="space-y-2">
                      {offer.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="font-semibold mb-2 text-white">Best For:</h4>
                    <p className="text-muted text-sm">{offer.bestFor}</p>
                  </div>

                  {/* Booking Button */}
                  <Button
                    asChild
                    className={`w-full ${
                      offer.popular 
                        ? 'bg-accent hover:bg-accent-2 text-black' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    } font-semibold py-3 transition-all duration-300 hover:scale-105`}
                  >
                    <a 
                      href={offer.calendlyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Book {offer.name}</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Session Details</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-accent mb-2">Scheduling</h4>
                <ul className="text-sm text-muted space-y-1">
                  <li>• Available Mon-Fri, 9 AM - 6 PM EST</li>
                  <li>• Sessions conducted via Zoom</li>
                  <li>• 24-hour cancellation policy</li>
                  <li>• Recordings provided</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Payment</h4>
                <ul className="text-sm text-muted space-y-1">
                  <li>• Payment required at booking</li>
                  <li>• Stripe secure checkout</li>
                  <li>• Refund within 48hrs if unsatisfied</li>
                  <li>• Invoice provided automatically</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
