"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2 } from "lucide-react"
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
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Shopping Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-1 pr-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative aspect-square h-24 w-24 min-w-fit overflow-hidden rounded-lg border">
                      <Image
                        src={item.images[0].url}
                        alt={item.images[0].altText || item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <select
                          className="h-8 w-16 rounded-md border border-input bg-background px-2 text-sm"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        >
                          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">
                          {formatPrice(item.price * item.quantity, item.currencyCode)}
                        </span>
                        {item.compareAtPrice && (
                          <span className="text-sm text-muted-foreground line-through">
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
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal, 'USD')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{formatPrice(shipping, 'USD')}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(total, 'USD')}</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-3">
                <Button className="w-full" size="lg" onClick={() => window.location.href = '/checkout'}>
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => window.location.href = '/cart'}
                >
                  View Cart
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            <span className="text-lg font-medium">Your cart is empty</span>
            <Button
              variant="link"
              className="text-sm text-muted-foreground"
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