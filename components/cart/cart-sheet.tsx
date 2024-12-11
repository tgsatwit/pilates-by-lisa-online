"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import Image from "next/image"
import { useCart } from "./cart-context"
import { formatPrice } from "@/lib/utils"
import { CartItem } from "@/types"

export function CartSheet() {
  const { items, state, removeFromCart, updateQuantity } = useCart()
  const itemCount = items.reduce((total: number, item: CartItem) => total + item.quantity, 0)
  const subtotal = state.total
  const shipping = 0
  const total = subtotal + shipping

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg bg-white">
        <SheetHeader className="px-1">
          <SheetTitle className="text-2xl font-bold text-gray-900">Shopping Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-1 pr-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative aspect-square h-24 w-24 min-w-fit overflow-hidden rounded-lg border bg-gray-100">
                      <Image
                        src={item.images[0].url}
                        alt={item.images[0].altText || item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
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
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">
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
                ))}
              </div>
            </ScrollArea>
            <div className="pr-6">
              <Separator className="my-4" />
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">{formatPrice(subtotal, 'USD')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">{formatPrice(shipping, 'USD')}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total</span>
                  <span>{formatPrice(total, 'USD')}</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-3">
                <Button 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white" 
                  size="lg" 
                  onClick={() => window.location.href = '/checkout'}
                >
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-200 text-gray-900 hover:bg-gray-100"
                  size="lg"
                  onClick={() => window.location.href = '/cart'}
                >
                  View Cart
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-3">
            <ShoppingCart className="h-12 w-12 text-gray-400" />
            <span className="text-lg font-medium text-gray-900">Your cart is empty</span>
            <Button
              variant="link"
              className="text-sm text-gray-600 hover:text-gray-900"
              onClick={() => window.location.href = '/shop'}
            >
              Continue shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
} 