'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Lisa from '@/public/images/who_is_lisa.webp'
import Testimonial02 from '@/public/images/testimonial-02.jpg'

// Import Swiper and modules
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import { EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import Link from 'next/link'

// Initialize Swiper modules
Swiper.use([Pagination, EffectFade])

export default function LisaSection() {

  useEffect(() => {
    const testimonial = new Swiper('.testimonial-carousel', {
      slidesPerView: 1,
      watchSlidesProgress: true,
      effect: 'fade',
      pagination: {
        el: '.testimonial-carousel-pagination',
        clickable: true,
      },
    })
  }, [])

  return (
    <section className="mt-12 md:mt-20" data-aos-id-6>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-300 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
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

              {/* Carousel */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-12 md:mt-0" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]">
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute inset-0 mb-10 -mt-14 -mx-14 bg-transparent -z-10" aria-hidden="true" />

                  {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
                  {/* * Custom styles in src/css/additional-styles/theme.scss */}
                  <div className="testimonial-carousel swiper-container max-w-sm mx-auto sm:max-w-none">
                    <div className="swiper-wrapper">
                      {/* Card #1 */}
                      <div className="swiper-slide flex flex-col h-auto shadow-2xl text-left">
                        <div className="relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-700">
                          <Image src={Lisa} className="md:max-w-none" width={384} height={180} alt="Testiomonial 01" />
                        </div>
                        <div className="grow flex flex-col relative bg-gradient-to-t from-slate-800 to-slate-700 p-6 pt-14">
                          <p className="grow font-medium text-slate-200 mb-4">
                            “ This card is awesome. The app lets me link foreign cards with a new one which makes everything 100 times easier. Like
                            Apple Pay, online shopping without useless phone confirmation. I wish I knew this earlier. ”
                          </p>
                          <div className="font-medium text-sm text-slate-500">
                            <span className="text-slate-200">Elisa Koeppel</span> - <span className="text-slate-400">CEO & Co-Founder</span>
                          </div>
                        </div>
                      </div>

                      {/* Card #2 */}
                      <div className="swiper-slide flex flex-col h-auto shadow-2xl text-left">
                        <div className="relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-700">
                          <Image src={Testimonial02} className="md:max-w-none" width={384} height={180} alt="Testiomonial 02" />
                        </div>
                        <div className="grow flex flex-col relative bg-gradient-to-t from-slate-800 to-slate-700 p-6 pt-14">
                          <p className="grow font-medium text-slate-200 mb-4">
                            “ This card allows us to achieve compliance with minimal effort, spend practically no time on payments-related customer
                            support, and keep the user experience on our platform. “
                          </p>
                          <div className="font-medium text-sm text-slate-500">
                            <span className="text-slate-200">Maria Gress</span> - <span className="text-slate-400">CEO & Co-Founder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="mt-4">
                    <div className="testimonial-carousel-pagination text-center" />
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