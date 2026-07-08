import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Physiotherapy Services in Bhubaneswar | Vautika Physiotherapy',
  description:
    'Comprehensive physiotherapy services in Bhubaneswar: Orthopedic Rehabilitation, Neuro Rehab, Sports Rehabilitation, Pain Management, Home Based Physiotherapy, Online Physiotherapy, Manual Therapy, Laser Therapy and more.',
  alternates: { canonical: 'https://vautika.in/services/' },
}

const services = [
  {
    id: 'orthopedic',
    emoji: '🦴',
    title: 'Orthopedic Rehabilitation',
    tagline: 'Restore Bone & Joint Function',
    description:
      'Our orthopedic rehabilitation program addresses injuries and conditions affecting bones, joints, muscles, ligaments, and tendons. Whether you\'ve had a fracture, joint replacement, or ligament injury, we design a structured recovery plan.',
    benefits: [
      'Reduce pain and inflammation',
      'Restore full range of motion',
      'Rebuild muscle strength',
      'Prevent re-injury',
      'Return to daily activities faster',
    ],
    process: [
      'Initial assessment & imaging review',
      'Pain management phase',
      'Mobility restoration exercises',
      'Strength & stability training',
      'Functional rehabilitation',
    ],
    outcomes: 'Most patients achieve 80-100% recovery within 8-12 weeks with consistent therapy.',
    conditions: ['Fractures', 'Joint Replacement Rehab', 'Ligament Tears', 'Tendonitis', 'Muscle Strains'],
    highlight: false,
  },
  {
    id: 'neuro',
    emoji: '🧠',
    title: 'Neuro Rehabilitation',
    tagline: 'Restore Neurological Function',
    description:
      'Neuro rehabilitation focuses on helping patients recover from neurological conditions affecting the brain, spinal cord, and nervous system. Our specialized program helps improve movement, balance, and independence.',
    benefits: [
      'Improve motor function and coordination',
      'Enhance balance and gait',
      'Reduce spasticity',
      'Maximize independence',
      'Improve quality of life',
    ],
    process: [
      'Neurological assessment',
      'Goal setting with patient & family',
      'Task-specific movement training',
      'Balance & coordination exercises',
      'Home exercise program',
    ],
    outcomes: 'Significant improvements in mobility and daily function, with continuous progress over 3-6 months.',
    conditions: ['Stroke', 'Parkinson\'s Disease', 'Spinal Cord Injury', 'Multiple Sclerosis', 'Brain Injury'],
    highlight: false,
  },
  {
    id: 'home-physiotherapy',
    emoji: '🏠',
    title: 'Home Based Physiotherapy',
    tagline: 'Expert Care at Your Doorstep',
    description:
      'Our certified physiotherapist visits your home, bringing professional-grade assessment and treatment to you. Ideal for post-surgery patients, elderly individuals, and anyone with mobility restrictions. You get the same expert care as our clinic, in the comfort of your own space.',
    benefits: [
      'No travel required — we come to you',
      'Personalized one-on-one attention',
      'Comfortable, familiar environment',
      'Ideal for post-surgical recovery',
      'Perfect for elderly & mobility-limited patients',
    ],
    process: [
      'Phone/WhatsApp booking with your address',
      'Home visit scheduling at your convenience',
      'On-site assessment and treatment',
      'Custom home exercise plan provided',
      'Follow-up visits as needed',
    ],
    outcomes: 'Patients experience equivalent clinical outcomes in a more comfortable setting, often showing better compliance with exercises.',
    conditions: ['Post-Surgery Recovery', 'Elderly Care', 'Stroke Rehab at Home', 'Chronic Pain', 'Mobility Impairment'],
    highlight: true,
  },
  {
    id: 'online-physiotherapy',
    emoji: '💻',
    title: 'One on One Virtual Rehabilitation',
    tagline: 'Online Physiotherapy, Anytime Anywhere',
    description:
      'Get personalized physiotherapy sessions via secure video call with Dr. Satya Mohanty. Our virtual rehabilitation program is evidence-based and tailored to your specific condition. Perfect for consultations, follow-ups, guided exercises, and posture correction — no matter where you are.',
    benefits: [
      'Consult from anywhere in India or abroad',
      'Flexible scheduling to fit your lifestyle',
      'No commute — save time and energy',
      'Video-guided exercise programs',
      'Ongoing support between sessions',
    ],
    process: [
      'Book your online slot via WhatsApp or phone',
      'Receive a secure video call link',
      'Live assessment & personalized program',
      'Digital exercise guide shared post-session',
      'Regular follow-ups to track progress',
    ],
    outcomes: 'Online rehab shows clinical outcomes comparable to in-person sessions for many conditions, especially musculoskeletal issues.',
    conditions: ['Back Pain', 'Neck Pain', 'Shoulder Pain', 'Posture Correction', 'General Fitness & Rehab'],
    highlight: true,
  },
  {
    id: 'sports',
    emoji: '⚽',
    title: 'Sports Rehabilitation',
    tagline: 'Return to Peak Performance',
    description:
      'Led by Dr. Satya Mohanty with his FIFA Sports Medicine qualification, our sports rehabilitation program is designed for athletes at all levels. We combine cutting-edge sports science with individualized recovery protocols.',
    benefits: [
      'Rapid return to sport',
      'Stronger than pre-injury',
      'Injury prevention strategies',
      'Performance enhancement',
      'Sport-specific conditioning',
    ],
    process: [
      'Sports injury assessment',
      'Acute phase management',
      'Functional movement restoration',
      'Sports-specific training',
      'Return-to-sport testing & clearance',
    ],
    outcomes: 'Most athletes return to full competition within 6-12 weeks with our structured programs.',
    conditions: ['Ligament Sprains', 'Muscle Tears', 'Stress Fractures', 'Tendinopathies', 'Joint Dislocations'],
    highlight: false,
  },
  {
    id: 'pain',
    emoji: '⚡',
    title: 'Pain Management',
    tagline: 'Long-Term Relief, Not Just Masking',
    description:
      'Our evidence-based pain management program addresses the root causes of both acute and chronic pain. We use a multimodal approach combining manual therapy, exercise, electrotherapy, and education.',
    benefits: [
      'Significant pain reduction',
      'Improved sleep quality',
      'Reduce dependency on medications',
      'Better daily function',
      'Long-lasting relief',
    ],
    process: [
      'Comprehensive pain assessment',
      'Identify pain drivers and patterns',
      'Manual therapy & modalities',
      'Pain education & self-management',
      'Progressive rehabilitation',
    ],
    outcomes: 'Up to 70-80% pain reduction within 6-8 weeks for most chronic pain conditions.',
    conditions: ['Chronic Back Pain', 'Fibromyalgia', 'Nerve Pain', 'Headaches', 'Myofascial Pain'],
    highlight: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero */}
      <div className="gradient-bg py-24">
        <div className="container-custom text-white text-center">
          <span className="badge bg-white/20 text-white mb-4">Our Services</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Comprehensive Physiotherapy Services
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Advanced, evidence-based treatment programs for a wide range of conditions — at our clinic, at your home, or online.
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom space-y-16">
          {services.map(({ id, emoji, title, tagline, description, benefits, process, outcomes, conditions: conds, highlight }, i) => (
            <div
              key={id}
              id={id}
              className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} ${
                highlight ? 'rounded-3xl border-2 border-primary-900 p-8 bg-primary-50/30' : ''
              }`}
            >
              {/* Left */}
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-5xl">{emoji}</div>
                  {highlight && (
                    <span className="text-xs font-bold bg-accent-500 text-primary-900 px-3 py-1 rounded-full uppercase tracking-wider">
                      ✨ New Service
                    </span>
                  )}
                </div>
                <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 mb-3">
                  {tagline}
                </span>
                <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-4">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{description}</p>

                {/* Conditions */}
                <div className="mb-6">
                  <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-3 uppercase tracking-wider">
                    Conditions Treated
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {conds.map((c) => (
                      <span key={c} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="bg-secondary-50 dark:bg-secondary-900/20 border border-secondary-200 dark:border-secondary-800 rounded-xl p-4">
                  <p className="text-sm text-secondary-700 dark:text-secondary-400 font-medium">
                    📊 Expected Outcome: {outcomes}
                  </p>
                </div>
              </div>

              {/* Right: benefits & process */}
              <div className={`space-y-6 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-primary-900 dark:text-primary-300">✓</span> Benefits
                  </h3>
                  <ul className="space-y-2">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-5 h-5 rounded-full bg-primary-900 text-white text-xs flex items-center justify-center shrink-0">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary-50 dark:bg-secondary-900/20 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-4">
                    Treatment Process
                  </h3>
                  <ol className="space-y-3">
                    {process.map((p, idx) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-6 h-6 rounded-full bg-secondary-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ol>
                </div>

                <Link href="/appointment/" className="btn-primary w-full text-center block">
                  Book {title} Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
