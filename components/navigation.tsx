"use client"

import { CartSheet } from "./cart/cart-sheet"

export function Navigation() {
  return (
    <header>
      <nav>
        <div>
          <CartSheet />
          {/* Other navigation items */}
        </div>
      </nav>
    </header>
  )
}