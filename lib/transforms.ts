import { ShopifyProduct } from "@/lib/shopify-types"
import { Product } from "@/types"

export function transformShopifyProduct(shopifyProduct: ShopifyProduct): Product {
  // Get the first variant's price or default to "0"
  const price = shopifyProduct.variants?.edges[0]?.node.price.amount || "0"
  const compareAtPrice = shopifyProduct.variants?.edges[0]?.node.compareAtPrice?.amount || null

  // Transform images to expected format
  const images = shopifyProduct.images?.edges.map((edge: { 
    node: { 
      url: string; 
      altText: string | null 
    } 
  }) => ({
    url: edge.node.url,
    altText: edge.node.altText
  })) || []

  // Check if product is new (within last 30 days)
  const isNew = new Date(shopifyProduct.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  // Check if product is on sale
  const isSale = compareAtPrice !== null && parseFloat(compareAtPrice) > parseFloat(price)

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    title: shopifyProduct.title,
    description: shopifyProduct.description,
    price: parseFloat(price),
    compareAtPrice: compareAtPrice ? parseFloat(compareAtPrice) : null,
    images,
    tags: shopifyProduct.tags || [],
    isNew,
    isSale,
    currencyCode: shopifyProduct.variants?.edges[0]?.node.price.currencyCode || 'USD'
  }
} 