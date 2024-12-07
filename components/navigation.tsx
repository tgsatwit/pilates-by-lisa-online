"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { CartSheet } from "./cart/cart-sheet"

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="text-xl font-bold">
            Pilates by Lisa
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-6">
          <div className="flex space-x-6">
            <Link
              href="/shop"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/shop"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              Shop
            </Link>
            <Link
              href="/classes"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/classes"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              Classes
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/about"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/contact"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <CartSheet />
          </div>
        </nav>
      </div>
    </header>
  )
}