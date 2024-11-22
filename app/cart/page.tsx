"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CartPage() {
  const { state, removeItem, updateQuantity, clearCart } = useCart()

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your cart is empty. Start shopping to add items to your cart.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-12">Your Cart</h1>

          <div className="space-y-8">
            {state.items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-6 py-6 border-b"
              >
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {formatPrice(item.price, item.currencyCode)}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive/90"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    {formatPrice(item.price * item.quantity, item.currencyCode)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 border-t pt-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold">
                {formatPrice(state.total, state.items[0]?.currencyCode || 'USD')}
              </span>
            </div>

            <div className="flex gap-4 justify-end">
              <Button
                variant="outline"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => {
                  // Handle checkout
                }}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}