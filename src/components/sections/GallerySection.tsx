'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Maximize2, ShieldAlert } from 'lucide-react'

interface GalleryItem {
  id: number
  src: string
  title: string
  category: 'treatment' | 'clinic' | 'event'
  desc: string
}

// 21 items copied from Downloads folder
const galleryItems: GalleryItem[] = [
  {
    id: 3,
    src: '/images/gallery/gallery-3.jpg',
    title: 'Odisha State Committee Delegates',
    category: 'event',
    desc: 'Dr. Satya Mohanty being honored by committee members at state meet'
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.jpg',
    title: 'Sports Rehabilitation Event',
    category: 'event',
    desc: 'On-site immediate athletic assistance during football tournaments'
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.jpg',
    title: 'Clinical Discussion',
    category: 'event',
    desc: 'Healthcare delegates analyzing physical therapy standards'
  },
  {
    id: 6,
    src: '/images/gallery/gallery-6.jpg',
    title: 'Odisha Football League Support',
    category: 'event',
    desc: 'Vautika providing complete sports physio coverage for players'
  },
  {
    id: 7,
    src: '/images/gallery/gallery-7.jpg',
    title: 'Championship Medical Assistance',
    category: 'event',
    desc: 'Vautika team on standby for tournament medical care'
  },
  {
    id: 8,
    src: '/images/gallery/gallery-8.jpg',
    title: 'Spinal Extension Mobilization',
    category: 'treatment',
    desc: 'Manual therapy and traction to align vertebrae for back pain relief'
  },
  {
    id: 9,
    src: '/images/gallery/gallery-9.jpg',
    title: 'Passive Joint Mobilization',
    category: 'treatment',
    desc: 'Spine decompression therapy for cervical pain relief'
  },
  {
    id: 10,
    src: '/images/gallery/gallery-10.jpg',
    title: 'Neuromuscular Stretching',
    category: 'treatment',
    desc: 'Active stretching exercises to regain range of motion in the leg'
  },
  {
    id: 11,
    src: '/images/gallery/gallery-11.jpg',
    title: 'Medical Felicitation Ceremony',
    category: 'event',
    desc: 'Dr. Satya Mohanty receiving recognition plaque at medical assembly'
  },
  {
    id: 12,
    src: '/images/gallery/gallery-12.jpg',
    title: 'Felicitation Certificate Presentation',
    category: 'event',
    desc: 'Dr. Satya Mohanty holding recognition certificate at medical event'
  },
  {
    id: 13,
    src: '/images/gallery/gallery-13.jpg',
    title: 'Therapist Guided Leg Exercises',
    category: 'treatment',
    desc: 'Rehabilitation exercises for orthopedic patients'
  },
  {
    id: 14,
    src: '/images/gallery/gallery-14.jpg',
    title: 'State Physiotherapy Meet Gathering',
    category: 'event',
    desc: 'Physiotherapists gathering for awareness campaigns'
  },
  {
    id: 15,
    src: '/images/gallery/gallery-15.jpg',
    title: 'Tournament On-field Assistance',
    category: 'event',
    desc: 'Treating acute hamstring injuries on the playground'
  },
  {
    id: 16,
    src: '/images/gallery/gallery-16.jpg',
    title: 'Ultrasonic Soft Tissue Healing',
    category: 'treatment',
    desc: 'Stimulating collagen fibers and relieving muscular stiffness'
  },
  {
    id: 17,
    src: '/images/gallery/gallery-17.jpg',
    title: 'Clinic Reception Desk',
    category: 'treatment',
    desc: 'Welcoming consultation desk at Vautika Physiotherapy center'
  },
  {
    id: 18,
    src: '/images/gallery/gallery-18.jpg',
    title: 'Electrical Muscle Stimulation (EMS)',
    category: 'treatment',
    desc: 'Applying transcutaneous nerve stimulation to block localized pain receptors'
  },
  {
    id: 19,
    src: '/images/gallery/gallery-19.jpg',
    title: 'Guided Knee Flexion Rehab',
    category: 'treatment',
    desc: 'Step-by-step joint rehabilitation for chronic arthritis pain'
  },
  {
    id: 20,
    src: '/images/gallery/gallery-20.jpg',
    title: 'Ultrasound Therapy Session',
    category: 'treatment',
    desc: 'Advanced electrophysical modalities for faster tendon healing'
  },
  {
    id: 21,
    src: '/images/gallery/gallery-21.jpg',
    title: 'Healthcare Delegates Convention',
    category: 'event',
    desc: 'Presenting research developments at the Odisha State Meet'
  }
]

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-scroll logic for carousel
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    
    let intervalId: NodeJS.Timeout
    const startAutoPlay = () => {
      intervalId = setInterval(() => {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: 320, behavior: 'smooth' })
        }
      }, 4000)
    }

    startAutoPlay()
    return () => clearInterval(intervalId)
  }, [])

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -320, behavior: 'smooth' })
  }

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 320, behavior: 'smooth' })
  }

  const handleNextImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length)
  }

  const handlePrevImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section className="py-20 bg-gray-50 border-t border-stone-200/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge mb-4">Vautika Gallery</span>
          <h2 className="section-title mb-4">
            Our Gallery &amp; <span className="font-medium italic text-secondary-700">Treatments in Action</span>
          </h2>
          <p className="section-subtitle">
            Take a look at our clinical environment, advanced therapy treatments, and state conferences with Odisha's top medical professionals.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-4">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center text-slate-700 shadow-md hover:bg-primary-900 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="w-[280px] md:w-[320px] shrink-0 bg-white rounded-3xl border border-stone-200/60 shadow-elegant overflow-hidden snap-start group/item cursor-pointer hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover group-hover/item:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-primary-900 text-sm md:text-base truncate mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center text-slate-700 shadow-md hover:bg-primary-900 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicator dots for mobile swipe */}
        <div className="flex justify-center gap-1.5 mt-6 md:hidden">
          {galleryItems.slice(0, Math.min(galleryItems.length, 6)).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          ))}
        </div>
      </div>

      {/* Lightbox / Popup Overlay */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col justify-between py-6 px-4 md:px-12 select-none">
          {/* Top Bar */}
          <div className="flex justify-end items-center text-white/80">
            <button
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="relative flex-1 flex items-center justify-center my-4">
            {/* Left Nav */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 md:left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative w-full max-w-4xl h-[55vh] md:h-[70vh]">
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Right Nav */}
            <button
              onClick={handleNextImage}
              className="absolute right-2 md:right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Description Footer */}
          <div className="text-center text-white max-w-2xl mx-auto space-y-2">
            <h3 className="font-display font-bold text-lg md:text-xl">
              {galleryItems[lightboxIndex].title}
            </h3>
            <p className="text-xs md:text-sm text-slate-400">
              {galleryItems[lightboxIndex].desc}
            </p>
            <span className="inline-block text-[10px] text-slate-500 pt-2 font-mono">
              {lightboxIndex + 1} of {galleryItems.length}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
