'use client'

import { useState, FC } from 'react'
import Image from 'next/image'
import FeatureIllustration from '@/public/images/feature-illustration.png'
import FeatureImage01 from '@/public/images/feature-01.png'

const Features01: FC = () => {
  const [tab, setTab] = useState<number>(1)

  const items = [
    { id: 1, alt: "Feature 01" },
    { id: 2, alt: "Feature 02" },
    { id: 3, alt: "Feature 03" },
    { id: 4, alt: "Feature 04" }
  ]

  return (
    <section className="relative bg-zinc-50">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Go further than the speed of thought</h2>
            <p className="text-lg text-zinc-500">AI reads and understands your designs, and with nothing more than a single line of feedback, perform complex actions autonomously.</p>
          </div>
          <div>
            {/* Tabs buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {items.map((item) => (
                <button
                  key={item.id}
                  className={`text-left px-4 py-5 border border-transparent rounded ${
                    tab !== item.id 
                      ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' 
                      : '[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1'
                  }`}
                  onClick={() => setTab(item.id)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-inter-tight font-semibold text-zinc-900">AI Effects</div>
                    <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== item.id ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                      <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                    </svg>
                  </div>
                  <div className="text-sm text-zinc-500">Visually structure your designs and structure them easily.</div>
                </button>
              ))}
            </div>
            {/* Tabs items */}
            <div className="relative lg:max-w-none [mask-image:linear-gradient(white_0%,white_calc(100%-40px),_transparent_calc(100%-1px))] -mx-6">
              <div className="relative flex flex-col pt-12 md:pt-20 mx-6 min-h-[360px]">
                <div className="absolute inset-0">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${
                        tab === item.id 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 -translate-y-4'
                      }`}
                    >
                      <div className="w-full text-center absolute inset-0">                
                        <div className="inline-flex relative align-top">
                          <Image 
                            className="rounded-t-lg border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] box-content shadow-2xl" 
                            src={FeatureImage01} 
                            width={600} 
                            height={360} 
                            alt={item.alt} 
                          />
                          <Image 
                            className="absolute top-0 left-full -translate-x-[70%] -mr-20 max-md:w-[45%]" 
                            src={FeatureIllustration} 
                            width={273} 
                            height={288} 
                            alt="Illustration" 
                            aria-hidden="true" 
                          />
                        </div>
                      </div>
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

export default Features01