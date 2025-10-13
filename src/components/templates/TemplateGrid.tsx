"use client";

import { motion } from "framer-motion";
import { 
  Download, 
  Star, 
  Clock, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  FileText,
  Video,
  Settings
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const templates = [
  {
    id: "make-automations-pack",
    title: "Make Automations Pack",
    subtitle: "20 Essential Workflows",
    price: 147,
    originalPrice: 197,
    category: "Workflow",
    platform: "Make.com",
    rating: 4.9,
    downloads: "1,200+",
    setupTime: "30 min",
    description: "Complete collection of the most-used automation workflows for business operations.",
    features: [
      "Lead capture & nurturing",
      "Payment processing flows", 
      "Customer onboarding",
      "Review collection system",
      "Invoice automation",
      "Team notifications"
    ],
    includes: [
      "20 Make.com blueprints",
      "Setup video tutorials",
      "Customization guides",
      "Best practices document"
    ],
    popular: true,
    difficulty: "Beginner",
    checkoutUrl: "https://buy.stripe.com/make-automations-pack"
  },
  {
    id: "pdf-funnel-kit",
    title: "PDF Funnel Kit", 
    subtitle: "Complete Lead Magnet System",
    price: 147,
    originalPrice: 197,
    category: "Sales Funnel",
    platform: "Multi-platform",
    rating: 4.8,
    downloads: "800+",
    setupTime: "45 min",
    description: "Everything you need to create high-converting PDF lead magnets with automated delivery.",
    features: [
      "Landing page templates",
      "Email sequences",
      "Delivery automation",
      "Follow-up workflows",
      "Analytics tracking",
      "A/B testing setup"
    ],
    includes: [
      "Framer landing pages",
      "ConvertKit sequences",
      "Zapier workflows",
      "PDF templates"
    ],
    popular: false,
    difficulty: "Beginner",
    checkoutUrl: "https://buy.stripe.com/pdf-funnel-kit"
  },
  {
    id: "outreach-swipe-kit",
    title: "Outreach Swipe Kit",
    subtitle: "Cold Email & DM Templates",
    price: 47,
    originalPrice: 97,
    category: "Marketing",
    platform: "Email/Social",
    rating: 4.7,
    downloads: "1,500+",
    setupTime: "15 min",
    description: "Proven email and social media outreach templates that get responses.",
    features: [
      "50+ email templates",
      "DM message scripts",
      "Follow-up sequences",
      "Subject line formulas",
      "Response rate tracking",
      "Industry-specific versions"
    ],
    includes: [
      "Template library",
      "Personalization guide",
      "Tracking spreadsheet",
      "Video walkthrough"
    ],
    popular: false,
    difficulty: "Beginner",
    checkoutUrl: "https://buy.stripe.com/outreach-swipe-kit"
  },
  {
    id: "system-stack-swipe",
    title: "System Stack Swipe File",
    subtitle: "Tool Recommendations & Setups",
    price: 47,
    originalPrice: 97,
    category: "Reference",
    platform: "Documentation",
    rating: 4.9,
    downloads: "2,000+",
    setupTime: "Instant",
    description: "Comprehensive guide to choosing and setting up the perfect tech stack for any business.",
    features: [
      "100+ tool comparisons",
      "Setup checklists",
      "Integration guides",
      "Cost breakdowns",
      "Alternatives list",
      "Migration guides"
    ],
    includes: [
      "Tool comparison sheets",
      "Setup checklists",
      "Video tutorials",
      "Notion workspace"
    ],
    popular: false,
    difficulty: "All Levels",
    checkoutUrl: "https://buy.stripe.com/system-stack-swipe"
  },
  {
    id: "ai-content-workflows",
    title: "AI Content Workflows",
    subtitle: "GPT-Powered Automation",
    price: 197,
    originalPrice: 297,
    category: "AI/Content",
    platform: "Make.com + OpenAI",
    rating: 4.8,
    downloads: "600+",
    setupTime: "60 min",
    description: "Advanced AI workflows for content creation, social media, and customer communication.",
    features: [
      "Blog post automation",
      "Social media scheduling",
      "Customer support AI",
      "Email generation",
      "Content repurposing",
      "SEO optimization"
    ],
    includes: [
      "Make.com blueprints",
      "GPT prompt library",
      "Setup videos",
      "API configuration guides"
    ],
    popular: false,
    difficulty: "Intermediate",
    checkoutUrl: "https://buy.stripe.com/ai-content-workflows"
  },
  {
    id: "ecommerce-automation-suite",
    title: "E-commerce Automation Suite",
    subtitle: "Complete Store Operations",
    price: 247,
    originalPrice: 347,
    category: "E-commerce",
    platform: "Shopify + Make",
    rating: 4.9,
    downloads: "400+",
    setupTime: "90 min",
    description: "End-to-end automation for online stores from order processing to customer retention.",
    features: [
      "Order processing automation",
      "Inventory management",
      "Customer segmentation",
      "Review collection",
      "Abandoned cart recovery",
      "Loyalty program automation"
    ],
    includes: [
      "Shopify app configurations",
      "Make.com workflows",
      "Email templates",
      "Analytics dashboard"
    ],
    popular: false,
    difficulty: "Advanced",
    checkoutUrl: "https://buy.stripe.com/ecommerce-automation-suite"
  }
];

const difficultyColors: Record<string, string> = {
  "Beginner": "bg-green-500/20 text-green-400",
  "Intermediate": "bg-yellow-500/20 text-yellow-400", 
  "Advanced": "bg-red-500/20 text-red-400",
  "All Levels": "bg-blue-500/20 text-blue-400"
};

export function TemplateGrid() {
  return (
    <section id="templates" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Featured Templates
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Hand-picked templates that solve the most common automation challenges. Each one is tested and ready to deploy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {template.popular && (
                <div className="absolute -top-4 left-4 z-10">
                  <Badge className="bg-accent text-black font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card className={`h-full ${template.popular ? 'border-accent/50 bg-card/50' : 'bg-card/30'} backdrop-blur-sm border-white/10 hover:border-accent/30 transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <Badge className={`${difficultyColors[template.difficulty]} mb-2`}>
                        {template.difficulty}
                      </Badge>
                      <h3 className="text-xl font-bold mb-1">{template.title}</h3>
                      <p className="text-accent text-sm font-medium mb-2">{template.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">${template.price}</div>
                      {template.originalPrice && (
                        <div className="text-sm text-muted line-through">${template.originalPrice}</div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">{template.description}</p>

                  {/* Meta Info */}
                  <div className="grid grid-cols-3 gap-4 text-xs text-muted">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{template.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{template.setupTime}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-white">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {template.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted">{feature}</span>
                        </div>
                      ))}
                      {template.features.length > 4 && (
                        <div className="text-xs text-accent">
                          +{template.features.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-semibold mb-2 text-white">What's Included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.includes.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-2 py-1 text-xs bg-white/10 rounded-full text-muted flex items-center space-x-1"
                        >
                          {item.includes('video') || item.includes('Video') ? <Video className="w-3 h-3" /> :
                           item.includes('document') || item.includes('guide') ? <FileText className="w-3 h-3" /> :
                           <Settings className="w-3 h-3" />}
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-2">
                    <Button
                      asChild
                      className={`flex-1 ${
                        template.popular 
                          ? 'bg-accent hover:bg-accent-2 text-black' 
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                      } font-semibold py-3 transition-all duration-300 hover:scale-105`}
                    >
                      <a 
                        href={template.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Get Template</span>
                      </a>
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted hover:text-accent"
                      asChild
                    >
                      <a href={`/templates/${template.id}`}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Complete Template Bundle</h3>
            <p className="text-muted mb-6">
              Get all templates at once with exclusive bonuses and lifetime updates for new releases.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-accent">$497</span>
              <span className="text-lg text-muted line-through">$1,247</span>
              <Badge className="bg-accent text-black">Save $750</Badge>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-2 text-black font-semibold px-8"
            >
              <a href="https://buy.stripe.com/complete-template-bundle" target="_blank" rel="noopener noreferrer">
                Get Complete Bundle
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
