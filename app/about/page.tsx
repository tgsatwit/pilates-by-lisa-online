import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Award, Heart, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80"
            alt="Lisa teaching Pilates"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Lisa
          </h1>
          <p className="text-xl max-w-2xl">
            Certified Pilates instructor with over 12 years of experience in transforming lives through movement.
          </p>
        </div>
      </section>

      {/* Rest of the content remains the same */}
    </div>
  );
}