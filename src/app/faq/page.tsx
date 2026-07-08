'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { ChevronDown, Search, Phone, Calendar, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    name: 'General',
    emoji: '🏥',
    faqs: [
      {
        q: 'What is Vautika Physiotherapy & Rehabilitation Centre?',
        a: 'Vautika Physiotherapy is a premier clinical centre in Bhubaneswar, Odisha, dedicated to evidence-based physiotherapy, sports rehabilitation, neuro rehab, and pain management. Led by Dr. Satya Mohanty (MPT, FIFA Sports Medicine Diploma).',
      },
      {
        q: 'Where is Vautika Physiotherapy located?',
        a: 'We are located at Plot No - N2/19, Simpleekare, IRC Village, Nayapalli, Bhubaneswar, Odisha - 751015. Easily accessible from Nayapalli, IRC Village, and surrounding areas.',
      },
      {
        q: 'What are your clinic timings?',
        a: 'We are open Monday to Saturday from 9:00 AM to 9:00 PM, and Sunday from 8:00 AM to 1:00 PM. You can book appointments during these hours.',
      },
      {
        q: 'How can I book an appointment?',
        a: 'You can book via: (1) Our website appointment form, (2) WhatsApp at 7381455744, (3) Phone call at 7381455744, (4) Email at vautika.info@gmail.com. We recommend WhatsApp for quickest response.',
      },
      {
        q: 'Who is the lead physiotherapist at Vautika?',
        a: 'Dr. Satya Mohanty (PT) is our founder and lead physiotherapist. He holds an MPT in Musculoskeletal Physiotherapy and a prestigious FIFA Diploma in Sports Medicine — one of the highest credentials in sports rehabilitation worldwide.',
      },
    ],
  },
  {
    name: 'Treatments',
    emoji: '💊',
    faqs: [
      {
        q: 'What conditions do you treat?',
        a: 'We treat: Back Pain, Neck Pain, Knee Pain, Shoulder Pain, Frozen Shoulder, Sciatica, Arthritis, Sports Injuries, Post-Surgical Rehab, Stroke Rehabilitation, Parkinson\'s, Spinal Cord Injuries, Muscle Tears, Ligament Sprains, Tendinopathies, and many more.',
      },
      {
        q: 'Do you offer home visit physiotherapy?',
        a: 'Yes! Our Home Based Physiotherapy service brings expert care directly to your home. This is ideal for post-surgery patients, elderly individuals, or anyone with mobility restrictions. Book via WhatsApp or phone to schedule a home visit.',
      },
      {
        q: 'Do you offer online physiotherapy sessions?',
        a: 'Absolutely. Our One on One Virtual Rehabilitation service provides personalized video-based sessions with Dr. Mohanty. Perfect for patients outside Bhubaneswar, those with busy schedules, or for follow-up consultations after initial in-clinic visits.',
      },
      {
        q: 'How many sessions will I need?',
        a: 'This varies by condition. Acute injuries may resolve in 4–8 sessions. Chronic conditions or post-surgical rehab typically require 8–20+ sessions. Dr. Mohanty will give you a personalized assessment and treatment plan at your first visit.',
      },
      {
        q: 'Do you provide laser therapy?',
        a: 'Yes. We offer Low Level Laser Therapy (LLLT) which is effective for pain reduction, inflammation control, and tissue repair. It\'s a non-invasive, painless treatment used alongside other modalities.',
      },
      {
        q: 'What is dry needling / needling therapy?',
        a: 'Dry needling involves inserting thin needles into trigger points (tight muscle knots) to release tension and reduce pain. It is different from acupuncture in that it targets myofascial pain scientifically. Our therapist is trained in this technique.',
      },
    ],
  },
  {
    name: 'Pricing & Insurance',
    emoji: '💰',
    faqs: [
      {
        q: 'How much does a physiotherapy session cost?',
        a: 'Our fees are competitive and affordable. Please contact us at 7381455744 or WhatsApp for the latest fee structure. Costs vary by treatment type (in-clinic, home visit, or online session).',
      },
      {
        q: 'Do you accept health insurance?',
        a: 'Currently, we primarily accept cash, UPI, and card payments. Please contact us to discuss insurance-related queries as this may vary by your insurance provider.',
      },
      {
        q: 'Is the first consultation charged?',
        a: 'Please contact us directly for current consultation fee details. We offer a thorough initial assessment that forms the foundation of your personalized treatment plan.',
      },
      {
        q: 'Are home visits more expensive than clinic visits?',
        a: 'Yes, home visits have an additional travel charge that varies by distance. Please WhatsApp or call us for exact pricing based on your location.',
      },
    ],
  },
  {
    name: 'Online Physiotherapy',
    emoji: '💻',
    faqs: [
      {
        q: 'How does online physiotherapy work?',
        a: 'You book a session via WhatsApp or phone. We send you a secure video call link. During the session, Dr. Mohanty assesses your condition, guides you through exercises, and creates a personalized digital plan which is shared post-session.',
      },
      {
        q: 'Is online physiotherapy as effective as in-person?',
        a: 'For many musculoskeletal conditions (back pain, neck pain, shoulder pain, postural issues), clinical evidence shows online rehab delivers comparable outcomes. Some complex conditions or those requiring hands-on treatment may be best seen in person first.',
      },
      {
        q: 'What equipment do I need for online sessions?',
        a: 'A smartphone, tablet, or laptop with a camera and good internet connection is sufficient. For some exercises, a yoga mat or resistance band may be recommended — but we will tell you in advance.',
      },
      {
        q: 'Can I book online sessions if I am outside India?',
        a: 'Yes, we serve patients globally via our online consultation service. Book via WhatsApp (+91 7381455744) and we will coordinate a time that suits your timezone.',
      },
    ],
  },
  {
    name: 'Pre & Post Visit',
    emoji: '📋',
    faqs: [
      {
        q: 'What should I bring to my first appointment?',
        a: 'Bring any relevant medical reports (X-rays, MRI scans, blood tests), a list of current medications, your ID, and comfortable clothing that allows easy movement for the affected body part.',
      },
      {
        q: 'How long is each session?',
        a: 'Initial assessment sessions are typically 45–60 minutes. Follow-up treatment sessions are 30–45 minutes. Home visits may be slightly longer due to setup time.',
      },
      {
        q: 'Will the treatment be painful?',
        a: 'Some manual therapy techniques may cause mild discomfort, but most physiotherapy treatments are painless. Dr. Mohanty always works within your comfort level and explains every step of the treatment.',
      },
      {
        q: 'What should I do if I feel worse after a session?',
        a: 'It is normal to experience some soreness for 24-48 hours after a session, especially the first few. If pain significantly worsens or new symptoms appear, contact us immediately at 7381455744.',
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'bg-primary-50' : 'bg-white hover:bg-slate-50'}`}>
      <button
        className="w-full text-left flex items-start justify-between gap-4 p-5 md:p-6"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-primary-900 text-sm md:text-base leading-snug flex-1">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-secondary-700 shrink-0 transition-transform duration-300 mt-0.5 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5 md:pb-6 px-5 md:px-6' : 'max-h-0'}`}>
        <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = categories
    .filter(cat => activeCategory === 'All' || cat.name === activeCategory)
    .map(cat => ({
      ...cat,
      faqs: cat.faqs.filter(
        faq =>
          search === '' ||
          faq.q.toLowerCase().includes(search.toLowerCase()) ||
          faq.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(cat => cat.faqs.length > 0)

  const totalFAQs = categories.reduce((sum, cat) => sum + cat.faqs.length, 0)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="gradient-bg py-20 md:py-28">
        <div className="container-custom text-white text-center">
          <span className="badge bg-white/20 text-white mb-4">Frequently Asked Questions</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Got Questions? We&apos;ve Got Answers
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Everything you need to know about Vautika Physiotherapy — treatments, appointments, online sessions, pricing, and more.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-700 text-sm font-medium outline-none shadow-md placeholder:text-slate-400 focus:ring-2 focus:ring-accent-500"
            />
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-20">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto text-center">
          {[
            { val: totalFAQs + '+', label: 'FAQs Answered' },
            { val: '5★', label: 'Google Rating' },
            { val: '500+', label: 'Happy Patients' },
          ].map(({ val, label }) => (
            <div key={label} className="bg-primary-50 rounded-2xl py-4 px-2">
              <p className="font-display font-bold text-2xl text-primary-900">{val}</p>
              <p className="text-xs text-slate-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {['All', ...categories.map(c => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold font-sans transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-900 text-white shadow-sm'
                  : 'bg-white border border-stone-200 text-slate-600 hover:border-primary-900 hover:text-primary-900'
              }`}
            >
              {cat === 'All' ? '📚 All Topics' : `${categories.find(c => c.name === cat)?.emoji} ${cat}`}
            </button>
          ))}
        </div>

        {/* FAQ Sections */}
        {filtered.length > 0 ? (
          <div className="space-y-14">
            {filtered.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{cat.emoji}</span>
                  <h2 className="font-display font-bold text-2xl text-primary-900">{cat.name}</h2>
                  <span className="text-xs font-bold bg-primary-100 text-primary-900 px-2.5 py-1 rounded-full">
                    {cat.faqs.length} Questions
                  </span>
                </div>
                <div className="space-y-3">
                  {cat.faqs.map((faq) => (
                    <FAQItem key={faq.q} {...faq} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="font-display font-bold text-xl text-primary-900 mb-2">No results found</p>
            <p className="text-slate-500 text-sm">Try a different search term or browse by category.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-primary-900 to-secondary-700 rounded-3xl p-10 text-white text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
            Still Have Questions?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Our team is always happy to help. Reach out via WhatsApp, phone, or email — we respond quickly!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917381455744?text=Hi%20Vautika%20Physiotherapy%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary-900 rounded-xl font-bold text-sm font-sans tracking-wider uppercase transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href="tel:+917381455744"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white rounded-xl font-bold text-sm font-sans tracking-wider uppercase transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call: 7381455744
            </a>
            <Link
              href="/appointment/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent-500 text-primary-900 rounded-xl font-bold text-sm font-sans tracking-wider uppercase transition-all hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
