import Hero from "@/components/landing/hero"
import { TestimonialsSection } from "@/components/testimonials-section"
import FeaturesPBLVariety from "@/components/features-pbl-variety"
import { LisaSection } from "@/components/lisa-section"
import { FreeWorkoutSection } from "@/components/free-workout-section"
import PBLPricing from '@/components/pbl-pricing'
import { PBLFAQSection } from "@/components/pbl-faq-section"
import { PBLCTASection } from "@/components/pbl-cta-section"



import { FeatureTabs } from "@/components/feature-tabs" 
import { FeatureHighlight } from "@/components/feature-highlight"
import { BenefitsSection } from "@/components/benefits-section"
import { MobileAppSection } from "@/components/mobile-app-section"

import Features04 from "@/components/landing/features-04"
import Features03 from "@/components/landing/features-03"
import Features02 from "@/components/landing/features-02"
import FeaturesHome from "@/components/landing/features-home"
import FeaturesHome02 from "@/components/landing/features-home-02"
import Explainer from "@/components/landing/explainer"
import TestimonialsCarousel from "@/components/landing/testimonials-carousel"
import Section01 from '@/components/section-01'
import Section02 from '@/components/section-02'
import Section03 from '@/components/section-03'
import Section04 from '@/components/section-04'
import Section05 from '@/components/section-05'
import Section06 from '@/components/section-06'
import Faqs from '@/components/faqs'
//import Cta2 from '@/components/cta' //Removed duplicate import



export const metadata = {
  title: 'Pilates by Lisa | Transform Your Practice',
  description: 'Join our global community and experience world-class Pilates classes from anywhere. Start your transformation journey today.',
  keywords: 'pilates, online fitness, wellness, workout, exercise, health',
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TestimonialsSection />
      <FeaturesPBLVariety />
      <LisaSection /> 
      <FreeWorkoutSection />  
      <PBLPricing />
      <PBLFAQSection />
      <PBLCTASection />

      <FeatureTabs />
      <BenefitsSection />
      <MobileAppSection />
      <FeatureHighlight />
      <FeaturesHome />
      <FeaturesHome02 />
      <Features02 />
      <Features03 />
      <TestimonialsCarousel />  
      <Features04 />
      <Explainer />
      <Section01 /> 
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Faqs />
    </div>
  )
}