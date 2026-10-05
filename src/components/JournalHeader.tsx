import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { useLanguage } from '../hooks/useLanguage'
import { getLocalizedText } from '../utils/localization'
import { LanguageSwitcher } from './LanguageSwitcher'

const navItems = [
  { to: '/', label: 'journal' },
  { to: '/journal', label: 'journeys' },
  { to: '/places', label: 'places' },
] as const

export function JournalHeader() {
  const { language, t } = useLanguage()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <NavLink to="/" className="wordmark" aria-label={getLocalizedText(siteConfig.name, language)}>
          <span>{getLocalizedText(siteConfig.name, language)}</span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {t[item.label]}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? t.close : t.menu}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <div className="site-shell">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>
                {t[item.label]}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
