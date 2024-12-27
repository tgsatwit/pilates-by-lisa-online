'use client'

import Image from 'next/image'
import HeroBackground from '@/public/images/pbl_main_hero_bg _lrg.webp'
import ModalVideo from '@/components/modal-video'
import { Play } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] md:min-h-[90vh] w-full overflow-x-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none -z-10 w-full" aria-hidden="true">
        <Image 
          src={HeroBackground}
          alt="Hero Background"
          fill
          className="object-cover object-center scale-x-[-1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/20" />
      </div>

      {/* Adjusted padding-top to move content more towards middle */}
      <div className="relative px-4 sm:px-6 pt-20 md:pt-36 pb-12 md:pb-20 flex items-center min-h-screen md:min-h-[90vh]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-2" data-aos="fade-down" data-aos-delay="0">
            <div className="relative inline-flex font-medium text-sm py-1 text-white">
              ONLINE PILATES & REFORMER CLASSES
            </div>
          </div>
          <h1 
            className="h1 font-playfair-display text-5xl md:text-5xl lg:text-6xl mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60" 
            data-aos="fade-down"
          >
            Transform Your Body with Lisa's Proven Pilates Method
          </h1>
          <p 
            className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8" 
            data-aos="fade-down" 
            data-aos-delay="200"
          >
            Your own Pilates Instructor in your pocket! Achieve your fitness goals with flexible, export-led online pilates classes that fit your schedule.
          </p>
          <div 
            className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4" 
            data-aos="fade-down" 
            data-aos-delay="400"
          >
            <a 
              className="btn text-slate-900 bg-white hover:bg-slate-100 w-full sm:w-auto text-center text-lg py-3 px-6"
              href="https://online.pilatesbylisa.com.au/browse"
            >
              Get Started
            </a>
            <button
              className="btn text-white bg-slate-800/30 hover:bg-slate-800/40 w-full sm:w-auto group flex items-center justify-center text-lg py-3 px-6"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="w-4 h-4 fill-current text-purple-500 group-hover:text-purple-400 transition duration-150 ease-in-out" />
              <span className="ml-2">Watch the video</span>
            </button>
          </div>
        </div>
      </div>

      <ModalVideo 
        videoUrl="https://vimeo.com/593532485" 
        previewImage={HeroBackground}
        width={1920}
        height={1080}
        isOpen={isVideoOpen}
        onOpenChange={setIsVideoOpen}
      />
    </section>
  )
}