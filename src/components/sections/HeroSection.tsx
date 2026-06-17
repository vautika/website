'use client'

import Link from 'next/link'
import { Phone, MapPin, Calendar, Shield, Star, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-secondary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-accent-400 fill-accent-400" />
              <span className="text-sm font-medium text-white/90">
                Best Physiotherapy Clinic in Bhubaneswar
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Physiotherapy &{' '}
              <span className="text-accent-400">Rehabilitation</span> Care for a Pain‑Free Life
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Helping Patients Recover Faster Through Advanced Physiotherapy, Rehabilitation & Sports Medicine in Bhubaneswar, Odisha.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Shield, text: 'MPT Qualified' },
                { icon: Star, text: 'FIFA Sports Medicine' },
                { icon: Shield, text: 'Evidence Based' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-white/80">
                  <Icon className="w-4 h-4 text-accent-400" />
                  {text}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/appointment/"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-display font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-glow-accent hover:-translate-y-0.5 text-base"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href="tel:+917381455744"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-display font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-display font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            {/* Emergency CTA */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20need%20an%20emergency%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors underline underline-offset-4"
              >
                Emergency Consultation? WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white">
                {/* Inline SVG illustration */}
                <svg viewBox="0 0 400 320" className="w-full h-64 mb-6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  {/* Background */}
                  <rect width="400" height="320" rx="16" fill="rgba(255,255,255,0.05)" />

                  {/* Therapy table */}
                  <rect x="80" y="200" width="240" height="16" rx="8" fill="rgba(255,255,255,0.3)" />
                  <rect x="100" y="216" width="8" height="60" rx="4" fill="rgba(255,255,255,0.2)" />
                  <rect x="292" y="216" width="8" height="60" rx="4" fill="rgba(255,255,255,0.2)" />

                  {/* Patient lying */}
                  <ellipse cx="200" cy="196" rx="100" ry="12" fill="rgba(255,255,255,0.15)" />
                  {/* Patient body */}
                  <rect x="120" y="176" width="130" height="24" rx="12" fill="rgba(255,255,255,0.4)" />
                  {/* Patient head */}
                  <circle cx="265" cy="185" r="16" fill="rgba(255,255,255,0.5)" />
                  {/* Patient legs */}
                  <rect x="90" y="180" width="50" height="16" rx="8" fill="rgba(255,255,255,0.4)" />

                  {/* Therapist */}
                  {/* Body */}
                  <rect x="168" y="120" width="32" height="52" rx="8" fill="#F59E0B" />
                  {/* Head */}
                  <circle cx="184" cy="108" r="16" fill="#F59E0B" />
                  {/* Arms - treating patient */}
                  <path d="M168 136 Q140 148 120 160" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" fill="none" />
                  <path d="M200 136 Q220 148 240 158" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" fill="none" />
                  {/* Legs */}
                  <rect x="170" y="172" width="12" height="40" rx="6" fill="#4F2D7F" />
                  <rect x="186" y="172" width="12" height="40" rx="6" fill="#4F2D7F" />

                  {/* Healing sparkles */}
                  <circle cx="100" cy="100" r="4" fill="#F59E0B" opacity="0.8" />
                  <circle cx="290" cy="80" r="6" fill="#0F766E" opacity="0.8" />
                  <circle cx="320" cy="150" r="4" fill="#F59E0B" opacity="0.6" />
                  <circle cx="70" cy="160" r="5" fill="#0F766E" opacity="0.6" />

                  {/* Cross symbol */}
                  <rect x="52" y="56" width="24" height="8" rx="4" fill="white" opacity="0.6" />
                  <rect x="60" y="48" width="8" height="24" rx="4" fill="white" opacity="0.6" />

                  {/* Recovery arrow */}
                  <path d="M310 100 Q340 80 360 100 Q340 120 310 100Z" fill="#0F766E" opacity="0.7" />

                  {/* Text labels */}
                  <text x="200" y="290" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="13" fill="rgba(255,255,255,0.7)" fontWeight="600">
                    Professional Physiotherapy Session
                  </text>
                </svg>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { val: '500+', label: 'Patients Treated' },
                    { val: '5★', label: 'Google Rating' },
                    { val: '5+', label: 'Years Experience' },
                  ].map(({ val, label }) => (
                    <div key={label} className="text-center">
                      <p className="font-display font-bold text-2xl text-accent-400">{val}</p>
                      <p className="text-xs text-white/70 mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating doctor badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-gray-900 dark:text-white">
                      Dr. Satya Mohanty (PT)
                    </p>
                    <p className="text-xs text-gray-500">MPT (MSK) • FIFA Sports Medicine</p>
                  </div>
                </div>
              </div>

              {/* Timing badge */}
              <div className="absolute -top-6 -right-4 bg-accent-500 text-white rounded-2xl shadow-xl px-4 py-3">
                <p className="text-xs font-semibold opacity-80">Open Today</p>
                <p className="font-display font-bold text-sm">9 AM – 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  )
}
