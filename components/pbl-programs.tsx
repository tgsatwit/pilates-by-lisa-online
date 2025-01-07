"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import UltimateFlexibility from '@/public/images/programs/Ultimate_flexibility.webp'
import AmazingArms from '@/public/images/programs/Amazing_arms.webp'
import KickstartYourPilates from '@/public/images/programs/Kickstart_your_pilates.webp'
import AdoreYourCore from '@/public/images/programs/Adore_your_core.webp'
import LoveYourLegsAmplified from '@/public/images/programs/Love_your_legs_amplified.webp'
import CardioBarre from '@/public/images/programs/Cardio_barre.webp'
import BeautifulBrides from '@/public/images/programs/Beautiful_brides.webp'


export default function PBLPrograms() {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  
  // Images array 
  const images = [UltimateFlexibility, AmazingArms, KickstartYourPilates, AdoreYourCore, LoveYourLegsAmplified, CardioBarre, BeautifulBrides] 

  // Helper function to get image indices for the three visible slides
  const getVisibleIndices = () => {
    const total = images.length
    return [
      currentSlide,
      (currentSlide + 1) % total,
      (currentSlide + 2) % total
    ]
  }

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true)
      setCurrentSlide((prev) => (prev + 1) % images.length)
      setTimeout(() => setTransitioning(false), 300)
    }, 5000)

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="mt-12 md:mt-20 pb-12 relative" data-aos-id-3>
      <style jsx>{`
        section::before {
          content: none !important;
        }
      `}</style>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-6 pt-12 md:pt-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-start justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <h2 className="h2 font-playfair-display text-slate-900 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="100">
                Kickstart Your Fitness Journey With Our Specialty Online Pilates Programs and Challenges
                </h2>
                <p className="text-lg text-slate-500 mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="200">
                  Kickstart your fitness journey with our specialty online Pilates programs and challenges. Designed by Lisa, an expert with over a decade of experience, these programs offer a structured approach to online Pilates and reformer workouts. Catering to all levels of fitness, our programs transform your workout routine, all from the comfort of your home.
                </p>

                {/* Button */}
                <div className="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="300">
                  <div>
                  <a 
                    className="btn text-white bg-purple-700 hover:bg-purple-800 w-full sm:w-auto text-center text-md py-3 px-6"
                    href="https://online.pilatesbylisa.com.au/browse"
                  >
                    View Programs & Challenges <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                  </div>
                </div>
              </div>

              {/* Carousel */}
              <div className="w-full max-w-[600px] mx-auto px-4 md:px-0 md:mx-0 md:mr-16 mt-4 md:mt-0">
                <div className="relative h-[500px]">
                  {getVisibleIndices().map((imageIndex, displayIndex) => {
                    // Calculate position offsets for grid layout with more dramatic positioning
                    const positions = [
                      { top: '0%', left: '20%', width: 280, rotate: -2 },  // Top image: smaller
                      { top: '20%', left: '35%', width: 320, rotate: 4 },  // Middle image: more right rotation
                      { 
                        top: window.innerWidth < 768 ? '25%' : '35%', 
                        left: window.innerWidth < 768 ? '15%' : '5%', 
                        width: 300, 
                        rotate: -3,
                        display: window.innerWidth < 640 ? 'none' : 'block' // Hide on very small screens
                      }   // Bottom image: adjusted for mobile
                    ]
                    
                    return (
                      <div
                        key={imageIndex}
                        className={`absolute transition-all duration-200 ease-in-out hover:z-10`}
                        style={{
                          zIndex: 2 - displayIndex,
                          opacity: transitioning ? 0.8 : 1,
                          top: positions[displayIndex].top,
                          left: positions[displayIndex].left,
                          transform: `rotate(${positions[displayIndex].rotate}deg) scale(${1 - displayIndex * 0.05})`,
                        }}
                      >
                        <Image
                          src={images[imageIndex]}
                          className="rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
                          width={positions[displayIndex].width}
                          height={positions[displayIndex].width}
                          alt={`Program Image ${imageIndex + 1}`}
                          priority={displayIndex === 0}
                          style={{
                            width: `${positions[displayIndex].width}px`,
                            height: 'auto'
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}