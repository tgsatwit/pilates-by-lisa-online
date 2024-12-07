import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number, currencyCode: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}

export interface ShopifyImage {
  url: string
  altText: string | null
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  price: number
  compareAtPrice: number | null
  currencyCode: string
  images: ShopifyImage[]
  tags: string[]
  isNew?: boolean
  isSale?: boolean
}

// Original Shopify API types for reference
export interface ShopifyAPIProduct {
  id: string
  title: string
  description: string
  handle: string
  variants: {
    edges: Array<{
      node: {
        id: string
        title: string
        price: {
          amount: number
          currencyCode: string
        }
      }
    }>
  }
  images: {
    edges: Array<{
      node: {
        url: string
        altText: string | null
      }
    }>
  }
  tags: string[]
}