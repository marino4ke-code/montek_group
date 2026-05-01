import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'

const base = 'https://res.cloudinary.com/duiosldww/image/upload/'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'kitchen', label: 'Kitchen Remodeling' },
  { id: 'bathroom', label: 'Bathroom Renovation' },
  { id: 'fullhome', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
]

const photos = [
  { id: 1, cat: 'kitchen', label: 'Kitchen Remodeling', img: base + 'ny8hea1s6gke1rlggy9y.jpg', route: '/kitchen' },
  { id: 2, cat: 'bathroom', label: 'Bathroom Renovation', img: base + 'akzqml4so3mi7opxuwvx.jpg', route: '/bathroom' },
  { id: 3, cat: 'fullhome', label: 'Residential Renovation', img: base + 'q4j7ko2p0saubuu2u9if.jpg', route: '/fullhome' },
  { id: 4, cat: 'commercial', label: 'Commercial', img: base + 'ycbnw5milxx6rqe8ghfa.jpg', route: '/commercial' },
  { id: 5, cat: 'kitchen', label: 'Kitchen Remodeling', img: base + 'bkfpsudqhjv2diaetjjq.jpg', route: '/kitchen' },
  { id: 6, cat: 'bathroom', label: 'Bathroom Renovation', img: base + 'mhb7uvoamraahw6adycg.jpg', route: '/bathroom' },
  { id: 7, cat: 'kitchen', label: 'Kitchen Remodeling', img: base + 'jsxpfkzvdf8bncxsfadm.jpg', route: '/kitchen' },
  { id: 8, cat: 'commercial', label: 'Commercial', img: base + 'iylk5qvbusw3u9ppfxqr.jpg', route: '/commercial' },
  { id: 9, cat: 'fullhome', label: 'Residential Renovation', img: base + 'yz4sk6nusquzbaj4zymk.jpg', route: '/fullhome' },
]

export default function ProjectsPage() {
  const [active, setActive] = useState('all')
  const [hovered, setHovered] = useState<number | null>(null)
  const navigate = useNavigate()
  const filtered = active === 'all' ? photos : photos.filter(p => p.cat === active)

  return (
    <div style={{ background: '#F5F2EA', minHeight: '100vh' }}>
      <Header />
      <section style={{ padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 48px)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>Our Work</div>
            <h1 style={{ color: '#1A305E', fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 800, marginBottom: '12px' }}>Project Gallery</h1>
            <p style={{ color: '#5A6A7A', fontSize: '16px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>Browse our completed projects. Click any photo to see the full gallery.</p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
            {categories.map(c => (
              <button key={c.id} onClick={() => setActive(c.id)} style={{
                padding: '9px 18px', borderRadius: '25px',
                border: '2px solid #1A305E',
                background: active === c.id ? '#1A305E' : 'transparent',
                color: active === c.id ? '#fff' : '#1A305E',
                fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
              }}>{c.label}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {filtered.map(p => (
              <div key={p.id}
                onClick={() => navigate(p.route)}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', aspectRatio: '4/3', border: '1px solid #E0D8CC' }}>
                <img src={p.img} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hovered === p.id ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,48,94,0.82)', opacity: hovered === p.id ? 1 : 0, transition: 'opacity 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                  <div style={{ color: '#F5F2EA', fontSize: '18px', fontWeight: 800, textAlign: 'center', padding: '0 20px' }}>{p.label}</div>
                  <div style={{ background: '#B86B25', color: '#fff', padding: '8px 20px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>View Gallery →</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <a href="/contact" style={{ background: '#1A305E', color: '#fff', padding: '14px 32px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
