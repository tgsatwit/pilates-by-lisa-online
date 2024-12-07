export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  createdAt: string
  tags: string[]
  images: {
    edges: Array<{
      node: {
        url: string
        altText: string | null
      }
    }>
  }
  variants: {
    edges: Array<{
      node: {
        price: {
          amount: string
          currencyCode: string
        }
        compareAtPrice: {
          amount: string
        } | null
      }
    }>
  }
} 