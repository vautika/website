import Link from 'next/link'
import { Clock, Phone, MapPin, MessageCircle } from 'lucide-react'

const schedule = [
  { day: 'Monday', hours: '9:00 AM – 9:00 PM', open: true },
  { day: 'Tuesday', hours: '9:00 AM – 9:00 PM', open: true },
  { day: 'Wednesday', hours: '9:00 AM – 9:00 PM', open: true },
  { day: 'Thursday', hours: '9:00 AM – 9:00 PM', open: true },
  { day: 'Friday', hours: '9:00 AM – 9:00 PM', open: true },
  { day: 'Saturday', hours: '9:00 AM – 9:00 PM', open: true },
  { day: 'Sunday', hours: '8:00 AM – 1:00 PM', open: true },
]

export default function TimingsSection() {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timings */}
          <div>
            <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 mb-4">
              Clinic Timings
            </span>
            <h2 className="section-title mb-2">
              Visit Us at Your{' '}
              <span className="gradient-text">Convenience</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
              We are open 7 days a week to serve your physiotherapy needs.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card overflow-hidden">
              {schedule.map(({ day, hours, open }, i) => (
                <div
                  key={day}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i !== schedule.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''
                  } ${day === currentDay ? 'bg-primary-50 dark:bg-primary-900/20' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    {day === currentDay && (
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    )}
                    <span
                      className={`font-display font-semibold text-sm ${
                        day === currentDay
                          ? 'text-primary-900 dark:text-primary-300'
                          : 'text-gray-700 dark:text-gray-200'
                      }`}
                    >
                      {day}
                      {day === currentDay && (
                        <span className="ml-2 text-xs text-green-600 font-normal">(Today)</span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{hours}</span>
                    {open && (
                      <span className="badge bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs py-0.5">
                        Open
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Location */}
          <div className="space-y-6">
            <div>
              <span className="badge bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mb-4">
                Contact & Location
              </span>
              <h2 className="section-title mb-6">
                Find Us &{' '}
                <span className="gradient-text">Reach Out</span>
              </h2>
            </div>

            {/* Contact cards */}
            <div className="grid gap-4">
              <a
                href="tel:+917381455744"
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-gray-900 dark:text-white">
                    7381455744
                  </p>
                  <p className="text-sm text-gray-500">Click to call now</p>
                </div>
              </a>

              <a
                href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-gray-900 dark:text-white">
                    WhatsApp Us
                  </p>
                  <p className="text-sm text-gray-500">Quick appointment booking</p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-gray-900 dark:text-white">
                    Get Directions
                  </p>
                  <p className="text-sm text-gray-500">
                    Plot N2/19, Simpleekare, IRC Village, Nayapalli, Bhubaneswar
                  </p>
                </div>
              </a>
            </div>

            <Link href="/appointment/" className="btn-accent w-full text-center block">
              Book Your Appointment Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
