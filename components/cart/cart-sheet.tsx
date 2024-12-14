"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2, Plus, Minus, Loader2, X } from "lucide-react"
import Image from "next/image"
import { useCart } from "./cart-context"
import { formatPrice } from "@/lib/utils"
import type { CartItem } from "@/lib/types"
import { useState } from "react"
import { createCheckout, getProductVariant } from "@/lib/shopify"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export function CartSheet() {
  const { items, state, removeFromCart, updateQuantity } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  
  const itemCount = items.reduce((total: number, item: CartItem) => total + item.quantity, 0)
  const subtotal = state.total
  const shipping = 0
  const total = subtotal + shipping

  const handleCheckout = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Get variant IDs for all items
      const checkoutItems = await Promise.all(
        items.map(async (item) => {
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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-slate-300 hover:text-white">
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90vw] sm:w-[400px] bg-white">
        <div className="flex items-center justify-between pr-4">
          <SheetHeader className="space-y-2.5 pb-2">
            <SheetTitle className="text-2xl font-bold text-gray-900">Cart ({itemCount})</SheetTitle>
          </SheetHeader>
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500">
              <X className="h-5 w-5" />
              <span className="sr-only">Close cart</span>
            </Button>
          </SheetClose>
        </div>
        <Separator className="mb-5" />
        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-1 pr-4 -mr-4">
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative aspect-square w-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={item.images[0].url}
                        alt={item.images[0].altText || item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex items-center border rounded-md overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 transition-colors text-gray-600"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 py-1 min-w-[2.5rem] text-center text-sm text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 transition-colors text-gray-600"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="h-7 w-7 text-gray-500 hover:text-gray-700"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-medium text-gray-900 text-sm">
                          {formatPrice(item.price * item.quantity, item.currencyCode)}
                        </span>
                        {item.compareAtPrice && (
                          <span className="text-xs text-gray-500 line-through">
                            {formatPrice(item.compareAtPrice * item.quantity, item.currencyCode)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="pt-4">
              <Separator className="mb-4" />
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">
                    {formatPrice(subtotal, items[0].currencyCode)}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-gray-900 pt-3 border-t">
                  <span>Total</span>
                  <span>{formatPrice(total, items[0].currencyCode)}</span>
                </div>
              </div>
              <Separator className="my-4" />
              {error && (
                <div className="p-3 mb-4 bg-red-50 text-red-600 rounded-md text-sm">
                  {error}
                </div>
              )}
              <div className="space-y-2.5">
                <Button 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 mb-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" 
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
                    'Checkout'
                  )}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-200 text-gray-900 hover:text-gray-900 hover:bg-gray-100 font-medium py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  size="default"
                  onClick={() => router.push('/shop')}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2.5">
            <ShoppingCart className="h-12 w-12 text-gray-400" />
            <span className="text-base font-medium text-gray-900">Your cart is empty</span>
            <Button
              variant="link"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => router.push('/shop')}
            >
              Continue shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
} 