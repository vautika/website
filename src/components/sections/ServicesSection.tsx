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
    gradient: 'from-violet-600 to-primary-900',
    glow: 'rgba(109, 47, 255, 0.3)',
    accent: '#8a56ff',
  },
  {
    icon: Brain,
    title: 'Neuro Rehabilitation',
    description: 'Specialized therapy for stroke, Parkinson\'s, and spinal cord injuries.',
    gradient: 'from-blue-500 to-blue-700',
    glow: 'rgba(59, 130, 246, 0.3)',
    accent: '#3b82f6',
  },
  {
    icon: Baby,
    title: 'Pediatric Rehabilitation',
    description: 'Gentle, child-friendly therapy for developmental delays and pediatric conditions.',
    gradient: 'from-pink-500 to-rose-600',
    glow: 'rgba(236, 72, 153, 0.3)',
    accent: '#ec4899',
  },
  {
    icon: Trophy,
    title: 'Sports Rehabilitation',
    description: 'Advanced sports injury treatment & performance enhancement for athletes.',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245, 158, 11, 0.35)',
    accent: '#f59e0b',
  },
  {
    icon: Zap,
    title: 'Pain Management',
    description: 'Evidence-based techniques to address chronic and acute pain for lasting relief.',
    gradient: 'from-teal-500 to-secondary-700',
    glow: 'rgba(14, 116, 144, 0.3)',
    accent: '#0891b2',
  },
  {
    icon: Heart,
    title: 'Lifestyle Counseling',
    description: 'Holistic guidance on posture, ergonomics, exercise & long-term wellness.',
    gradient: 'from-red-500 to-rose-600',
    glow: 'rgba(239, 68, 68, 0.3)',
    accent: '#ef4444',
  },
  {
    icon: Hand,
    title: 'Manual Therapy',
    description: 'Hands-on joint mobilization and soft tissue manipulation techniques.',
    gradient: 'from-indigo-500 to-primary-700',
    glow: 'rgba(99, 102, 241, 0.3)',
    accent: '#6366f1',
  },
  {
    icon: Activity,
    title: 'Electro Therapy',
    description: 'Advanced TENS, IFT & ultrasound modalities for pain relief and healing.',
    gradient: 'from-cyan-500 to-teal-600',
    glow: 'rgba(6, 182, 212, 0.3)',
    accent: '#06b6d4',
  },
  {
    icon: Sparkles,
    title: 'Laser Therapy',
    description: 'Low-level laser for pain reduction, inflammation control & tissue repair.',
    gradient: 'from-violet-500 to-purple-700',
    glow: 'rgba(139, 92, 246, 0.3)',
    accent: '#8b5cf6',
  },
  {
    icon: Wind,
    title: 'Cupping Therapy',
    description: 'Traditional cupping to improve circulation and relieve muscle tension.',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245, 158, 11, 0.3)',
    accent: '#f59e0b',
  },
  {
    icon: Syringe,
    title: 'Needling Therapy',
    description: 'Dry needling & acupuncture to release trigger points and reduce pain.',
    gradient: 'from-lime-500 to-green-600',
    glow: 'rgba(132, 204, 22, 0.3)',
    accent: '#84cc16',
  },
  {
    icon: Dumbbell,
    title: 'Sports Specific Training',
    description: 'Customized training programs to enhance performance and prevent injuries.',
    gradient: 'from-primary-700 to-secondary-700',
    glow: 'rgba(61, 31, 122, 0.3)',
    accent: '#3D1F7A',
  },
]

function ServiceCard({
  icon: Icon, title, description, gradient, glow, accent, index, inView
}: typeof services[0] & { index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href="/services/"
      className={`group relative flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100/80 dark:border-gray-800/60 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: inView ? `${index * 50}ms` : '0ms',
        boxShadow: hovered
          ? `0 20px 60px ${glow}, 0 4px 24px rgba(0,0,0,0.08)`
          : '0 4px 24px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient} transition-all duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glow} 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
        style={{ boxShadow: hovered ? `0 8px 24px ${glow}` : undefined }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Text */}
      <h3 className="font-display font-bold text-gray-900 dark:text-white text-sm mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-1">
        {description}
      </p>

      {/* Arrow link */}
      <div className="flex items-center gap-1.5 mt-4 text-xs font-semibold font-display transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
        style={{ color: accent }}
      >
        Learn more
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  )
}

export default function ServicesSection() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="services" className="section-padding" style={{ background: 'linear-gradient(180deg, #f8f6ff 0%, #f0fdfe 100%)' }}>
      <div className="dark:hidden absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, #f8f6ff 0%, #f0fdfe 100%)' }} />
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge-premium mb-4">Our Services</span>
          <h2 className="section-title mb-4">
            Comprehensive{' '}
            <span className="gradient-text">Physiotherapy</span>{' '}
            Services
          </h2>
          <p className="section-subtitle">
            A full spectrum of advanced physiotherapy &amp; rehabilitation services,
            tailored to your individual recovery journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-base rounded-2xl"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
