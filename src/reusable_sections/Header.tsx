import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LOGO = 'https://res.cloudinary.com/duiosldww/image/upload/ebtzuv8tbp4c3uzeiing.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu whenever the URL path changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navLinkStyle = (path: string) => ({
    color: location.pathname === path ? '#B86B25' : '#1A305E',
    fontSize: '19px',
    fontWeight: 700,
    textDecoration: 'none',
    padding: '8px 20px',
    borderRadius: '5px'
  })

  const mobileLinkStyle = (path: string) => ({
    display: 'block',
    color: location.pathname === path ? '#B86B25' : '#1A305E',
    fontSize: '20px',
    fontWeight: 700,
    textDecoration: 'none',
    padding: '18px 24px',
    borderBottom: '1px solid #E0D8CC'
  })

  return (
    <header style={{ background: '#F5F2EA', borderBottom: '3px solid #1A305E', position: 'sticky', top: 0, zIndex: 9999, isolation: 'isolate' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: '92px', maxWidth: '1400px', margin: '0 auto' }}>

        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img src={LOGO} alt="Montek Group LLC" style={{ height: '78px', width: 'auto', objectFit: 'contain' }} />
          <span style={{ color: '#1A305E', fontSize: '22px', fontWeight: 800, lineHeight: 1.2 }}>
            Montek<br />Group LLC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} id="desktop-nav">
          <Link to="/" style={navLinkStyle('/')}>Home</Link>
          <Link to="/projects" style={navLinkStyle('/projects')}>Projects</Link>
          <Link to="/contact" style={navLinkStyle('/contact')}>Contact Us</Link>
        </nav>

        {/* Desktop right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }} id="desktop-right">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <a href="tel:3472861223" style={{ color: '#1A305E', fontSize: '18px', fontWeight: 800, textDecoration: 'none' }}>347-286-1223</a>
            <a href="tel:3474804805" style={{ color: '#1A305E', fontSize: '18px', fontWeight: 800, textDecoration: 'none' }}>347-480-4805</a>
          </div>
          <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '13px 24px', borderRadius: '6px', fontSize: '16px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Free Estimate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{ display: 'none', background: 'none', border: 'none', fontSize: '32px', cursor: 'pointer', color: '#1A305E', padding: '4px' }}
          id="hamburger"
        >
          {menuOpen ? '\u2715' : '\u2630'}
        </button>
      </div>

      {/* Mobile Menu - hardcoded links, no .map() so nothing can break iteration */}
      {menuOpen && (
        <div style={{
          background: '#F5F2EA',
          borderTop: '1px solid #E0D8CC',
          padding: '8px 0',
          position: 'fixed',
          top: '76px',
          left: 0,
          right: 0,
          zIndex: 9999,
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          maxHeight: 'calc(100vh - 76px)',
          overflowY: 'auto'
        }}>
          <Link to="/" style={mobileLinkStyle('/')}>Home</Link>
          <Link to="/projects" style={mobileLinkStyle('/projects')}>Projects</Link>
          <Link to="/contact" style={mobileLinkStyle('/contact')}>Contact Us</Link>

          <a href="tel:3472861223" style={{ display: 'block', color: '#B86B25', fontSize: '20px', fontWeight: 700, textDecoration: 'none', padding: '18px 24px', borderBottom: '1px solid #E0D8CC' }}>
            347-286-1223
          </a>
          <a href="tel:3474804805" style={{ display: 'block', color: '#B86B25', fontSize: '20px', fontWeight: 700, textDecoration: 'none', padding: '18px 24px', borderBottom: '1px solid #E0D8CC' }}>
            347-480-4805
          </a>

          <div style={{ padding: '20px 24px' }}>
            <Link to="/contact" style={{
              display: 'block',
              background: '#B86B25',
              color: '#fff',
              padding: '16px',
              borderRadius: '6px',
              fontSize: '18px',
              fontWeight: 700,
              textDecoration: 'none',
              textAlign: 'center'
            }}>
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
          header > div { padding: 0 20px !important; height: 76px !important; }
        }
      `}</style>
    </header>
  )
}
