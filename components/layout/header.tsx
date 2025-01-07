'use client'

import Link from 'next/link'
import Logo from './logo'
import { useEffect, useState } from 'react'
import { useCart } from '@/components/cart/cart-context'
import { CartSheet } from '@/components/cart/cart-sheet'
import { Menu, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { items } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mobileLinks = [
    { href: "https://online.pilatesbylisa.com.au/browse", label: "Online Studio" },
    { href: "https://online.pilatesbylisa.com.au/weekly-schedule", label: "Schedule" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
  ]

  const dropdownLinks = [
    { href: "https://online.pilatesbylisa.com.au/checkout/subscribe/purchase", label: "Sign Up" },
    { href: "https://online.pilatesbylisa.com.au/login", label: "Login" },
    { href: "https://online.pilatesbylisa.com.au/browse", label: "Explore" },
  ]

  return (
    <header className={`fixed w-full z-30 transition-colors duration-300 ${isScrolled ? 'bg-slate-900' : 'bg-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[70px] md:h-[70px]">
          
          {/* Left group - Mobile menu and Logo */}
          <div className="flex items-center">
            <div className="md:hidden mr-3 flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white flex items-center justify-center"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-initial scale-[0.7] md:scale-[0.8] transform-gpu origin-left flex items-center">
              <Logo />
            </div>
          </div>

          {/* Desktop navigation - centered vertically */}
          <nav className="hidden md:flex md:grow items-center">
            <ul className="flex grow justify-center flex-wrap items-center">
              {/* Online Studio Dropdown */}
              <li className="relative group">
                <Link 
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out inline-flex items-center" 
                  href="https://online.pilatesbylisa.com.au/browse"
                >
                  Online Studio
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                  <div className="w-48 bg-slate-900/80 rounded-lg shadow-lg overflow-hidden">
                    <ul className="py-1">
                      {dropdownLinks.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-white transition duration-150 ease-in-out"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              {/* Other navigation links */}
              {mobileLinks.slice(1).map((link, index) => (
                <li key={index}>
                  <Link 
                    className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" 
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side items - aligned */}
          <ul className="flex items-center space-x-2 md:space-x-4 pr-2 md:px-4">
            <li>
              <div className="scale-[0.9] md:scale-110 flex items-center">
                <CartSheet />
              </div>
            </li>
            <li>
              <Link 
                className="btn-sm text-black hover:text-black transition duration-150 ease-in-out py-1.5 px-3 md:py-2.5 md:px-6 text-xs md:text-sm group [background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.slate.100),_theme(colors.slate.300)_25%,_theme(colors.slate.300)_75%,_theme(colors.slate.100)_100%)_border-box] relative before:absolute before:inset-0 before:bg-white/30 before:rounded-full before:pointer-events-none flex items-center" 
                href="/signup"
              >
                <span className="relative inline-flex items-center">
                  Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </Link>
            </li>
          </ul>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div 
          className={`fixed top-0 left-0 bottom-0 w-full sm:w-[380px] max-w-[90vw] bg-slate-800 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="overflow-y-auto h-full">
            <div className="flex flex-col p-6">
              <button 
                className="absolute top-5 right-5 text-white hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <nav className="mt-8">
                <ul className="space-y-4">
                  <li className="mb-6 flex justify-center scale-[1.2]">
                      <div className="scale-[0.8] transform-gpu">
                        <Logo />
                      </div>
                  </li>
                  {/* Mobile menu links with dropdown items for Online Studio */}
                  <li>
                    <Link
                      href="https://online.pilatesbylisa.com.au/browse"
                      className="text-lg text-white hover:text-purple-400 transition-colors block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Online Studio
                    </Link>
                    <ul className="ml-4 mt-2 space-y-2">
                      {dropdownLinks.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="text-sm text-slate-300 hover:text-purple-400 transition-colors block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {mobileLinks.slice(1).map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-lg text-white hover:text-purple-400 transition-colors block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-4">
                    <Link
                      href="/signup"
                      className="btn-md text-black bg-white hover:bg-gray-100 w-full text-center inline-block py-2 px-4 rounded-full transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}