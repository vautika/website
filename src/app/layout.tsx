import type { Metadata, Viewport } from 'next'
import type React from 'react'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'
import BackToTop from '@/components/ui/BackToTop'
import StructuredData from '@/components/ui/StructuredData'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vautika.in'),
  title: {
    default: 'Vautika Physiotherapy & Rehabilitation Centre | Best Physiotherapy Clinic in Bhubaneswar',
    template: '%s | Vautika Physiotherapy Bhubaneswar',
  },
  description:
    'Expert physiotherapy, sports rehabilitation, pain management, neuro rehabilitation and advanced therapy solutions in Bhubaneswar. Book your appointment today with Dr. Satya Mohanty (PT), MPT (MSK), Diploma in Sports Medicine (FIFA).',
  keywords: [
    'Physiotherapy Clinic Bhubaneswar',
    'Best Physiotherapist Bhubaneswar',
    'Sports Rehabilitation Bhubaneswar',
    'Pain Management Bhubaneswar',
    'Neuro Rehabilitation Odisha',
    'Orthopedic Physiotherapy Bhubaneswar',
    'Manual Therapy Bhubaneswar',
    'Laser Therapy Bhubaneswar',
    'Sports Medicine Odisha',
    'Vautika Physiotherapy',
    'Physiotherapy Near Me',
    'Physiotherapist Near Nayapalli',
    'Sports Physiotherapist Bhubaneswar',
    'Pain Management Clinic Bhubaneswar',
    'Knee Pain Treatment Bhubaneswar',
    'Back Pain Physiotherapy Bhubaneswar',
    'IRC Village Physiotherapy',
    'Nayapalli Physiotherapy',
  ],
  authors: [{ name: 'Dr. Satya Mohanty (PT)', url: 'https://vautika.in' }],
  creator: 'Vautika Physiotherapy & Rehabilitation Centre',
  publisher: 'Vautika Physiotherapy & Rehabilitation Centre',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vautika.in',
    siteName: 'Vautika Physiotherapy & Rehabilitation Centre',
    title: 'Vautika Physiotherapy & Rehabilitation Centre | Best Physiotherapy Clinic in Bhubaneswar',
    description:
      'Expert physiotherapy, sports rehabilitation, pain management & neuro rehabilitation in Bhubaneswar. Book your appointment with Dr. Satya Mohanty (PT).',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vautika Physiotherapy & Rehabilitation Centre Bhubaneswar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vautika Physiotherapy & Rehabilitation Centre | Bhubaneswar',
    description: 'Expert physiotherapy & rehabilitation care in Bhubaneswar. Book appointment with Dr. Satya Mohanty (PT).',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vautika.in',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'healthcare',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4F2D7F' },
    { media: '(prefers-color-scheme: dark)', color: '#1a0a40' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Bhubaneswar, Odisha, India" />
        <meta name="geo.position" content="20.2961;85.8189" />
        <meta name="ICBM" content="20.2961, 85.8189" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
        <BackToTop />
      </body>
    </html>
  )
}
