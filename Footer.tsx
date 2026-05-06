import { Link } from 'react-router-dom'

const LOGO = 'https://res.cloudinary.com/duiosldww/image/upload/ebtzuv8tbp4c3uzeiing.png'

// SVG Icons for social media
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export default function Footer() {
  const socials = [
    { label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/montekgroup' },
    { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/montekgroupllc/' },
    { label: 'Google', Icon: GoogleIcon, href: 'https://maps.app.goo.gl/v6WdpMuwhZctZHho6' },
  ]

  return (
    <footer style={{ background: '#1A305E', borderTop: '3px solid #B86B25', padding: '56px 48px 28px' }}>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
          .footer-wrap { padding: 36px 20px 20px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="footer-wrap" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <img src={LOGO} alt="Montek Group LLC" style={{ height: '76px', width: 'auto' }} />
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: 800, lineHeight: 1.2 }}>
                Montek<br />Group LLC
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.8, maxWidth: '260px', marginBottom: '16px' }}>
              Licensed & insured construction and renovation serving Staten Island, Manhattan, Brooklyn, Queens, and New Jersey.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              {socials.map(({ label, Icon, href }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" style={{
                  width: '42px', height: '42px', borderRadius: '8px',
                  background: '#142444', border: '1px solid #1e3a6e',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', textDecoration: 'none', transition: 'border-color 0.2s'
                }}
                  onMouseOver={e => (e.currentTarget.style.borderColor = '#B86B25')}
                  onMouseOut={e => (e.currentTarget.style.borderColor = '#1e3a6e')}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ color: '#B86B25', fontSize: '13px', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>Pages</div>
            {[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Contact Us', href: '/contact' }].map(item => (
              <Link key={item.label} to={item.href} style={{ color: '#94a3b8', fontSize: '16px', display: 'block', marginBottom: '12px', textDecoration: 'none' }}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ color: '#B86B25', fontSize: '13px', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>Services</div>
            {['Kitchen Remodeling', 'Bathroom Renovation', 'Basement Finishing', 'Flooring & Painting', 'Commercial Work'].map(s => (
              <Link key={s} to="/projects" style={{ color: '#94a3b8', fontSize: '15px', display: 'block', marginBottom: '10px', textDecoration: 'none' }}>{s}</Link>
            ))}
          </div>

          <div>
            <div style={{ color: '#B86B25', fontSize: '13px', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>Contact</div>
            <a href="tel:3472861223" style={{ color: '#F5F2EA', fontSize: '17px', fontWeight: 700, marginBottom: '8px', display: 'block', textDecoration: 'none' }}>📞 347-286-1223</a>
            <a href="tel:3474804805" style={{ color: '#F5F2EA', fontSize: '17px', fontWeight: 700, marginBottom: '14px', display: 'block', textDecoration: 'none' }}>📞 347-480-4805</a>
            <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '4px' }}>📍 Staten Island, NY</div>
            <div style={{ color: '#94a3b8', fontSize: '14px', marginTop: '16px', marginBottom: '4px' }}>Mon–Fri: 7AM – 7PM</div>
            <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '4px' }}>Sat: 8AM – 5PM</div>
            <div style={{ color: '#94a3b8', fontSize: '14px' }}>Sun: By Appointment</div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e3a6e', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ color: '#475569', fontSize: '13px' }}>© 2026 Montek Group LLC. All rights reserved.</div>
          <div style={{ background: 'rgba(184,107,37,0.15)', border: '1px solid #B86B25', color: '#B86B25', fontSize: '12px', padding: '5px 16px', borderRadius: '20px', fontWeight: 700 }}>✓ Licensed & Insured — NY & NJ</div>
        </div>
      </div>
    </footer>
  )
}
