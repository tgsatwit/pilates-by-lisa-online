"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, CheckCircle2 } from "lucide-react"

export function MobileAppSection() {
  const features = [
    "Stream workouts offline",
    "Track your progress",
    "Set workout reminders",
    "Access exclusive app content",
    "Join live classes",
    "Connect with the community"
  ]

  return (
    <section className="relative bg-[#7f5fca] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_800px_at_50%_-50%,#9b7ad5,transparent)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-1 text-sm font-medium mb-6">
              
              <span>iOS Mobile App</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Take Your Practice Anywhere with Our iOS App
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Download the Pilates by Lisa app and transform your practice with seamless mobile access to all your favorite workouts, progress tracking, and community features.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-white"
                >
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link 
              href="https://apps.apple.com/your-app-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                width={140}
                height={42}
                className="hover:opacity-90 transition-opacity"
              />
            </Link>
          </motion.div>

          {/* App Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative lg:h-[600px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-white/5 rounded-[60px] rotate-6" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-white/10 rounded-[60px] -rotate-6" />
            <div className="relative z-10 w-[300px] h-[600px] mx-auto">
              <Image
                src="/images/app-screenshot.png"
                alt="Pilates by Lisa App"
                fill
                className="object-cover rounded-[40px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}