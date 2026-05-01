import { Link } from 'react-router-dom'

const HERO_IMG = 'https://res.cloudinary.com/duiosldww/image/upload/ny8hea1s6gke1rlggy9y.jpg'

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '620px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Background photo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('${HERO_IMG}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 22, 40, 0.72)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 48px)', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'inline-block', background: 'rgba(184,107,37,0.95)', color: '#fff', fontSize: '12px', padding: '6px 18px', borderRadius: '25px', marginBottom: '22px', letterSpacing: '1.5px', fontWeight: 600 }}>
          LICENSED & INSURED IN NY & NJ
        </div>
        
        <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', maxWidth: '720px' }}>
          Construction & Renovation<br />Done Right — <span style={{ color: '#B86B25' }}>Every Time</span>
        </h1>
        
        <p style={{ color: '#F5F2EA', fontSize: 'clamp(14px, 2vw, 17px)', lineHeight: 1.8, marginBottom: '36px', maxWidth: '580px', opacity: 0.92 }}>
          Montek Group LLC delivers premium residential and commercial renovation across Staten Island, Manhattan, Brooklyn, Queens, and New Jersey.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
          <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '14px 28px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
            Get a Free Estimate
          </Link>
          
          <a href="tel:3472861223" style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.7)', padding: '14px 28px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
            Call 347-286-1223
          </a>
          
          <a href="tel:3474804805" style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.7)', padding: '14px 28px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
            Call 347-480-4805
          </a>
        </div>

        {/* Feature Tags */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['Licensed & Insured NY & NJ', 'Free Estimates', 'Residential & Commercial', 'Warranty on Labor'].map(t => (
            <div key={t} style={{ background: 'rgba(10,22,40,0.75)', border: '1px solid #B86B25', color: '#F5F2EA', fontSize: '13px', padding: '7px 16px', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#B86B25', display: 'inline-block', flexShrink: 0 }} />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
