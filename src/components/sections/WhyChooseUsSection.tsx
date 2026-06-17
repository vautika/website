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
    const increment = target / 50
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
  },
  {
    icon: UserCheck,
    title: 'Personalized Treatment',
    description: 'Every patient receives a customized treatment plan based on their unique condition and goals.',
  },
  {
    icon: FlaskConical,
    title: 'Evidence Based Therapy',
    description: 'Our treatments follow the latest scientific research and international clinical guidelines.',
  },
  {
    icon: Zap,
    title: 'Advanced Equipment',
    description: 'Cutting-edge laser, electrotherapy & modern rehabilitation tools for faster recovery.',
  },
  {
    icon: Heart,
    title: 'Affordable Care',
    description: 'Premium physiotherapy at accessible prices — quality healthcare for everyone.',
  },
  {
    icon: Users,
    title: 'Patient-Centric Approach',
    description: 'You are at the center of everything. We listen, understand & deliver compassionate care.',
  },
]

const stats = [
  { val: 500, suffix: '+', label: 'Patients Treated' },
  { val: 5, suffix: '+', label: 'Years Experience' },
  { val: 98, suffix: '%', label: 'Recovery Rate' },
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
    <section className="section-padding bg-clinical-cream relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-slate-50 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-50/50 blur-[60px] pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Content: Copy + Stats ── */}
          <div>
            <div className={`transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="badge mb-4">Why Choose Us</span>
              <h2 className="section-title mb-4">
                Bhubaneswar's Most <span className="font-medium italic text-secondary-700">Trusted</span> Physiotherapy Centre
              </h2>
              <p className="section-subtitle mb-10 text-left">
                At Vautika, we combine clinical expertise, advanced technology, and compassionate care to deliver exceptional recovery outcomes.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-4 mb-10 transition-all duration-800 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {stats.map(({ val, suffix, label }) => (
                <div
                  key={label}
                  className="relative overflow-hidden rounded-2xl p-5 text-center bg-slate-50 border border-stone-200/40 group hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <p className="font-display font-bold text-3xl md:text-4xl text-primary-900 mb-1">
                    <Counter target={val} suffix={suffix} />
                  </p>
                  <p className="text-xs text-slate-500 font-semibold">{label}</p>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-800 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs bg-white text-secondary-700 border border-stone-200/80 px-4 py-2 rounded-full font-bold shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right Content: Feature Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className={`group relative p-5 rounded-2xl bg-[#FAFAF9] border border-stone-200/50 overflow-hidden hover:bg-white hover:-translate-y-1 hover:shadow-card transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: inView ? `${150 + i * 50}ms` : '0ms',
                }}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4 border border-stone-200/30 group-hover:bg-[#1E3F3B]/5 transition-colors">
                  <Icon className="w-5 h-5 text-secondary-700 group-hover:text-accent-600 transition-colors" />
                </div>

                <h3 className="font-display font-bold text-primary-900 text-sm mb-1.5 leading-snug">
                  {title}
                </h3>
                
                <p className="text-slate-500 text-xs leading-relaxed">
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
