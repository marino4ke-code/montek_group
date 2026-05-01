import { Link } from 'react-router-dom'
import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'

const photos = [
  'https://drive.google.com/uc?export=view&id=1C05LhJ00ZvSQHLTbd_Ga4uXjig8aC40-',
  'https://drive.google.com/uc?export=view&id=1RxKOgAj6uN-JYvFNtJwuZP2gkwptfJQy',
  'https://drive.google.com/uc?export=view&id=11hhRdIeGdQrQEtfMXML5C9t_tQKjEtwJ',
  'https://drive.google.com/uc?export=view&id=1By2HJJE2Vx1uNJA8_Ewu3eajI7XPm_pf',
  'https://drive.google.com/uc?export=view&id=1g5H6-gNZwlRS-UiDa3hvIaPUD7Yj8pNz',
  'https://drive.google.com/uc?export=view&id=1pKI8U6gt8QIQiGmGpZPzhAKmH7Wtmggy',
  'https://drive.google.com/uc?export=view&id=1Act_zlCrmxbXWjSUJHt6UBUg9U_87SGw',
  'https://drive.google.com/uc?export=view&id=16LTZFx1ztpACatJHpuw6Jb5BNVMMdkUo',
  'https://drive.google.com/uc?export=view&id=1JS0Vk5gn1Q0ZAtZgvPbH9qXWCSI-2lsY',
  'https://drive.google.com/uc?export=view&id=1VS4ptB3KPNfuoNJg9c58XJ5Ea1t-QV9k',
  'https://drive.google.com/uc?export=view&id=12aC5QuE88YMwT0065YZDw3qziIwG_eOU',
  'https://drive.google.com/uc?export=view&id=1C5o0Yb_3zgChZrCEA36PIOLXWr1356p5',
  'https://drive.google.com/uc?export=view&id=1Py_PTopcJFeqg__2cPd5N7wj0B2mWJQM',
  'https://drive.google.com/uc?export=view&id=1elH1N5hHDnYMllwS9Pj-XcTRrAvOxsRJ',
  'https://drive.google.com/uc?export=view&id=1sQOIrdG8zyJz_-LYJi6E70Eqehtq7qY-',
  'https://drive.google.com/uc?export=view&id=1nOMy5ZhJgA18EooU_S_8HIJgW_ySgJQu',
  'https://drive.google.com/uc?export=view&id=1TMeMLgGRWa-UmElTmR5SjCjrzTvYcdbR',
  'https://drive.google.com/uc?export=view&id=18D63coLn4dbBxB47yousem_tltCFTLGE',
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
