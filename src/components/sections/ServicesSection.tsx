import Link from 'next/link'
import {
  Bone, Brain, Baby, Trophy, Zap, Heart,
  Hand, Activity, Sparkles, Wind, Syringe, Dumbbell
} from 'lucide-react'

const services = [
  {
    icon: Bone,
    title: 'Orthopedic Rehabilitation',
    description: 'Comprehensive treatment for bone, joint, and muscle injuries to restore full function and mobility.',
    color: 'from-purple-500 to-primary-900',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: Brain,
    title: 'Neuro Rehabilitation',
    description: 'Specialized therapy for neurological conditions like stroke, Parkinson\'s, and spinal cord injuries.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Baby,
    title: 'Pediatric Rehabilitation',
    description: 'Gentle, child-friendly therapy for developmental delays, cerebral palsy, and pediatric conditions.',
    color: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
  },
  {
    icon: Trophy,
    title: 'Sports Rehabilitation',
    description: 'Advanced sports injury treatment and performance enhancement programs for athletes.',
    color: 'from-orange-500 to-accent-600',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
  },
  {
    icon: Zap,
    title: 'Pain Management',
    description: 'Evidence-based techniques to address chronic and acute pain for lasting relief.',
    color: 'from-secondary-500 to-secondary-700',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
  },
  {
    icon: Heart,
    title: 'Lifestyle Counseling',
    description: 'Holistic guidance on posture, ergonomics, exercise, and lifestyle for long-term wellness.',
    color: 'from-red-500 to-rose-600',
    bg: 'bg-red-50 dark:bg-red-900/20',
  },
  {
    icon: Hand,
    title: 'Manual Therapy',
    description: 'Hands-on techniques including joint mobilization and soft tissue manipulation.',
    color: 'from-indigo-500 to-primary-700',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
  },
  {
    icon: Activity,
    title: 'Electro Therapy',
    description: 'Advanced electrical modalities like TENS, IFT, and ultrasound for pain relief and healing.',
    color: 'from-cyan-500 to-teal-600',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
  },
  {
    icon: Sparkles,
    title: 'Laser Therapy',
    description: 'Low-level laser therapy for pain reduction, inflammation control, and tissue repair.',
    color: 'from-violet-500 to-purple-700',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
  },
  {
    icon: Wind,
    title: 'Cupping Therapy',
    description: 'Traditional cupping techniques to improve circulation, relieve muscle tension, and promote healing.',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: Syringe,
    title: 'Needling Therapy',
    description: 'Dry needling and acupuncture techniques to release trigger points and reduce pain.',
    color: 'from-lime-500 to-green-600',
    bg: 'bg-lime-50 dark:bg-lime-900/20',
  },
  {
    icon: Dumbbell,
    title: 'Sports Specific Training',
    description: 'Customized training programs for athletes to enhance performance and prevent injuries.',
    color: 'from-primary-700 to-secondary-700',
    bg: 'bg-primary-50 dark:bg-primary-900/20',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 mb-4">
            Our Services
          </span>
          <h2 className="section-title mb-4">
            Comprehensive{' '}
            <span className="gradient-text">Physiotherapy</span> Services
          </h2>
          <p className="section-subtitle">
            We offer a full spectrum of advanced physiotherapy and rehabilitation services tailored to your individual recovery needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description, color, bg }) => (
            <Link
              key={title}
              href="/services/"
              className={`card p-6 group ${bg} border border-transparent hover:border-primary-200 dark:hover:border-primary-800`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services/" className="btn-primary inline-flex items-center gap-2">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
