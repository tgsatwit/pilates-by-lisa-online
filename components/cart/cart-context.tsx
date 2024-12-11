"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { CartItem, CartContextType, CartState, Product } from '@/types'

const CART_STORAGE_KEY = 'pilates-by-lisa-cart'

export const CartContext = createContext<CartContextType | undefined>(undefined)

function loadCartFromStorage(): CartItem[] {
  if (typeof window === 'undefined') return []
  
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    return savedCart ? JSON.parse(savedCart) : []
  } catch (error) {
    console.error('Error loading cart from storage:', error)
    return []
  }
}

function saveCartToStorage(items: CartItem[]) {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch (error) {
    console.error('Error saving cart to storage:', error)
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedItems = loadCartFromStorage()
    setItems(savedItems)
    setIsInitialized(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      saveCartToStorage(items)
    }
  }, [items, isInitialized])

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
        handle: product.handle,
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

  // Don't render children until cart is loaded from storage
  if (!isInitialized) {
    return null
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