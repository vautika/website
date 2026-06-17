interface LogoProps {
  className?: string
  scrolled?: boolean
  variant?: 'full' | 'icon'
}

export default function Logo({ className = 'h-12 w-auto', scrolled = true, variant = 'full' }: LogoProps) {
  const textColor = scrolled ? '#1a1a2e' : '#ffffff'
  const subTextColor = scrolled ? '#4F2D7F' : 'rgba(255,255,255,0.85)'

  if (variant === 'icon') {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vautika Logo">
        <circle cx="24" cy="24" r="24" fill="#4F2D7F" />
        <g transform="translate(12, 8)">
          {/* Human figure */}
          <circle cx="12" cy="4" r="3" fill="white" />
          <path d="M12 7 L12 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 10 L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 18 L8 26" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 18 L16 26" stroke="white" strokeWidth="2" strokeLinecap="round" />
          {/* Recovery arc */}
          <path d="M3 16 Q12 8 21 16" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M21 16 L19 12 M21 16 L23 13" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 280 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vautika Physiotherapy & Rehabilitation Centre"
    >
      {/* Icon mark */}
      <rect width="56" height="56" rx="14" fill="#4F2D7F" />
      {/* Human figure */}
      <circle cx="28" cy="11" r="4.5" fill="white" />
      <path d="M28 15.5 L28 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 21 L34 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 30 L22 42" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 30 L34 42" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Recovery/healing arc */}
      <path d="M14 27 Q28 17 42 27" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <polyline points="39,22 42,27 46,24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Text: VAUTIKA */}
      <text x="68" y="24" fontFamily="Poppins, sans-serif" fontSize="20" fontWeight="800" fill={textColor} letterSpacing="1.5">
        VAUTIKA
      </text>

      {/* Teal underline accent */}
      <rect x="68" y="28" width="120" height="2" rx="1" fill="#0F766E" />

      {/* Subtitle */}
      <text x="68" y="42" fontFamily="Poppins, sans-serif" fontSize="9.5" fontWeight="500" fill={subTextColor} letterSpacing="3.5">
        PHYSIOTHERAPY &amp; REHABILITATION
      </text>
    </svg>
  )
}
