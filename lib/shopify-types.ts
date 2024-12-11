export type ShopifyImage = {
  url: string
  altText: string | null
  width?: number
  height?: number
}

export type Money = {
  amount: string
  currencyCode: string
}

export type ShopifyProduct = {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  images: ShopifyImage[]
  price: number
  compareAtPrice: number | null
  currencyCode: string
  tags: string[]
  isNew?: boolean
  isSale?: boolean
}

export type ShopifyEdge<T> = {
  node: T
}

export type ShopifyConnection<T> = {
  edges: Array<ShopifyEdge<T>>
}

// Type for a single product query response
export type ShopifyProductResponse = {
  product?: {
    id: string
    handle: string
    title: string
    description: string
    descriptionHtml: string
    createdAt: string
    tags: string[]
    images?: ShopifyConnection<{
      url: string
      altText: string | null
      width: number
      height: number
    }>
    variants?: ShopifyConnection<{
      price: {
        amount: string
        currencyCode: string
      }
      compareAtPrice: {
        amount: string
      } | null
    }>
  }
}

// Type for products list query response
export type ShopifyProductsResponse = {
  products: {
    edges: Array<{
      node: {
        id: string
        handle: string
        title: string
        description: string
        descriptionHtml: string
        createdAt: string
        tags: string[]
        images?: ShopifyConnection<{
          url: string
          altText: string | null
          width: number
          height: number
        }>
        variants?: ShopifyConnection<{
          price: {
            amount: string
            currencyCode: string
          }
          compareAtPrice: {
            amount: string
          } | null
        }>
      }
    }>
  }
}

// Type for checkout creation response
export type ShopifyCheckoutResponse = {
  checkoutCreate: {
    checkout: {
      id: string
      webUrl: string
      totalPriceV2: {
        amount: string
        currencyCode: string
      }
      lineItems: ShopifyConnection<{
        id: string
        title: string
        quantity: number
      }>
    }
    checkoutUserErrors: Array<{
      code: string
      field: string[]
      message: string
    }>
  }
}

// Type for variant query response
export type ShopifyVariantResponse = {
  product?: {
    variants: ShopifyConnection<{
      id: string
    }>
  }
} 