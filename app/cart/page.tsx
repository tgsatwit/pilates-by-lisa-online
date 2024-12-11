"use client"

import { useCart } from '@/components/cart/cart-context';
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CartPage() {
  const { state, removeFromCart, updateQuantity } = useCart()

  if (state.items.length === 0) {
    return (
      <div className="bg-slate-100 pb-12">
        <div className="max-w-7xl mx-auto bg-slate-100 px-4 sm:px-6 lg:px-8 py-8 mt-24">
          <div className="text-center max-w-2xl mx-auto bg-slate-100">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-gray-400" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-gray-600 mb-8">
              Start shopping to add items to your cart
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
    <div className="bg-slate-100 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Shopping Cart</h1>
          <p className="text-lg text-gray-600">
            Review your items before checkout
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {state.items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-6 items-start p-6 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <div className="relative aspect-square w-32 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src={item.images[0].url}
                    alt={item.images[0].altText || item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-2 hover:bg-gray-100 transition-colors text-gray-600"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 min-w-[3rem] text-center text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors text-gray-600"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-semibold text-gray-900">
                        {formatPrice(item.price * item.quantity, item.currencyCode)}
                      </span>
                      {item.compareAtPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(item.compareAtPrice * item.quantity, item.currencyCode)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">
                  {formatPrice(state.total, state.items[0]?.currencyCode || 'USD')}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-gray-900">Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-gray-900 pt-3 border-t">
                <span>Total</span>
                <span>{formatPrice(state.total, state.items[0]?.currencyCode || 'USD')}</span>
              </div>
            </div>
            <div className="space-y-3">
              <Button 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" 
                size="lg"
                onClick={() => window.location.href = '/checkout'}
              >
                Proceed to Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-200 text-gray-900 hover:text-gray-900 hover:bg-gray-100 font-medium py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                size="lg"
                onClick={() => window.location.href = '/shop'}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}