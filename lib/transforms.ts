import { ShopifyProductResponse } from "@/lib/shopify-types"
import { Product } from "@/types"

export function transformShopifyProduct(shopifyProduct: ShopifyProductResponse['product']): Product | null {
  if (!shopifyProduct) return null

  // Get the first variant's price or default to "0"
  const firstVariant = shopifyProduct.variants?.edges[0]?.node ?? {
    price: { amount: '0', currencyCode: 'USD' },
    compareAtPrice: null
  }

  // Transform images to expected format, preserving dimensions
  const images = shopifyProduct.images?.edges?.map(edge => ({
    url: edge.node.url,
    altText: edge.node.altText,
    width: edge.node.width,
    height: edge.node.height
  })) ?? []

  // Check if product is new (within last 30 days)
  const isNew = new Date(shopifyProduct.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  // Check if product is on sale
  const isSale = firstVariant.compareAtPrice !== null

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    title: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    images,
    price: parseFloat(firstVariant.price.amount),
    compareAtPrice: firstVariant.compareAtPrice ? parseFloat(firstVariant.compareAtPrice.amount) : null,
    currencyCode: firstVariant.price.currencyCode,
    tags: shopifyProduct.tags,
    isNew,
    isSale
  }
} 