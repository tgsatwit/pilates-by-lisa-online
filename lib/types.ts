import { ShopifyProduct } from './shopify-types'

export interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  image: string | undefined
  variantId: string | undefined
  currencyCode: string
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