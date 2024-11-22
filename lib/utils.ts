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
  images: Array<{
    url: string
    altText: string | null
  }>
  tags: string[]
  isNew: boolean
  isSale: boolean
  currencyCode: string
}