import { Link } from 'react-router-dom'
import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'

const base = 'https://res.cloudinary.com/duiosldww/image/upload/'

const photos = [
  base + 'ny8hea1s6gke1rlggy9y.jpg',
  base + 'df41qtu0kch71i4ujdni.jpg',
  base + 'pvfvnxsxhov0e5xd3zpw.jpg',
  base + 'ydqvpadb20ixws8bkjth.jpg',
  base + 'bkfpsudqhjv2diaetjjq.jpg',
  base + 'urr7jpnuooek41qn5ofe.jpg',
  base + 'jsxpfkzvdf8bncxsfadm.jpg',
  base + 'fvq2ri3jsuvald59pywu.jpg',
  base + 'bhxuejmy0y82qd5qcyon.jpg',
  base + 'zffauyhwrn2r3meryb1h.jpg',
  base + 'y7zkygzd3gps40lviukr.jpg',
  base + 'b3nhntcummwwvucowyt8.jpg',
  base + 'mpdqcczkjulbltnjbm4v.jpg',
  base + 'm6mvdsub9eghvv0reath.jpg',
  base + 'qczybk7s5zgt0syeqhvw.jpg',
  base + 'yu6ui0ehvzmlrfwq8rbm.jpg',
  base + 'rqqs6yw97sulzuh2fedw.jpg',
  base + 'p82itlsq1cta1c1nhxaa.jpg',
  base + 'nbftpvyxg3g1a4cxiftl.jpg',
  base + 'gp30pyoavqlxt9jb2osj.jpg',
  base + 'zawfqwomybkebbbcu54g.jpg',
  base + 'ki7bokpqsjphrjv3pa6s.jpg',
  base + 'letguh81mup9jdun15ci.jpg',
  base + 'jedoc60ukllcues6dnfq.jpg',
  base + 'iz4i9wu08p9xs1wcojbm.jpg',
]

export default function KitchenPage() {
  return (
    <div style={{ background: '#F5F2EA', minHeight: '100vh' }}>
      <Header />
      <section style={{ padding: '72px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Link to="/projects" style={{ color: '#B86B25', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Projects</Link>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>Our Work</div>
            <h1 style={{ color: '#1A305E', fontSize: '40px', fontWeight: 800, marginBottom: '12px' }}>Kitchen Remodeling</h1>
            <p style={{ color: '#5A6A7A', fontSize: '16px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>Custom cabinets, countertops, layouts and full gut renovations across NY & NJ.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '48px' }}>
            {photos.map((src, i) => (
              <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #E0D8CC', aspectRatio: '4/3' }}>
                <img src={src} alt="Kitchen remodeling" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ background: '#1A305E', borderRadius: '12px', padding: '48px', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>Ready to Remodel Your Kitchen?</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '24px' }}>Get a free estimate from Montek Group LLC today.</p>
            <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '12px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Get a Free Estimate</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
