'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  links: Array<{ href: string; label: string }>
}

export default function MobileMenu({ isOpen, setIsOpen, links }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[380px] max-w-[90vw] bg-slate-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="overflow-y-auto h-full">
          <div className="flex flex-col p-6">
            <button 
              className="absolute top-5 right-5 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <nav className="mt-8">
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-lg text-white hover:text-purple-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
} 