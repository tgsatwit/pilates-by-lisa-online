"use client"

import { useState } from "react"

export function FreeWorkoutSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
  }

  return (
    <section className="py-24 bg-gradient-to-b from-purple-500 to-purple-600 align-center">
      <div className="max-w-7xl mb-6 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="h2 text-center font-playfair-display text-white mb-4">
            Try for FREE! You've got nothing to lose
        </h2>
        <p className="text-lg text-center text-slate-100 mb-8">
            You'll be amazed how amazing you feel after just one workout! Simply enter your email, press play and workout. The workout is a member favourite, and the best part, it's FREE for you to try, no credit card required!
            </p>
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
          <div className="text-center text-sm text-slate-100 mt-4">
            By entering your email you agree to our Terms & Conditions
          </div>
      </div>
    </section>
  )
}