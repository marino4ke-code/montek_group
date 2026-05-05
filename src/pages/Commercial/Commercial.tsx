import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'

const base = 'https://res.cloudinary.com/duiosldww/image/upload/'

const photos = [
  base + 'ycbnw5milxx6rqe8ghfa.jpg',
  base + 'do0l4njno3yxk1qh3uxa.jpg',
  base + 'vykjlwxtytirczrvxtg4.jpg',
  base + 'kiw0oqzeksjwbki7hzbo.jpg',
  base + 'u3u2motvv4mgitisihvf.jpg',
  base + 'pcf3yowm3qddn0qxpcff.jpg',
  base + 'us4vyfmz7oahqanr00lm.jpg',
  base + 'iylk5qvbusw3u9ppfxqr.jpg',
]

export default function CommercialPage() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <div style={{ background: '#F5F2EA', minHeight: '100vh' }}>
      <Header />
      <section style={{ padding: '72px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Link to="/projects" style={{ color: '#B86B25', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Projects</Link>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>Our Work</div>
            <h1 style={{ color: '#1A305E', fontSize: '40px', fontWeight: 800, marginBottom: '12px' }}>Commercial Work</h1>
            <p style={{ color: '#5A6A7A', fontSize: '16px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>Office fit-outs, retail spaces and commercial build-outs across NY & NJ.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '48px' }}>
            {photos.map((src, i) => (
              <div key={i} onClick={() => setLightbox(i)} style={{ ...{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #E0D8CC', aspectRatio: '4/3' }, cursor: "pointer" }}>
                <img src={src} alt="Commercial work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ background: '#1A305E', borderRadius: '12px', padding: '48px', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>Need Commercial Work?</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '24px' }}>Get a free estimate from Montek Group LLC today.</p>
            <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '12px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Get a Free Estimate</Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: '20px', right: '24px', background: 'none', border: 'none', color: '#fff', fontSize: '36px', cursor: 'pointer', zIndex: 1 }}>✕</button>
          {lightbox > 0 && (
            <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1) }} style={{ position: 'absolute', left: '16px', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', fontSize: '32px', cursor: 'pointer', borderRadius: '50%', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          )}
          <img src={photos[lightbox]} alt="Photo" onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '88vh', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }} />
          <div style={{ position: 'absolute', bottom: '24px', left: 0, right: 0, textAlign: 'center', color: '#fff', fontSize: '15px', fontWeight: 600 }}>{lightbox + 1} / {photos.length}</div>
          {lightbox < photos.length - 1 && (
            <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1) }} style={{ position: 'absolute', right: '16px', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', fontSize: '32px', cursor: 'pointer', borderRadius: '50%', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
          )}
        </div>
      )}
      <Footer />
    </div>
  )
}
