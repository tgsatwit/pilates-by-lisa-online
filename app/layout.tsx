'use client'

import './globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BgShapes from '@/components/landing/bg-shapes'
import { Inter, Playfair_Display } from 'next/font/google'

import { useEffect } from 'react'

import { Providers } from './providers'
import { CartProvider } from "@/components/cart/cart-context"

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Toaster } from 'sonner'

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
      duration: 1000,
      easing: 'ease-out-cubic',
      disable: 'phone',
      startEvent: 'DOMContentLoaded',
      mirror: true,
      offset: 50
    })
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} ${playfair.variable} font-inter antialiased bg-slate-100 tracking-tight`}>
        <CartProvider>
          <Providers>
            <div className="flex min-h-screen flex-col overflow-hidden">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </Providers>
        </CartProvider>
        <Toaster />
      </body>
    </html>
  )
}