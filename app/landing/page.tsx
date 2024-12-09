export const metadata = {
  title: 'Online Pilates & Reformer Classes | Pilates by Lisa',
  description: 'Page description',
}

import Hero from '@/components/landing/hero'
import Clients from '@/components/landing/clients'
import Features from '@/components/landing/features'
import Features02 from '@/components/landing/features-02'
import Features03 from '@/components/landing/features-03'
import TestimonialsCarousel from '@/components/landing/testimonials-carousel'
import Features04 from '@/components/landing/features-04'
import Pricing from './pricing-section'
import Testimonials from '@/components/landing/testimonials'
import Cta from '@/components/landing/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Features02 />
      <Features03 />
      <TestimonialsCarousel />
      <Features04 />
      <Pricing />
      <Testimonials />
      <Cta />
    </>
  )
}
