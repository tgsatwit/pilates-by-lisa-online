"use client"

import { useEffect, useState } from "react"
import { useCart } from "@/components/cart/cart-context"
import type { CartItem } from '@/types/index';
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, ArrowLeft, Loader2 } from "lucide-react"
import { createCheckout, getProductVariant } from "@/lib/shopify"

export default function CheckoutPage() {
  const { state, items } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Get variant IDs for all items
      const checkoutItems = await Promise.all(
        items.map(async (item: CartItem) => {
          const variantId = await getProductVariant(item.handle)
          if (!variantId) {
            throw new Error(`Could not find variant for product: ${item.title}`)
          }
          return {
            variantId,
            quantity: item.quantity
          }
        })
      )

      // Create checkout
      const checkout = await createCheckout(checkoutItems)
      
      // Redirect to Shopify checkout
      window.location.href = checkout.webUrl

    } catch (err) {
      console.error('Checkout error:', err)
      setError('There was an error creating your checkout. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-gray-400" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-gray-600 mb-8">
              Add some items to your cart before proceeding to checkout
            </p>
            <Link href="/shop">
              <Button 
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Checkout</h1>
            <p className="text-lg text-gray-600">
              Review your order before proceeding to payment
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-6">
                {items.map((item: CartItem) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4"
                  >
                    <div className="relative aspect-square w-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={item.images[0].url}
                        alt={item.images[0].altText || item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-medium text-gray-900">
                          {formatPrice(item.price * item.quantity, item.currencyCode)}
                        </span>
                        {item.compareAtPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(item.compareAtPrice * item.quantity, item.currencyCode)}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">
                    {formatPrice(state.total, items[0].currencyCode)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">Calculated at next step</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-900 pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span>{formatPrice(state.total, items[0].currencyCode)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-lg mb-4">
                {error}
              </div>
            )}
            <Button 
              className="w-full bg-slate-900 hover:bg-slate-800 text-white" 
              size="lg"
              onClick={handleCheckout}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Creating Checkout...
                </>
              ) : (
                'Proceed to Payment'
              )}
            </Button>
            <Link href="/cart">
              <Button
                variant="outline"
                className="w-full border-gray-200 text-gray-900 hover:bg-gray-100"
                size="lg"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 