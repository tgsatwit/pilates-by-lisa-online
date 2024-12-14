import Hero from "@/components/pbl-hero"
import { PBLValue } from "@/components/pbl-value"
import { TestimonialsSection } from "@/components/testimonials-section"
import FeaturesPBLVariety from "@/components/pbl-features-variety"
import { PBLPrograms } from "@/components/pbl-programs"
import { PBLAppFeatures } from "@/components/pbl-app-features"
import { LisaSection } from "@/components/pbl-lisa-section"
import { FreeWorkoutSection } from "@/components/pbl-free-workout-section"
import PBLPricing from '@/components/pbl-pricing'
import { PBLFAQSection } from "@/components/pbl-faq-section"
import { PBLCTASection } from "@/components/pbl-cta-section"

export const metadata = {
  title: 'Pilates by Lisa | Transform Your Practice',
  description: 'Join our global community and experience world-class Pilates classes from anywhere. Start your transformation journey today.',
  keywords: 'pilates, online fitness, wellness, workout, exercise, health',
}

export default function Home() {
  return (
    <>
      <Hero />
      <PBLValue />
      <TestimonialsSection />
      <FeaturesPBLVariety />
      <PBLPrograms />
      <PBLAppFeatures />
      <LisaSection /> 
      <FreeWorkoutSection />  
      <PBLPricing />
      <PBLFAQSection />
      <PBLCTASection />
    </>
  )
}