'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-28 right-6 z-50 w-10 h-10 bg-secondary-600 hover:bg-secondary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 no-print"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  )
}
