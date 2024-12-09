export interface Product {
  id: string
  handle: string
  title: string
  description: string
  price: number
  compareAtPrice: number | null
  images: Array<{
    url: string
    altText: string | null
  }>
  tags: string[]
  isNew: boolean
  isSale: boolean
  currencyCode: string
}

export interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  images: Array<{
    url: string
    altText?: string
  }>
  currencyCode: string
  compareAtPrice?: number | null
}

export interface CartState {
  items: CartItem[]
  total: number
}

export interface CartContextType {
  items: CartItem[]
  state: CartState
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
} 