import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Providers } from './providers'
import './globals.css'
import { CartProvider } from "@/components/cart/cart-context"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pilates by Lisa | Transform Your Practice',
  description: 'Join our global community and experience world-class Pilates classes from anywhere. Start your transformation journey today.',
  keywords: 'pilates, online fitness, wellness, workout, exercise, health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CartProvider>
          <Providers>
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
        </CartProvider>
      </body>
    </html>
  )
}