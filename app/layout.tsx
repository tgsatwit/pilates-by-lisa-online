'use client'

import './globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BgShapes from '@/components/landing/bg-shapes'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'

import { useEffect } from 'react'

import { Providers } from './providers'
import { CartProvider } from "@/components/cart/cart-context"

import Header from '@/components/landing/ui/header'
import Footer from '@/components/landing/ui/footer'



const inter = Inter({ subsets: ['latin'] })
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
      <body className={inter.className}>
        <CartProvider>
          <Providers>
            <div className="flex min-h-screen flex-col">
              <BgShapes />
              <Header />
              <main className="flex-1 bg-slate-100">{children}</main>
              <Footer />
            </div>
          </Providers>
        </CartProvider>
      </body>
    </html>
  )
}