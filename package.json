import { Link } from 'react-router-dom'

const HERO_IMG = 'https://res.cloudinary.com/duiosldww/image/upload/dh7abtfsml8syjfs7hs4.jpg'

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '640px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${HERO_IMG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,22,40,0.68)' }} />
      <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 48px)', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>

        <h1 style={{ color: '#fff', fontSize: 'clamp(30px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', maxWidth: '720px' }}>
          Construction & Renovation<br />Done Right — <span style={{ color: '#B86B25' }}>Every Time</span>
        </h1>
        <p style={{ color: '#F5F2EA', fontSize: 'clamp(14px, 2vw, 17px)', lineHeight: 1.8, marginBottom: '36px', maxWidth: '580px', opacity: 0.92 }}>
          Montek Group LLC delivers premium residential and commercial renovation across Staten Island, Manhattan, Brooklyn, Queens, and New Jersey.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
          <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '15px 30px', borderRadius: '6px', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
            Get a Free Estimate
          </Link>
          <a href="tel:3472861223" style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.7)', padding: '15px 30px', borderRadius: '6px', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
            Call 347-286-1223
          </a>
          <a href="tel:3474804805" style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.7)', padding: '15px 30px', borderRadius: '6px', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
            Call 347-480-4805
          </a>
        </div>

        {/* Enlarged highlighted trust badges */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {[
            { text: 'Licensed & Insured NY & NJ', highlight: true },
            { text: 'Free Estimates', highlight: false },
            { text: 'Residential & Commercial', highlight: false },
            { text: 'Warranty on Labor', highlight: true },
          ].map(t => (
            <div key={t.text} style={{
              background: t.highlight ? 'rgba(184,107,37,0.3)' : 'rgba(10,22,40,0.75)',
              border: t.highlight ? '2px solid #B86B25' : '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              fontSize: '15px',
              padding: '10px 22px',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: t.highlight ? 700 : 500,
            }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#B86B25', display: 'inline-block', flexShrink: 0 }} />
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
