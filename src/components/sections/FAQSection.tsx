'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is physiotherapy and how does it help?',
    a: 'Physiotherapy is a healthcare profession that helps people restore movement and function when affected by injury, illness, or disability. Through exercise, manual therapy, and education, physiotherapists help patients manage pain, improve mobility, and prevent future injuries.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'The number of sessions varies depending on your condition, severity, and individual response to treatment. Most acute conditions improve in 6–10 sessions, while chronic conditions or post-surgical rehab may require 12–20 sessions. Dr. Mohanty will assess your condition and provide a personalized treatment plan.',
  },
  {
    q: 'Do I need a doctor\'s referral to visit Vautika Physiotherapy?',
    a: 'No, you do not need a referral to visit us. You can book an appointment directly. However, if you have recent reports, X-rays, or MRI scans, please bring them as they help in accurate assessment.',
  },
  {
    q: 'What conditions do you treat at Vautika Physiotherapy?',
    a: 'We treat a wide range of conditions including back pain, neck pain, knee pain, shoulder pain, frozen shoulder, sciatica, arthritis, sports injuries, post-surgical rehabilitation, neurological conditions (stroke, Parkinson\'s), and much more. We also offer home visits and online virtual sessions.',

  },
  {
    q: 'What makes Vautika Physiotherapy different from other clinics?',
    a: 'Our clinic is led by Dr. Satya Mohanty (PT), who holds an MPT in Musculoskeletal Physiotherapy and a prestigious Diploma in Sports Medicine from FIFA. We use advanced equipment including laser therapy and electrotherapy, follow evidence-based treatment protocols, and provide truly personalized care.',
  },
  {
    q: 'Is physiotherapy painful?',
    a: 'Good physiotherapy should not be unnecessarily painful. Some techniques may cause mild discomfort, especially in the early stages, but this is managed carefully. We always work within your pain threshold and communicate clearly throughout the treatment.',
  },
  {
    q: 'What are your clinic timings?',
    a: 'We are open Monday to Saturday from 9:00 AM to 9:00 PM, and on Sundays from 8:00 AM to 1:00 PM. You can book an appointment online, by phone, or via WhatsApp.',
  },
  {
    q: 'Do you offer sports rehabilitation for athletes?',
    a: 'Yes! Dr. Mohanty holds a FIFA Diploma in Sports Medicine, making him uniquely qualified to treat sports injuries and design return-to-sport programs. We work with athletes across all sports and fitness levels.',
  },
  {
    q: 'Do you provide home visits?',
    a: 'Please contact us directly at 7381455744 or WhatsApp us to inquire about home visit availability for patients who cannot travel to the clinic.',
  },
  {
    q: 'How can I book an appointment?',
    a: 'You can book an appointment through our online booking form on this website, by calling us at 7381455744, or via WhatsApp. Our team will confirm your appointment promptly.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-padding bg-clinical-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge mb-4">
              FAQs
            </span>
            <h2 className="section-title mb-4">
              Frequently Asked <span className="font-medium italic text-secondary-700">Questions</span>
            </h2>
            <p className="section-subtitle mb-8 text-left">
              Have questions about physiotherapy or our clinic? Find answers to the most common queries below.
            </p>

            {/* Contact prompt */}
            <div className="bg-slate-50 border border-stone-200/50 rounded-2xl p-6">
              <h3 className="font-display font-bold text-primary-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                Our team is happy to answer any questions you might have about physiotherapy or your specific condition.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="tel:+917381455744" className="btn-primary text-sm py-2.5 px-5 rounded-xl">
                  Call Us
                </a>
                <a
                  href="https://wa.me/917381455744?text=Hello%20Vautika%20Team%2C%20I%20have%20a%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-2.5 px-5 rounded-xl"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="border border-stone-200/50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-[#FAFAF9] hover:bg-slate-50 transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="font-display font-bold text-primary-900 text-sm">
                    {q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-primary-900 shrink-0 transition-transform duration-300 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 py-4 bg-white border-t border-stone-100">
                    <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
