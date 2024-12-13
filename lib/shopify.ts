import { GraphQLClient } from 'graphql-request'
import { 
  ShopifyProductResponse, 
  ShopifyProductsResponse, 
  ShopifyCheckoutResponse,
  ShopifyVariantResponse
} from '@/lib/shopify-types'
import { transformShopifyProduct } from './transforms'
import { Product } from '@/types/index'

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
    if (response.product) {
      const transformedProduct = transformShopifyProduct({
        ...response.product,
        price: parseFloat(response.product.variants?.edges[0]?.node?.price?.amount || '0'),
        compareAtPrice: response.product.variants?.edges[0]?.node?.compareAtPrice?.amount 
          ? parseFloat(response.product.variants?.edges[0]?.node?.compareAtPrice?.amount)
          : null,
        currencyCode: response.product.variants?.edges[0]?.node?.price?.currencyCode || 'USD',
        images: response.product.images?.edges.map(edge => ({
          url: edge.node.url,
          altText: edge.node.altText,
          width: edge.node.width,
          height: edge.node.height
        })) || []
      })
      if (transformedProduct) {
        return {
          ...transformedProduct,
          isNew: transformedProduct.isNew ?? false,
          price: transformedProduct.price || 0,
          compareAtPrice: transformedProduct.compareAtPrice || null,
          currencyCode: transformedProduct.currencyCode || 'USD'
        } as Product
      }
    }
    return null
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
      .map(({ node }) => {
        if (node && node.variants && node.variants.edges.length > 0) {
          const transformedProduct = transformShopifyProduct({
            ...node,
            price: parseFloat(node.variants?.edges[0]?.node?.price?.amount || '0'),
            compareAtPrice: node.variants?.edges[0]?.node?.compareAtPrice?.amount 
              ? parseFloat(node.variants?.edges[0]?.node?.compareAtPrice?.amount)
              : null,
            currencyCode: node.variants?.edges[0]?.node?.price?.currencyCode || 'USD',
            images: node.images?.edges.map(edge => ({
              url: edge.node.url,
              altText: edge.node.altText,
              width: edge.node.width,
              height: edge.node.height
            })) || []
          })
          if (transformedProduct) {
            return {
              ...transformedProduct,
              isNew: transformedProduct.isNew ?? false,
              price: transformedProduct.price || 0,
              compareAtPrice: transformedProduct.compareAtPrice || null,
              currencyCode: transformedProduct.currencyCode || 'USD'
            } as Product
          }
        }
        return null
      })
      .filter((product): product is Product => product !== null)
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function createCheckout(items: Array<{ variantId: string; quantity: number }>) {
  const mutation = `
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
          totalPriceV2 {
            amount
            currencyCode
          }
          lineItems(first: 100) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `

  const variables = {
    input: {
      lineItems: items.map(item => ({
        variantId: item.variantId,
        quantity: item.quantity,
      })),
    },
  }

  try {
    const response = await shopifyClient.request<ShopifyCheckoutResponse>(mutation, variables)
    if (response.checkoutCreate.checkoutUserErrors.length > 0) {
      throw new Error(response.checkoutCreate.checkoutUserErrors[0].message)
    }
    return response.checkoutCreate.checkout
  } catch (error) {
    console.error('Error creating checkout:', error)
    throw error
  }
}

export async function getProductVariant(handle: string): Promise<string | null> {
  const query = `
    query getProductVariant($handle: String!) {
      product(handle: $handle) {
        variants(first: 1) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  `

  try {
    const response = await shopifyClient.request<ShopifyVariantResponse>(query, { handle })
    return response.product?.variants?.edges[0]?.node?.id || null
  } catch (error) {
    console.error('Error fetching product variant:', error)
    return null
  }
}