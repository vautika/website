import Link from 'next/link'
import { Award, GraduationCap, Star, Trophy, ArrowRight } from 'lucide-react'

export default function DoctorSection() {
  return (
    <section className="section-padding gradient-bg-light dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Doctor visual */}
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden p-8">
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 gradient-bg" />

              {/* Doctor avatar SVG */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full gradient-bg flex items-center justify-center shadow-2xl">
                    <svg viewBox="0 0 160 160" className="w-36 h-36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      {/* Doctor illustration */}
                      <circle cx="80" cy="55" r="28" fill="rgba(255,255,255,0.9)" />
                      {/* Face features */}
                      <circle cx="71" cy="52" r="3" fill="#4F2D7F" />
                      <circle cx="89" cy="52" r="3" fill="#4F2D7F" />
                      <path d="M72 64 Q80 70 88 64" stroke="#4F2D7F" strokeWidth="2" strokeLinecap="round" fill="none" />
                      {/* Doctor coat */}
                      <path d="M52 88 L80 78 L108 88 L112 140 L48 140 Z" fill="white" />
                      {/* Collar/tie */}
                      <path d="M80 78 L74 100 L80 108 L86 100 Z" fill="#4F2D7F" />
                      {/* Stethoscope */}
                      <path d="M60 95 Q55 110 60 120 Q65 130 75 125" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" fill="none" />
                      <circle cx="75" cy="125" r="5" fill="#0F766E" />
                    </svg>
                  </div>
                  {/* Online indicator */}
                  <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-1">
                  Dr. Satya Mohanty
                </h3>
                <p className="text-primary-900 dark:text-primary-300 font-semibold text-sm mb-3">
                  Physiotherapist & Sports Medicine Specialist
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-accent-400 fill-accent-400" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1 mt-0.5">5.0 Rating</span>
                </div>
              </div>

              {/* Qualifications */}
              <div className="space-y-3">
                {[
                  { icon: GraduationCap, label: 'MPT – Musculoskeletal Physiotherapy', color: 'text-primary-900' },
                  { icon: Trophy, label: 'Diploma in Sports Medicine (FIFA)', color: 'text-accent-600' },
                  { icon: Award, label: 'Certified Rehabilitation Specialist', color: 'text-secondary-600' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <Icon className={`w-5 h-5 ${color} shrink-0`} />
                    <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating achievement */}
            <div className="absolute -top-4 -right-4 bg-accent-500 text-white rounded-2xl p-4 shadow-xl">
              <p className="font-display font-bold text-2xl">5+</p>
              <p className="text-xs font-medium opacity-90">Years Expert<br/>Practice</p>
            </div>
          </div>

          {/* Right: Bio */}
          <div>
            <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 mb-4">
              Meet Your Doctor
            </span>
            <h2 className="section-title mb-6">
              Led by a{' '}
              <span className="gradient-text">World-Class</span>{' '}
              Physiotherapist
            </h2>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              <p>
                Dr. Satya Mohanty (PT) is a highly qualified physiotherapist with a Master's degree in Musculoskeletal Physiotherapy (MPT-MSK) and a prestigious Diploma in Sports Medicine from FIFA — the world's governing body for football.
              </p>
              <p>
                With over 5 years of clinical experience, Dr. Mohanty has treated hundreds of patients ranging from professional athletes to elderly individuals, always with the same commitment to evidence-based, patient-centered care.
              </p>
              <p>
                His expertise spans orthopedic rehabilitation, sports injury management, neuro rehabilitation, and advanced pain management techniques. He brings international standards of care to Bhubaneswar at affordable prices.
              </p>
            </div>

            {/* Specializations */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                'Musculoskeletal Physiotherapy',
                'Sports Injury Management',
                'Neuro Rehabilitation',
                'Pain Management',
                'Manual Therapy',
                'Sports Performance',
              ].map((spec) => (
                <div key={spec} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-secondary-600 shrink-0" />
                  {spec}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/appointment/" className="btn-primary inline-flex items-center gap-2">
                Book with Dr. Mohanty
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about/" className="btn-outline inline-flex items-center gap-2">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
