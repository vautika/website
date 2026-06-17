'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Sun, Moon, ChevronDown } from 'lucide-react'
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
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar */}
        <div className="bg-primary-900 dark:bg-primary-950 text-white text-xs hidden md:block">
          <div className="container-custom flex justify-between items-center py-1.5">
            <span>Mon–Sat: 9 AM–9 PM &nbsp;|&nbsp; Sun: 8 AM–1 PM</span>
            <div className="flex items-center gap-4">
              <a
                href="mailto:vautika.info@gmail.com"
                className="hover:text-accent-300 transition-colors"
              >
                vautika.info@gmail.com
              </a>
              <a
                href="tel:+917381455744"
                className="flex items-center gap-1 hover:text-accent-300 transition-colors font-semibold"
              >
                <Phone className="w-3 h-3" />
                7381455744
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" aria-label="Vautika Physiotherapy Home">
              <Logo className="h-10 md:h-12 w-auto" scrolled={scrolled} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium font-display transition-all duration-200 ${
                        pathname.startsWith(item.href)
                          ? 'text-primary-900 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20'
                          : scrolled
                          ? 'text-gray-700 dark:text-gray-200 hover:text-primary-900 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                          : 'text-white hover:text-accent-300'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 py-2 min-w-[180px] z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:text-primary-900 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-display font-medium transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium font-display transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-primary-900 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20'
                        : scrolled
                        ? 'text-gray-700 dark:text-gray-200 hover:text-primary-900 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                        : 'text-white hover:text-accent-300'
                    }`}
                  >
                    {item.label}
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
                className={`p-2 rounded-lg transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* CTA */}
              <Link
                href="/appointment/"
                className="hidden md:inline-flex btn-accent text-sm py-2.5 px-5"
              >
                Book Appointment
              </Link>

              {/* Mobile menu toggle */}
              <button
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl">
            <div className="container-custom py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium font-display transition-colors ${
                      pathname === item.href
                        ? 'bg-primary-900 text-white'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-900 dark:hover:text-primary-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block ml-4 px-4 py-2.5 rounded-xl text-sm text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-900 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 pb-2 flex flex-col gap-2">
                <a href="tel:+917381455744" className="btn-primary text-center">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call Now: 7381455744
                </a>
                <Link href="/appointment/" className="btn-accent text-center">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-[4.25rem]" />
    </>
  )
}
