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
import ContactFormSection from '@/components/sections/ContactFormSection'
import GallerySection from '@/components/sections/GallerySection'

export const metadata: Metadata = {
  title: 'Best Physiotherapy Clinic in Bhubaneswar | Vautika Physiotherapy',
  description:
    'Vautika Physiotherapy & Rehabilitation Centre — Expert physiotherapy, sports rehab, pain management & neuro rehab in Bhubaneswar. Dr. Satya Mohanty (PT), MPT (MSK), FIFA Sports Medicine. Book appointment: 7381455744.',
  alternates: {
    canonical: 'https://vautika.in',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />

      {/* Mid-page Contact Form — after Why Choose Us */}
      <section className="py-16 bg-clinical-sage">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">Get In Touch</span>
              <h2 className="section-title mb-4">
                Book Your <span className="font-medium italic text-secondary-700">Consultation</span> Today
              </h2>
              <p className="section-subtitle mb-6">
                Fill in your details and our team will call you back within 2 hours. You can also WhatsApp or call us directly.
              </p>
              <div className="space-y-3 text-sm text-slate-600">
                {[
                  '✅ Free initial phone consultation',
                  '✅ Home visits available across Bhubaneswar',
                  '✅ Online sessions for outstation patients',
                  '✅ Appointments 7 days a week',
                ].map(item => (
                  <p key={item} className="flex items-center gap-2">{item}</p>
                ))}
              </div>
            </div>
            <ContactFormSection
              title="Request a Callback"
              subtitle="We'll call you within 2 hours during clinic hours (9AM–9PM Mon–Sat)."
            />
          </div>
        </div>
      </section>

      <DoctorSection />
      <ConditionsSection />
      <BeforeAfterSection />
      <TestimonialsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Mid-page Contact Form — before FAQ */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-3xl">
          <ContactFormSection
            title="Still Have Questions? Talk to Us"
            subtitle="Our team is ready to help you with appointment booking, treatment queries, or anything else. Reach out now!"
            compact={false}
            className="shadow-elegant"
          />
        </div>
      </section>

      <TimingsSection />
      <FAQSection />
    </>
  )
}
