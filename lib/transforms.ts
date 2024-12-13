import type { ShopifyProduct as ShopifyAPIProduct } from '@/lib/shopify-types'

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

export function transformShopifyProduct(shopifyProduct: ShopifyAPIProduct): Product {
  // Check if product is new (within last 30 days)
  // Temporarily disable isNew until we can confirm the API structure
  const isNew = false
  
  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    title: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    // Convert string to number for our internal use
    price: Number(shopifyProduct.price),
    compareAtPrice: shopifyProduct.compareAtPrice ? Number(shopifyProduct.compareAtPrice) : null,
    currencyCode: shopifyProduct.currencyCode,
    // Map Shopify images to our format
    images: shopifyProduct.images.map(image => ({
      url: image.url,
      altText: image.altText,
      width: image.width,
      height: image.height
    })),
    tags: shopifyProduct.tags || [],
    isNew
  }
}

export function transformToCartProduct(product: Product): ShopifyAPIProduct {
  return {
    id: product.id,
    handle: product.handle,
    title: product.title,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    price: Number(product.price),
    compareAtPrice: product.compareAtPrice,
    currencyCode: product.currencyCode,
    images: product.images.map(image => ({
      url: image.url,
      altText: image.altText,
      width: image.width,
      height: image.height
    })),
    tags: product.tags
  }
} 