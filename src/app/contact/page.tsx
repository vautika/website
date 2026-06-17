import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Vautika Physiotherapy | Bhubaneswar',
  description:
    'Contact Vautika Physiotherapy & Rehabilitation Centre in Bhubaneswar. Call 7381455744, email vautika.info@gmail.com, or visit us at IRC Village, Nayapalli.',
  alternates: { canonical: 'https://vautika.github.io/website/contact/' },
}

export default function ContactPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero */}
      <div className="gradient-bg py-24">
        <div className="container-custom text-white text-center">
          <span className="badge bg-white/20 text-white mb-4">Contact Us</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We're here to help. Reach out via call, WhatsApp, or email — or visit us directly.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact cards */}
          <div className="lg:col-span-1 space-y-4">
            <a
              href="tel:+917381455744"
              className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">Call Us</h3>
                <p className="text-primary-900 dark:text-primary-300 font-semibold">7381455744</p>
                <p className="text-xs text-gray-500 mt-1">Tap to call instantly</p>
              </div>
            </a>

            <a
              href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">WhatsApp</h3>
                <p className="text-green-600 font-semibold">Message Us</p>
                <p className="text-xs text-gray-500 mt-1">Quick appointment booking</p>
              </div>
            </a>

            <a
              href="mailto:vautika.info@gmail.com"
              className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-secondary-600 font-semibold text-sm">vautika.info@gmail.com</p>
                <p className="text-xs text-gray-500 mt-1">We reply within 24 hours</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">Address</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Plot No - N2/19, Simpleekare,<br />
                  IRC Village, Nayapalli,<br />
                  Bhubaneswar, Odisha
                </p>
                <a
                  href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-900 dark:text-primary-300 font-semibold hover:underline mt-2 inline-block"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-primary-900 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">Clinic Timings</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <div className="flex justify-between gap-4">
                    <span>Mon – Sat</span>
                    <span className="font-semibold text-gray-900 dark:text-white">9:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span className="font-semibold text-gray-900 dark:text-white">8:00 AM – 1:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card overflow-hidden h-full min-h-[500px]">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">
                  Find Us on Map
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Plot N2/19, Simpleekare, IRC Village, Nayapalli, Bhubaneswar
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0!2d85.8189!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ2LjAiTiA4NcKwNDknMDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-96"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vautika Physiotherapy Location - IRC Village, Nayapalli, Bhubaneswar"
              />
              <div className="p-4 flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2.5 px-5"
                >
                  Open in Google Maps
                </a>
                <a
                  href="tel:+917381455744"
                  className="btn-outline text-sm py-2.5 px-5"
                >
                  Call for Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
