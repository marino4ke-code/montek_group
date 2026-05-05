import { Link } from 'react-router-dom'

export default function GetStartedCta() {
  return (
    <section style={{ background: '#B86B25', padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 48px)', textAlign: 'center' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Licensed highlight */}
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', border: '2px solid #fff', color: '#fff', fontSize: '13px', padding: '6px 18px', borderRadius: '20px', marginBottom: '20px', fontWeight: 700 }}>
          ✓ Licensed & Insured — NY & NJ
        </div>
        <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, marginBottom: '14px' }}>Ready to Start Your Project?</h2>
        <p style={{ color: '#F5F2EA', fontSize: 'clamp(15px, 2vw, 17px)', marginBottom: '32px', lineHeight: 1.7, opacity: 0.95 }}>
          Get a free no-obligation estimate from Montek Group LLC today.<br />
          Serving Staten Island, Manhattan, Brooklyn, Queens and New Jersey.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{ background: '#fff', color: '#B86B25', padding: '15px 32px', borderRadius: '6px', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
            Get a Free Estimate
          </Link>
          <a href="tel:3472861223" style={{ background: '#1A305E', color: '#fff', padding: '15px 32px', borderRadius: '6px', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
            Call 347-286-1223
          </a>
        </div>
      </div>
    </section>
  )
}
