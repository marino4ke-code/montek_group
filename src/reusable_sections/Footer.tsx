import { Link } from 'react-router-dom'

const LOGO = 'https://res.cloudinary.com/duiosldww/image/upload/ebtzuv8tbp4c3uzeiing.png'

export default function Footer() {
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src={LOGO} alt="Montek Group LLC" style={{ height: '68px', width: 'auto' }} />
              <span style={{ color: '#fff', fontSize: '18px', fontWeight: 800, lineHeight: 1.2 }}>
                Montek<br />Group LLC
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.8, maxWidth: '260px' }}>
              Licensed & insured construction and renovation serving Staten Island, Manhattan, Brooklyn, Queens, and New Jersey.
            </p>
          </div>

          <div>
            <div style={{ color: '#B86B25', fontSize: '12px', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>Pages</div>
            {[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Contact Us', href: '/contact' }].map(item => (
              <Link key={item.label} to={item.href} style={{ color: '#94a3b8', fontSize: '15px', display: 'block', marginBottom: '10px', textDecoration: 'none' }}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ color: '#B86B25', fontSize: '12px', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>Services</div>
            {['Kitchen Remodeling', 'Bathroom Renovation', 'Basement Finishing', 'Flooring & Painting', 'Commercial Work'].map(s => (
              <Link key={s} to="/projects" style={{ color: '#94a3b8', fontSize: '15px', display: 'block', marginBottom: '10px', textDecoration: 'none' }}>{s}</Link>
            ))}
          </div>

          <div>
            <div style={{ color: '#B86B25', fontSize: '12px', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>Contact</div>
            <a href="tel:3472861223" style={{ color: '#F5F2EA', fontSize: '16px', fontWeight: 700, marginBottom: '8px', display: 'block', textDecoration: 'none' }}>📞 347-286-1223</a>
            <a href="tel:3474804805" style={{ color: '#F5F2EA', fontSize: '16px', fontWeight: 700, marginBottom: '12px', display: 'block', textDecoration: 'none' }}>📞 347-480-4805</a>
            <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '4px' }}>📍 Staten Island, NY</div>
            <div style={{ color: '#94a3b8', fontSize: '14px', marginTop: '16px', marginBottom: '4px' }}>Mon–Fri: 7AM – 7PM</div>
            <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '4px' }}>Sat: 8AM – 5PM</div>
            <div style={{ color: '#94a3b8', fontSize: '14px' }}>Sun: By Appointment</div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e3a6e', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ color: '#475569', fontSize: '13px' }}>© 2026 Montek Group LLC. All rights reserved.</div>
          <div style={{ border: '1px solid #B86B25', color: '#B86B25', fontSize: '12px', padding: '5px 16px', borderRadius: '20px' }}>Licensed & Insured — NY & NJ</div>
        </div>
      </div>
    </footer>
  )
}
