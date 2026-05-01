import { useState } from 'react'
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

  return (
    <header style={{ background: '#F5F2EA', borderBottom: '3px solid #1A305E', position: 'sticky', top: 0, zIndex: 9999 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: '72px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={LOGO} alt="Montek Group LLC" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {links.map(item => (
            <Link key={item.label} to={item.href} style={{
              color: location.pathname === item.href ? '#B86B25' : '#1A305E',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              padding: '8px 16px', borderRadius: '5px'
            }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Desktop Phone Numbers */}
          <div className="desktop-phones" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <a href="tel:3472861223" style={{ color: '#1A305E', fontSize: '13px', fontWeight: 700, textDecoration: 'none', lineHeight: '1.2' }}>
              347-286-1223
            </a>
            <a href="tel:3474804805" style={{ color: '#1A305E', fontSize: '13px', fontWeight: 700, textDecoration: 'none', lineHeight: '1.2' }}>
              347-480-4805
            </a>
          </div>

          <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Free Quote
          </Link>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#1A305E', padding: '4px' }}
            id="hamburger">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#F5F2EA', borderTop: '1px solid #E0D8CC', padding: '16px 24px' }} id="mobile-menu">
          {links.map(item => (
            <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', color: '#1A305E', fontSize: '16px', fontWeight: 600,
              textDecoration: 'none', padding: '14px 0', borderBottom: '1px solid #E0D8CC'
            }}>
              {item.label}
            </Link>
          ))}
          <a href="tel:3472861223" style={{ display: 'block', color: '#B86B25', fontSize: '16px', fontWeight: 700, textDecoration: 'none', padding: '14px 0', borderBottom: '1px solid #E0D8CC' }}>
            📞 347-286-1223
          </a>
          <a href="tel:3474804805" style={{ display: 'block', color: '#B86B25', fontSize: '16px', fontWeight: 700, textDecoration: 'none', padding: '14px 0' }}>
            📞 347-480-4805
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 850px) {
          #hamburger { display: block !important; }
          nav { display: none !important; }
          .desktop-phones { display: none !important; }
          header > div { padding: 0 20px !important; }
        }
      `}</style>
    </header>
  )
}
