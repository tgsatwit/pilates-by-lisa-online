'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import BgShapes from '@/components/landing/bg-shapes'
import Header from '@/components/layout/header'

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap'
})

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <BgShapes />
      <Header />
      
      <main className="grow pt-16 md:pt-20 bg-slate-100">

        {children}

      </main>

    </>
  )
}
