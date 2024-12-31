'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Carousel01 from '@/public/images/carousel/Equipment_free_square.webp'
import Carousel02 from '@/public/images/carousel/Reformer_square.webp'
import Carousel03 from '@/public/images/carousel/Beginner_square.webp'
import Carousel04 from '@/public/images/carousel/Yoga_square.webp'
import Carousel05 from '@/public/images/carousel/Ankle-Weights_square.webp'
import Carousel06 from '@/public/images/carousel/Resistance-Band_square.webp'
import Carousel07 from '@/public/images/carousel/Foam-Roller_square.webp'
import Carousel08 from '@/public/images/carousel/Magic-Circle_square.webp'
import Carousel09 from '@/public/images/carousel/Booty-Bands_square.jpg'
import Carousel10 from '@/public/images/carousel/Hand-Weights_square.webp'
import Carousel11 from '@/public/images/carousel/Series_square.webp'
import Carousel12 from '@/public/images/carousel/FitnessPilates-Ball_square.webp'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

export default function FeaturesPBLVariety() {
  const images = [
    { src: Carousel01, alt: 'Equipment Free Workouts' },
    { src: Carousel02, alt: 'Reformer Workouts' },
    { src: Carousel03, alt: 'Beginner Workouts' },
    { src: Carousel04, alt: 'Yoga Workouts' },
    { src: Carousel05, alt: 'Ankle Weights Workouts' },
    { src: Carousel06, alt: 'Resistance Band Workouts' },
    { src: Carousel07, alt: 'Foam Roller Workouts' },
    { src: Carousel08, alt: 'Magic Circle Workouts' },
    { src: Carousel09, alt: 'Booty Bands Workouts' },
    { src: Carousel10, alt: 'Hand Weights Workouts' },
    { src: Carousel11, alt: 'Series Workouts' },
    { src: Carousel12, alt: 'Fitness Pilates Ball Workouts' },
  ]

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center px-10 pb-12 md:pb-16">
            <h2 className="h2 font-playfair-display text-gray-900 mb-4">Discover the Best Online Pilates and Reformer Workouts tailored to you!</h2>
            <p className="text-lg text-center text-slate-700 mb-8">As a mum and busy professional, I know every day is different, so you can choose from our library of over 800 premium classed - from 5-minute stretches to full-length sessions. A library built over a decade of our experience in delivering high-quality, fully-instructed online Pilates workouts. We cater to your mood, needs and schedule.</p>
            <a 
              className="btn text-white bg-purple-700 hover:bg-purple-800 w-full sm:w-auto text-center text-md py-3 px-6"
              href="https://online.pilatesbylisa.com.au/browse"
            >
              Browse Workouts <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>

          {/* Carousel */}
          <div className="pb-12 md:pb-16 relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView="auto"
              loop={true}
              centeredSlides={false}
              navigation={{
                nextEl: '.carousel-next',
                prevEl: '.carousel-prev',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="max-w-sm mx-auto sm:max-w-none"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="max-w-[350px] h-auto">
                  <Image
                    className="w-full object-cover h-full rounded-lg shadow-lg"
                    src={image.src}
                    width={350}
                    height={350}
                    alt={image.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows */}
            <div className="flex mt-12 space-x-3 justify-end">
              <button className="carousel-prev relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-white border border-pink-200 hover:bg-pink-500 transition duration-150 ease-in-out">
                <span className="sr-only">Previous</span>
                <svg
                  className="fill-pink-500 group-hover:fill-white transition duration-150 ease-in-out"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                >
                  <path d="m3.914 5 3.5-3.5L6 .086 1.086 5H1v.086L.086 6 1 6.914V7h.086L6 11.914 7.414 10.5 3.914 7H13V5z" />
                </svg>
              </button>
              <button className="carousel-next relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-white border border-pink-200 hover:bg-pink-500 transition duration-150 ease-in-out">
                <span className="sr-only">Next</span>
                <svg
                  className="fill-pink-500 group-hover:fill-white transition duration-150 ease-in-out"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                >
                  <path d="m9.086 5-3.5-3.5L7 .086 11.914 5H12v.086l.914.914-.914.914V7h-.086L7 11.914 5.586 10.5l3.5-3.5H0V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}