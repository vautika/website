'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  Bone, Brain, Baby, Trophy, Zap, Heart,
  Hand, Activity, Sparkles, Wind, Syringe, Dumbbell, ArrowRight
} from 'lucide-react'

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

const services = [
  {
    icon: Bone,
    title: 'Orthopedic Rehabilitation',
    description: 'Comprehensive treatment for bone, joint & muscle injuries to restore full function and mobility.',
    accent: '#BCA374',
  },
  {
    icon: Brain,
    title: 'Neuro Rehabilitation',
    description: 'Specialized therapy for stroke, Parkinson\'s, and spinal cord injuries.',
    accent: '#1E3F3B',
  },
  {
    icon: Baby,
    title: 'Pediatric Rehabilitation',
    description: 'Gentle, child-friendly therapy for developmental delays and pediatric conditions.',
    accent: '#BCA374',
  },
  {
    icon: Trophy,
    title: 'Sports Rehabilitation',
    description: 'Advanced sports injury treatment & performance enhancement for athletes.',
    accent: '#1E3F3B',
  },
  {
    icon: Zap,
    title: 'Pain Management',
    description: 'Evidence-based techniques to address chronic and acute pain for lasting relief.',
    accent: '#BCA374',
  },
  {
    icon: Heart,
    title: 'Lifestyle Counseling',
    description: 'Holistic guidance on posture, ergonomics, exercise & long-term wellness.',
    accent: '#1E3F3B',
  },
  {
    icon: Hand,
    title: 'Manual Therapy',
    description: 'Hands-on joint mobilization and soft tissue manipulation techniques.',
    accent: '#BCA374',
  },
  {
    icon: Activity,
    title: 'Electro Therapy',
    description: 'Advanced TENS, IFT & ultrasound modalities for pain relief and healing.',
    accent: '#1E3F3B',
  },
  {
    icon: Sparkles,
    title: 'Laser Therapy',
    description: 'Low-level laser for pain reduction, inflammation control & tissue repair.',
    accent: '#BCA374',
  },
  {
    icon: Wind,
    title: 'Cupping Therapy',
    description: 'Traditional cupping to improve circulation and relieve muscle tension.',
    accent: '#1E3F3B',
  },
  {
    icon: Syringe,
    title: 'Needling Therapy',
    description: 'Dry needling & acupuncture to release trigger points and reduce pain.',
    accent: '#BCA374',
  },
  {
    icon: Dumbbell,
    title: 'Sports Specific Training',
    description: 'Customized training programs to enhance performance and prevent injuries.',
    accent: '#1E3F3B',
  },
]

function ServiceCard({
  icon: Icon, title, description, accent, index, inView
}: typeof services[0] & { index: number; inView: boolean }) {
  return (
    <Link
      href="/services/"
      className={`group relative flex flex-col p-6 rounded-2xl bg-white border border-stone-200/60 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: inView ? `${index * 40}ms` : '0ms',
      }}
    >
      {/* Top Gold Border Accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
      />

      {/* Icon frame */}
      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#1E3F3B]/5">
        <Icon className="w-5 h-5 text-[#1E3F3B] group-hover:text-accent-600 transition-colors" />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-primary-900 text-base mb-2.5 leading-snug">
        {title}
      </h3>
      
      <p className="text-slate-500 text-xs leading-relaxed flex-1">
        {description}
      </p>

      {/* Action link */}
      <div className="flex items-center gap-1.5 mt-5 text-xs font-bold font-sans tracking-wider uppercase text-slate-400 group-hover:text-primary-900 transition-colors duration-300">
        Read details
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}

export default function ServicesSection() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="services" className="section-padding bg-clinical-sage" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="badge mb-4">Our Specialities</span>
          <h2 className="section-title mb-4">
            Comprehensive <span className="font-medium italic text-secondary-700">Physiotherapy</span> Services
          </h2>
          <p className="section-subtitle">
            A full spectrum of advanced, evidence-based physical therapy options customized to your path to recovery and long-term vitality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-14 transition-all duration-800 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-base rounded-2xl"
          >
            Explore All Services
            <ArrowRight className="w-4.5 h-4.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
