'use client'

import { useState } from 'react'
import { Send, MessageCircle, Phone, CheckCircle2, User, PhoneCall, FileText } from 'lucide-react'

// ─── IMPORTANT: Replace this with your deployed Google Apps Script Web App URL ───
// Instructions: see README in /docs/google-sheets-setup.md
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzChHG7_vJPtdbXnf6ZBuml_W7GRycp01vssVomOAmBgXbvshAFZix1eR4GFdJcmsU6/exec'

type Status = 'idle' | 'sending' | 'success' | 'error'

interface ContactFormProps {
  title?: string
  subtitle?: string
  compact?: boolean
  className?: string
}

export default function ContactFormSection({
  title = 'Book a Free Consultation',
  subtitle = 'Fill in your details and our team will call you back within 2 hours during clinic hours.',
  compact = false,
  className = '',
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    condition: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const conditions = [
    'Back Pain', 'Neck Pain', 'Knee Pain', 'Shoulder Pain',
    'Sports Injury', 'Post Surgery Rehab', 'Stroke/Neuro Rehab',
    'Home Visit Required', 'Online Consultation', 'Other',
  ]

  const services = [
    'Clinic Visit', 'Home Based Physiotherapy', 'Online Physiotherapy',
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return
    setStatus('sending')

    try {
      const params = new URLSearchParams({
        name: form.name,
        phone: form.phone,
        condition: form.condition,
        service: form.service,
        message: form.message,
        source: 'Website Contact Form',
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      })

      // Send to Google Sheets via Apps Script
      await fetch(`${GOOGLE_SHEETS_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      })

      // Always assume success (no-cors mode doesn't expose response)
      setStatus('success')
      setForm({ name: '', phone: '', condition: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 6000)
  }

  if (status === 'success') {
    return (
      <div className={`bg-white rounded-3xl border border-stone-200 shadow-card p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="font-display font-bold text-xl text-primary-900 mb-2">We&apos;ve got your details!</h3>
        <p className="text-slate-500 text-sm mb-6">
          Our team will call you back within 2 hours during clinic hours (9AM–9PM Mon–Sat).
        </p>
        <a
          href="https://wa.me/917381455744?text=Hello%20I%20just%20filled%20the%20contact%20form%20on%20your%20website."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-bold text-sm font-sans uppercase hover:bg-green-600 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          Also WhatsApp Us
        </a>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-3xl border border-stone-200 shadow-card overflow-hidden ${className}`}>
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-primary-900 via-accent-500 to-secondary-700" />

      <div className="p-6 md:p-8">
        <div className="mb-6">
          <h3 className="font-display font-bold text-xl md:text-2xl text-primary-900 mb-2">{title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={compact ? '' : 'grid sm:grid-cols-2 gap-4'}>
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                Your Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                Phone Number *
              </label>
              <div className="relative">
                <PhoneCall className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {!compact && (
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Condition */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                  Your Condition
                </label>
                <select
                  value={form.condition}
                  onChange={e => setForm({ ...form, condition: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 bg-white text-slate-700 transition-all"
                >
                  <option value="">Select condition</option>
                  {conditions.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                  Preferred Service
                </label>
                <select
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 bg-white text-slate-700 transition-all"
                >
                  <option value="">Select service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
          )}

          {/* Message */}
          {!compact && (
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                Message (Optional)
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea
                  placeholder="Briefly describe your concern or preferred appointment time..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>
          )}

          {status === 'error' && (
            <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-xl px-4 py-2">
              Something went wrong. Please WhatsApp us directly at 7381455744.
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-900 text-white rounded-xl font-bold text-sm font-sans tracking-wider uppercase hover:bg-primary-800 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              <Send className="w-4 h-4" />
              {status === 'sending' ? 'Sending...' : 'Request Callback'}
            </button>

            <a
              href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%2C%20I%20need%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm font-sans tracking-wider uppercase transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <a
              href="tel:+917381455744"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-stone-200 text-slate-600 rounded-xl font-bold text-sm font-sans uppercase hover:bg-slate-50 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
