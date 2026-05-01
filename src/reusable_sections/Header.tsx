import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: '72px', maxWidth: '1400px', margin: '0 auto' }}>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <img
            src="https://touched-salmon.10web.cloud/wp-content/uploads/2026/04/Gemini_Generated_Image_dztsnudztsnudzts.png"
            alt="Montek Group LLC"
            style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="hide-mobile">
          {links.map(item => (
            <Link key={item.label} to={item.href} style={{
              color: location.pathname === item.href ? '#B86B25' : '#1A305E',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              padding: '8px 16px', borderRadius: '5px', letterSpacing: '0.5px'
            }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="tel:3472861223" style={{ color: '#1A305E', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }} className="hide-mobile">
            347-286-1223
          </a>
          <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
            Free Quote
          </Link>
          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#1A305E' }} className="show-mobile">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#F5F2EA', borderTop: '1px solid #E0D8CC', padding: '16px 24px' }}>
          {links.map(item => (
            <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', color: '#1A305E', fontSize: '15px', fontWeight: 600,
              textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid #E0D8CC'
            }}>
              {item.label}
            </Link>
          ))}
          <a href="tel:3472861223" style={{ display: 'block', color: '#B86B25', fontSize: '15px', fontWeight: 700, textDecoration: 'none', padding: '12px 0' }}>
            📞 347-286-1223
          </a>
        </div>
      )}
    </header>
  )
}
