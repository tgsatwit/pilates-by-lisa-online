'use client'

import Image from 'next/image'
import Particles from './particles'
import HeroBackground from '@/public/images/pbl_main_hero_bg _lrg.webp'
import ModalVideo from '@/components/modal-video'
import { Play } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl">

        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Background image - extend beyond container */}
        <div className="absolute left-1/2 -translate-x-1/2 right-0 inset-y-0 w-[100vw] pointer-events-none" aria-hidden="true">
          <Image 
            src={HeroBackground}
            alt="Hero Background"
            fill
            className="object-cover object-center scale-x-[-1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100/0 from-90% to-slate-100" />
        </div>

        {/* Increase height with min-h-screen and extra padding */}
        <div className="pt-32 pb-32 md:pt-72 md:pb-96 min-h-[90vh] flex flex-col justify-center">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex justify-center md:justify-start" data-aos="fade-down">
                <div className="inline-flex font-sm bg-clip-text text-transparent bg-gradient-to-r from-white/60 to-white/80">
                ONLINE PILATES & REFORMER CLASSES
                </div>
            </div>
            <div className="text-center md:text-left">
              <div className="md:mr-auto md:max-w-2xl">
                <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6 font-['Raleway',sans-serif]" data-aos="fade-down">Transform Your Body with Lisa's Proven Pilates Method</h1>
                <p className="text-medium text-slate-300 mb-10" data-aos="fade-down" data-aos-delay="200">Your own Pilates Instructor in your pocket! Experience expert-led online Pilates classes that fit your schedule. Join our thriving global community today.</p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
                  <a className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group py-2 px-5" href="#0">
                    Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                  <button 
                    onClick={() => setIsVideoOpen(true)} 
                    className="btn border border-white/40 hover:border-white bg-transparent text-white hover:bg-white/10 transition duration-150 ease-in-out group py-2 px-5 inline-flex items-center"
                  >
                    Learn More <Play className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-150 ease-in-out" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Switch back to ModalVideo component */}
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