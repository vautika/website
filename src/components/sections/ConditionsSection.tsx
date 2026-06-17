import Link from 'next/link'

const conditions = [
  {
    name: 'Back Pain',
    description: 'Comprehensive treatment for lower back pain, disc herniation, and lumbar spondylosis.',
    emoji: '🔙',
    keywords: 'back pain physiotherapy bhubaneswar',
  },
  {
    name: 'Neck Pain',
    description: 'Relief for cervical spondylosis, muscle tension, and whiplash injuries.',
    emoji: '🔝',
    keywords: 'neck pain treatment bhubaneswar',
  },
  {
    name: 'Shoulder Pain',
    description: 'Expert care for rotator cuff injuries, impingement, and shoulder instability.',
    emoji: '💪',
    keywords: 'shoulder pain physiotherapy bhubaneswar',
  },
  {
    name: 'Frozen Shoulder',
    description: 'Targeted therapy to restore shoulder mobility and eliminate adhesive capsulitis.',
    emoji: '❄️',
    keywords: 'frozen shoulder treatment bhubaneswar',
  },
  {
    name: 'Sciatica',
    description: 'Effective treatment for sciatic nerve pain radiating down the leg.',
    emoji: '⚡',
    keywords: 'sciatica treatment bhubaneswar',
  },
  {
    name: 'Arthritis',
    description: 'Pain management and mobility improvement for osteoarthritis and rheumatoid arthritis.',
    emoji: '🦴',
    keywords: 'arthritis physiotherapy bhubaneswar',
  },
  {
    name: 'Knee Pain',
    description: 'Treatment for knee ligament injuries, meniscus tears, and patellofemoral syndrome.',
    emoji: '🦵',
    keywords: 'knee pain treatment bhubaneswar',
  },
  {
    name: 'Sports Injury',
    description: 'Rapid recovery programs for sprains, strains, and sports-related trauma.',
    emoji: '⚽',
    keywords: 'sports injury treatment bhubaneswar',
  },
  {
    name: 'Paralysis Rehabilitation',
    description: 'Neuro-rehab programs to restore movement and function after stroke or paralysis.',
    emoji: '🧠',
    keywords: 'paralysis rehabilitation bhubaneswar',
  },
  {
    name: 'Post Surgery Rehab',
    description: 'Accelerated recovery protocols after orthopedic surgeries.',
    emoji: '🏥',
    keywords: 'post surgery rehabilitation bhubaneswar',
  },
]

export default function ConditionsSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mb-4">
            Conditions We Treat
          </span>
          <h2 className="section-title mb-4">
            Expert Treatment for{' '}
            <span className="gradient-text">All Conditions</span>
          </h2>
          <p className="section-subtitle">
            From chronic pain to acute sports injuries, we provide specialized physiotherapy for a wide range of musculoskeletal and neurological conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {conditions.map(({ name, description, emoji }) => (
            <Link
              key={name}
              href="/appointment/"
              className="card p-5 group bg-white dark:bg-gray-800 hover:border-primary-200 dark:hover:border-primary-800 border border-transparent"
              title={`${name} Treatment in Bhubaneswar`}
            >
              <div className="text-3xl mb-3">{emoji}</div>
              <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-2">
                {name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8">
          Don't see your condition?{' '}
          <Link href="/contact/" className="text-primary-900 dark:text-primary-300 hover:underline font-semibold">
            Contact us
          </Link>{' '}
          — we likely treat it.
        </p>
      </div>
    </section>
  )
}
