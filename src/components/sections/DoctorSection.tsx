'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Award, GraduationCap, Star, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react'

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
  { icon: GraduationCap, label: 'MPT – Musculoskeletal Physiotherapy', color: 'from-primary-900 to-primary-700' },
  { icon: Trophy, label: 'FIFA Diploma in Sports Medicine', color: 'from-amber-500 to-orange-600' },
  { icon: Award, label: 'Certified Rehabilitation Specialist', color: 'from-secondary-700 to-teal-600' },
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
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f3efff 0%, #ecfeff 100%)' }}
      ref={ref}
    >
      <div className="absolute inset-0 hidden dark:block" style={{ background: 'linear-gradient(135deg, #0a061a 0%, #060d14 100%)' }} />

      {/* Decorative orbs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-200/40 dark:bg-primary-950/40 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-secondary-200/40 dark:bg-secondary-950/30 blur-[60px] pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Doctor Card ── */}
          <div
            className={`relative transition-all duration-800 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Main card */}
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-premium border border-gray-100 dark:border-gray-800 overflow-hidden p-8">
              {/* Gradient top strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-900 via-secondary-600 to-accent-500" />

              {/* Doctor avatar */}
              <div className="flex justify-center mb-7">
                <div className="relative">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-900 to-secondary-600 blur-md opacity-40 scale-110" />
                  <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-primary-900 to-secondary-600 flex items-center justify-center shadow-glow-primary">
                    <svg viewBox="0 0 160 160" className="w-32 h-32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      {/* Doctor illustration */}
                      <circle cx="80" cy="52" r="28" fill="rgba(255,255,255,0.92)" />
                      {/* Face */}
                      <circle cx="71" cy="49" r="3" fill="#3D1F7A" />
                      <circle cx="89" cy="49" r="3" fill="#3D1F7A" />
                      <path d="M72 62 Q80 69 88 62" stroke="#3D1F7A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                      {/* Coat */}
                      <path d="M50 88 L80 76 L110 88 L114 145 L46 145 Z" fill="white" />
                      {/* Collar/tie */}
                      <path d="M80 76 L74 100 L80 110 L86 100 Z" fill="#3D1F7A" />
                      {/* Coat lapels */}
                      <path d="M80 76 L65 95 L60 88" stroke="#ddd" strokeWidth="1.5" fill="none" />
                      <path d="M80 76 L95 95 L100 88" stroke="#ddd" strokeWidth="1.5" fill="none" />
                      {/* Stethoscope */}
                      <path d="M58 97 Q52 114 58 125 Q64 136 77 130" stroke="#0E7490" strokeWidth="3" strokeLinecap="round" fill="none" />
                      <circle cx="77" cy="130" r="6" fill="#0E7490" />
                      <circle cx="77" cy="130" r="3" fill="white" />
                    </svg>
                  </div>
                  {/* Online dot */}
                  <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-md">
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                  </div>
                </div>
              </div>

              {/* Name & title */}
              <div className="text-center mb-6">
                <h3 className="font-display font-black text-2xl text-gray-900 dark:text-white mb-1">
                  Dr. Satya Mohanty
                </h3>
                <p className="text-primary-900 dark:text-primary-300 font-semibold text-sm tracking-wide mb-3">
                  Physiotherapist & Sports Medicine Specialist
                </p>
                <div className="flex justify-center items-center gap-1.5 mb-1">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-accent-500 fill-accent-500" />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">5.0 Rating</span>
                </div>
              </div>

              {/* Qualifications */}
              <div className="space-y-2.5">
                {qualifications.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="w-4.5 h-4.5 text-white w-[18px] h-[18px]" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge: years */}
            <div
              className="absolute -top-5 -right-5 text-white rounded-2xl p-4 shadow-premium text-center"
              style={{
                background: 'linear-gradient(135deg, #F4A300, #d97706)',
                animation: 'float 7s ease-in-out infinite 2s',
              }}
            >
              <p className="font-display font-black text-3xl leading-none">5+</p>
              <p className="text-xs font-bold opacity-90 mt-0.5 leading-tight">Years<br/>Expert Practice</p>
            </div>

            {/* Floating badge: patients */}
            <div
              className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-900 rounded-2xl shadow-premium p-4 border border-gray-100 dark:border-gray-800"
              style={{ animation: 'float 8s ease-in-out infinite' }}
            >
              <p className="font-display font-black text-2xl leading-none"
                style={{
                  background: 'linear-gradient(135deg, #3D1F7A, #0E7490)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >500+</p>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Patients Treated</p>
            </div>
          </div>

          {/* ── Right: Bio ── */}
          <div
            className={`transition-all duration-800 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="badge-premium mb-4">Meet Your Doctor</span>
            <h2 className="section-title mb-6">
              Led by a{' '}
              <span className="gradient-text">World-Class</span>{' '}
              Physiotherapist
            </h2>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-8">
              <p>
                Dr. Satya Mohanty (PT) is a highly qualified physiotherapist with a Master's in
                Musculoskeletal Physiotherapy (MPT-MSK) and a prestigious FIFA Sports Medicine Diploma —
                the world's governing body for football medicine.
              </p>
              <p>
                With over 5 years of clinical experience, Dr. Mohanty has treated hundreds of patients —
                from professional athletes to elderly individuals — always with evidence-based,
                patient-centered care.
              </p>
              <p>
                He brings international standards of orthopedic rehabilitation, sports injury management,
                neuro rehab &amp; advanced pain management to Bhubaneswar at accessible prices.
              </p>
            </div>

            {/* Specializations */}
            <div className="grid grid-cols-2 gap-2.5 mb-8">
              {specializations.map((spec) => (
                <div key={spec} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-secondary-600 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/appointment/"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-display font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-primary"
                style={{ background: 'linear-gradient(135deg, #3D1F7A, #0E7490)' }}
              >
                Book with Dr. Mohanty
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/about/"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border-2 border-primary-900 dark:border-primary-500 text-primary-900 dark:text-primary-300 font-display font-bold text-sm hover:bg-primary-900 hover:text-white dark:hover:bg-primary-900 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
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
