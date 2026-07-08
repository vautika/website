'use client'

import { useState, useEffect } from 'react'
import { X, MessageCircle, Phone, Send, CheckCircle2, User, PhoneCall } from 'lucide-react'

// ─── Replace with your deployed Google Apps Script Web App URL ───
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzChHG7_vJPtdbXnf6ZBuml_W7GRycp01vssVomOAmBgXbvshAFZix1eR4GFdJcmsU6/exec'

const POPUP_DELAY_MS = 25000 // Show after 25 seconds
const POPUP_COOLDOWN_DAYS = 3 // Don't show again for 3 days

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPopup() {
  const [visible, setVisible] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '' })
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    // Check if popup was recently dismissed
    try {
      const lastClosed = localStorage.getItem('vautika_popup_closed')
      if (lastClosed) {
        const daysDiff = (Date.now() - parseInt(lastClosed)) / (1000 * 60 * 60 * 24)
        if (daysDiff < POPUP_COOLDOWN_DAYS) return
      }
    } catch {}

    // Show after delay
    const timer = setTimeout(() => {
      setVisible(true)
    }, POPUP_DELAY_MS)

    // Also show on exit intent (mouse leaving top of viewport)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        clearTimeout(timer)
        setVisible(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleClose = () => {
    setVisible(false)
    try {
      localStorage.setItem('vautika_popup_closed', Date.now().toString())
    } catch {}
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return
    setStatus('sending')

    try {
      const params = new URLSearchParams({
        name: form.name,
        phone: form.phone,
        source: 'Website Popup',
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      })

      await fetch(`${GOOGLE_SHEETS_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      })

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        className="fixed z-[999] bottom-4 right-4 md:bottom-8 md:right-8 w-[calc(100vw-2rem)] max-w-sm shadow-2xl transition-all duration-500"
        role="dialog"
        aria-modal="true"
        aria-label="Free consultation offer"
      >
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* Top gradient bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary-900 via-accent-500 to-secondary-700" />

          {/* Header */}
          <div className="relative bg-primary-900 px-6 py-5">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
              aria-label="Close popup"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-start gap-3 pr-8">
              <div className="w-10 h-10 bg-accent-500 rounded-2xl flex items-center justify-center shrink-0 text-lg">
                🏥
              </div>
              <div>
                <p className="text-xs font-bold text-accent-400 uppercase tracking-widest mb-1">
                  Limited Slots Today
                </p>
                <h3 className="font-display font-bold text-white text-lg leading-snug">
                  Get a Free Callback from Dr. Mohanty
                </h3>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs text-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Clinic Open Now — 9AM to 9PM
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {status === 'success' ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                </div>
                <p className="font-display font-bold text-lg text-primary-900 mb-1">
                  We&apos;ll call you back!
                </p>
                <p className="text-slate-500 text-sm mb-4">
                  Our team will reach you within 2 hours during clinic hours.
                </p>
                <button
                  onClick={handleClose}
                  className="text-xs text-slate-400 hover:text-slate-600 underline"
                >
                  Close this window
                </button>
              </div>
            ) : (
              <>
                <p className="text-slate-500 text-sm mb-5">
                  Leave your name & number. Dr. Mohanty&apos;s team will call you back to discuss your condition and schedule an appointment.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <PhoneCall className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 transition-all"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-xs">Failed to send. Please WhatsApp us instead.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary-900 text-white rounded-xl font-bold text-sm font-sans tracking-wider uppercase hover:bg-primary-800 transition-all disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'sending' ? 'Sending...' : 'Request Free Callback'}
                  </button>

                  <div className="flex gap-2">
                    <a
                      href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%2C%20I%20saw%20your%20popup%20and%20want%20to%20book."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleClose}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-xs font-sans uppercase transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                    <a
                      href="tel:+917381455744"
                      onClick={handleClose}
                      className="flex-1 flex items-center justify-center gap-2 py-3 border border-stone-200 text-slate-600 rounded-xl font-bold text-xs font-sans uppercase hover:bg-slate-50 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Now
                    </a>
                  </div>
                </form>

                <button
                  onClick={handleClose}
                  className="w-full text-center text-xs text-slate-400 hover:text-slate-600 mt-3 transition-colors"
                >
                  No thanks, I&apos;ll browse on my own
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
