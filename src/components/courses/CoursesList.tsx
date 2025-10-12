"use client";

import { motion } from "framer-motion";
import { 
  Play, 
  Users, 
  Clock, 
  Star, 
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Smartphone,
  Code
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: "system-school",
    title: "System School",
    subtitle: "Complete Business Automation",
    price: 497,
    originalPrice: 697,
    icon: Zap,
    level: "Beginner to Advanced",
    duration: "12+ hours",
    students: "1,200+",
    rating: 4.9,
    description: "The complete guide to building funnel + payment + automation systems that run your business.",
    features: [
      "Funnel design & optimization",
      "Stripe payment integration", 
      "Make.com automation workflows",
      "CRM setup & lead scoring",
      "Email sequence templates",
      "Analytics & reporting setup",
      "Mobile optimization",
      "Live Q&A sessions"
    ],
    outcomes: [
      "Build complete sales funnels",
      "Process payments automatically", 
      "Automate customer journeys",
      "Track & optimize performance"
    ],
    popular: true,
    checkoutUrl: "https://buy.stripe.com/system-school",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: "monetize-influence",
    title: "Monetize Your Influence",
    subtitle: "Creator Revenue Systems",
    price: 297,
    originalPrice: 397,
    icon: TrendingUp,
    level: "Beginner",
    duration: "8+ hours",
    students: "800+", 
    rating: 4.8,
    description: "Turn your audience into revenue with proven offers, funnels, and automation systems.",
    features: [
      "Offer creation framework",
      "Audience analysis tools",
      "Content-to-funnel mapping",
      "Revenue stream setup",
      "Automated delivery systems",
      "Pricing psychology",
      "Launch sequences",
      "Case study breakdowns"
    ],
    outcomes: [
      "Create profitable offers",
      "Build automated sales systems",
      "Scale revenue streams",
      "Optimize conversion rates"
    ],
    popular: false,
    checkoutUrl: "https://buy.stripe.com/monetize-influence",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "app-promo-playbook",
    title: "App Promo Playbook",
    subtitle: "Mobile App Marketing Systems",
    price: 97,
    originalPrice: 147,
    icon: Smartphone,
    level: "Intermediate",
    duration: "4+ hours",
    students: "500+",
    rating: 4.7,
    description: "Scripts, angles, and tracking systems that drive app downloads and user acquisition.",
    features: [
      "Marketing script templates",
      "Content angle frameworks",
      "Tracking & analytics setup",
      "Conversion optimization",
      "User acquisition funnels",
      "Retention strategies",
      "ASO optimization",
      "Campaign templates"
    ],
    outcomes: [
      "Create compelling app content",
      "Track user acquisition",
      "Optimize conversion funnels",
      "Scale download campaigns"
    ],
    popular: false,
    checkoutUrl: "https://buy.stripe.com/app-promo-playbook",
    color: "from-orange-500 to-red-600"
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding 101",
    subtitle: "Code for System Builders",
    price: 297,
    originalPrice: 397,
    icon: Code,
    level: "Beginner",
    duration: "10+ hours",
    students: "300+",
    rating: 4.8,
    description: "Light coding skills to connect systems, customize workflows, and build better automations.",
    features: [
      "JavaScript fundamentals",
      "API integration basics",
      "Webhook creation",
      "Custom automation scripts",
      "Data manipulation",
      "Error handling",
      "Testing & debugging",
      "Real-world projects"
    ],
    outcomes: [
      "Connect any two systems",
      "Build custom automations",
      "Debug workflow issues",
      "Create advanced integrations"
    ],
    popular: false,
    checkoutUrl: "https://buy.stripe.com/vibe-coding",
    color: "from-purple-500 to-pink-600"
  }
];

export function CoursesList() {
  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From complete beginner to advanced system builder—find the course that matches your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {course.popular && (
                <div className="absolute -top-4 left-4 z-10">
                  <Badge className="bg-accent text-black font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card className={`h-full ${course.popular ? 'border-accent/50 bg-card/50' : 'bg-card/30'} backdrop-blur-sm border-white/10 hover:border-accent/30 transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} p-0.5`}>
                      <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                        <course.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">${course.price}</div>
                      {course.originalPrice && (
                        <div className="text-sm text-muted line-through">${course.originalPrice}</div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                    <p className="text-accent text-sm font-medium mb-3">{course.subtitle}</p>
                    <p className="text-muted text-sm leading-relaxed mb-4">{course.description}</p>
                  </div>

                  {/* Course Meta */}
                  <div className="flex items-center space-x-4 text-xs text-muted">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* What You'll Learn */}
                  <div>
                    <h4 className="font-semibold mb-3 text-white">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {course.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted">{feature}</span>
                        </div>
                      ))}
                      {course.features.length > 4 && (
                        <div className="text-xs text-accent">
                          +{course.features.length - 4} more modules
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-semibold mb-2 text-white">You'll Be Able To:</h4>
                    <div className="space-y-1">
                      {course.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-start space-x-2 text-sm">
                          <ArrowRight className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full ${
                      course.popular 
                        ? 'bg-accent hover:bg-accent-2 text-black' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    } font-semibold py-3 transition-all duration-300 hover:scale-105`}
                  >
                    <a 
                      href={course.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Start Learning</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bundle Offer */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-accent/10 to-accent-2/10 border-accent/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Complete Bundle</h3>
              <p className="text-muted mb-6 max-w-2xl mx-auto">
                Get all four courses at a massive discount. Everything you need to become a complete system builder.
              </p>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-accent">$697</span>
                <span className="text-lg text-muted line-through">$1,138</span>
                <Badge className="bg-accent text-black">Save $441</Badge>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-2 text-black font-semibold px-8"
              >
                <a href="https://buy.stripe.com/complete-bundle" target="_blank" rel="noopener noreferrer">
                  Get Complete Bundle
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
