import { HeroSection } from "@/components/hero-section"
import { FeatureTabs } from "@/components/feature-tabs"
import { FeatureHighlight } from "@/components/feature-highlight"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LisaSection } from "@/components/lisa-section"
import { MobileAppSection } from "@/components/mobile-app-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { FreeWorkoutSection } from "@/components/free-workout-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TestimonialsSection />
      <FeatureTabs />
      <BenefitsSection />
      <MobileAppSection />
      <FeatureHighlight />
      <LisaSection />      
      <PricingSection />
      <FreeWorkoutSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}