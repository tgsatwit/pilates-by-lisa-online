export interface Product {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  price: number
  compareAtPrice: number | null
  images: Array<{
    url: string
    altText: string | null
    width?: number
    height?: number
  }>
  tags: string[]
  isNew: boolean
  isSale: boolean
  currencyCode: string
}

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
  state: CartState
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
} 