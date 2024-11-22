"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    id: 'workouts',
    title: '800+ Workouts',
    description: "Variety ensures you'll never get bored, from beginner to advanced levels.",
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop',
    alt: 'Lisa guiding a Pilates session'
  },
  {
    id: 'programs',
    title: 'Programs & Challenges',
    description: "Structured challenges that fit your goals, from core strength to flexibility.",
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2940&auto=format&fit=crop',
    alt: 'Different Pilates workout programs displayed'
  },
  {
    id: 'guidance',
    title: 'Expert Guidance',
    description: "Lisa's proven approach, refined over a decade, helps you reach your goals faster.",
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2940&auto=format&fit=crop',
    alt: 'Pilates student receiving guidance'
  },
  {
    id: 'community',
    title: 'Global Community',
    description: "Connect with like-minded individuals worldwide and get inspired by others on their Pilates journey.",
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop',
    alt: 'Pilates community class'
  }
]

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('workouts')

  return (
    <section className="relative bg-[#FF69B4] py-20 sm:py-28">
      <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_800px_at_50%_-50%,#FF1493,transparent)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Transform your practice with expert guidance
          </h2>
          <p className="mt-6 text-lg tracking-tight text-pink-100">
            Experience the perfect blend of traditional Pilates principles and modern exercise science.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 items-center gap-y-8 pt-10 lg:grid-cols-12 lg:pt-0">
          {/* Tabs */}
          <div className="lg:col-span-5 lg:pr-16">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-200 border ${
                    activeTab === feature.id 
                      ? 'border-white/30 bg-white/10 text-white shadow-lg'
                      : 'border-white/10 hover:border-white/20 hover:bg-white/5 text-white/70'
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[16/9]"
              >
                <Image
                  src={features.find(f => f.id === activeTab)?.image || ''}
                  alt={features.find(f => f.id === activeTab)?.alt || ''}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}