'use client'

import { useState, useRef, useEffect, FC } from 'react'
import Image from 'next/image'
import FeaturesImage from '../../public/images/features-illustration.svg';

const FeaturesHome02: FC = () => {
  const [tab, setTab] = useState<number>(1)

  const items = [
    { id: 1, alt: "Features home 2 01" },
    { id: 2, alt: "Features home 2 02" },
    { id: 3, alt: "Features home 2 03" }
  ]

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-200">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">The quick brown fox jumped over the lazy dog</h2>
          </div>

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-start md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Tabs items (images) */}
            <div className="md:rtl md:w-5/12 lg:w-1/2 order-1 md:order-none">
              <div className="transition-all">
                <div className="relative flex flex-col min-h-[620px]" data-aos="fade-down">
                  <div className="absolute inset-0">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          tab === item.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <div className="relative inline-flex flex-col">
                          <Image 
                            className="md:max-w-none mx-auto rounded" 
                            src={FeaturesImage} 
                            width={540} 
                            height={620} 
                            alt={item.alt} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2" data-aos="fade-up">
              <div className="mb-8 text-center md:text-left">
                <h3 className="h3 text-slate-800 font-playfair-display mb-3">Built exclusively for you</h3>
                <p className="text-xl text-slate-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {items.map((item) => (
                  <button
                    key={item.id}
                    className={`flex items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${
                      tab !== item.id ? 'border-transparent opacity-50 hover:opacity-75' : 'border-2 border-blue-500 opacity-100'
                    }`}
                    onClick={() => setTab(item.id)}
                  >
                    <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.686 5.71 10.291.3c-.4-.4-.999-.4-1.399 0a.97.97 0 0 0 0 1.403l.6.6L2.698 6.01l-1-1.002c-.4-.4-.999-.4-1.398 0a.97.97 0 0 0 0 1.403l1.498 1.502 2.398 2.404L.6 14.023 2 15.425l3.696-3.706 3.997 4.007c.5.5 1.199.2 1.398 0a.97.97 0 0 0 0-1.402l-.999-1.002 3.697-6.711.6.6c.599.602 1.199.201 1.398 0 .3-.4.3-1.1-.1-1.502Zm-7.193 6.11L4.196 7.511l6.695-3.706 1.298 1.302-3.696 6.711Z" />
                    </svg>
                    <div>
                      <div className="text-slate-800 font-medium mb-1">Internal Feedback</div>
                      <div className="text-slate-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit.</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesHome02