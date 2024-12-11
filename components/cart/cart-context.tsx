"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import { CartItem, CartContextType, CartState, Product } from '@/types'

export const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (product: Product, quantity: number = 1) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id)
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      const newItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: quantity,
        images: product.images,
        currencyCode: product.currencyCode,
        compareAtPrice: product.compareAtPrice
      }

      return [...currentItems, newItem]
    })
  }

  const removeFromCart = (itemId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId)
      return
    }
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const contextValue: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    state: {
      items,
      total
    }
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 