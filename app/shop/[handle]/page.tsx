"use client"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/components/cart/cart-context"
import { motion } from "framer-motion"
import { ShopifyProduct } from "@/lib/utils"

async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  // This would typically be an API call to Shopify
  // For now, return mock data
  return {
    id: "1",
    handle: "pilates-resistance-band",
    title: "Premium Pilates Resistance Band",
    description: "High-quality resistance band perfect for enhancing your Pilates practice.",
    price: 29.99,
    compareAtPrice: 39.99,
    images: [
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
        altText: "Pilates Resistance Band"
      }
    ],
    tags: ["Equipment", "Accessories"],
    isNew: true,
    isSale: true,
    currencyCode: "USD"
  }
}

export default function ProductPage({ params }: { params: { handle: string } }) {
  const [product, setProduct] = useState<ShopifyProduct | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { addItem } = useCart()

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProduct(params.handle)
        if (!data) {
          notFound()
        }
        setProduct(data)
      } catch (error) {
        console.error("Error loading product:", error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    loadProduct()
  }, [params.handle])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pt-32 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  const discount = product.compareAtPrice 
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : null

  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src={product.images[0].url}
              alt={product.images[0].altText || product.title}
              fill
              className="object-cover"
              priority
            />
            {/* Product badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-primary text-white">New</Badge>
              )}
              {discount && (
                <Badge className="bg-destructive text-white">
                  {discount}% Off
                </Badge>
              )}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold">
                {formatPrice(product.price, product.currencyCode)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice, product.currencyCode)}
                </span>
              )}
            </div>

            <div className="prose prose-purple max-w-none mb-8">
              <p>{product.description}</p>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              onClick={() => addItem(product)}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}