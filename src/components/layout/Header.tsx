'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown, Calendar } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'All Services', href: '/services/' },
      { label: 'Our Therapies', href: '/therapies/' },
      { label: 'Home Physiotherapy', href: '/services/#home-physiotherapy' },
      { label: 'Online Rehab', href: '/services/#online-physiotherapy' },
    ],
  },
  { label: 'Dr Profiles', href: '/dr-profiles/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
]

export default function Header() {
  const [isOpen, setIsOpen]               = useState(false)
  const [scrolled, setScrolled]           = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navLinkClass = (href: string, exact = false) => {
    const active = exact ? pathname === href : pathname.startsWith(href)
    const base = 'relative px-4 py-2 rounded-lg text-sm font-bold font-sans tracking-wide transition-all duration-200 group'
    if (active) {
      return `${base} text-primary-900`
    }
    return `${base} text-slate-600 hover:text-primary-900`
  }

  return (
    <>
      {/* Top info bar */}
      <div className="bg-primary-900 text-white/90 text-xs hidden md:block">
        <div className="container-custom flex justify-between items-center py-2.5">
          <div className="flex items-center gap-4 text-white/80">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Mon–Sat: 9 AM–9 PM &nbsp;|&nbsp; Sun: 8 AM–1 PM
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:vautika.info@gmail.com"
              className="text-white/80 hover:text-accent-400 transition-colors"
            >
              vautika.info@gmail.com
            </a>
            <a
              href="tel:+917381455744"
              className="flex items-center gap-1.5 text-white hover:text-accent-400 transition-colors font-bold tracking-wider"
            >
              <Phone className="w-3.5 h-3.5" />
              7381455744
            </a>
          </div>
        </div>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/50'
            : 'bg-transparent'
        }`}
        style={{ top: scrolled ? 0 : '2.25rem' }}
      >
        <div className="container-custom">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <Link
              href="/"
              aria-label="Vautika Physiotherapy Home"
              className="shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <Logo
                className={`w-auto transition-all duration-500 ${scrolled ? 'h-9' : 'h-11'}`}
                theme="light"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={navLinkClass(item.href)}>
                      {item.label}
                      <ChevronDown className={`inline w-3.5 h-3.5 ml-0.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                      {/* Active underline */}
                      <span className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-accent-500 transition-all duration-300 ${
                        pathname.startsWith(item.href) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                      }`} />
                    </button>

                    {/* Dropdown container with no margin to prevent hover gaps */}
                    <div className={`absolute top-full left-0 pt-2 min-w-[200px] z-50 transition-all duration-200 ${
                      activeDropdown === item.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2 px-5 py-2.5 text-sm text-slate-700 hover:text-primary-900 hover:bg-slate-50 font-medium transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={item.href} href={item.href} className={navLinkClass(item.href, item.href === '/')}>
                    {item.label}
                    <span className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-accent-500 transition-all duration-300 ${
                      (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href))
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0'
                    }`} />
                  </Link>
                )
              )}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* CTA button */}
              <Link
                href="/appointment/"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold font-sans tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 bg-primary-900 text-white shadow-sm hover:shadow-card hover:bg-primary-800"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </Link>

              {/* Mobile menu toggle */}
              <button
                className={`lg:hidden p-2 rounded-xl transition-colors text-slate-700 hover:bg-slate-100`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen
                  ? <X className="w-5 h-5" />
                  : <Menu className="w-5 h-5" />
                }
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[calc(2.25rem+5rem)] md:h-[calc(2.25rem+5rem)]" />

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Panel header */}
          <div className="bg-primary-900 p-6 flex items-center justify-between">
            <Logo
              className="h-9 w-auto"
              theme="dark"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto p-5 space-y-1 bg-white">
            {navItems.map((item, i) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold font-sans transition-all duration-200 ${
                    pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                      ? 'bg-slate-100 text-primary-900 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900'
                  }`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="flex items-center gap-3 ml-5 px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:bg-slate-50 hover:text-primary-900 transition-colors mt-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary-500" />
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="p-5 border-t border-slate-100 space-y-3 bg-white">
            <a
              href="tel:+917381455744"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-100 text-slate-700 font-bold font-sans text-sm hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call: 7381455744
            </a>
            <Link
              href="/appointment/"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary-900 text-white font-bold font-sans text-sm hover:bg-primary-800 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
