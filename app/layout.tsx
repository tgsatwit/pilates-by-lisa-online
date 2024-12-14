'use client'

import './globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BgShapes from '@/components/landing/bg-shapes'
import { Inter, Playfair_Display } from 'next/font/google'

import { useEffect } from 'react'

import { Providers } from './providers'
import { CartProvider } from "@/components/cart/cart-context"

import Header from '@/components/landing/ui/header'
import Footer from '@/components/landing/ui/footer'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap'
})


export default function RootLayout({
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
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${inter.className} ${playfair.variable} font-inter antialiased bg-slate-100 tracking-tight`}>
        <CartProvider>
          <Providers>
            <div className="flex min-h-screen flex-col overflow-hidden">
            <Header />
            <BgShapes />
              <main>{children}</main>
              <Footer />
            </div>
          </Providers>
        </CartProvider>
      </body>
    </html>
  )
}