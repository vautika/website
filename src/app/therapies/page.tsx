import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Therapies | Vautika Physiotherapy Bhubaneswar',
  description:
    'Advanced therapies at Vautika Physiotherapy: Manual Therapy, Electrotherapy, Laser Therapy, Cupping, Dry Needling, Sports Training in Bhubaneswar.',
  alternates: { canonical: 'https://vautikaphysiotherapy.com/therapies/' },
}

const therapies = [
  {
    emoji: '🤲',
    title: 'Manual Therapy',
    description: 'Skilled hands-on treatment by Dr. Mohanty including joint mobilization, manipulation, and soft tissue techniques to restore mobility and reduce pain.',
    techniques: ['Joint Mobilization', 'Soft Tissue Mobilization', 'Myofascial Release', 'Trigger Point Therapy'],
    best: 'Joint stiffness, muscle tightness, back & neck pain',
  },
  {
    emoji: '⚡',
    title: 'Electrotherapy',
    description: 'Advanced electrical modalities that use controlled electrical currents to reduce pain, decrease inflammation, and promote healing.',
    techniques: ['TENS (Transcutaneous Electrical Nerve Stimulation)', 'Interferential Therapy (IFT)', 'Ultrasound Therapy', 'Short Wave Diathermy'],
    best: 'Acute & chronic pain, muscle spasms, nerve pain',
  },
  {
    emoji: '✨',
    title: 'Laser Therapy (LLLT)',
    description: 'Low-Level Laser Therapy uses specific wavelengths of light to stimulate cellular healing, reduce inflammation, and accelerate tissue repair.',
    techniques: ['Cold Laser Treatment', 'Photo-biomodulation', 'Targeted Tissue Healing', 'Anti-inflammatory Protocol'],
    best: 'Arthritis, tendinopathy, wound healing, chronic pain',
  },
  {
    emoji: '🫧',
    title: 'Cupping Therapy',
    description: 'Traditional cupping technique applied by trained therapists to improve blood circulation, relieve muscle tension, and reduce inflammation.',
    techniques: ['Dry Cupping', 'Sliding Cupping', 'Flash Cupping', 'Myofascial Cupping'],
    best: 'Muscle soreness, poor circulation, sports recovery',
  },
  {
    emoji: '🪡',
    title: 'Dry Needling',
    description: 'Precise needle insertion into myofascial trigger points to release tight bands of muscle, reduce pain, and restore normal muscle function.',
    techniques: ['Trigger Point Needling', 'Intramuscular Stimulation', 'Functional Needling', 'Superficial Dry Needling'],
    best: 'Myofascial pain, trigger points, sports injuries',
  },
  {
    emoji: '🏋️',
    title: 'Sports Specific Training',
    description: 'Customized training programs designed to meet the specific demands of your sport, improve performance, and prevent future injuries.',
    techniques: ['Plyometric Training', 'Agility Drills', 'Strength & Conditioning', 'Sport-Specific Movements'],
    best: 'Athletes, sports return, performance enhancement',
  },
  {
    emoji: '🧘',
    title: 'Therapeutic Exercise',
    description: 'Structured exercise programs designed specifically for your condition to build strength, flexibility, and endurance as part of your rehabilitation.',
    techniques: ['Strengthening Exercises', 'Flexibility Training', 'Core Stabilization', 'Balance Training'],
    best: 'All musculoskeletal conditions, post-injury rehab',
  },
  {
    emoji: '🔥',
    title: 'Heat & Cryotherapy',
    description: 'Therapeutic application of heat or cold to reduce pain, relax muscles, decrease inflammation, and accelerate healing.',
    techniques: ['Hot Packs', 'Ice Packs', 'Contrast Therapy', 'Cryotherapy Wraps'],
    best: 'Acute injuries, muscle spasms, joint pain',
  },
]

export default function TherapiesPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="gradient-bg py-24">
        <div className="container-custom text-white text-center">
          <span className="badge bg-white/20 text-white mb-4">Our Therapies</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Advanced Therapy Techniques
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We combine the latest evidence-based therapy modalities with traditional techniques for comprehensive rehabilitation.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {therapies.map(({ emoji, title, description, techniques, best }) => (
              <div key={title} className="card bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-7">
                <div className="text-4xl mb-4">{emoji}</div>
                <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  {description}
                </p>

                <div className="mb-4">
                  <h3 className="font-display font-semibold text-xs text-gray-500 uppercase tracking-wider mb-3">
                    Techniques Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techniques.map((t) => (
                      <span key={t} className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary-50 dark:bg-secondary-900/20 rounded-xl p-3 mt-auto">
                  <p className="text-xs text-secondary-700 dark:text-secondary-400">
                    <span className="font-semibold">Best for:</span> {best}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-primary-50 dark:bg-primary-900/20 rounded-3xl p-10">
            <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
              Not Sure Which Therapy is Right for You?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Dr. Satya Mohanty will assess your condition and recommend the most effective combination of therapies for your recovery.
            </p>
            <Link href="/appointment/" className="btn-primary inline-block">
              Book a Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
