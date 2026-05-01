import { Link } from 'react-router-dom'
import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'

const photos = [
  'https://drive.google.com/uc?export=view&id=1CIAwXQgtAAQKJAh1NefRXdqeV8VHI99L',
  'https://drive.google.com/uc?export=view&id=1_CX-1f-qs7oFWUrk3JTLNZcjhpfNtBce',
  'https://drive.google.com/uc?export=view&id=1F2U-L0--zlCkBTc0yFPrIyws8B9LDnnp',
  'https://drive.google.com/uc?export=view&id=1PQ6TFG0H6uASlHLfWov9C0sw03NC-Nog',
  'https://drive.google.com/uc?export=view&id=1PuTAhujB3nIvsqxiY7NBelyQJJKnC9Ls',
  'https://drive.google.com/uc?export=view&id=1dNDfj1FKQ2_Fy8yBSV8ZSYjfQgEh-yFY',
  'https://drive.google.com/uc?export=view&id=1Qa3RgTg7HJUJx71E2NhLAk43E-S8SefG',
  'https://drive.google.com/uc?export=view&id=1DbjO7dbnKXmEVhN4FmkbU6iAVMnwjfhj',
  'https://drive.google.com/uc?export=view&id=1HlNpQ0DHSKee8oN5a-hSFSgVcEiYvyN6',
  'https://drive.google.com/uc?export=view&id=14bKbsTN7PP_IAe7-hGhmlbdT83oADl9z',
  'https://drive.google.com/uc?export=view&id=1qBCvgXhUjBmZqEc3noiDq8BJwDVg9Sqa',
  'https://drive.google.com/uc?export=view&id=16o53JQZ-tfRxDeW4mt9EVZOw8GMf6wmY',
  'https://drive.google.com/uc?export=view&id=1FDI8M7mZ26XycOms9Kf5hoS56ZAjB_vN',
  'https://drive.google.com/uc?export=view&id=1OK9CtfyvUY8QeKADiLHxCRU3nHTLDqaK',
  'https://drive.google.com/uc?export=view&id=11wJVQnUYV1JC5Kl2cjMsvbwi6wcGiAj2',
]

export default function BathroomPage() {
  return (
    <div style={{ background: '#F5F2EA', minHeight: '100vh' }}>
      <Header />
      <section style={{ padding: '72px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Link to="/projects" style={{ color: '#B86B25', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Projects</Link>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>Our Work</div>
            <h1 style={{ color: '#1A305E', fontSize: '40px', fontWeight: 800, marginBottom: '12px' }}>Bathroom Renovation</h1>
            <p style={{ color: '#5A6A7A', fontSize: '16px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>Custom tile, fixtures, waterproofing and complete bathroom rebuilds across NY & NJ.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '48px' }}>
            {photos.map((src, i) => (
              <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #E0D8CC', aspectRatio: '4/3' }}>
                <img src={src} alt="Bathroom renovation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ background: '#1A305E', borderRadius: '12px', padding: '48px', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>Ready to Renovate Your Bathroom?</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '24px' }}>Get a free estimate from Montek Group LLC today.</p>
            <Link to="/contact" style={{ background: '#B86B25', color: '#fff', padding: '12px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Get a Free Estimate</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
