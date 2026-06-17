import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import DoctorSection from '@/components/sections/DoctorSection'
import ConditionsSection from '@/components/sections/ConditionsSection'
import BeforeAfterSection from '@/components/sections/BeforeAfterSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import TimingsSection from '@/components/sections/TimingsSection'
import FAQSection from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Best Physiotherapy Clinic in Bhubaneswar | Vautika Physiotherapy',
  description:
    'Vautika Physiotherapy & Rehabilitation Centre — Expert physiotherapy, sports rehab, pain management & neuro rehab in Bhubaneswar. Dr. Satya Mohanty (PT), MPT (MSK), FIFA Sports Medicine. Book appointment: 7381455744.',
  alternates: {
    canonical: 'https://vautika.github.io/website',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <DoctorSection />
      <ConditionsSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <TimingsSection />
      <FAQSection />
    </>
  )
}
