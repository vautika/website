import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, GraduationCap, Trophy, CheckCircle2, Star, Calendar, Phone, MapPin, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dr. Satya Mohanty (PT) | Best Physiotherapist in Bhubaneswar | Vautika',
  description:
    'Meet Dr. Satya Mohanty (PT), MPT in Musculoskeletal Physiotherapy & FIFA Diploma in Sports Medicine. Expert Physiotherapist & Rehabilitation Specialist in Bhubaneswar, Odisha.',
  alternates: { canonical: 'https://vautika.in/dr-profiles/' },
}

const qualifications = [
  {
    icon: GraduationCap,
    degree: 'MPT – Musculoskeletal Physiotherapy',
    institution: 'Master of Physiotherapy (Musculoskeletal)',
    year: '2019',
    color: 'bg-primary-50 border-primary-200 text-primary-900',
    iconColor: 'text-primary-700',
  },
  {
    icon: Trophy,
    degree: 'FIFA Diploma in Sports Medicine',
    institution: 'Fédération Internationale de Football Association (FIFA)',
    year: '2021',
    color: 'bg-accent-50 border-accent-200 text-accent-800',
    iconColor: 'text-accent-700',
  },
  {
    icon: Award,
    degree: 'BPT – Bachelor of Physiotherapy',
    institution: 'Bachelor of Physiotherapy',
    year: '2017',
    color: 'bg-secondary-50 border-secondary-200 text-secondary-800',
    iconColor: 'text-secondary-700',
  },
]

const specializations = [
  { area: 'Musculoskeletal Physiotherapy', desc: 'Expert in diagnosing and treating bones, joints, and muscle disorders.' },
  { area: 'Sports Injury Management', desc: 'FIFA-certified sports medicine knowledge for rapid athlete recovery.' },
  { area: 'Orthopedic Rehabilitation', desc: 'Post-surgical and orthopedic injury rehabilitation protocols.' },
  { area: 'Neuro Rehabilitation', desc: 'Stroke, Parkinson\'s, and neurological condition management.' },
  { area: 'Pain Management', desc: 'Evidence-based multimodal approach to chronic and acute pain.' },
  { area: 'Manual Therapy', desc: 'Hands-on joint mobilization and soft tissue techniques.' },
  { area: 'Home Based Physiotherapy', desc: 'Expert home visit sessions for patients who cannot travel.' },
  { area: 'Online Virtual Rehabilitation', desc: 'One-on-one virtual sessions accessible from anywhere.' },
  { area: 'Sports Performance Enhancement', desc: 'Training programs to optimize athletic performance and prevent injury.' },
  { area: 'Post-Surgical Rehab', desc: 'Comprehensive recovery programs after orthopedic surgeries.' },
  { area: 'Dry Needling', desc: 'Myofascial pain relief through scientific needling techniques.' },
  { area: 'Electrotherapy & Laser Therapy', desc: 'Advanced modalities for accelerated healing.' },
]

const stats = [
  { val: '5+', label: 'Years of Clinical Experience' },
  { val: '500+', label: 'Patients Successfully Treated' },
  { val: '5.0★', label: 'Google Patient Rating' },
  { val: '100%', label: 'Evidence-Based Practice' },
]

const achievements = [
  'FIFA Diploma in Sports Medicine — the global gold standard in sports rehabilitation',
  'Masters in Musculoskeletal Physiotherapy with distinction',
  'Expertise in treating professional athletes and national-level sports teams',
  'Pioneer in bringing home-based and online physiotherapy to Bhubaneswar',
  'Founder of Vautika Physiotherapy & Rehabilitation Centre',
  'Consistently rated 5 stars by patients on Google',
]

