"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <Image 
        src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK3VSR0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d2c0248c8e03965fd71c2f9b6c86fac737f4cdb5/pbl_main_hero_bg.webp"
        alt="Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Main Content */}
      <div className="flex-1 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div></div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-right"
          >
            {/* Eyebrow text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-white mb-6"
            >
              <span>Online Pilates Classes with Lisa</span>
              <span aria-hidden="true">→</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-lg">
                Transform Your Body with Lisa's Proven Pilates Method
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-white/80 max-w-xl ml-auto mb-8"
            >
              Experience expert-led online Pilates classes that fit your schedule. Join our thriving global community today.
            </motion.p>

            {/* CTA button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <Link href="https://online.pilatesbylisa.com.au/checkout/subscribe/purchase">
                <Button 
                  size="lg" 
                  className="text-base font-semibold px-8 py-4 h-auto bg-white hover:bg-white/90 text-primary"
                >
                  Start Your Journey
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { number: "800+", label: "Expert-Led Classes" },
                { number: "4.9/5", label: "Member Rating" },
                { number: "12+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center lg:items-end">
                  <div className="text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Devices Image and Play Button */}
      <div className="relative mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative max-w-3xl ml-4 sm:ml-8 lg:ml-16"
        >
          <Image
            src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeWFTR0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3d7f17c70841f285d02ae8acbbe4b7fec8f2224e/pbl-new-devices-hero.png"
            alt="Devices showing Pilates by Lisa"
            width={800}
            height={400}
            className="w-full h-auto"
          />
          <button
            onClick={() => setVideoOpen(true)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
          >
            <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-200" />
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="aspect-video">
            {/* Video iframe will go here */}
            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">
              Video coming soon
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}