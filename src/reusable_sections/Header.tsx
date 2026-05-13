import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LOGO = 'https://res.cloudinary.com/duiosldww/image/upload/ebtzuv8tbp4c3uzeiing.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact Us', href: '/contact' },
  ]

  // Close the mobile menu whenever the route actually changes.
  // This is the ONLY place we close on navigation - the links themselves
  // don't have onClick handlers that could swallow the tap.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll while the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header style={{ background: '#F5F2EA', borderBottom: '3px solid #1A305E', position: 'sticky', top: 0, zIndex: 9999, isolation: 'isolate' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: '88px', maxWidth: '1400px', margin: '0 auto' }}>

        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img src={LOGO} alt="Montek Group LLC" style={{ height: '76px', width: 'auto', objectFit: 'contain' }} />
          <span style={{ color: '#1A305E', fontSize: '19px', fontWeight: 800, lineHeight: 1.2 }}>
            Montek<br />Group LLC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} id="desktop-nav">
          {links.map(item => (
            <Link key={item.label} to={item.href} style={{
              color: location.pathname === item.href ? '#B86B25' : '#1A305E',
              fontSize: '17px', fontWeight: 700, textDecoration: 'none',
              padding: '8px 18px', borderRadius: '5px'
            }}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} id="desktop-right">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <a href="tel:3472861223" style={{ color: '#1A305E', fontSize: '16px', fontWeight: 800, textDecoration: 'none' }}>347-286-1223</a>
            <a href="tel:3474804805" style={{ color: '#1A305E', fontSize: '16px', fontWeight: 800, textDecoration: 'none' }}>347-480-4805</a>
          </div>
          <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '12px 22px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Free Estimate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{ display: 'none', background: 'none', border: 'none', fontSize: '30px', cursor: 'pointer', color: '#1A305E', padding: '4px', zIndex: 10001, position: 'relative' }}
          id="hamburger"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu - full screen, solid background */}
      {menuOpen && (
        <div
          id="mobile-menu"
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            background: '#F5F2EA',
            zIndex: 9998,
            overflowY: 'auto',
            padding: '8px 0 24px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          }}
        >
          {links.map(item => (
            <Link
              key={item.label}
              to={item.href}
              style={{
                display: 'block',
                color: location.pathname === item.href ? '#B86B25' : '#1A305E',
                fontSize: '18px',
                fontWeight: 700,
                textDecoration: 'none',
                padding: '18px 24px',
                borderBottom: '1px solid #E0D8CC',
              }}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:3472861223" style={{ display: 'block', color: '#B86B25', fontSize: '18px', fontWeight: 700, textDecoration: 'none', padding: '18px 24px', borderBottom: '1px solid #E0D8CC' }}>
            📞 347-286-1223
          </a>
          <a href="tel:3474804805" style={{ display: 'block', color: '#B86B25', fontSize: '18px', fontWeight: 700, textDecoration: 'none', padding: '18px 24px', borderBottom: '1px solid #E0D8CC' }}>
            📞 347-480-4805
          </a>
          <div style={{ padding: '20px 24px' }}>
            <Link
              to="/contact"
              style={{ display: 'block', background: '#B86B25', color: '#fff', padding: '16px', borderRadius: '6px', fontSize: '17px', fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          #hamburger { display: block !important; }
          #desktop-nav { display: none !important; }
          #desktop-right { display: none !important; }
          header > div { padding: 0 20px !important; height: 72px !important; }
        }
      `}</style>
    </header>
  )
}
