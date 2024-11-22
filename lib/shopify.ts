import { GraphQLClient } from 'graphql-request'
import { ShopifyProduct } from './utils'

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

if (!domain || !storefrontAccessToken) {
  throw new Error('Missing Shopify environment variables')
}

const endpoint = `https://${domain}/api/2024-01/graphql.json`

const shopifyClient = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    'Content-Type': 'application/json',
  },
})

export async function getAllProducts(): Promise<{ products: { edges: Array<{ node: ShopifyProduct }> } }> {
  const query = `
    query Products {
      products(first: 250) {
        edges {
          node {
            id
            handle
            title
            description
            tags
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            compareAtPriceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            publishedAt
          }
        }
      }
    }
  `

  try {
    const response = await shopifyClient.request(query)
    
    // Transform the response to match our ShopifyProduct interface
    const transformedProducts = {
      products: {
        edges: response.products.edges.map(({ node }: any) => ({
          node: {
            id: node.id,
            handle: node.handle,
            title: node.title,
            description: node.description,
            price: parseFloat(node.priceRange.minVariantPrice.amount),
            compareAtPrice: node.compareAtPriceRange?.minVariantPrice?.amount 
              ? parseFloat(node.compareAtPriceRange.minVariantPrice.amount)
              : null,
            images: node.images.edges.map(({ node: image }: any) => ({
              url: image.url,
              altText: image.altText
            })),
            tags: node.tags,
            isNew: isNewProduct(node.publishedAt),
            isSale: node.compareAtPriceRange?.minVariantPrice?.amount > node.priceRange.minVariantPrice.amount,
            currencyCode: node.priceRange.minVariantPrice.currencyCode
          }
        }))
      }
    }

    return transformedProducts
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

function isNewProduct(publishedAt: string): boolean {
  const publishDate = new Date(publishedAt)
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  return publishDate > thirtyDaysAgo
}