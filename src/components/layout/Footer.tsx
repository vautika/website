'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight, Heart } from 'lucide-react'
import Logo from '@/components/ui/Logo'

function useInView(threshold = 0.05) {
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
  'Orthopedic Rehabilitation', 'Neuro Rehabilitation',
  'Sports Rehabilitation', 'Pain Management',
  'Pediatric Rehabilitation', 'Manual Therapy',
  'Laser Therapy', 'Cupping Therapy',
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Clinic', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Our Therapies', href: '/therapies/' },
  { label: 'Book Appointment', href: '/appointment/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact Us', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy/' },
]

const conditions = [
  'Back Pain', 'Neck Pain', 'Knee Pain', 'Shoulder Pain',
  'Frozen Shoulder', 'Sciatica', 'Arthritis', 'Sports Injury',
  'Post Surgery Rehab', 'Paralysis Rehab',
]

export default function Footer() {
  const { ref, inView } = useInView(0.05)
  const year = new Date().getFullYear()

  return (
    <footer className="relative" role="contentinfo">
      {/* ── CTA Banner ── */}
      <div className="relative overflow-hidden gradient-bg-animated py-16 md:py-20">
        {/* Mesh overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='33' cy='33' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-white/5 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent-500/10 blur-[60px]" />

        <div className="container-custom relative text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Ready to Begin Your Recovery?
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Start Your Journey to a{' '}
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #F4A300, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Pain-Free Life
            </span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Book your consultation with Dr. Satya Mohanty today and take the first step towards full recovery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment/"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-display font-bold text-sm text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-accent"
              style={{ background: 'linear-gradient(135deg, #F4A300, #d97706)' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Book Appointment
            </Link>
            <a
              href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-display font-bold text-sm text-white bg-white/10 border border-white/25 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+917381455744"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-display font-bold text-sm text-white/80 bg-white/8 border border-white/15 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:text-white"
            >
              <Phone className="w-4 h-4" />
              7381455744
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div
        className="bg-[#07060f] dark:bg-[#050409] relative overflow-hidden"
        ref={ref}
      >
        {/* Background lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-primary-900/20 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-secondary-900/15 blur-[60px]" />

        <div className="container-custom relative py-16 md:py-20">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Brand */}
            <div className="lg:col-span-1">
              <Logo className="h-12 w-auto mb-6" scrolled={false} />
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Bhubaneswar's premier destination for expert physiotherapy, sports rehabilitation &amp; advanced pain management.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Phone, label: '7381455744', href: 'tel:+917381455744' },
                  { icon: Mail, label: 'vautika.info@gmail.com', href: 'mailto:vautika.info@gmail.com' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-900/50 group-hover:border-primary-800 transition-all">
                      <Icon className="w-3.5 h-3.5 text-accent-500" />
                    </span>
                    {label}
                  </a>
                ))}
                <div className="flex items-start gap-3 text-sm text-gray-500">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-500" />
                  </span>
                  <span className="leading-relaxed">Plot N2/19, Simpleekare, IRC Village, Nayapalli, Bhubaneswar</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-500">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-accent-500" />
                  </span>
                  <div>
                    <p>Mon–Sat: 9:00 AM – 9:00 PM</p>
                    <p>Sun: 8:00 AM – 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold text-white text-sm mb-6 uppercase tracking-[0.15em]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-all duration-200 group"
                    >
                      <ArrowRight className="w-3 h-3 text-accent-500 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-bold text-white text-sm mb-6 uppercase tracking-[0.15em]">
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services/"
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-all duration-200 group"
                    >
                      <ArrowRight className="w-3 h-3 text-secondary-500 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions */}
            <div>
              <h3 className="font-display font-bold text-white text-sm mb-6 uppercase tracking-[0.15em]">
                Conditions Treated
              </h3>
              <div className="flex flex-wrap gap-2">
                {conditions.map((c) => (
                  <span
                    key={c}
                    className="text-[11px] bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg cursor-default transition-all duration-200"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-display font-bold text-white text-xs mb-4 uppercase tracking-[0.15em]">
                  Certifications
                </h4>
                <div className="space-y-2">
                  {['MPT – Musculoskeletal', 'FIFA Sports Medicine Diploma', 'Evidence Based Practice'].map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                      <span className="text-sm text-gray-500">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
            <p>© {year} Vautika Physiotherapy &amp; Rehabilitation Centre. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> in Bhubaneswar
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy/" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
              <span className="text-gray-700">|</span>
              <a
                href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
