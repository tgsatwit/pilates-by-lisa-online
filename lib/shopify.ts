import { GraphQLClient } from 'graphql-request'
import { ShopifyProductResponse, ShopifyProductsResponse } from '@/lib/shopify-types'
import { transformShopifyProduct } from './transforms'
import { Product } from '@/types'

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

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const query = `
    query ProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        handle
        title
        description
        descriptionHtml
        createdAt
        tags
        images(first: 10) {
          edges {
            node {
              url
              altText
              width
              height
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
  `

  try {
    const response = await shopifyClient.request<ShopifyProductResponse>(query, { handle })
    return transformShopifyProduct(response.product)
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function getAllProducts(): Promise<Product[]> {
  const query = `
    query Products {
      products(first: 100) {
        edges {
          node {
            id
            handle
            title
            description
            descriptionHtml
            createdAt
            tags
            images(first: 10) {
              edges {
                node {
                  url
                  altText
                  width
                  height
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
    const response = await shopifyClient.request<ShopifyProductsResponse>(query)
    
    return response.products.edges
      .map(({ node }) => transformShopifyProduct(node))
      .filter((product): product is Product => product !== null)
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}