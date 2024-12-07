"use client"

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react"
import { CartItem } from "@/types"

interface CartContextType {
  items: CartItem[]
  state: {
    items: CartItem[]
    total: number
  }
  addToCart: (item: CartItem) => void
  addItem: (product: any) => void // For compatibility with existing components
  removeFromCart: (itemId: string) => void
  removeItem: (itemId: string) => void // Alias for removeFromCart
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('cart')
        const parsedCart = savedCart ? JSON.parse(savedCart) : []
        return Array.isArray(parsedCart) ? parsedCart : []
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error)
        return []
      }
    }
    return []
  })

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (items && Array.isArray(items)) {
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }, [items])

  const addToCart = useCallback((item: CartItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id)
      if (existingItem) {
        return currentItems.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      return [...currentItems, item]
    })
  }, [])

  // Transform Shopify product to CartItem
  const addItem = useCallback((product: any) => {
    const cartItem: CartItem = {
      id: product.id,
      handle: product.handle,
      title: product.title,
      description: product.description,
      price: parseFloat(product.variants?.edges[0]?.node.price.amount || '0'),
      currencyCode: product.variants?.edges[0]?.node.price.currencyCode || 'USD',
      compareAtPrice: product.variants?.edges[0]?.node.compareAtPrice?.amount 
        ? parseFloat(product.variants.edges[0].node.compareAtPrice.amount)
        : null,
      images: product.images.edges.map((edge: any) => ({
        url: edge.node.url,
        altText: edge.node.altText
      })),
      tags: product.tags || [],
      isNew: false,
      isSale: false,
      quantity: 1
    }
    addToCart(cartItem)
  }, [addToCart])

  const removeFromCart = useCallback((itemId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId))
  }, [])

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const total = Array.isArray(items) 
    ? items.reduce((sum, item) => sum + (item?.price || 0) * (item?.quantity || 0), 0)
    : 0

  return (
    <CartContext.Provider
      value={{
        items,
        state: { items, total },
        addToCart,
        addItem,
        removeFromCart,
        removeItem: removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
} 