"use client";

import Image from 'next/image'
import { useState } from 'react';
import Particles from './particles'
import { Play } from 'lucide-react';

export default function Clients() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            <div className="inline-flex w-full flex-nowrap justify-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              {/* Play button to open modal */}
              <button 
                className="flex items-center justify-center w-16 h-16 bg-black bg-opacity-50 rounded-full"
                onClick={() => setIsModalOpen(true)}
              >
                <Play className="text-white w-8 h-8" />
              </button>

              {/* Modal for Vimeo video */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                  <div className="relative bg-white rounded-lg overflow-hidden">
                    <button 
                      className="absolute top-2 right-2 text-black"
                      onClick={() => setIsModalOpen(false)}
                    >
                      ✕
                    </button>
                    <iframe 
                      src="https://player.vimeo.com/video/593532485" 
                      width="640" 
                      height="360" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}