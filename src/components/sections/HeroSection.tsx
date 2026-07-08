'use client'

import Link from 'next/link'
import { Phone, MapPin, Calendar, Shield, Star, Sparkles, Award, Home, Wifi, Building2 } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

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

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView(0.2)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 40
    const id = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(id) }
      else setCount(Math.floor(start))
    }, 25)
    return () => clearInterval(id)
  }, [inView, target])
  return <span ref={ref}>{count}{suffix}</span>
}

const helpWays = [
  {
    icon: Building2,
    title: 'Physiotherapy Near Your Locality',
    desc: 'Visit our clinic in Nayapalli, IRC Village, Bhubaneswar for in-person expert care.',
    color: 'bg-primary-900 text-white',
    iconColor: 'text-accent-400',
  },
  {
    icon: Home,
    title: 'Physiotherapy at Home',
    desc: 'Our physiotherapist comes to you — ideal for post-surgery, elderly, or mobility-restricted patients.',
    color: 'bg-accent-500 text-primary-900',
    iconColor: 'text-primary-900',
  },
  {
    icon: Wifi,
    title: 'Online Physiotherapy',
    desc: 'One-on-one virtual rehabilitation sessions from the comfort of your home, anywhere.',
    color: 'bg-secondary-700 text-white',
    iconColor: 'text-accent-300',
  },
]

