'use client'

import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import { useEffect, useState } from 'react'
import { useCart } from '@/components/cart/cart-context'
import { Button } from '@/components/ui/button'
import { CartSheet } from '@/components/cart/cart-sheet'

export default function Header() {
  // Track whether user has scrolled
  const [isScrolled, setIsScrolled] = useState(false)
  const { items } = useCart()

  // Add scroll event listener to change header background
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 10px
      setIsScrolled(window.scrollY > 10)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-30 transition-colors duration-300 ${isScrolled ? 'bg-slate-900' : 'bg-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-20">

          {/* Site branding */}
          <div className="flex-1 mt-1 md:mt-2">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="https://online.pilatesbylisa.com.au/browse">Online Studio</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="https://online.pilatesbylisa.com.au/weekly-schedule">Schedule</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/shop">Shop</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex-1 flex justify-end items-center">
            <li className="mr-2 md:mr-4">
              <div className="scale-75 md:scale-100">
                <CartSheet />
              </div>
            </li>
            <li>
              <Link 
                className="btn-sm text-black hover:text-black transition duration-150 ease-in-out py-1.5 px-3 md:py-2 md:px-5 text-xs md:text-sm group [background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.slate.100),_theme(colors.slate.300)_25%,_theme(colors.slate.300)_75%,_theme(colors.slate.100)_100%)_border-box] relative before:absolute before:inset-0 before:bg-white/30 before:rounded-full before:pointer-events-none" 
                href="/signup"
              >
                <span className="relative inline-flex items-center">
                  Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </Link>
            </li>
          </ul>

          <div className="scale-75 md:scale-100">
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  )
}
