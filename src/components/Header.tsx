import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import BrandMark from './BrandMark'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/partnerships', label: 'Partnerships' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[76px]">
          <Link to="/" className="flex flex-shrink-0" aria-label="Duopole Fresh Imports home">
            <BrandMark compact />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-[13px] font-medium transition-colors hover:text-primary focus:outline-none focus-visible:underline ${isActive ? 'text-primary font-semibold' : 'text-charcoal'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-1 rounded-full bg-primary-dark px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Discuss a Partnership
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-botanical focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-charcoal transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-charcoal transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-charcoal transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav id="mobile-navigation" className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-botanical text-primary font-semibold' : 'text-charcoal hover:bg-botanical'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 mx-4 bg-primary-dark text-white px-5 py-3 rounded-lg text-sm font-semibold text-center hover:bg-primary transition-colors"
            >
              Discuss a Partnership
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

