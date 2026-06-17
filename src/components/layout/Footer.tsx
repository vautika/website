'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight, Heart, Calendar } from 'lucide-react'

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
      {/* ── CTA Banner (Warm Sand Luxury Block) ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FAFAF9] to-[#EAEFEF] py-16 border-t border-b border-stone-200/50">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-accent-100 opacity-20 blur-[80px]" />

        <div className="container-custom relative text-center">
          <div className="inline-flex items-center gap-2 bg-secondary-700/5 border border-secondary-700/10 rounded-full px-4 py-1.5 text-xs text-secondary-700 font-bold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Ready to Begin Your Recovery?
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 tracking-tight leading-tight">
            Start Your Journey to a <span className="font-medium italic text-secondary-700">Pain-Free</span> Life
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule your personalized consultation with Dr. Satya Mohanty today and take your first step toward active recovery.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment/"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-sans font-bold text-sm tracking-wider uppercase bg-primary-900 text-white transition-all duration-300 hover:bg-primary-800 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              <Calendar className="w-4.5 h-4.5" />
              Book Appointment
            </Link>
            
            <a
              href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-stone-300 bg-white font-sans font-bold text-sm tracking-wider uppercase text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+917381455744"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-primary-900 bg-white font-sans font-bold text-sm tracking-wider uppercase text-primary-900 transition-all duration-300 hover:bg-slate-50 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-secondary-700" />
              7381455744
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer (Luxury Dark Navy Panel) ── */}
      <div
        className="bg-[#0B1325] text-white/90 relative overflow-hidden"
        ref={ref}
      >
        <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-secondary-900/10 blur-[80px]" />

        <div className="container-custom relative py-16 md:py-20">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <img
                src="/website/images/logo.png"
                alt="Vautika Logo"
                className="h-10 w-auto object-contain"
              />
              <p className="text-sm text-slate-400 leading-relaxed">
                Bhubaneswar's premier clinical centre for advanced, evidence-based physiotherapy, injury recovery, and pain rehabilitation.
              </p>
              <div className="space-y-3.5">
                {[
                  { icon: Phone, label: '7381455744', href: 'tel:+917381455744' },
                  { icon: Mail, label: 'vautika.info@gmail.com', href: 'mailto:vautika.info@gmail.com' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-accent-400 transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-950 transition-colors">
                      <Icon className="w-3.5 h-3.5 text-accent-500" />
                    </span>
                    {label}
                  </a>
                ))}
                
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-500" />
                  </span>
                  <span className="leading-relaxed">Plot N2/19, IRC Village, Nayapalli, Bhubaneswar</span>
                </div>
                
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-accent-500" />
                  </span>
                  <div className="leading-relaxed text-xs">
                    <p>Mon–Sat: 9:00 AM – 9:00 PM</p>
                    <p>Sun: 8:00 AM – 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-sans font-bold text-white text-xs uppercase tracking-widest mb-6">
                Navigation
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent-400 transition-all duration-200 group"
                    >
                      <ArrowRight className="w-3 h-3 text-accent-500 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="font-sans font-bold text-white text-xs uppercase tracking-widest mb-6">
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services/"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent-400 transition-all duration-200 group"
                    >
                      <ArrowRight className="w-3 h-3 text-accent-500 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Conditions & Certs */}
            <div className="space-y-8">
              <div>
                <h3 className="font-sans font-bold text-white text-xs uppercase tracking-widest mb-4">
                  Conditions Treated
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {conditions.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] bg-white/5 border border-white/5 text-slate-300 px-2.5 py-1.5 rounded-lg cursor-default hover:bg-white/10 transition-colors"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-sans font-bold text-white text-xs uppercase tracking-widest mb-3">
                  Certifications
                </h3>
                <div className="space-y-1.5 text-xs text-slate-400">
                  {['MPT – Musculoskeletal Specialist', 'FIFA Sports Medicine Diploma', 'Evidence Based Clinical Care'].map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent-500 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60">
          <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-slate-500">
            <p>© {year} Vautika Physiotherapy &amp; Rehabilitation Centre. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Clinical Excellence <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> in Bhubaneswar
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy/" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
              <span className="text-slate-700">|</span>
              <a
                href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors"
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
