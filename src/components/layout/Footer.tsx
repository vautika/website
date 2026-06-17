import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const services = [
  'Orthopedic Rehabilitation',
  'Neuro Rehabilitation',
  'Sports Rehabilitation',
  'Pain Management',
  'Pediatric Rehabilitation',
  'Manual Therapy',
  'Laser Therapy',
  'Cupping Therapy',
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
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-300" role="contentinfo">
      {/* CTA Banner */}
      <div className="gradient-bg py-12 md:py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book your consultation with Dr. Satya Mohanty today and take the first step towards a pain-free life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/appointment/" className="btn-accent">
              Book Appointment
            </Link>
            <a
              href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Us
            </a>
            <a href="tel:+917381455744" className="btn-ghost">
              Call: 7381455744
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo className="h-14 w-auto mb-6" scrolled={false} />
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Vautika Physiotherapy & Rehabilitation Centre is Bhubaneswar's premier destination for expert physiotherapy, sports rehabilitation, and advanced pain management.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+917381455744"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-primary-900/50 flex items-center justify-center group-hover:bg-primary-900 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-accent-400" />
                </span>
                7381455744
              </a>
              <a
                href="mailto:vautika.info@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-primary-900/50 flex items-center justify-center group-hover:bg-primary-900 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-accent-400" />
                </span>
                vautika.info@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <span className="w-8 h-8 rounded-lg bg-primary-900/50 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-400" />
                </span>
                <span>Plot N2/19, Simpleekare, IRC Village, Nayapalli, Bhubaneswar</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <span className="w-8 h-8 rounded-lg bg-primary-900/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-accent-400" />
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
            <h3 className="font-display font-bold text-white text-base mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-accent-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-6 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services/"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-secondary-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-6 uppercase tracking-wider">
              Conditions Treated
            </h3>
            <div className="flex flex-wrap gap-2">
              {conditions.map((condition) => (
                <span
                  key={condition}
                  className="text-xs bg-primary-900/30 hover:bg-primary-900/60 text-gray-300 px-3 py-1.5 rounded-lg cursor-default transition-colors"
                >
                  {condition}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="font-display font-semibold text-white text-sm mb-3 uppercase tracking-wider">
                Certifications
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-400" />
                  <span className="text-sm text-gray-400">MPT – Musculoskeletal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-400" />
                  <span className="text-sm text-gray-400">FIFA Sports Medicine Diploma</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary-400" />
                  <span className="text-sm text-gray-400">Evidence Based Practice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {year} Vautika Physiotherapy & Rehabilitation Centre. All rights reserved.
          </p>
          <p className="text-center">
            Rehab • Revive • Restore
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <a
              href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
