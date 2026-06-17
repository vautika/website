'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, UserCheck, FlaskConical, Zap, Heart, Users } from 'lucide-react'

function useInView(threshold = 0.15) {
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

function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView(0.3)
  useEffect(() => {
    if (!inView) return
    let current = 0
    const increment = target / 60
    const id = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(id) }
      else setCount(Math.floor(current))
    }, 25)
    return () => clearInterval(id)
  }, [inView, target])
  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const reasons = [
  {
    icon: Award,
    title: 'Experienced Physiotherapist',
    description: 'Dr. Satya Mohanty holds MPT (MSK) and FIFA Diploma in Sports Medicine — world-class expertise.',
    gradient: 'from-primary-900 to-primary-700',
    glow: 'rgba(61, 31, 122, 0.25)',
  },
  {
    icon: UserCheck,
    title: 'Personalized Treatment',
    description: 'Every patient receives a customized treatment plan based on their unique condition and goals.',
    gradient: 'from-secondary-700 to-teal-600',
    glow: 'rgba(14, 116, 144, 0.25)',
  },
  {
    icon: FlaskConical,
    title: 'Evidence Based Therapy',
    description: 'Our treatments follow the latest scientific research and international clinical guidelines.',
    gradient: 'from-blue-600 to-blue-500',
    glow: 'rgba(59, 130, 246, 0.25)',
  },
  {
    icon: Zap,
    title: 'Advanced Equipment',
    description: 'Cutting-edge laser, electrotherapy & modern rehabilitation tools for faster recovery.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.25)',
  },
  {
    icon: Heart,
    title: 'Affordable Care',
    description: 'Premium physiotherapy at accessible prices — quality healthcare for everyone.',
    gradient: 'from-rose-500 to-pink-600',
    glow: 'rgba(239, 68, 68, 0.25)',
  },
  {
    icon: Users,
    title: 'Patient-Centric Approach',
    description: 'You are at the center of everything. We listen, understand & deliver compassionate care.',
    gradient: 'from-violet-600 to-purple-700',
    glow: 'rgba(139, 92, 246, 0.25)',
  },
]

const stats = [
  { val: 500, suffix: '+', label: 'Patients Treated', color: 'from-primary-900 to-secondary-700' },
  { val: 5, suffix: '+', label: 'Years Experience', color: 'from-secondary-700 to-teal-500' },
  { val: 98, suffix: '%', label: 'Recovery Rate', color: 'from-amber-500 to-orange-500' },
]

const badges = [
  '✓ MPT Qualified',
  '✓ FIFA Sports Medicine',
  '✓ Personalized Care',
  '✓ Modern Equipment',
  '✓ Evidence Based',
  '✓ Patient Focused',
]

export default function WhyChooseUsSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section className="section-padding bg-white dark:bg-[#070711] relative overflow-hidden" ref={ref}>
      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-50 dark:bg-primary-950/30 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary-50 dark:bg-secondary-950/20 blur-[60px] pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Left: Copy + Stats ── */}
          <div>
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="badge-premium mb-4">Why Choose Us</span>
              <h2 className="section-title mb-4">
                Bhubaneswar's Most{' '}
                <span className="gradient-text">Trusted</span>{' '}
                Physiotherapy Centre
              </h2>
              <p className="section-subtitle mb-10">
                At Vautika, we combine clinical expertise, advanced technology &amp;
                compassionate care to deliver exceptional recovery outcomes.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-4 mb-10 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              {stats.map(({ val, suffix, label, color }) => (
                <div
                  key={label}
                  className="relative overflow-hidden rounded-2xl p-5 text-center bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${color}`} />
                  <p className="font-display font-black text-3xl md:text-4xl mb-1"
                    style={{
                      background: `linear-gradient(135deg, #3D1F7A, #0E7490)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <Counter target={val} suffix={suffix} />
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {badges.map((badge, i) => (
                <span
                  key={badge}
                  className="text-xs bg-white dark:bg-gray-900 text-secondary-700 dark:text-secondary-400 border border-secondary-200/60 dark:border-secondary-800/60 px-4 py-2 rounded-full font-semibold font-display shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  style={{ transitionDelay: `${300 + i * 40}ms` }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Feature Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, description, gradient, glow }, i) => (
              <div
                key={title}
                className={`group relative p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/80 border border-gray-100/80 dark:border-gray-800/60 overflow-hidden hover:-translate-y-1.5 transition-all duration-400 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: inView ? `${200 + i * 80}ms` : '0ms',
                }}
              >
                {/* Hover glow bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${glow} 0%, transparent 70%)` }}
                />

                {/* Icon */}
                <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-display font-bold text-gray-900 dark:text-white text-sm mb-1.5 leading-snug">
                  {title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
