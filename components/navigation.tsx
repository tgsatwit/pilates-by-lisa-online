"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useCart } from '@/contexts/cart-context'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const { state } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      {
        "bg-transparent": !isScrolled && isHomePage,
        "bg-white/80 backdrop-blur-md shadow-sm": isScrolled || !isHomePage
      }
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center h-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md transition-colors h-full",
                (!isScrolled && isHomePage) ? "text-white" : "text-gray-900"
              )}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src={(!isScrolled && isHomePage)
                ? "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeTJTR0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--bc44200f1735515e99fc7dd77fcf9abc8452ba38/logo-light-lrg.png"
                : "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeXlTR0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--659a74dc0611c0e4638df17f3f123093db76b0fd/logo-dark-lrg.png"
              }
              alt="Pilates by Lisa logo"
              width={240}
              height={80}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: 'https://online.pilatesbylisa.com.au/browse', label: 'Online Studio' },
              { href: 'https://online.pilatesbylisa.com.au/weekly-schedule', label: 'Schedules' },
              { href: '/blog', label: 'Blog' },
              { href: '/shop', label: 'Shop' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  (!isScrolled && isHomePage) ? "text-white" : "text-gray-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className={cn(
              "relative text-2xl transition-colors h-full flex items-center",
              (!isScrolled && isHomePage) ? "text-white hover:text-white/90" : "text-primary hover:text-primary/90"
            )}>
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </Link>

            {/* Login Button - Desktop Only */}
            <div className="hidden md:block">
              <Link href="https://online.pilatesbylisa.com.au/login">
                <Button 
                  variant="ghost"
                  className={cn(
                    "font-medium hover:text-primary/90",
                    (!isScrolled && isHomePage) ? "text-white" : "text-gray-900"
                  )}
                >
                  Login
                </Button>
              </Link>
            </div>

            {/* Get Started Button - Always Visible */}
            <Link href="https://online.pilatesbylisa.com.au/checkout/subscribe/purchase">
              <Button 
                className="font-medium bg-primary hover:bg-primary/90 text-white"
                size={!isOpen ? "sm" : "default"}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden",
        {
          "block": isOpen,
          "hidden": !isOpen
        }
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {[
            { href: 'https://online.pilatesbylisa.com.au/browse', label: 'Online Studio' },
            { href: 'https://online.pilatesbylisa.com.au/weekly-schedule', label: 'Schedules' },
            { href: '/blog', label: 'Blog' },
            { href: '/shop', label: 'Shop' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="https://online.pilatesbylisa.com.au/login" 
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}