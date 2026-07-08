import Image from 'next/image'

interface LogoProps {
  className?: string
  theme?: 'light' | 'dark'
  variant?: 'full' | 'icon'
}

export default function Logo({ className = 'h-12 w-auto', theme = 'light', variant = 'full' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <Image
        src="/images/logo.png"
        alt="Vautika Physiotherapy"
        width={56}
        height={56}
        className={className}
        style={theme === 'dark' ? { filter: 'brightness(0) invert(1)' } : undefined}
      />
    )
  }

  return (
    <div className={className} style={{ width: '160px', height: '40px', position: 'relative' }}>
      <Image
        src="/images/logo.png"
        alt="Vautika Physiotherapy & Rehabilitation Centre"
        fill
        className="object-contain"
        style={theme === 'dark' ? { filter: 'brightness(0) invert(1)' } : undefined}
        priority
      />
    </div>
  )
}
