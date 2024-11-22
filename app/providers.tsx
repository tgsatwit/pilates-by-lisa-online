"use client"

import { ThemeProvider } from "next-themes"
import { CartProvider } from "@/contexts/cart-context"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <CartProvider>
        {children}
      </CartProvider>
    </ThemeProvider>
  )
}