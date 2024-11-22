"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { formatPrice, type ShopifyProduct } from '@/lib/utils';
import { useCart } from '@/contexts/cart-context';
import { createCheckout } from '@/lib/shopify';

interface ProductDetailsProps {
  product: ShopifyProduct;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(product.images.edges[0]?.node);
  const [isLoading, setIsLoading] = useState(false);
  const variant = product.variants.edges[0]?.node;
  const { addItem } = useCart();

  const handleBuyNow = async () => {
    try {
      setIsLoading(true);
      if (!variant?.id) throw new Error('No variant ID found');
      
      const checkout = await createCheckout(variant.id, 1);
      if (checkout?.webUrl) {
        window.location.href = checkout.webUrl;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error creating checkout:', error);
      alert('Failed to create checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="aspect-square relative rounded-lg overflow-hidden">
          {selectedImage && (
            <Image
              src={selectedImage.url}
              alt={selectedImage.altText || product.title}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="grid grid-cols-5 gap-2">
          {product.images.edges.map(({ node: image }) => (
            <button
              key={image.url}
              onClick={() => setSelectedImage(image)}
              className="aspect-square relative rounded-md overflow-hidden"
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
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        {variant?.price && (
          <p className="text-2xl font-semibold mb-6">
            {formatPrice(parseFloat(variant.price.amount), variant.price.currencyCode)}
          </p>
        )}
        <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: product.description }} />
        <div className="flex gap-4">
          <Button size="lg" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button size="lg" onClick={handleBuyNow} disabled={isLoading}>
            {isLoading ? 'Creating Checkout...' : 'Buy Now'}
          </Button>
        </div>
      </div>
    </div>
  );
}