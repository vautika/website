import { Award, UserCheck, FlaskConical, Zap, Heart, Users } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Experienced Physiotherapist',
    description: 'Dr. Satya Mohanty holds MPT (MSK) and FIFA Diploma in Sports Medicine, bringing world-class expertise.',
    color: 'text-primary-900 dark:text-primary-300',
    bg: 'bg-primary-50 dark:bg-primary-900/20',
  },
  {
    icon: UserCheck,
    title: 'Personalized Treatment',
    description: 'Every patient receives a customized treatment plan based on their unique condition and recovery goals.',
    color: 'text-secondary-600 dark:text-secondary-400',
    bg: 'bg-secondary-50 dark:bg-secondary-900/20',
  },
  {
    icon: FlaskConical,
    title: 'Evidence Based Therapy',
    description: 'Our treatments follow the latest scientific research and international clinical guidelines.',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Zap,
    title: 'Advanced Equipment',
    description: 'We use cutting-edge physiotherapy technology including laser, electrotherapy, and modern rehabilitation tools.',
    color: 'text-accent-600 dark:text-accent-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: Heart,
    title: 'Affordable Care',
    description: 'Premium physiotherapy services at accessible prices, because your health shouldn\'t be a luxury.',
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
  },
  {
    icon: Users,
    title: 'Patient-Centric Approach',
    description: 'You are at the center of everything we do. We listen, understand, and deliver compassionate care.',
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 mb-4">
              Why Choose Us
            </span>
            <h2 className="section-title mb-4">
              Bhubaneswar's Most{' '}
              <span className="gradient-text">Trusted</span> Physiotherapy Centre
            </h2>
            <p className="section-subtitle mb-8">
              At Vautika, we combine clinical expertise, advanced technology, and compassionate care to deliver exceptional recovery outcomes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { val: '500+', label: 'Patients Treated' },
                { val: '5+', label: 'Years Experience' },
                { val: '98%', label: 'Recovery Rate' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                  <p className="font-display font-bold text-3xl gradient-text">{val}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                '✓ Qualified Physiotherapist',
                '✓ FIFA Sports Medicine',
                '✓ Personalized Care',
                '✓ Modern Equipment',
                '✓ Evidence Based',
                '✓ Patient Focused',
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-xs bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-400 border border-secondary-200 dark:border-secondary-800 px-3 py-1.5 rounded-full font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, description, color, bg }) => (
              <div key={title} className={`p-5 rounded-2xl ${bg} group hover:-translate-y-1 transition-transform duration-300`}>
                <div className={`w-10 h-10 rounded-xl ${bg} border ${bg.includes('primary') ? 'border-primary-200 dark:border-primary-800' : 'border-current/20'} flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
