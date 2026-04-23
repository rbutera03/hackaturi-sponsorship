// Sponsorship impact report — same header chrome as hackaturi2025, in-page scroll only
// (no links to the main site, archive, or external routes).

import { useState, useEffect } from 'react'
import './Header.css'

const NAV_ITEMS = [{}]

const Header = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollHidden, setScrollHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const app = document.querySelector('.app')
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const scrollingDown = y > lastY && y > 100
      const scrollingUp = y < lastY || y <= 100

      if (scrollingDown) {
        setScrollHidden(true)
        app?.classList.add('scrolled')
      } else if (scrollingUp) {
        setScrollHidden(false)
        app?.classList.remove('scrolled')
      }

      lastY = y

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id)
        if (section && section.offsetTop <= y + 120) {
          setActiveSection(NAV_ITEMS[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    scrollToSection?.(id)
    setScrollHidden(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`site-header ${scrollHidden ? 'hidden' : ''}`}>
      <div className="header-inner">
        {!isMobile ? (
          <nav className="main-nav">
            {NAV_ITEMS.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}
                data-section={item.id}
              >
                <strong>{item.label}</strong>
              </button>
            ))}
          </nav>
        ) : (
          <>
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
            >
              <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span />
                <span />
                <span />
              </div>
            </button>

            <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              {NAV_ITEMS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleClick(item.id)}
                  data-section={item.id}
                >
                  <strong>{item.label}</strong>
                </button>
              ))}
            </nav>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
