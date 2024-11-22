"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function FeatureHighlight() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,#e3d9f3,transparent)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
          <div className="relative lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[16/9] rounded-2xl bg-slate-50 shadow-xl shadow-purple-900/20 overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop"
                alt="Pilates class"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          
          <div className="relative lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Join our global community
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Connect with like-minded individuals from around the world, share your progress, and get inspired by others on their Pilates journey.
              </p>
              <div className="mt-8">
                <Button size="lg" className="rounded-full">
                  Start your journey
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}