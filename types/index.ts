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

export interface CartItem extends Product {
  quantity: number
} 