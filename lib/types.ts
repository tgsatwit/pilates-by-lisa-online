import { ShopifyProduct } from './shopify-types'

export interface CartItem {
  id: string
  handle: string
  title: string
  price: number
  quantity: number
  images: Array<{
    url: string
    altText: string | null
    width?: number
    height?: number
  }>
  currencyCode: string
  compareAtPrice: number | null
}

export interface CartState {
  items: CartItem[]
  total: number
}

export interface CartContextType {
  items: CartItem[]
  addToCart: (product: ShopifyProduct, quantity?: number) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  state: CartState
} 