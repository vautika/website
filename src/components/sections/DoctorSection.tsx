'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Award, GraduationCap, Star, Trophy, ArrowRight, CheckCircle2, Shield } from 'lucide-react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const qualifications = [
  { icon: GraduationCap, label: 'MPT – Musculoskeletal Physiotherapy', color: 'bg-[#1E3F3B]/5 text-secondary-700' },
  { icon: Trophy, label: 'FIFA Diploma in Sports Medicine', color: 'bg-accent-50 text-accent-700' },
  { icon: Award, label: 'Certified Rehabilitation Specialist', color: 'bg-slate-50 text-slate-700' },
]

const specializations = [
  'Musculoskeletal Physiotherapy',
  'Sports Injury Management',
  'Neuro Rehabilitation',
  'Pain Management',
  'Manual Therapy',
  'Sports Performance',
]

export default function DoctorSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      className="section-padding relative overflow-hidden bg-gradient-to-br from-clinical-slate to-clinical-slateMed"
      ref={ref}
    >
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Doctor Card ── */}
          <div
            className={`relative transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Main card */}
            <div className="relative bg-white rounded-3xl shadow-elegant border border-stone-200/60 overflow-hidden p-8">
              {/* Gold top border strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-700 via-accent-500 to-accent-600" />

              {/* Doctor avatar */}
              <div className="flex justify-center mb-7">
                <div className="relative">
                  <div className="relative w-40 h-40 rounded-full bg-slate-50 border-2 border-stone-200/80 flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 160 160" className="w-28 h-28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="80" cy="52" r="28" fill="#FAF9F5" />
                      <circle cx="71" cy="49" r="3" fill="#0F1E36" />
                      <circle cx="89" cy="49" r="3" fill="#0F1E36" />
                      <path d="M72 62 Q80 69 88 62" stroke="#0F1E36" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                      <path d="M50 88 L80 76 L110 88 L114 145 L46 145 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                      <path d="M80 76 L74 100 L80 110 L86 100 Z" fill="#0F1E36" />
                      <path d="M80 76 L65 95 L60 88" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
                      <path d="M80 76 L95 95 L100 88" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
                      <path d="M58 97 Q52 114 58 125 Q64 136 77 130" stroke="#1E3F3B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                      <circle cx="77" cy="130" r="5" fill="#1E3F3B" />
                    </svg>
                  </div>
                  {/* Online dot */}
                  <div className="absolute bottom-2 right-2 w-4.5 h-4.5 bg-emerald-500 rounded-full border-2 border-white shadow-md">
                    <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                  </div>
                </div>
              </div>

              {/* Name & title */}
              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-2xl text-primary-900 mb-1.5">
                  Dr. Satya Mohanty
                </h3>
                <p className="text-secondary-700 font-semibold text-sm tracking-wide mb-3">
                  Physiotherapist &amp; Sports Medicine Specialist
                </p>
                <div className="flex justify-center items-center gap-1.5">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-accent-500 fill-accent-500" />
                  ))}
                  <span className="text-xs text-slate-500 ml-1">5.0 Google Rating</span>
                </div>
              </div>

              {/* Qualifications */}
              <div className="space-y-2.5">
                {qualifications.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 group hover:bg-slate-100 transition-colors border border-stone-200/30"
                  >
                    <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge: years */}
            <div
              className="absolute -top-5 -right-5 bg-accent-500 text-primary-900 rounded-2xl p-4 shadow-elegant text-center border border-accent-300/20"
              style={{
                animation: 'float 7s ease-in-out infinite 2s',
              }}
            >
              <p className="font-display font-bold text-3xl leading-none">5+</p>
              <p className="text-[10px] font-bold opacity-90 mt-0.5 leading-tight">Years<br/>Expert Practice</p>
            </div>

            {/* Floating badge: patients */}
            <div
              className="absolute -bottom-5 -left-5 bg-[#0F1E36] text-white rounded-2xl shadow-elegant p-4 border border-[#1b2a38]"
              style={{ animation: 'float 8s ease-in-out infinite' }}
            >
              <p className="font-display font-bold text-2xl leading-none text-accent-400">500+</p>
              <p className="text-[10px] text-white/70 font-semibold mt-0.5">Patients Treated</p>
            </div>
          </div>

          {/* ── Right: Bio ── */}
          <div
            className={`transition-all duration-1000 delay-100 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="badge mb-4">Meet Your Specialist</span>
            <h2 className="section-title mb-6">
              Led by a <span className="font-medium italic text-secondary-700">Highly Specialized</span> Physiotherapist
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base mb-8">
              <p>
                Dr. Satya Mohanty (PT) is a qualified physiotherapist with a Master's in Musculoskeletal Physiotherapy (MPT-MSK) and a prestigious FIFA Sports Medicine Diploma, the highest standard in international sports medicine.
              </p>
              <p>
                With over 5 years of active clinical experience, Dr. Mohanty focuses on evidence-based, customized patient rehab, ensuring every individual returns to their daily routines pain-free and stronger.
              </p>
              <p>
                He delivers international-standard orthopedic rehabilitation, injury recovery, and pain relief therapy at accessible clinic rates in Bhubaneswar.
              </p>
            </div>

            {/* Specializations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {specializations.map((spec) => (
                <div key={spec} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-secondary-700 shrink-0" />
                  <span className="font-semibold">{spec}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/appointment/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-sans font-bold text-sm tracking-wider uppercase bg-primary-900 text-white transition-all duration-300 hover:bg-primary-800 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                Book with Dr. Mohanty
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/about/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-primary-900 bg-white text-primary-900 font-sans font-bold text-sm tracking-wider uppercase hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
