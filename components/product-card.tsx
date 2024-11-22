import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { formatPrice, type ShopifyProduct } from '@/lib/utils';

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;

  return (
    <Link href={`/shop/${product.handle}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-4">
          <div className="aspect-square relative mb-4">
            {image && (
              <Image
                src={image.url}
                alt={image.altText || product.title}
                fill
                className="object-cover rounded-md"
              />
            )}
          </div>
          <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="font-semibold">
            {formatPrice(parseFloat(price.amount), price.currencyCode)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}