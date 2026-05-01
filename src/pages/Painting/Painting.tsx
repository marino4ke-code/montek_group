import { Link } from 'react-router-dom'
import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'

const photos = [
  'https://touched-salmon.10web.cloud/wp-content/uploads/2026/03/IMG_1134.jpg',
]

export default function PaintingPage() {
  return (
    <div style={{ background: '#F5F2EA', minHeight: '100vh' }}>
      <Header />
      <section style={{ padding: '72px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Link to="/projects" style={{ color: '#B86B25', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Projects</Link>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>Our Work</div>
            <h1 style={{ color: '#1A305E', fontSize: '40px', fontWeight: 800, marginBottom: '12px' }}>Painting</h1>
            <p style={{ color: '#5A6A7A', fontSize: '16px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>Interior and exterior painting with premium finishes across NY & NJ.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '48px' }}>
            {photos.map((src, i) => (
              <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #E0D8CC', aspectRatio: '4/3' }}>
                <img src={src} alt="Painting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ background: '#1A305E', borderRadius: '12px', padding: '48px', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>Need Painting Services?</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '24px' }}>Get a free estimate from Montek Group LLC today.</p>
            <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '12px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Get a Free Estimate</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
