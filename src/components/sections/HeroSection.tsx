'use client'

import Link from 'next/link'
import { Phone, MapPin, Calendar, Shield, Star, ChevronDown, Sparkles, Award } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Scroll-reveal hook
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

// Animated counter
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView(0.3)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 50
    const id = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(id) }
      else setCount(Math.floor(start))
    }, 30)
    return () => clearInterval(id)
  }, [inView, target])
  return <span ref={ref}>{count}{suffix}</span>
}

// Particle component
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full bg-white/20 animate-particle"
      style={style}
    />
  )
}

const particles = [
  { width: 6, height: 6, top: '15%', left: '10%', animationDelay: '0s', animationDuration: '8s' },
  { width: 4, height: 4, top: '25%', left: '80%', animationDelay: '1.5s', animationDuration: '10s' },
  { width: 8, height: 8, top: '60%', left: '5%', animationDelay: '3s', animationDuration: '7s' },
  { width: 5, height: 5, top: '70%', left: '88%', animationDelay: '0.8s', animationDuration: '9s' },
  { width: 3, height: 3, top: '40%', left: '92%', animationDelay: '2s', animationDuration: '6s' },
  { width: 7, height: 7, top: '80%', left: '50%', animationDelay: '4s', animationDuration: '11s' },
  { width: 4, height: 4, top: '10%', left: '60%', animationDelay: '2.5s', animationDuration: '8s' },
  { width: 6, height: 6, top: '50%', left: '30%', animationDelay: '1s', animationDuration: '12s' },
]

