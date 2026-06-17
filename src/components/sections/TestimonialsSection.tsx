import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Pattnaik',
    location: 'Nayapalli, Bhubaneswar',
    rating: 5,
    text: 'After my knee surgery, I was worried about recovery. Dr. Satya Mohanty\'s personalized rehabilitation program got me walking normally in just 6 weeks. Truly outstanding care!',
    condition: 'Post Knee Surgery',
  },
  {
    name: 'Rajesh Kumar Dash',
    location: 'IRC Village, Bhubaneswar',
    rating: 5,
    text: 'I had severe lower back pain for 2 years. Within 10 sessions at Vautika, my pain reduced by 90%. The evidence-based approach and advanced equipment made all the difference.',
    condition: 'Chronic Back Pain',
  },
  {
    name: 'Sujata Mishra',
    location: 'Bhubaneswar',
    rating: 5,
    text: 'My son had developmental delays and the pediatric rehabilitation at Vautika has been transformative. The team is extremely patient, skilled, and caring. Highly recommend!',
    condition: 'Pediatric Rehab',
  },
  {
    name: 'Anil Mohanty',
    location: 'Nayapalli, Bhubaneswar',
    rating: 5,
    text: 'As a football player, I needed expert sports rehab after a ligament tear. Dr. Mohanty\'s FIFA-level expertise helped me return to the field faster than expected. World-class treatment!',
    condition: 'Sports Injury',
  },
  {
    name: 'Sunita Sahoo',
    location: 'Bhubaneswar',
    rating: 5,
    text: 'Frozen shoulder had been troubling me for months. The manual therapy and laser treatment at Vautika gave me complete relief. The staff is professional and the clinic is very clean.',
    condition: 'Frozen Shoulder',
  },
  {
    name: 'Dr. Ramesh Nayak',
    location: 'IRC Village, Bhubaneswar',
    rating: 5,
    text: 'Even as a doctor, I was impressed by the clinical knowledge and treatment approach at Vautika. Dr. Satya Mohanty is truly dedicated to his patients. Best physio clinic in Bhubaneswar.',
    condition: 'Cervical Spondylosis',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-4">
            Patient Testimonials
          </span>
          <h2 className="section-title mb-4">
            Trusted by Patients Across{' '}
            <span className="gradient-text">Bhubaneswar</span>
          </h2>
          {/* Google rating display */}
          <div className="inline-flex items-center gap-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-3 mt-2">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="w-5 h-5 text-accent-400 fill-accent-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-gray-900 dark:text-white text-sm">
                4.9 / 5.0 Rating
              </p>
              <p className="text-xs text-gray-500">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, rating, text, condition }) => (
            <div key={name} className="card p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 relative">
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary-200 dark:text-primary-800 absolute top-5 right-5" />

              {/* Condition badge */}
              <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 mb-4 text-xs">
                {condition}
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent-400 fill-accent-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 italic">
                "{text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">
                    {name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-gray-900 dark:text-white text-sm">
                    {name}
                  </p>
                  <p className="text-xs text-gray-500">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
            See All Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
