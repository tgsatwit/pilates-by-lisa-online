import { GraphQLClient } from 'graphql-request'
import { ShopifyProduct } from '@/lib/shopify-types'

interface ShopifyResponse {
  products: {
    edges: Array<{
      node: {
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
    }>
  }
}

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
      products(first: 100) {
        edges {
          node {
            id
            handle
            title
            description
            createdAt
            tags
            images(first: 10) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                  compareAtPrice {
                    amount
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await shopifyClient.request<ShopifyResponse>(query)
    
    return {
      products: {
        edges: response.products.edges.map(({ node }) => ({
          node: {
            id: node.id,
            handle: node.handle,
            title: node.title,
            description: node.description,
            createdAt: node.createdAt,
            tags: node.tags,
            images: node.images,
            variants: node.variants
          }
        }))
      }
    }
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