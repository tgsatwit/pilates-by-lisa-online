"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LisaSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f"
                alt="Lisa teaching Pilates"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 w-64 h-64 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 bg-primary/10 w-32 h-32 rounded-full -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Who is Lisa?
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                I've had a lifelong passion for Fitness, Wellbeing and helping others. My journey began with traditional Pilates, where I discovered the transformative power of mindful movement and body control. This passion led me to create Pilates by Lisa, an Online Studio that improves strength, flexibility, and overall wellbeing.
              </p>

              <p>
                Born and bred in Queensland Australia, I completed my Griffith University Bachelor's Degree in Journalism, specialising in Sports Science, in 2008. As I started to work in the Fitness Industry, I also attained my qualifications and certifications across Fitness, Pilates, Nutrition, and Yoga.
              </p>

              <p>
                When Pilates by Lisa first began 12 years ago, our aim was to bring affordable, accessible, enjoyable workouts direct to you and make them available from the convenience of your home.
              </p>

              <p>
                Our first video workout took 6 months and many re-takes to film and get right utilising our old family camcorder! Little did we know we had begun the journey of our lives! A steep learning curve ensued and now, 12 years later, here we are with over 800 world-class workouts and members all over the world enjoying the PBL lifestyle!
              </p>
            </div>

            <div className="pt-4">
              <Link href="https://online.pilatesbylisa.com.au/checkout/subscribe/purchase">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}