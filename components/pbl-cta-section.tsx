"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PBLCTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-50%,#7f5fca,transparent)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6"
        >
          Ready to Transform Your Practice?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Join Pilates by Lisa today and get 50% off your first months' membership with code <span className="font-semibold">NEWMEMBER</span>
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="https://online.pilatesbylisa.com.au/checkout/subscribe/purchase">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Get Started
            </Button>
          </Link>
          <Link href="https://online.pilatesbylisa.com.au/browse">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
              Browse Classes
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}