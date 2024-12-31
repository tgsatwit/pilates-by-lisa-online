'use client'

import Image from 'next/image'
import Lisa from '@/public/images/who_is_lisa.webp'

export default function LisaSection() {
  return (
    <section className="mt-12 md:mt-20">
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-300 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Content */}
              <div className="md:w-1/2">
                {/* Copy */}
                <h2 className="h2 font-playfair-display text-gray-900 mb-4">Who is Lisa?</h2>
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
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <div className="relative rounded-2xl shadow-xl overflow-hidden">
                  <Image 
                    src={Lisa} 
                    alt="Lisa - Pilates Instructor" 
                    className="w-full h-auto"
                    width={500}
                    height={600}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}