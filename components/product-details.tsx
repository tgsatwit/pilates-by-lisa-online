"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import type { ShopifyProduct } from '@/lib/shopify-types';
import { useCart } from '@/components/cart/cart-context';

interface ProductDetailsProps {
  product: ShopifyProduct;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();

  const handleBuyNow = async () => {
    try {
      setIsLoading(true);
      // Implement checkout logic here
      window.location.href = `/checkout?product=${product.id}`;
    } catch (error) {
      console.error('Error creating checkout:', error);
      alert('Failed to create checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
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
          {product.images.map((image) => (
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
        <div className="flex items-center gap-4 mb-6">
          <span className="text-2xl font-semibold">
            {formatPrice(product.price, product.currencyCode)}
          </span>
          {product.compareAtPrice && (
            <span className="text-lg text-gray-500 line-through">
              {formatPrice(product.compareAtPrice, product.currencyCode)}
            </span>
          )}
        </div>
        <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: product.description }} />
        <div className="flex gap-4">
          <Button size="lg" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button size="lg" onClick={handleBuyNow} disabled={isLoading} variant="outline">
            {isLoading ? 'Creating Checkout...' : 'Buy Now'}
          </Button>
        </div>
      </div>
    </div>
  );
}