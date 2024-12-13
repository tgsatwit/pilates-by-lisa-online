// Shopify specific types
export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  compareAtPrice: string | null
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
    maxVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  images: {
    edges: Array<{
      node: {
        originalSrc: string
        altText: string | null
        width?: number
        height?: number
      }
    }>
  }
  variants: {
    edges: Array<{
      node: {
        id: string
        title: string
        price: {
          amount: string
          currencyCode: string
        }
      }
    }>
  }
  tags: string[]
}

// Our application's Product type
export interface Product {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  price: number
  compareAtPrice: number | null
  currencyCode: string
  images: Array<{
    url: string
    altText: string | null
    width?: number
    height?: number
  }>
  tags: string[]
  isNew: boolean
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