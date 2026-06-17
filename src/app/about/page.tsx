import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, GraduationCap, Trophy, Heart, Star, Shield, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Vautika Physiotherapy | Dr. Satya Mohanty (PT) Bhubaneswar',
  description:
    'Learn about Vautika Physiotherapy & Rehabilitation Centre and Dr. Satya Mohanty (PT), MPT (MSK), FIFA Sports Medicine Diploma. Best physiotherapy clinic in Bhubaneswar, Odisha.',
  alternates: { canonical: 'https://vautikaphysiotherapy.com/about/' },
}

const milestones = [
  { year: '2019', title: 'Clinic Founded', desc: 'Vautika Physiotherapy & Rehabilitation Centre established in Bhubaneswar.' },
  { year: '2020', title: 'Advanced Equipment', desc: 'Introduced laser therapy, electrotherapy, and modern rehabilitation equipment.' },
  { year: '2021', title: 'Sports Medicine', desc: 'Dr. Mohanty completed prestigious FIFA Diploma in Sports Medicine.' },
  { year: '2022', title: '200+ Patients', desc: 'Crossed 200+ successfully treated patients across Bhubaneswar.' },
  { year: '2023', title: 'Expanded Services', desc: 'Added pediatric rehabilitation and neuro rehab specializations.' },
  { year: '2024+', title: 'Growing Excellence', desc: '500+ patients treated, consistently rated 5 stars by patients.' },
]

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero */}
      <div className="gradient-bg py-24">
        <div className="container-custom text-white text-center">
          <span className="badge bg-white/20 text-white mb-4">About Us</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            About Vautika Physiotherapy
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Bhubaneswar's premier physiotherapy centre dedicated to evidence-based rehabilitation and patient-centred care.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 mb-4">
                Our Mission
              </span>
              <h2 className="section-title mb-6">
                <span className="gradient-text">Rehab. Revive. Restore.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                At Vautika Physiotherapy & Rehabilitation Centre, our mission is simple: to help every patient achieve their best possible physical health through expert, evidence-based physiotherapy care.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We believe that every person deserves access to world-class physiotherapy without compromise. From professional athletes to senior citizens, we treat each patient with equal dedication, respect, and clinical excellence.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Located in the heart of Nayapalli, IRC Village, Bhubaneswar, our clinic combines the latest in physiotherapy technology with a warm, welcoming environment that puts patients at ease.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  '✓ Evidence-Based Care',
                  '✓ Personalized Treatment',
                  '✓ Advanced Technology',
                  '✓ Compassionate Team',
                ].map((v) => (
                  <span key={v} className="text-sm bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-400 border border-secondary-200 dark:border-secondary-800 px-3 py-1.5 rounded-full">
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, val: '500+', label: 'Patients Treated', color: 'bg-primary-50 dark:bg-primary-900/20' },
                { icon: Star, val: '4.9/5', label: 'Google Rating', color: 'bg-accent-50 dark:bg-accent-900/20' },
                { icon: Clock, val: '5+', label: 'Years Experience', color: 'bg-secondary-50 dark:bg-secondary-900/20' },
                { icon: Shield, val: '100%', label: 'Evidence Based', color: 'bg-blue-50 dark:bg-blue-900/20' },
              ].map(({ icon: Icon, val, label, color }) => (
                <div key={label} className={`${color} rounded-2xl p-6 text-center`}>
                  <Icon className="w-8 h-8 text-primary-900 dark:text-primary-300 mx-auto mb-3" />
                  <p className="font-display font-bold text-3xl gradient-text">{val}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="section-padding gradient-bg-light dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 mb-4">
              Meet the Doctor
            </span>
            <h2 className="section-title">Dr. Satya Mohanty (PT)</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4">Qualifications</h3>
                <div className="space-y-3">
                  {[
                    { icon: GraduationCap, text: 'Master of Physiotherapy (MPT) – Musculoskeletal Physiotherapy', color: 'text-primary-900' },
                    { icon: Trophy, text: 'Diploma in Sports Medicine – FIFA (Fédération Internationale de Football Association)', color: 'text-accent-600' },
                    { icon: Award, text: 'Bachelor of Physiotherapy (BPT)', color: 'text-secondary-600' },
                  ].map(({ icon: Icon, text, color }) => (
                    <div key={text} className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 ${color} shrink-0 mt-0.5`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Musculoskeletal Physiotherapy',
                    'Sports Injury Management',
                    'Orthopaedic Rehabilitation',
                    'Neuro Rehabilitation',
                    'Pain Management',
                    'Manual Therapy',
                    'Sports Performance Enhancement',
                    'Pediatric Rehabilitation',
                    'Post-Surgical Rehab',
                    'Dry Needling',
                  ].map((e) => (
                    <span key={e} className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 border border-primary-200 dark:border-primary-800 px-3 py-1 rounded-full">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card mb-4">
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4">About Dr. Mohanty</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  <p>
                    Dr. Satya Mohanty (PT) is the founder and principal physiotherapist at Vautika Physiotherapy & Rehabilitation Centre. With a Master's degree in Musculoskeletal Physiotherapy and an internationally recognized FIFA Diploma in Sports Medicine, he brings unparalleled expertise to every patient consultation.
                  </p>
                  <p>
                    Dr. Mohanty's FIFA Sports Medicine certification sets him apart — it's a globally prestigious qualification that equips him with cutting-edge knowledge in sports injury prevention, management, and rehabilitation, following the same standards applied to elite international athletes.
                  </p>
                  <p>
                    His approach is grounded in the latest scientific research, combined with genuine compassion for every patient. Whether you are a professional athlete needing rapid sports injury recovery, or a senior citizen managing chronic joint pain, Dr. Mohanty designs a personalized treatment plan that addresses your specific needs.
                  </p>
                  <p>
                    "My goal is not just to treat the symptom, but to understand the root cause and help each patient achieve long-term health and independence," says Dr. Mohanty.
                  </p>
                </div>
              </div>

              <div className="bg-primary-900 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-accent-400" />
                  <h3 className="font-display font-bold text-lg">Philosophy</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  "Every patient who walks through our door deserves the best possible care — evidence-based, personalized, and compassionate. At Vautika, we don't just treat conditions, we restore lives."
                </p>
                <p className="text-accent-400 font-semibold text-sm mt-4">— Dr. Satya Mohanty (PT)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mb-4">
              Our Journey
            </span>
            <h2 className="section-title">
              Milestones of{' '}
              <span className="gradient-text">Excellence</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 hidden md:block" />
            <div className="space-y-8">
              {milestones.map(({ year, title, desc }, i) => (
                <div
                  key={year}
                  className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-card ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="font-display font-bold text-primary-900 dark:text-primary-300 text-sm">{year}</span>
                      <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mt-1 mb-2">{title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full gradient-bg border-2 border-white dark:border-gray-950 shadow shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center text-white">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Ready to Begin Your Recovery?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book a consultation with Dr. Satya Mohanty today.
          </p>
          <Link href="/appointment/" className="btn-accent inline-block">
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
