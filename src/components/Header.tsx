import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import BrandMark from './BrandMark'
import { languages, useLanguage } from '../i18n'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/partnerships', label: 'Partnerships' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { language, selectLanguage, translate } = useLanguage()
  const selectedLanguage = languages.find(({ code }) => code === language) ?? languages[0]

  useEffect(() => {
    setOpen(false)
    setLanguageOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open && !languageOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setLanguageOpen(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open, languageOpen])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[76px]">
          <div className="flex min-w-0 items-center gap-2 sm:gap-4">
            <Link to="/" className="flex flex-shrink-0" aria-label={translate('Duopole Fresh Imports home')}>
              <BrandMark compact />
            </Link>
            <div className="relative">
              <button
                type="button"
                aria-label={`${translate('Language')}: ${selectedLanguage.label}`}
                aria-haspopup="menu"
                aria-expanded={languageOpen}
                onClick={() => setLanguageOpen((isOpen) => !isOpen)}
                className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-2 text-charcoal transition-colors hover:bg-botanical focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span aria-hidden="true" className="text-2xl leading-none">{selectedLanguage.flag}</span>
                <span className="text-sm font-semibold uppercase">{language}</span>
                <svg aria-hidden="true" viewBox="0 0 12 8" className={`h-2 w-3 fill-current transition-transform ${languageOpen ? 'rotate-180' : ''}`}>
                  <path d="M1 1.25 6 6.25l5-5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </button>
              {languageOpen && (
                <div role="menu" aria-label={translate('Select language')} className="absolute left-0 top-full z-[60] mt-2 min-w-40 overflow-hidden rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
                  {languages.map(({ code, flag, label }) => (
                    <button
                      key={code}
                      type="button"
                      role="menuitemradio"
                      aria-checked={language === code}
                      onClick={() => {
                        setLanguageOpen(false)
                        selectLanguage(code)
                      }}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-botanical ${language === code ? 'font-semibold text-primary' : 'text-charcoal'}`}
                    >
                      <span aria-hidden="true" className="text-xl">{flag}</span>
                      <span>{label}</span>
                      <span className="ml-auto text-xs uppercase text-charcoal/50">{code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label={translate('Main navigation')}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-[13px] font-medium transition-colors hover:text-primary focus:outline-none focus-visible:underline ${isActive ? 'text-primary font-semibold' : 'text-charcoal'}`
                }
              >
                {translate(label)}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-1 rounded-full bg-primary-dark px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {translate('Discuss a Partnership')}
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-botanical focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={translate(open ? 'Close navigation menu' : 'Open navigation menu')}
          >
            <span className="sr-only">{translate(open ? 'Close menu' : 'Open menu')}</span>
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-charcoal transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-charcoal transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-charcoal transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav id="mobile-navigation" className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-1" aria-label={translate('Mobile navigation')}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-botanical text-primary font-semibold' : 'text-charcoal hover:bg-botanical'}`
                }
              >
                {translate(label)}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 mx-4 bg-primary-dark text-white px-5 py-3 rounded-lg text-sm font-semibold text-center hover:bg-primary transition-colors"
            >
              {translate('Discuss a Partnership')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
