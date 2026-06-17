'use client'

import { Phone, MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 no-print" role="complementary" aria-label="Quick contact buttons">
      {/* WhatsApp */}
      <a
        href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+917381455744"
        aria-label="Call us at 7381455744"
        className="group w-14 h-14 bg-primary-900 hover:bg-primary-800 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-pulse-slow"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  )
}
