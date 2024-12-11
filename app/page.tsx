import Hero from "@/components/landing/hero"
import { FeatureTabs } from "@/components/feature-tabs" 
import { FeatureHighlight } from "@/components/feature-highlight"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LisaSection } from "@/components/lisa-section"
import { MobileAppSection } from "@/components/mobile-app-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { FreeWorkoutSection } from "@/components/free-workout-section"
import Features04 from "@/components/landing/features-04"
import Features03 from "@/components/landing/features-03"
import Features02 from "@/components/landing/features-02"
import FeaturesHome from "@/components/landing/features-home"
import FeaturesHome02 from "@/components/landing/features-home-02"
import Explainer from "@/components/landing/explainer"
import Features001 from "@/components/landing/features-001"
import TestimonialsCarousel from "@/components/landing/testimonials-carousel"
import Testimonials from "@/components/landing/testimonials"
import Cta from "@/components/landing/cta"
import Pricing from "./landing/pricing-section"

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
      <FeatureTabs />
      <BenefitsSection />
      <MobileAppSection />
      <FeatureHighlight />
      <LisaSection />      
      <PricingSection />
      <FeaturesHome />
      <Features001 />
      <FeaturesHome02 />
      <Features02 />
      <Features03 />
      <TestimonialsCarousel />  
      <Features04 />
      <Pricing />
      <Testimonials />
      <Cta />
      <FreeWorkoutSection />        
      <Explainer />
      <FaqSection />
      <CtaSection />
    </div>
  )
}