export default function HeroSection() {
  const { ref: heroRef, inView } = useInView(0.1)

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
      ref={heroRef}
    >
      {/* ── Animated gradient background ── */}
      <div className="absolute inset-0 gradient-bg-animated" />

      {/* ── Mesh overlay ── */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h4v4H0V0zm8 0h4v4H8V0zm8 0h4v4h-4V0zm8 0h4v4h-4V0zm8 0h4v4h-4V0zm8 0h4v4h-4V0zm8 0h4v4h-4V0zm8 0h4v4h-4V0zm8 0h4v4h-4V0zm8 0h4v4h-4V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* ── Glowing orbs ── */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-secondary-700/20 blur-[100px] animate-float" />
      <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-primary-600/20 blur-[80px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent-500/5 blur-[120px] animate-float-slow" />

      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <Particle
          key={i}
          style={{
            width: p.width,
            height: p.height,
            top: p.top,
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="text-white">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <Sparkles className="w-4 h-4 text-accent-400 fill-accent-400" />
              <span className="text-sm font-semibold text-white tracking-wide">
                #1 Physiotherapy Clinic in Bhubaneswar
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] mb-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Expert{' '}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, #F4A300 0%, #FFD700 50%, #F4A300 100%)',
                  backgroundSize: '200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s linear infinite',
                }}
              >
                Physiotherapy
              </span>
              <br />
              <span className="text-white/90">for a Pain‑Free Life</span>
            </h1>

            {/* Subtext */}
            <p
              className={`text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              Advanced rehabilitation, sports medicine &amp; pain management
              by Dr. Satya Mohanty (MPT, FIFA Sports Medicine) in Bhubaneswar.
            </p>

            {/* Trust pills */}
            <div
              className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              {[
                { icon: Shield, text: 'MPT Qualified' },
                { icon: Award, text: 'FIFA Sports Medicine' },
                { icon: Star, text: 'Evidence Based' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/90 font-medium hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-accent-400" />
                  {text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-3 mb-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <Link
                href="/appointment/"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-2xl px-8 py-4 font-display font-bold text-base text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-accent"
                style={{ background: 'linear-gradient(135deg, #F4A300, #d97706)' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>

              <a
                href="tel:+917381455744"
                className="inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 font-display font-bold text-base text-white bg-white/10 backdrop-blur-sm border border-white/25 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <a
                href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl px-7 py-4 font-display font-semibold text-sm text-white/80 bg-white/8 backdrop-blur-sm border border-white/15 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:text-white"
              >
                <MapPin className="w-5 h-5" />
                Directions
              </a>
            </div>

            {/* WhatsApp emergency */}
            <div
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '650ms' }}
            >
              <a
                href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20need%20an%20emergency%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Emergency Consultation?{' '}
                <span className="underline underline-offset-4 group-hover:text-accent-300 transition-colors">
                  WhatsApp Us
                </span>
              </a>
            </div>
          </div>

          {/* ── Right: Stats Card ── */}
          <div
            className={`hidden lg:block transition-all duration-800 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-glass overflow-hidden">
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                {/* Premium illustration */}
                <div className="relative mb-8">
                  <svg viewBox="0 0 400 280" className="w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                      </linearGradient>
                      <linearGradient id="heroAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F4A300" />
                        <stop offset="100%" stopColor="#FFD700" />
                      </linearGradient>
                    </defs>

                    {/* Background shape */}
                    <ellipse cx="200" cy="220" rx="180" ry="40" fill="rgba(255,255,255,0.05)" />

                    {/* Therapy table */}
                    <rect x="70" y="185" width="260" height="14" rx="7" fill="url(#heroGrad1)" />
                    <rect x="90" y="199" width="10" height="50" rx="5" fill="rgba(255,255,255,0.12)" />
                    <rect x="300" y="199" width="10" height="50" rx="5" fill="rgba(255,255,255,0.12)" />

                    {/* Patient */}
                    <rect x="100" y="165" width="150" height="24" rx="12" fill="rgba(255,255,255,0.35)" />
                    <circle cx="268" cy="177" r="17" fill="rgba(255,255,255,0.45)" />
                    <rect x="80" y="169" width="50" height="16" rx="8" fill="rgba(255,255,255,0.35)" />

                    {/* Therapist body */}
                    <rect x="160" y="112" width="34" height="54" rx="10" fill="#F4A300" />
                    <circle cx="177" cy="100" r="18" fill="#F4A300" />
                    {/* White coat detail */}
                    <rect x="167" y="116" width="8" height="40" rx="4" fill="rgba(255,255,255,0.3)" />

                    {/* Arms treating patient */}
                    <path d="M160 130 Q130 145 108 163" stroke="#F4A300" strokeWidth="12" strokeLinecap="round" fill="none" />
                    <path d="M194 130 Q220 145 250 162" stroke="#F4A300" strokeWidth="12" strokeLinecap="round" fill="none" />

                    {/* Legs */}
                    <rect x="162" y="166" width="13" height="44" rx="6.5" fill="#3D1F7A" />
                    <rect x="179" y="166" width="13" height="44" rx="6.5" fill="#3D1F7A" />

                    {/* Healing sparkles */}
                    <circle cx="90" cy="90" r="5" fill="#F4A300" opacity="0.9" />
                    <circle cx="300" cy="70" r="7" fill="#0E7490" opacity="0.9" />
                    <circle cx="340" cy="140" r="5" fill="#F4A300" opacity="0.7" />
                    <circle cx="55" cy="150" r="6" fill="#0E7490" opacity="0.7" />

                    {/* Plus symbol */}
                    <rect x="44" y="50" width="24" height="7" rx="3.5" fill="white" opacity="0.7" />
                    <rect x="51" y="43" width="7" height="24" rx="3.5" fill="white" opacity="0.7" />

                    {/* Recovery arrow */}
                    <path d="M320 95 Q355 75 370 100 Q355 125 320 95Z" fill="#0E7490" opacity="0.8" />

                    {/* Label */}
                    <rect x="90" y="258" width="220" height="18" rx="9" fill="rgba(255,255,255,0.08)" />
                    <text x="200" y="271" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="10" fill="rgba(255,255,255,0.6)" fontWeight="600" letterSpacing="2">
                      PROFESSIONAL PHYSIOTHERAPY
                    </text>
                  </svg>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { val: 500, suffix: '+', label: 'Patients Treated' },
                    { val: 5, suffix: '★', label: 'Google Rating' },
                    { val: 5, suffix: '+', label: 'Years Experience' },
                  ].map(({ val, suffix, label }) => (
                    <div key={label} className="text-center p-3 rounded-2xl bg-white/8 hover:bg-white/12 transition-colors">
                      <p className="font-display font-black text-2xl text-accent-400">
                        <Counter target={val} suffix={suffix} />
                      </p>
                      <p className="text-[11px] text-white/60 mt-1 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctor badge */}
              <div
                className="absolute -bottom-6 -left-8 bg-white dark:bg-gray-900 rounded-2xl shadow-premium p-4 max-w-[220px] border border-gray-100 dark:border-gray-800"
                style={{ animation: 'float 6s ease-in-out infinite 1s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shrink-0 shadow-glow-primary">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-gray-900 dark:text-white leading-snug">
                      Dr. Satya Mohanty
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">MPT • FIFA Sports Medicine</p>
                  </div>
                </div>
              </div>

              {/* Open timing badge */}
              <div
                className="absolute -top-5 -right-5 rounded-2xl shadow-premium px-5 py-3 text-white"
                style={{
                  background: 'linear-gradient(135deg, #F4A300, #d97706)',
                  animation: 'float 8s ease-in-out infinite 3s',
                }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <p className="text-[10px] font-bold uppercase tracking-wider opacity-90">Open Today</p>
                </div>
                <p className="font-display font-black text-base">9 AM – 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 animate-bounce-subtle">
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  )
}
