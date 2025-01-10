'use client'

import { useState, FC } from 'react'
import Image from 'next/image'
import FeaturesImage from '../../public/images/features-illustration.svg'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap'
})

const FeaturesHome: FC = () => {
  const [tab, setTab] = useState<number>(1)

  const items = [
    { id: 1, alt: "Features home 01" },
    { id: 2, alt: "Features home 02" },
    { id: 3, alt: "Features home 03" },
    { id: 4, alt: "Features home 04" }
  ]

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Pricing plans</div>
            </div>
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">Built exclusively for you</h2>
            <p className="text-xl text-slate-600">Excepteur s474 occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
          </div>

          {/* Section content */}
          <div className="max-w-3xl mx-auto">
            {/* Tabs buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12">
              {items.map((item) => (
                <button
                  key={item.id}
                  className={`text-center transition-opacity ${tab !== item.id && 'opacity-50 hover:opacity-75'}`}
                  onClick={() => setTab(item.id)}
                >
                  <div>
                    <div className="inline-flex rounded-full shadow-md mb-3">
                      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#2174EA" d="M20 20h6v16h-6z" />
                        <path fillOpacity=".64" fill="#5091EE" d="M29 20h3v16h-3zM35 20h1v16h-1z" />
                      </svg>
                    </div>
                    <div className="md:text-lg leading-tight font-semibold text-slate-800">Internal Feedback</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Tabs items */}
            <div className="transition-all">
              <div className="relative flex flex-col min-h-[474px]" data-aos="fade-up">
                <div className="absolute inset-0">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${
                        tab === item.id 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 -translate-y-16'
                      }`}
                    >
                      <Image 
                        className="mx-auto shadow-2xl" 
                        src={FeaturesImage} 
                        width={768} 
                        height={474} 
                        alt={item.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesHome