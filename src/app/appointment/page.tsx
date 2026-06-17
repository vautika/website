'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Calendar, Phone, MessageCircle, CheckCircle } from 'lucide-react'

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
]

const genders = ['Male', 'Female', 'Other', 'Prefer not to say']

const conditions = [
  'Back Pain', 'Neck Pain', 'Knee Pain', 'Shoulder Pain', 'Frozen Shoulder',
  'Sciatica', 'Arthritis', 'Sports Injury', 'Post Surgery Rehab',
  'Neurological Condition', 'Pediatric Condition', 'Other',
]

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', mobile: '', email: '', age: '', gender: '',
    condition: '', problem: '', date: '', time: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, send to API/email service
    const wa = `https://wa.me/917381455744?text=${encodeURIComponent(
      `New Appointment Request:\nName: ${form.name}\nMobile: ${form.mobile}\nAge: ${form.age}\nGender: ${form.gender}\nCondition: ${form.condition}\nProblem: ${form.problem}\nPreferred Date: ${form.date}\nPreferred Time: ${form.time}`
    )}`
    window.open(wa, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-3">
            Appointment Requested!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Our Team Will Contact You Shortly.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            We've received your request for <strong>{form.date}</strong> at <strong>{form.time}</strong>.
          </p>
          <div className="flex flex-col gap-3">
            <a href="tel:+917381455744" className="btn-primary text-center">
              <Phone className="w-4 h-4 inline mr-2" />
              Call Us: 7381455744
            </a>
            <button
              onClick={() => { setSubmitted(false); setForm({ name:'',mobile:'',email:'',age:'',gender:'',condition:'',problem:'',date:'',time:'' }) }}
              className="btn-outline text-center"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero */}
      <div className="gradient-bg py-20">
        <div className="container-custom text-center text-white">
          <span className="badge bg-white/20 text-white mb-4">Book Appointment</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Schedule Your Consultation
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Take the first step towards recovery. Book your appointment with Dr. Satya Mohanty today.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-card p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">
                    Appointment Form
                  </h2>
                  <p className="text-sm text-gray-500">Fill in your details below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium font-display text-gray-700 dark:text-gray-200 mb-2">
                      Patient Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-display text-gray-700 dark:text-gray-200 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-display text-gray-700 dark:text-gray-200 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-display text-gray-700 dark:text-gray-200 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      required
                      value={form.age}
                      onChange={handleChange}
                      placeholder="Your age"
                      min="1"
                      max="120"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-display text-gray-700 dark:text-gray-200 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      required
                      value={form.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all text-sm"
                    >
                      <option value="">Select gender</option>
                      {genders.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-display text-gray-700 dark:text-gray-200 mb-2">
                      Main Condition
                    </label>
                    <select
                      name="condition"
                      value={form.condition}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all text-sm"
                    >
                      <option value="">Select condition</option>
                      {conditions.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-display text-gray-700 dark:text-gray-200 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-display text-gray-700 dark:text-gray-200 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all text-sm"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium font-display text-gray-700 dark:text-gray-200 mb-2">
                    Problem Description *
                  </label>
                  <textarea
                    name="problem"
                    required
                    value={form.problem}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your pain, symptoms, duration, and any previous treatments..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>

                <button type="submit" className="btn-accent w-full py-4 text-base">
                  Book Appointment
                </button>

                <p className="text-center text-xs text-gray-500">
                  By submitting, you agree to our{' '}
                  <a href="/privacy/" className="text-primary-900 hover:underline">Privacy Policy</a>.
                  Our team will contact you within 2 hours to confirm.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6">
              <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4">
                Quick Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+917381455744"
                  className="flex items-center gap-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-primary-900 dark:text-primary-300" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">Call Now</p>
                    <p className="text-xs text-gray-500">7381455744</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/917381455744?text=Hello%20Vautika%20Physiotherapy%20Team%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">WhatsApp</p>
                    <p className="text-xs text-gray-500">Quick booking</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-primary-900 rounded-2xl p-6 text-white">
              <h3 className="font-display font-bold text-lg mb-3">Clinic Timings</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Mon – Sat</span>
                  <span className="font-semibold">9 AM – 9 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Sunday</span>
                  <span className="font-semibold">8 AM – 1 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6">
              <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-4">
                What to Expect
              </h3>
              <div className="space-y-3">
                {[
                  { step: '01', text: 'Fill and submit the form' },
                  { step: '02', text: 'We call to confirm within 2 hours' },
                  { step: '03', text: 'Visit clinic at your scheduled time' },
                  { step: '04', text: 'Start your recovery journey' },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full gradient-bg text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {step}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
