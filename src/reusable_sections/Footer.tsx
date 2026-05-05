import { Link } from 'react-router-dom'

const LOGO = 'https://res.cloudinary.com/duiosldww/image/upload/ebtzuv8tbp4c3uzeiing.png'

export default function Footer() {
  const socials = [
    { label: 'Facebook', icon: 'f', href: '#', color: '#1877F2' },
    { label: 'Instagram', icon: '📷', href: '#', color: '#E1306C' },
    { label: 'Google', icon: 'G', href: '#', color: '#4285F4' },
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
            {/* Licensed & Insured highlight */}
            <div style={{ display: 'inline-block', background: 'rgba(184,107,37,0.2)', border: '2px solid #B86B25', color: '#B86B25', fontSize: '13px', padding: '6px 16px', borderRadius: '20px', fontWeight: 700, marginBottom: '16px' }}>
              ✓ Licensed & Insured — NY & NJ
            </div>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: '40px', height: '40px', borderRadius: '8px',
                  background: '#142444', border: '1px solid #1e3a6e',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '16px', fontWeight: 700, textDecoration: 'none',
                  transition: 'border-color 0.2s'
                }}
                  onMouseOver={e => (e.currentTarget.style.borderColor = '#B86B25')}
                  onMouseOut={e => (e.currentTarget.style.borderColor = '#1e3a6e')}>
                  {s.icon}
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
