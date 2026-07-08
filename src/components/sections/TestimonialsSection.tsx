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
    color: 'bg-primary-900 text-white',
  },
  {
    name: 'Rajesh Kumar Dash',
    location: 'IRC Village, Bhubaneswar',
    rating: 5,
    text: 'I had severe lower back pain for 2 years. Within 10 sessions at Vautika, my pain reduced by 90%. The evidence-based approach and advanced equipment made all the difference.',
    condition: 'Chronic Back Pain',
    initial: 'RD',
    color: 'bg-secondary-700 text-white',
  },
  {
    name: 'Sujata Mishra',
    location: 'Delhi (Online Patient)',
    rating: 5,
    text: 'I was skeptical about online physiotherapy but the virtual rehabilitation session with Dr. Mohanty was incredibly effective. He guided me through exercises for my back pain and I felt relief within days!',
    condition: 'Online Physiotherapy',
    initial: 'SM',
    color: 'bg-accent-600 text-white',
  },
  {
    name: 'Anil Mohanty',
    location: 'Nayapalli, Bhubaneswar',
    rating: 5,
    text: 'As a football player, I needed expert sports rehab after a ligament tear. Dr. Mohanty\'s FIFA-level expertise helped me return to the field faster than expected. World-class!',
    condition: 'Sports Injury',
    initial: 'AM',
    color: 'bg-[#1E3F3B] text-white',
  },
  {
    name: 'Sunita Sahoo',
    location: 'Bhubaneswar',
    rating: 5,
    text: 'Frozen shoulder had been troubling me for months. The manual therapy and laser treatment at Vautika gave me complete relief. The staff is professional and the clinic is very clean.',
    condition: 'Frozen Shoulder',
    initial: 'SS',
    color: 'bg-primary-900 text-white',
  },
  {
    name: 'Dr. Ramesh Nayak',
    location: 'IRC Village, Bhubaneswar',
    rating: 5,
    text: 'Even as a doctor, I was impressed by the clinical knowledge and treatment approach at Vautika. Dr. Satya Mohanty is truly dedicated to his patients. Best physio clinic in Bhubaneswar.',
    condition: 'Cervical Spondylosis',
    initial: 'RN',
    color: 'bg-secondary-700 text-white',
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
      className="section-padding relative overflow-hidden bg-gradient-to-br from-clinical-slate to-clinical-slateMed"
      ref={ref}
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-slate-100 blur-[80px] pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-855 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="badge mb-4">Patient Testimonials</span>
          <h2 className="section-title mb-4">
            Trusted by Patients Across <span className="font-medium italic text-secondary-700">Bhubaneswar</span>
          </h2>

          {/* Google rating banner */}
          <div className="inline-flex items-center gap-4 bg-white border border-stone-200/80 rounded-2xl px-6 py-3 mt-4 shadow-sm">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="w-5 h-5 text-accent-500 fill-accent-500" />
              ))}
            </div>
            <div className="w-px h-8 bg-stone-200" />
            <div className="text-left leading-tight">
              <p className="font-sans font-bold text-slate-800 text-sm">4.9 / 5.0</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, rating, text, condition, initial, color }, i) => (
            <div
              key={name}
              className={`group relative bg-white rounded-2xl border border-stone-200/60 p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: inView ? `${i * 60}ms` : '0ms',
              }}
            >
              {/* Quote icon overlay */}
              <div className="absolute top-5 right-5 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-10 h-10 text-primary-900" />
              </div>

              {/* Condition badge */}
              <span className="badge mb-4 text-[10px]">
                {condition}
              </span>

              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={rating} />
              </div>

              {/* Review text */}
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 italic font-medium">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center shrink-0 shadow-sm`}>
                  <span className="font-bold text-sm">{initial}</span>
                </div>
                <div>
                  <p className="font-display font-bold text-primary-900 text-sm">{name}</p>
                  <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-0.5">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action button */}
        <div className={`mt-14 text-center transition-all duration-800 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-primary-900 bg-white text-primary-900 font-sans font-bold text-sm tracking-wider uppercase hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
            See All Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
