'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Logo from './logo'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden flex items-center ml-4">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex w-8 h-8 text-slate-300 hover:text-white text-center items-center justify-center transitio`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect 
            className="origin-center transition-all duration-300 ease-&lsqb;cubic-bezier(.5,.85,.25,1.1)&rsqb; -translate-y-[5px] group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:translate-y-0"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
          <rect 
            className="origin-center group-[[aria-expanded=true]]:rotate-45 transition-all duration-300 ease-&lsqb;cubic-bezier(.5,.85,.25,1.8)&rsqb;"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
          <rect 
            className="origin-center transition-all duration-300 ease-&lsqb;cubic-bezier(.5,.85,.25,1.1)&rsqb; translate-y-[5px] group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:translate-y-0"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="border border-transparent [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] rounded-lg px-4 py-4">
          <li className="mb-6 flex justify-center">
            <div className="scale-[0.8] transform-gpu">
              <Logo />
            </div>
          </li>
          <li className="mb-2">
            <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="https://online.pilatesbylisa.com.au/browse">Online Studio</Link>
          </li>
          <li className="mb-2">
            <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="https://online.pilatesbylisa.com.au/weekly-schedule">Schedule</Link>
          </li>
          <li className="mb-2">
            <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/shop">Shop</Link>
          </li>
          <li className="mb-2">
            <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
