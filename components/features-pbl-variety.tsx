'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Illustration from '@/public/images/features-illustration.svg'

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

import { Swiper } from 'swiper'
import 'swiper/swiper-bundle.css'

export default function FeaturesPBLVariety() {
  const carouselRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current && prevRef.current && nextRef.current) {
      const carousel = new Swiper(carouselRef.current, {
        slidesPerView: 'auto',
        grabCursor: true,
        loop: false,
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 24,
        watchSlidesProgress: true,
        navigation: {
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        },
      });
    }
  }, []);

  return (
    <section className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-pink-50 -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image className="max-w-none opacity-50" src={Illustration} alt="Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center px-10 pb-12 md:pb-16">
            <h2 className="h2 font-cabinet-grotesk text-gray-900 mb-4">Discover the Best Online Pilates and Reformer Workouts tailored to your needs, experience & mood</h2>
            <p className="text-lg text-center text-slate-700 mb-8">We're your go-to for online Pilates and reformer workouts. With my decade-long experience in delivering high-quality, fully-instructed online Pilates workouts, dive into a library of over 800 premium classes. From 5-minute stretches to full-length sessions, we cater to your mood, needs, and schedule. Join us and transform your fitness journey with expert-guided Pilates, anytime, anywhere.</p>

          </div>

          {/* Carousel */}
          <div className="pb-12 md:pb-16">
            <div ref={carouselRef} className="carousel swiper-container max-w-sm mx-auto sm:max-w-none">
              <div className="swiper-wrapper">
                {/* Carousel items */}
                {[Carousel01, Carousel02, Carousel03, Carousel04, Carousel05, Carousel06, Carousel07, Carousel08, Carousel09, Carousel10, Carousel11, Carousel12].map((image, index) => (
                  <div key={index} className="swiper-slide max-w-[350px] h-auto">
                    <Image
                      className="w-full object-cover h-full rounded-lg shadow-lg"
                      src={image}
                      width="350"
                      height="350"
                      alt={`Carousel ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex mt-12 space-x-3 justify-end">
              <button ref={prevRef} className="carousel-prev relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-white border border-pink-200 hover:bg-pink-500 transition duration-150 ease-in-out">
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
              <button ref={nextRef} className="carousel-next relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-white border border-pink-200 hover:bg-pink-500 transition duration-150 ease-in-out">
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