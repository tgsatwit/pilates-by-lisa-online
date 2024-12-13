"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"
import { useCart } from "@/components/cart/cart-context"

export function CartSheet() {
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
    <Button 
      variant="ghost" 
      size="icon" 
      className={cn(
        "relative hover:bg-transparent",
        (!isScrolled && isHomePage) ? "text-white hover:text-white/90" : "text-primary hover:text-primary/90"
      )}
    >
      <ShoppingCart className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {state.items.length}
      </span>
    </Button>
  )
}