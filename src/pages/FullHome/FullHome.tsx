import { Link } from 'react-router-dom'
import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'

const photos = [
  'https://drive.google.com/uc?export=view&id=1I5y4CDdikt9I3IgPRKFHZgOzCWH-cp8u',
  'https://drive.google.com/uc?export=view&id=14LpgSUb5WAzBAoTkwrJ6DPDFjIJ4kxdy',
  'https://drive.google.com/uc?export=view&id=1LnzOT4YHK_CvAHckfElAle9TQUR6m6Pw',
  'https://drive.google.com/uc?export=view&id=1cangn9mC5w2ABBfXWRs0zTXnqto8PW8J',
  'https://drive.google.com/uc?export=view&id=1BbLufyEhjMB9wPz2GUzQq_s1p0bci7uS',
  'https://drive.google.com/uc?export=view&id=1E3C8PhQhdtb-qlVTNzXKMXB-uZhU7aoJ',
  'https://drive.google.com/uc?export=view&id=183MFlp-TK_vkyZkoj-2kiUVlL5ujtinL',
  'https://drive.google.com/uc?export=view&id=1KVC2VDmqniUPZr-UVG4miNV6TkUY08ZK',
]

export default function FullHomePage() {
  return (
    <div style={{ background: '#F5F2EA', minHeight: '100vh' }}>
      <Header />
      <section style={{ padding: '72px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Link to="/projects" style={{ color: '#B86B25', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Projects</Link>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>Our Work</div>
            <h1 style={{ color: '#1A305E', fontSize: '40px', fontWeight: 800, marginBottom: '12px' }}>Residential Renovation</h1>
            <p style={{ color: '#5A6A7A', fontSize: '16px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>Complete residential renovations from design to final walkthrough across NY & NJ.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '48px' }}>
            {photos.map((src, i) => (
              <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #E0D8CC', aspectRatio: '4/3' }}>
                <img src={src} alt="Residential renovation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ background: '#1A305E', borderRadius: '12px', padding: '48px', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>Ready for Your Renovation?</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '24px' }}>Get a free estimate from Montek Group LLC today.</p>
            <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '12px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Get a Free Estimate</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
