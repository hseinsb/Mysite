"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormData {
  name: string;
  email: string;
  needs: string;
}

export function IntakeForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert('There was an error submitting the form. Please try again or email hussein.sbeiti.wb@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Thanks for reaching out!</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              I'll review your submission and get back to you within 24 hours with next steps.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            Let's Work Together
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a free strategy call and custom proposal. I'll show you exactly how to automate your processes and scale your revenue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50 max-w-2xl mx-auto shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-white mb-2">Get Your Free Strategy Call</CardTitle>
              <p className="text-gray-300">Tell me about your business and I'll create a custom growth plan</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                    Name *
                  </label>
                  <Input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your full name"
                    className="bg-gray-800/50 border-gray-600 focus:border-blue-500 text-white placeholder:text-gray-400"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="your@email.com"
                    className="bg-gray-800/50 border-gray-600 focus:border-blue-500 text-white placeholder:text-gray-400"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Needs */}
                <div>
                  <label htmlFor="needs" className="block text-sm font-medium mb-2 text-white">
                    What challenges are you facing? *
                  </label>
                  <Textarea
                    id="needs"
                    {...register("needs", { required: "Please describe your challenges" })}
                    placeholder="Tell me about your current challenges, goals, and what you'd like to achieve..."
                    rows={4}
                    className="bg-gray-800/50 border-gray-600 focus:border-blue-500 text-white placeholder:text-gray-400"
                  />
                  {errors.needs && (
                    <p className="text-red-400 text-sm mt-1">{errors.needs.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Get My Free Strategy Call</span>
                    </div>
                  )}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-300">
                    ✅ Free 30-minute strategy call included
                  </p>
                  <p className="text-xs text-gray-400">
                    I'll respond within 24 hours with a custom growth plan and next steps.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
