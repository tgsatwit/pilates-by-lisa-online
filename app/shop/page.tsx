"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/shop/product-card"
import { cn } from "@/lib/utils"
import { getAllProducts } from "@/lib/shopify"
import { useQuery } from "@tanstack/react-query"
import { useCart } from "@/components/cart/cart-context"
import { ShopifyProduct as Product } from "@/lib/shopify-types"

const PRODUCTS_PER_PAGE = 6

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { items, addToCart } = useCart()

  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: getAllProducts
  })

  const availableCategories = useMemo(() => {
    const uniqueTags = new Set<string>(["All"])

    products.forEach((product) => {
      product.tags?.forEach((tag) => uniqueTags.add(tag))
    })

    return Array.from(uniqueTags)
  }, [products])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (!product) return false
      
      const matchesCategory = selectedCategory === "All" || 
        product.tags?.some(tag => tag === selectedCategory)
      const matchesSearch = searchQuery === "" || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.descriptionHtml.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [products, selectedCategory, searchQuery])

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  if (isLoading) {
    return (
      <div className="bg-slate-100">
        <div className="mt-24 flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-slate-100">
        <div className="mt-24 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Error loading products</h2>
            <p className="text-gray-500">Please try again later</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-100 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            PBL Shop
          </h1>
          <p className="text-lg text-gray-600">
            Premium Pilates equipment and accessories to enhance your practice
          </p>
        </div>


        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-16">
          {availableCategories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className={cn(
                "cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-gray-900 hover:text-white border-2 text-gray-700 font-medium rounded-full",
                selectedCategory === category 
                  ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                  : "border-slate-300 hover:border-slate-900"
              )}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          layout
        >
          {paginatedProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              No products found matching your criteria
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900"
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "min-w-[40px] border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900",
                  currentPage === page 
                    ? "bg-slate-900 text-white hover:bg-slate-800 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}