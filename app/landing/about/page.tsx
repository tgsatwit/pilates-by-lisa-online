export const metadata = {
  title: 'About - Stellar',
  description: 'Page description',
}

import Hero from '@/components/landing/hero-about'
import Story from '@/components/landing/story'
import Team from '@/components/landing/team'
import Recruitment from '@/components/landing/recruitment'
import Testimonials from '@/components/landing/testimonials-02'
import Cta from '@/components/landing/cta-02'

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <Team />
      <Recruitment />
      <Testimonials />
      <Cta />
    </>
  )
}
