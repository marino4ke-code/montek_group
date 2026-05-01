import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '620px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://touched-salmon.10web.cloud/wp-content/uploads/2026/03/kitchen_1.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
      <div style={{ position: 'relative', zIndex: 1, padding: '80px 48px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'inline-block', background: 'rgba(184,107,37,0.9)', color: '#fff', fontSize: '12px', padding: '6px 18px', borderRadius: '25px', marginBottom: '22px', letterSpacing: '1.5px', fontWeight: 600 }}>
          LICENSED & INSURED IN NY & NJ
        </div>
        <h1 style={{ color: '#fff', fontSize: '52px', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', maxWidth: '720px' }}>
          Construction & Renovation<br />Done Right — <span style={{ color: '#B86B25' }}>Every Time</span>
        </h1>
        <p style={{ color: '#F5F2EA', fontSize: '17px', lineHeight: 1.8, marginBottom: '36px', maxWidth: '620px', opacity: 0.9 }}>
          Montek Group LLC delivers premium residential and commercial renovation across Staten Island, Manhattan, Brooklyn, Queens, and New Jersey.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
          <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '15px 30px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>
            Get a Free Estimate
          </Link>
          <a href="tel:3472861223" style={{ background: 'transparent', color: '#fff', border: '2px solid #fff', padding: '15px 30px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>
            Call 347-286-1223
          </a>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['Licensed & Insured NY & NJ', 'Free Estimates', 'Residential & Commercial', 'Warranty on Labor'].map(t => (
            <div key={t} style={{ background: 'rgba(20,36,68,0.8)', border: '1px solid #B86B25', color: '#F5F2EA', fontSize: '13px', padding: '8px 18px', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#B86B25', display: 'inline-block' }} />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
