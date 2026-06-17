interface LogoProps {
  className?: string
  theme?: 'light' | 'dark'
  variant?: 'full' | 'icon'
}

export default function Logo({ className = 'h-12 w-auto', theme = 'light', variant = 'full' }: LogoProps) {
  const isDark = theme === 'dark'

  if (variant === 'icon') {
    return (
      <svg className={className} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vautika Logo">
        <defs>
          <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F1E36" />
            <stop offset="100%" stopColor="#1E3F3B" />
          </linearGradient>
          <filter id="iconGlow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <rect width="56" height="56" rx="16" fill="url(#iconGrad)" />
        <rect width="56" height="56" rx="16" fill="white" fillOpacity="0.05" />
        {/* Human figure */}
        <circle cx="28" cy="16" r="5" fill="white" filter="url(#iconGlow)" />
        <path d="M28 21 L28 34" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M21 26 L35 26" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M28 34 L22 44" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 34 L34 44" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        {/* Gold recovery arc */}
        <path d="M13 29 Q28 17 43 29" stroke="#BCA374" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <polyline points="39,23 43,29 47,25" stroke="#BCA374" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vautika Physiotherapy & Rehabilitation Centre"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F1E36" />
          <stop offset="100%" stopColor="#1E3F3B" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BCA374" />
          <stop offset="50%" stopColor="#E6C687" />
          <stop offset="100%" stopColor="#BCA374" />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Icon mark — rounded square */}
      <rect width="60" height="60" rx="16" fill="url(#logoGrad)" />
      <rect width="60" height="60" rx="16" fill="white" fillOpacity="0.06" />

      {/* Human figure */}
      <circle cx="30" cy="16" r="5.5" fill="white" filter="url(#logoGlow)" />
      <path d="M30 22 L30 36" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 27 L38 27" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 36 L23 47" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 36 L37 47" stroke="white" strokeWidth="2.5" strokeLinecap="round" />

      {/* Gold recovery arc + arrow */}
      <path d="M14 31 Q30 18 46 31" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <polyline points="42,24 46,31 51,27" stroke="#BCA374" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Brand name: VAUTIKA */}
      <text
        x="72" y="26"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontSize="22"
        fontWeight="800"
        fill={isDark ? '#ffffff' : '#0F1E36'}
        letterSpacing="2"
      >
        VAUTIKA
      </text>

      {/* Gold underline */}
      <rect x="72" y="31" width="126" height="2.5" rx="1.25" fill="url(#goldGrad)" />

      {/* Subtitle */}
      <text
        x="72" y="46"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill={isDark ? 'rgba(255,255,255,0.75)' : '#1E3F3B'}
        letterSpacing="3.5"
      >
        PHYSIOTHERAPY &amp; REHABILITATION
      </text>
    </svg>
  )
}
