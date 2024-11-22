"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function FreeWorkoutSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Try PBL for free!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            You'll be amazed how amazing you feel after just one workout! Simply enter your email, press play and workout. 
            The workout is a member favourite, and the best part, it's FREE for you to try, no credit card required!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="aspect-video max-w-4xl mx-auto"
        >
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe 
              src="https://player.vimeo.com/video/765918381?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="Free Pilates Workout"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-4"
        >
          By entering your email you agree to our Terms & Conditions
        </motion.p>
      </div>
    </section>
  )
}