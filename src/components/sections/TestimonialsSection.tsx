'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const testimonials = [
  {
    name: 'Priya Pattnaik',
    location: 'Nayapalli, Bhubaneswar',
    rating: 5,
    text: 'After my knee surgery, I was worried about recovery. Dr. Satya Mohanty\'s personalized rehabilitation program got me walking normally in just 6 weeks. Truly outstanding care!',
    condition: 'Post Knee Surgery',
    initial: 'PP',
    gradient: 'from-violet-600 to-primary-900',
  },
  {
    name: 'Rajesh Kumar Dash',
    location: 'IRC Village, Bhubaneswar',
    rating: 5,
    text: 'I had severe lower back pain for 2 years. Within 10 sessions at Vautika, my pain reduced by 90%. The evidence-based approach and advanced equipment made all the difference.',
    condition: 'Chronic Back Pain',
    initial: 'RD',
    gradient: 'from-blue-500 to-secondary-700',
  },
  {
    name: 'Sujata Mishra',
    location: 'Bhubaneswar',
    rating: 5,
    text: 'My son had developmental delays and the pediatric rehabilitation at Vautika has been transformative. The team is extremely patient, skilled, and caring. Highly recommend!',
    condition: 'Pediatric Rehab',
    initial: 'SM',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Anil Mohanty',
    location: 'Nayapalli, Bhubaneswar',
    rating: 5,
    text: 'As a football player, I needed expert sports rehab after a ligament tear. Dr. Mohanty\'s FIFA-level expertise helped me return to the field faster than expected. World-class!',
    condition: 'Sports Injury',
    initial: 'AM',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Sunita Sahoo',
    location: 'Bhubaneswar',
    rating: 5,
    text: 'Frozen shoulder had been troubling me for months. The manual therapy and laser treatment at Vautika gave me complete relief. The staff is professional and the clinic is very clean.',
    condition: 'Frozen Shoulder',
    initial: 'SS',
    gradient: 'from-teal-500 to-secondary-700',
  },
  {
    name: 'Dr. Ramesh Nayak',
    location: 'IRC Village, Bhubaneswar',
    rating: 5,
    text: 'Even as a doctor, I was impressed by the clinical knowledge and treatment approach at Vautika. Dr. Satya Mohanty is truly dedicated to his patients. Best physio clinic in Bhubaneswar.',
    condition: 'Cervical Spondylosis',
    initial: 'RN',
    gradient: 'from-primary-900 to-secondary-700',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-accent-500 fill-accent-500" />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0feff 0%, #f5f0ff 100%)' }}
      ref={ref}
    >
      {/* Dark mode overlay */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none" style={{ background: 'linear-gradient(180deg, #060a12 0%, #09071a 100%)' }} />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-100/60 dark:bg-primary-950/30 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary-100/60 dark:bg-secondary-950/20 blur-[60px] pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="badge-premium mb-4">Patient Testimonials</span>
          <h2 className="section-title mb-4">
            Trusted by Patients Across{' '}
            <span className="gradient-text">Bhubaneswar</span>
          </h2>

          {/* Google rating pill */}
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-3.5 mt-4 shadow-card">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="w-5 h-5 text-accent-500 fill-accent-500" />
              ))}
            </div>
            <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
            <div className="text-left">
              <p className="font-display font-black text-gray-900 dark:text-white text-sm">4.9 / 5.0</p>
              <p className="text-xs text-gray-400">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, rating, text, condition, initial, gradient }, i) => (
            <div
              key={name}
              className={`group relative bg-white dark:bg-gray-900/90 rounded-2xl border border-gray-100/80 dark:border-gray-800/60 p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-premium ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: inView ? `${i * 80}ms` : '0ms',
              }}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Hover bg glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-50 dark:bg-primary-950/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-primary-900 dark:text-primary-300" />
              </div>

              {/* Condition badge */}
              <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 mb-4 text-[10px]">
                {condition}
              </span>

              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={rating} />
              </div>

              {/* Review text */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 italic">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 shadow-md`}>
                  <span className="text-white font-bold text-sm">{initial}</span>
                </div>
                <div>
                  <p className="font-display font-bold text-gray-900 dark:text-white text-sm">{name}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-14 text-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl border-2 border-primary-900 dark:border-primary-500 text-primary-900 dark:text-primary-300 font-bold font-display text-sm hover:bg-primary-900 hover:text-white dark:hover:bg-primary-900 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-primary"
          >
            <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
            See All Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
