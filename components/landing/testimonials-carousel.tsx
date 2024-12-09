'use client'

import { useState } from 'react'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper core and required modules
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import Particles from './particles'
import Highlighter, { HighlighterItem } from './highlighter'

import CarouselImg01 from '@/public/images/carousel-icon-01.svg'
import CarouselImg02 from '@/public/images/carousel-icon-02.svg'
import CarouselImg03 from '@/public/images/carousel-icon-03.svg'
import CarouselImg04 from '@/public/images/carousel-icon-04.svg'
import CarouselImg05 from '@/public/images/carousel-icon-05.svg'

export default function TestimonialsCarousel() {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false)

  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: '.carousel-next',
          prevEl: '.carousel-prev',
        }}
        onInit={() => setSwiperInitialized(true)}
        className="h-full"
      >
        <SwiperSlide>
          <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
            <HighlighterItem className="swiper-slide h-auto group/slide">
              <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                {/* Particles animation */}
                <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} /> 
                {/* Radial gradient */}
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                  <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                </div>
                <div className="flex flex-col p-6 h-full">
                  <Image className="mb-3" src={CarouselImg01} width={56} height={56} alt="Icon 01" />
                  <div className="grow">
                    <div className="font-bold text-lg mb-1">Anonymous User</div>
                    <div className="text-slate-400 mb-3">Incorporate rich user profiling, and facilitate more transactions.</div>
                  </div>
                  <div className="text-right">
                    <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </Highlighter>
        </SwiperSlide>
        <SwiperSlide>
          <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
            <HighlighterItem className="swiper-slide h-auto group/slide">
              <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                {/* Particles animation */}
                <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                {/* Radial gradient */}
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                  <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                </div>
                <div className="flex flex-col p-6 h-full">
                  <Image className="mb-3" src={CarouselImg02} width={56} height={56} alt="Icon 01" />
                  <div className="grow">
                    <div className="font-bold text-lg mb-1">Bot Detection</div>
                    <div className="text-slate-400 mb-3">Incorporate rich user profiling, and facilitate more transactions.</div>
                  </div>
                  <div className="text-right">
                    <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </Highlighter>
        </SwiperSlide>
        <SwiperSlide>
          <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
            <HighlighterItem className="swiper-slide h-auto group/slide">
              <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                {/* Particles animation */}
                <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                {/* Radial gradient */}
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                  <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                </div>
                <div className="flex flex-col p-6 h-full">
                  <Image className="mb-3" src={CarouselImg03} width={56} height={56} alt="Icon 01" />
                  <div className="grow">
                    <div className="font-bold text-lg mb-1">Social integrations</div>
                    <div className="text-slate-400 mb-3">Incorporate rich user profiling, and facilitate more transactions.</div>
                  </div>
                  <div className="text-right">
                    <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </Highlighter>
        </SwiperSlide>
        <SwiperSlide>
          <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
            <HighlighterItem className="swiper-slide h-auto group/slide">
              <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                {/* Particles animation */}
                <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                {/* Radial gradient */}
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                  <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                </div>
                <div className="flex flex-col p-6 h-full">
                  <Image className="mb-3" src={CarouselImg04} width={56} height={56} alt="Icon 01" />
                  <div className="grow">
                    <div className="font-bold text-lg mb-1">Progressive Profiling</div>
                    <div className="text-slate-400 mb-3">Incorporate rich user profiling, and facilitate more transactions.</div>
                  </div>
                  <div className="text-right">
                    <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </Highlighter>
        </SwiperSlide>
        <SwiperSlide>
          <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
            <HighlighterItem className="swiper-slide h-auto group/slide">
              <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                {/* Particles animation */}
                <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                {/* Radial gradient */}
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                  <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                </div>
                <div className="flex flex-col p-6 h-full">
                  <Image className="mb-3" src={CarouselImg05} width={56} height={56} alt="Icon 05" />
                  <div className="grow">
                    <div className="font-bold text-lg mb-1">Secure Access</div>
                    <div className="text-slate-400 mb-3">Incorporate rich user profiling, and facilitate more transactions.</div>
                  </div>
                  <div className="text-right">
                    <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="#0">Learn More <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </Highlighter>
        </SwiperSlide>
      </Swiper>

      {/* Navigation arrows */}
      <div className="flex justify-end mt-8">
        <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
          <span className="sr-only">Previous</span>
          <svg className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
          </svg>
        </button>
        <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
          <span className="sr-only">Next</span>
          <svg className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
          </svg>
        </button>
      </div>
    </>
  )
}