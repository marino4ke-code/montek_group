import { Link } from 'react-router-dom'

const LOGO = 'https://res.cloudinary.com/duiosldww/image/upload/ebtzuv8tbp4c3uzeiing.png'

export default function Footer() {
  return (
    <footer style={{ background: '#1A305E', borderTop: '3px solid #B86B25', padding: '48px 48px 24px' }}>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .footer-wrap { padding: 32px 20px 16px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="footer-wrap" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>

          <div>
            <img src={LOGO} alt="Montek Group LLC" style={{ height: '60px', width: 'auto', marginBottom: '12px' }} />
            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.7, maxWidth: '260px' }}>
              Licensed & insured construction and renovation serving Staten Island, Manhattan, Brooklyn, Queens, and New Jersey.
            </p>
          </div>

          <div>
            <div style={{ color: '#B86B25', fontSize: '11px', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>Pages</div>
            {[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Contact Us', href: '/contact' }].map(item => (
              <Link key={item.label} to={item.href} style={{ color: '#94a3b8', fontSize: '13px', display: 'block', marginBottom: '8px', textDecoration: 'none' }}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ color: '#B86B25', fontSize: '11px', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>Services</div>
            {['Kitchen Remodeling', 'Bathroom Renovation', 'Basement Finishing', 'Flooring & Painting', 'Doors & Windows', 'Commercial Work'].map(s => (
              <Link key={s} to="/projects" style={{ color: '#94a3b8', fontSize: '13px', display: 'block', marginBottom: '8px', textDecoration: 'none' }}>{s}</Link>
            ))}
          </div>

          <div>
            <div style={{ color: '#B86B25', fontSize: '11px', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>Contact</div>
            <div style={{ color: '#F5F2EA', fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>📞 347-286-1223</div>
            <div style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '8px' }}>📍 Staten Island, NY</div>
            <div style={{ color: '#94a3b8', fontSize: '13px', marginTop: '16px', marginBottom: '4px' }}>Mon–Fri: 7AM – 7PM</div>
            <div style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '4px' }}>Sat: 8AM – 5PM</div>
            <div style={{ color: '#94a3b8', fontSize: '13px' }}>Sun: By Appointment</div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e3a6e', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ color: '#475569', fontSize: '12px' }}>© 2026 Montek Group LLC. All rights reserved.</div>
          <div style={{ border: '1px solid #B86B25', color: '#B86B25', fontSize: '11px', padding: '4px 14px', borderRadius: '20px' }}>Licensed & Insured — NY & NJ</div>
        </div>
      </div>
    </footer>
  )
}
