"use client"

import { motion } from "framer-motion"
import { 
  Heart, 
  Brain, 
  Clock, 
  Users, 
  Smartphone,
  Target
} from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Improved Core Strength",
      description: "Build a strong foundation with targeted core exercises that enhance stability and posture."
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Experience improved focus and reduced stress through mindful movement practices."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Access classes 24/7, fitting your practice around your busy lifestyle."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Learn from Lisa's decade of experience with clear, detailed instructions."
    },
    {
      icon: Smartphone,
      title: "Multi-device Access",
      description: "Stream classes on any device, at home or on the go."
    },
    {
      icon: Target,
      title: "Goal-focused Programs",
      description: "Follow structured programs designed to help you achieve specific fitness goals."
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Transform Your Practice with Pilates by Lisa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            Experience the benefits of professional Pilates instruction from the comfort of your home
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}