export default function HeroSection() {
  const { ref: heroRef, inView } = useInView(0.05)

  return (
    <>
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-clinical-slate to-clinical-slateMed pt-12 pb-20 md:py-28"
        aria-label="Hero"
        ref={heroRef}
      >
        {/* ── Abstract background curves for subtle luxury feel ── */}
        <div className="absolute top-0 right-0 w-[45%] h-[90%] rounded-bl-[150px] bg-clinical-sage opacity-50 -z-10" />
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] rounded-full bg-accent-100 opacity-30 blur-2xl -z-10" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* ── Left Content (7 columns on desktop) ── */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Trust badge */}
              <div
                className={`inline-flex items-center gap-2 bg-[#1E3F3B]/5 border border-[#1E3F3B]/10 rounded-full px-4 py-2 transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Sparkles className="w-4 h-4 text-accent-600 fill-accent-600/30" />
                <span className="text-xs font-bold text-secondary-700 tracking-widest uppercase">
                  #1 Physiotherapy Clinic in Bhubaneswar
                </span>
              </div>

              {/* Title */}
              <h1
                className={`font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-primary-900 leading-[1.1] transition-all duration-1000 delay-100 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Expert{' '}
                <span className="text-secondary-700 font-medium italic">
                  Physiotherapy
                </span>
                <br />
                for a Pain‑Free Life
              </h1>

              {/* Subtext */}
              <p
                className={`text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl transition-all duration-1000 delay-200 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Experience advanced, evidence-based rehabilitation and pain management. Spearheaded by Dr. Satya Mohanty (MPT, FIFA Diploma in Sports Medicine) in Bhubaneswar.
              </p>

              {/* Trust Pills */}
              <div
                className={`flex flex-wrap gap-2.5 transition-all duration-1000 delay-300 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {[
                  { icon: Shield, text: 'MPT Qualified MSK Specialist' },
                  { icon: Award, text: 'FIFA Sports Medicine' },
                  { icon: Star, text: 'Google 5-Star Rated Care' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 bg-white border border-stone-200/80 rounded-full px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-accent-600" />
                    {text}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-3.5 pt-2 transition-all duration-1000 delay-400 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Link
                  href="/appointment/"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary-900 px-7 py-4 font-sans font-bold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:bg-primary-800 hover:shadow-md hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>

                <a
                  href="tel:+917381455744"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary-900 bg-white px-7 py-4 font-sans font-bold text-sm tracking-wider uppercase text-primary-900 transition-all duration-300 hover:bg-slate-50 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-secondary-700" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-4 font-sans font-bold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>

                <a
                  href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-6 py-4 font-sans font-semibold text-xs tracking-wider uppercase text-slate-600 transition-all duration-300 hover:bg-slate-50 hover:text-primary-900 hover:-translate-y-0.5"
                >
                  <MapPin className="w-4 h-4 text-slate-400" />
                  Directions
                </a>
              </div>


              {/* WhatsApp note */}
              <div
                className={`text-xs text-slate-500 transition-all duration-1000 delay-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <a
                  href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20need%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary-900 transition-colors group"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Need emergency support?{' '}
                  <span className="underline underline-offset-4 font-bold text-secondary-700 group-hover:text-primary-900 transition-colors">
                    WhatsApp Us
                  </span>
                </a>
              </div>
            </div>

            {/* ── Right Column (5 columns on desktop) ── */}
            <div
              className={`lg:col-span-5 relative transition-all duration-1000 delay-200 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative mx-auto max-w-[450px] lg:max-w-none">
                
                {/* Main clinic image frame */}
                <div className="relative bg-white p-3 rounded-3xl border border-stone-200/60 shadow-elegant overflow-hidden">
                  <img
                    src="/images/hero-clinic.png"
                    alt="Vautika Physiotherapy Treatment Room"
                    className="rounded-2xl w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
                  />
                </div>

                {/* Stats overlay card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-stone-200/80 shadow-elegant p-4 max-w-[200px] animate-float">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Clinic Success</p>
                  <div className="space-y-2">
                    <div>
                      <p className="font-display font-bold text-xl text-primary-900">
                        <Counter target={500} suffix="+" />
                      </p>
                      <p className="text-[11px] text-slate-500 leading-tight">Satisfied Patients</p>
                    </div>
                    <div className="border-t border-stone-100 pt-2 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-accent-500 fill-accent-500" />
                      <span className="font-sans font-bold text-xs text-primary-900">5.0 Rating</span>
                      <span className="text-[10px] text-slate-400">on Google</span>
                    </div>
                  </div>
                </div>

                {/* Doctor credential tag */}
                <div
                  className="absolute -top-5 -right-5 bg-[#0F1E36] text-white rounded-2xl shadow-elegant p-4 max-w-[220px]"
                  style={{ animation: 'float 6s ease-in-out infinite 3s' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent-500 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4 text-primary-900" />
                    </div>
                    <div>
                      <p className="font-sans font-bold text-xs leading-snug">
                        Dr. Satya Mohanty
                      </p>
                      <p className="text-[9px] text-accent-300 font-medium tracking-wide mt-0.5">MPT • FIFA Sports Medicine</p>
                    </div>
                  </div>
                </div>

                {/* Timing badge */}
                <div
                  className="absolute top-1/2 -right-6 rounded-2xl shadow-elegant bg-accent-500 text-primary-900 px-4 py-3 border border-accent-300/30"
                  style={{ animation: 'float 8s ease-in-out infinite 1.5s' }}
                >
                  <p className="text-[9px] font-extrabold uppercase tracking-widest opacity-85">Hours Today</p>
                  <p className="font-sans font-black text-sm">9 AM – 9 PM</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3 Ways Vautika Can Help ── */}
      <section className="py-16 bg-white" id="how-we-help">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge mb-4">How We Reach You</span>
            <h2 className="section-title mb-3">
              Vautika Can Help You <span className="font-medium italic text-secondary-700">3 Ways</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Whether you visit us, we come to you, or we connect online — expert physiotherapy is always accessible.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {helpWays.map(({ icon: Icon, title, desc, color, iconColor }, i) => (
              <div
                key={title}
                className={`relative rounded-2xl p-8 flex flex-col gap-4 shadow-card hover:-translate-y-1 transition-all duration-300 ${color}`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <div>
                  <p className="font-display font-bold text-lg leading-snug mb-2">{title}</p>
                  <p className="text-sm opacity-80 leading-relaxed">{desc}</p>
                </div>
                <div className="absolute top-4 right-4 text-4xl font-black opacity-10">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment/"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-primary-900 text-white font-sans font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-primary-800 hover:-translate-y-0.5 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book an Appointment
            </Link>
            <a
              href="https://wa.me/917381455744?text=I%20would%20like%20to%20book%20a%20home%20visit%20physiotherapy%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-primary-900 bg-white text-primary-900 font-sans font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-slate-50 hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4 text-secondary-700" />
              Request Home Visit
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
