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
    <section className="section-padding bg-clinical-sage">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Timings */}
          <div>
            <span className="badge mb-4">
              Clinic Timings
            </span>
            <h2 className="section-title mb-2">
              Visit Us at Your <span className="font-medium italic text-secondary-700">Convenience</span>
            </h2>
            <p className="text-slate-500 mb-8 text-sm">
              We are open 7 days a week to serve your physiotherapy needs.
            </p>

            <div className="bg-white rounded-2xl border border-stone-200/50 shadow-elegant overflow-hidden">
              {schedule.map(({ day, hours, open }, i) => (
                <div
                  key={day}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i !== schedule.length - 1 ? 'border-b border-stone-100' : ''
                  } ${day === currentDay ? 'bg-slate-50/70' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    {day === currentDay && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    <span
                      className={`font-display font-bold text-sm ${
                        day === currentDay
                          ? 'text-primary-900'
                          : 'text-slate-700'
                      }`}
                    >
                      {day}
                      {day === currentDay && (
                        <span className="ml-2 text-xs text-emerald-600 font-normal">(Today)</span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">{hours}</span>
                    {open && (
                      <span className="badge py-0.5 text-[9px] border-emerald-200 bg-emerald-50 text-emerald-700">
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
              <span className="badge mb-4">
                Contact &amp; Location
              </span>
              <h2 className="section-title mb-6">
                Find Us &amp; <span className="font-medium italic text-secondary-700">Reach Out</span>
              </h2>
            </div>

            {/* Contact cards */}
            <div className="grid gap-4">
              <a
                href="tel:+917381455744"
                className="flex items-center gap-4 p-5 bg-white border border-stone-200/50 rounded-2xl shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#1E3F3B]/5 transition-colors">
                  <Phone className="w-5 h-5 text-secondary-700 group-hover:text-accent-600 transition-colors" />
                </div>
                <div>
                  <p className="font-display font-bold text-primary-900">
                    7381455744
                  </p>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Click to call now</p>
                </div>
              </a>

              <a
                href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white border border-stone-200/50 rounded-2xl shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EBF7F4] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-display font-bold text-primary-900">
                    WhatsApp Us
                  </p>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Quick consultation booking</p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white border border-stone-200/50 rounded-2xl shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#1E3F3B]/5 transition-colors">
                  <MapPin className="w-5 h-5 text-secondary-700 group-hover:text-accent-600 transition-colors" />
                </div>
                <div>
                  <p className="font-display font-bold text-primary-900">
                    Get Directions
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">
                    Plot N2/19, IRC Village, Nayapalli, Bhubaneswar
                  </p>
                </div>
              </a>
            </div>

            <Link
              href="/appointment/"
              className="inline-flex items-center justify-center w-full py-4 rounded-xl font-sans font-bold text-sm tracking-wider uppercase bg-primary-900 text-white hover:bg-primary-800 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
            >
              Book Your Appointment Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
