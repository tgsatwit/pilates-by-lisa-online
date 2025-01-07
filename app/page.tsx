import Hero from "@/components/pbl-hero";
import { PBLValue } from "@/components/pbl-value";
import { TestimonialsSection } from "@/components/pbl-testimonials-section";
import FeaturesPBLVariety from "@/components/pbl-features-variety";
import PBLApp from "@/components/pbl-app";
import PBLPrograms from "@/components/pbl-programs";
import PBLAppFeatures from "@/components/pbl-app-features";
import LisaSection from "@/components/pbl-lisa-section";
import { FreeWorkoutSection } from "@/components/pbl-free-workout-section";
import PBLPricing from "@/components/pbl-pricing";
import { PBLFAQSection } from "@/components/pbl-faq-section";
import { PBLCTASection } from "@/components/pbl-cta-section";



export const metadata = {
  title: "Online Pilates Classes | Pilates by Lisa",
  description:
    "Join our global community and experience world-class Pilates classes from anywhere. Start your transformation journey today.",
  keywords: "pilates, online fitness, wellness, workout, exercise, health",
};

export default function Home() {
  return (
    <>
      <Hero data-aos="fade-up" data-aos-delay="50" />
      <PBLValue data-aos="fade-up" data-aos-delay="100" />
      <TestimonialsSection data-aos="fade-up" data-aos-delay="150" />
      <FeaturesPBLVariety data-aos="fade-up" data-aos-delay="200" />
      <PBLAppFeatures data-aos="fade-up" data-aos-delay="250" />
      <PBLApp data-aos="fade-up" data-aos-delay="300" />
      <PBLPrograms data-aos="fade-up" data-aos-delay="350" />
      <LisaSection data-aos="fade-up" data-aos-delay="400" />
      <PBLPricing data-aos="fade-up" data-aos-delay="450" />
      <FreeWorkoutSection data-aos="fade-up" data-aos-delay="500" />
      <PBLFAQSection data-aos="fade-up" data-aos-delay="550" />
      <PBLCTASection data-aos="fade-up" data-aos-delay="600" />
    </>
  );
}