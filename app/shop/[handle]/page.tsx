"use client"

import { useEffect, useState, use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { formatPrice, cn } from "@/lib/utils"
import { useCart } from "@/components/cart/cart-context"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getProductByHandle } from "@/lib/shopify"
import { Product } from "@/types/index"
import { transformToCartProduct } from '@/lib/transforms'

interface ProductPageProps {
  params: Promise<{ handle: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params)
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta))
  }

  const handleAddToCart = () => {
    if (product) {
      const cartProduct = transformToCartProduct(product)
      addToCart(cartProduct, quantity)
      setQuantity(1)
    }
  }

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductByHandle(resolvedParams.handle)
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
  }, [resolvedParams.handle])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-100">
        <div className="min-h-screen mt-24 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
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
    <div className="bg-slate-100 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link 
                href="/shop" 
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                Shop
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="text-gray-900 font-medium">
              {product.title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.images[currentImageIndex].url}
                alt={product.images[currentImageIndex].altText || product.title}
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
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={image.url}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "relative aspect-square rounded-md overflow-hidden bg-gray-100",
                      "ring-2 ring-offset-2 transition-all",
                      currentImageIndex === index 
                        ? "ring-primary" 
                        : "ring-transparent hover:ring-gray-300"
                    )}
                  >
                    <Image
                      src={image.url}
                      alt={image.altText || product.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag: string) => (
                <Badge 
                  key={tag} 
                  variant="outline"
                  className="border-slate-300 text-gray-700"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.title}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price, product.currencyCode)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(product.compareAtPrice, product.currencyCode)}
                </span>
              )}
            </div>

            {/* Quantity Selector and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-start border rounded-lg overflow-hidden">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-slate-900" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center text-slate-900">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-slate-500" />
                </button>
              </div>
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            <div 
              className="prose prose-gray max-w-none [&>*]:text-gray-600 prose-headings:text-gray-900 prose-strong:text-gray-900 prose-a:text-primary hover:prose-a:text-primary/80 prose-ul:list-disc prose-ol:list-decimal"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}