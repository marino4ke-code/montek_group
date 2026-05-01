import { Link } from 'react-router-dom'
import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'

const photos = [
  'https://drive.google.com/uc?export=view&id=1JZkzUwNMJ3_DFAtpzWeF0y6EzozX4CZa',
  'https://drive.google.com/uc?export=view&id=1zIp08opo1ImVmydDPpkdXsrAbxfI4RZB',
  'https://drive.google.com/uc?export=view&id=140tQtXlQfmcuhpXCF48nyIJRmkg3-2_g',
  'https://drive.google.com/uc?export=view&id=127gbB7U2hbdT-ALUA2WdMbbaGH_DniMT',
  'https://drive.google.com/uc?export=view&id=1lKclOne_nrUy0C8YL-BgAZUrurFyULoq',
  'https://drive.google.com/uc?export=view&id=1P5hG1AsH-VycWVgsGF7D3QQnqliSdu74',
  'https://drive.google.com/uc?export=view&id=1zlbyx3Q6sTyvUskX_6XmCRJ2KDP6eq8p',
  'https://drive.google.com/uc?export=view&id=1QZAzHaI0PV88rxymQcOFnZqNgORNiGrk',
]

export default function CommercialPage() {
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
              <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #E0D8CC', aspectRatio: '4/3' }}>
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
      <Footer />
    </div>
  )
}
