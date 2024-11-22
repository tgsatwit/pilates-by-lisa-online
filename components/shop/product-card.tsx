"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: {
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
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const discount = product.compareAtPrice 
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <Link href={`/shop/${product.handle}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.images[0].url}
            alt={product.images[0].altText || product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
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
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">
                {formatPrice(product.price, product.currencyCode)}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice, product.currencyCode)}
                </span>
              )}
            </div>
            <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}