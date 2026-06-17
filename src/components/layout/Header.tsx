'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Sun, Moon, ChevronDown, Calendar } from 'lucide-react'
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
    ],
  },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
]

export default function Header() {
  const [isOpen, setIsOpen]               = useState(false)
  const [scrolled, setScrolled]           = useState(false)
  const [dark, setDark]                   = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrollY, setScrollY]             = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (stored === 'dark' || (!stored && prefersDark)) {
      setDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDark = useCallback(() => {
    setDark((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return next
    })
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
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
    const base = 'relative px-4 py-2 rounded-lg text-sm font-semibold font-display transition-all duration-200 group'
    if (active) {
      return `${base} ${scrolled
        ? 'text-primary-900 dark:text-primary-300'
        : 'text-white'}`
    }
    return `${base} ${scrolled
      ? 'text-gray-600 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-300'
      : 'text-white/80 hover:text-white'}`
  }

  return (
    <>
      {/* Top info bar */}
      <div className="bg-gradient-to-r from-primary-950 to-secondary-900 dark:from-black dark:to-gray-950 text-white text-xs hidden md:block">
        <div className="container-custom flex justify-between items-center py-2">
          <div className="flex items-center gap-4 text-white/70">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Mon–Sat: 9 AM–9 PM &nbsp;|&nbsp; Sun: 8 AM–1 PM
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="mailto:vautika.info@gmail.com"
              className="text-white/70 hover:text-accent-400 transition-colors"
            >
              vautika.info@gmail.com
            </a>
            <a
              href="tel:+917381455744"
              className="flex items-center gap-1.5 text-white hover:text-accent-400 transition-colors font-bold tracking-wide"
            >
              <Phone className="w-3 h-3" />
              7381455744
            </a>
          </div>
        </div>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-2xl shadow-[0_2px_30px_rgba(0,0,0,0.08)] border-b border-white/20 dark:border-gray-800/50'
            : 'bg-transparent'
        }`}
        style={{ top: scrolled ? 0 : '1.75rem' }}
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
                scrolled={scrolled}
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

                    {/* Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-premium border border-gray-100 dark:border-gray-800 py-2 min-w-[200px] z-50 transition-all duration-200 ${
                      activeDropdown === item.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 px-5 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:text-primary-900 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-display font-medium transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                          {child.label}
                        </Link>
                      ))}
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
              {/* Dark mode toggle */}
              <button
                onClick={toggleDark}
                aria-label="Toggle dark mode"
                className={`p-2 rounded-xl transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-900 dark:hover:text-primary-300'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {dark
                  ? <Sun className="w-4 h-4" />
                  : <Moon className="w-4 h-4" />
                }
              </button>

              {/* CTA button */}
              <Link
                href="/appointment/"
                className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold font-display tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                  scrolled
                    ? 'bg-gradient-to-r from-primary-900 to-secondary-700 text-white shadow-card hover:shadow-glow-primary'
                    : 'bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </Link>

              {/* Mobile menu toggle */}
              <button
                className={`lg:hidden p-2 rounded-xl transition-colors ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white hover:bg-white/10'
                }`}
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
      <div className="h-[calc(1.75rem+5rem)] md:h-[calc(1.75rem+5rem)]" />

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-white dark:bg-gray-950 shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Panel header */}
          <div className="gradient-bg p-6 flex items-center justify-between">
            <Logo className="h-9 w-auto" scrolled={false} />
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto p-5 space-y-1">
            {navItems.map((item, i) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold font-display transition-all duration-200 ${
                    pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                      ? 'bg-gradient-to-r from-primary-900 to-secondary-700 text-white shadow-card'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-primary-900 dark:hover:text-primary-300'
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
                    className="flex items-center gap-3 ml-5 px-4 py-2.5 rounded-xl text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-primary-900 transition-colors mt-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary-500" />
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="p-5 border-t border-gray-100 dark:border-gray-800 space-y-3">
            <a
              href="tel:+917381455744"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold font-display text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call: 7381455744
            </a>
            <Link
              href="/appointment/"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl gradient-bg text-white font-bold font-display text-sm hover:shadow-glow-primary transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
            {/* Dark mode */}
            <button
              onClick={toggleDark}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {dark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