export default function DrProfilesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="gradient-bg py-20 md:py-28">
        <div className="container-custom text-white text-center">
          <span className="badge bg-white/20 text-white mb-4">Our Expert Team</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Meet Our Physiotherapists
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Expert, compassionate, and internationally qualified — committed to getting you back to your best.
          </p>
        </div>
      </div>

      <div className="container-custom py-12 md:py-20">

        {/* Dr. Satya Mohanty Profile Card */}
        <div className="max-w-5xl mx-auto">
          
          {/* Profile Header */}
          <div className="bg-white rounded-3xl border-2 border-primary-100 shadow-xl overflow-hidden mb-8">
            {/* Top color bar */}
            <div className="h-2 bg-gradient-to-r from-primary-900 via-accent-500 to-secondary-700" />

            <div className="grid md:grid-cols-3 gap-0">
              {/* Left panel - dark */}
              <div className="bg-primary-900 text-white p-8 md:p-10 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-36 h-36 rounded-full bg-white/10 border-4 border-accent-500/40 flex items-center justify-center overflow-hidden shadow-xl">
                    <svg viewBox="0 0 160 160" className="w-28 h-28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="80" cy="52" r="28" fill="rgba(255,255,255,0.1)" />
                      <circle cx="71" cy="49" r="3" fill="white" />
                      <circle cx="89" cy="49" r="3" fill="white" />
                      <path d="M72 62 Q80 69 88 62" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                      <path d="M50 88 L80 76 L110 88 L114 145 L46 145 Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                      <path d="M80 76 L74 100 L80 110 L86 100 Z" fill="white" />
                      <path d="M58 97 Q52 114 58 125 Q64 136 77 130" stroke="#BCA374" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                      <circle cx="77" cy="130" r="5" fill="#BCA374" />
                    </svg>
                  </div>
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-primary-900">
                    <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </div>
                </div>

                <h2 className="font-display font-bold text-2xl mb-1">Dr. Satya Mohanty</h2>
                <p className="text-accent-400 font-semibold text-sm mb-1">PT, MPT (MSK)</p>
                <p className="text-white/60 text-xs mb-4">Physiotherapist & Sports Medicine Specialist</p>

                {/* Star rating */}
                <div className="flex items-center justify-center gap-1 mb-5">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <p className="text-xs text-white/60 mb-6">5.0 on Google</p>

                <div className="space-y-3 w-full">
                  <a
                    href="tel:+917381455744"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-accent-500 text-primary-900 rounded-xl font-bold text-sm font-sans tracking-wider uppercase hover:bg-accent-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Dr. Mohanty
                  </a>
                  <Link
                    href="/appointment/"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm font-sans tracking-wider uppercase hover:bg-white/20 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Link>
                </div>
              </div>

              {/* Right panel */}
              <div className="md:col-span-2 p-8 md:p-10">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 text-xs font-bold text-emerald-700 mb-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Currently Accepting Patients
                    </div>
                    <h3 className="font-display font-bold text-xl text-primary-900">About Dr. Satya Mohanty</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-accent-50 border border-accent-200 rounded-2xl p-3 text-center shrink-0">
                    <div>
                      <p className="font-display font-black text-2xl text-primary-900 leading-none">5+</p>
                      <p className="text-[10px] font-bold text-slate-500 leading-tight mt-0.5">Years Exp.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8">
                  <p>
                    Dr. Satya Mohanty (PT) is the founder and principal physiotherapist at Vautika Physiotherapy & Rehabilitation Centre, Bhubaneswar. With a Master&apos;s degree in Musculoskeletal Physiotherapy (MPT-MSK) and an internationally recognized FIFA Diploma in Sports Medicine, he brings world-class expertise to every patient.
                  </p>
                  <p>
                    His FIFA Sports Medicine certification is a globally prestigious qualification — the same standards applied to elite international athletes worldwide. This sets Dr. Mohanty apart as one of the most qualified sports physiotherapists in Odisha.
                  </p>
                  <p>
                    Whether you&apos;re a professional athlete needing rapid recovery, a senior managing chronic pain, or someone recovering from surgery — Dr. Mohanty designs a personalized, evidence-based plan tailored to your unique needs and goals.
                  </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {stats.map(({ val, label }) => (
                    <div key={label} className="bg-slate-50 rounded-2xl p-3 text-center border border-stone-200">
                      <p className="font-display font-bold text-xl text-primary-900">{val}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Location badge */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4 text-accent-500 shrink-0" />
                  <span>Plot N2/19, IRC Village, Nayapalli, Bhubaneswar, Odisha</span>
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {qualifications.map(({ icon: Icon, degree, institution, year, color, iconColor }) => (
              <div key={degree} className={`rounded-2xl border p-6 ${color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <span className="text-xs font-bold opacity-60">{year}</span>
                </div>
                <h3 className="font-display font-bold text-base leading-snug mb-1">{degree}</h3>
                <p className="text-xs opacity-70 leading-relaxed">{institution}</p>
              </div>
            ))}
          </div>

          {/* Specializations */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-card p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-secondary-700" />
              <h2 className="font-display font-bold text-xl text-primary-900">Areas of Specialization</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializations.map(({ area, desc }) => (
                <div key={area} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-primary-50 transition-colors border border-transparent hover:border-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-secondary-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-primary-900 leading-snug">{area}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-gradient-to-br from-primary-900 to-secondary-700 rounded-3xl p-8 mb-8 text-white">
            <h2 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent-400" />
              Key Achievements & Highlights
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {achievements.map((ach) => (
                <li key={ach} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0 mt-1.5" />
                  {ach}
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy Quote */}
          <div className="bg-accent-50 border-l-4 border-accent-500 rounded-r-2xl p-6 mb-8">
            <p className="font-display text-lg text-primary-900 italic leading-relaxed">
              &quot;Every patient who walks through our door deserves the best possible care — evidence-based, personalized, and compassionate. At Vautika, we don&apos;t just treat conditions, we restore lives.&quot;
            </p>
            <p className="text-accent-700 font-semibold text-sm mt-3">— Dr. Satya Mohanty (PT)</p>
          </div>

          {/* Reach out CTA */}
          <div className="bg-white border border-stone-200 rounded-3xl shadow-card p-8 text-center">
            <h2 className="font-display font-bold text-2xl text-primary-900 mb-3">
              Ready to Begin Your Recovery?
            </h2>
            <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
              Book a consultation with Dr. Satya Mohanty and take the first step toward a pain-free, active life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/appointment/"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-primary-900 text-white font-bold text-sm font-sans tracking-wider uppercase hover:bg-primary-800 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
              <a
                href="https://wa.me/917381455744?text=Hello%20Dr.%20Mohanty%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-primary-900 text-primary-900 bg-white font-bold text-sm font-sans tracking-wider uppercase hover:bg-slate-50 transition-all hover:-translate-y-0.5"
              >
                WhatsApp Dr. Mohanty
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
