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
  
  // Images array 
  const images = [UltimateFlexibility, AmazingArms, KickstartYourPilates, AdoreYourCore, LoveYourLegsAmplified, CardioBarre, BeautifulBrides] 

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="mt-12 md:mt-20" data-aos-id-3>
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
              <div className="w-full max-w-[360px] mx-auto px-4 md:px-0 md:mx-0 md:mr-16 mt-8 md:mt-0">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0"
                      >
                        <Image
                          src={image}
                          className="w-full h-auto rounded-xl shadow-sm hover:opacity-95 transition-opacity duration-300"
                          width={360}
                          height={360}
                          alt={`Program Image ${index + 1}`}
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}