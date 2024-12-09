export const metadata = {
  title: 'Pricing - Stellar',
  description: 'Page description',
}

import PricingSection from './pricing-section'
import Features from '@/components/landing/features-05'
import Customers from '@/components/landing/customers'
import Faqs from '@/components/landing/faqs'
import Cta from '@/components/landing/cta'

export default function Pricing() {
  return (
    <>
      <PricingSection />
      <Features />
      <Customers />
      <Faqs />
      <Cta />
    </>
  )
}
