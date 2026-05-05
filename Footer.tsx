import { Link } from 'react-router-dom'

const services = [
  { name: 'Kitchen Remodeling', desc: 'Custom cabinets, countertops, layouts & full gut renovations.', href: '/kitchen' },
  { name: 'Bathroom Renovation', desc: 'Tile, fixtures, waterproofing & complete bathroom rebuilds.', href: '/bathroom' },
  { name: 'Basement Finishing', desc: 'Transform unfinished basements into functional living spaces.', href: '/projects' },
  { name: 'Flooring', desc: 'Hardwood, tile, LVP, and carpet — supply & install.', href: '/flooring' },
  { name: 'Painting', desc: 'Interior & exterior painting with premium finishes.', href: '/painting' },
  { name: 'Doors & Windows', desc: 'Energy-efficient installs, replacements & custom millwork.', href: '/projects' },
  { name: 'Full Home Renovation', desc: 'Complete gut renovations from design to final walkthrough.', href: '/fullhome' },
  { name: 'Commercial Work', desc: 'Office fit-outs, retail spaces & commercial build-outs.', href: '/commercial' },
]

export default function OurServices() {
  return (
    <section style={{ background: '#F5F2EA', padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 48px)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>What We Do</div>
        <h2 style={{ color: '#1A305E', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, marginBottom: '12px' }}>Our Services</h2>
        <p style={{ color: '#5A6A7A', fontSize: '16px', lineHeight: 1.8, marginBottom: '40px', maxWidth: '600px' }}>
          From a single room refresh to a full commercial build-out — licensed tradespeople, quality materials, guaranteed results.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {services.map(s => (
            <Link key={s.name} to={s.href} style={{ background: '#fff', border: '1px solid #E0D8CC', borderRadius: '10px', padding: '28px 22px', borderTop: '3px solid #1A305E', textDecoration: 'none', display: 'block', transition: 'transform 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'none')}>
              <div style={{ color: '#1A305E', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{s.name}</div>
              <div style={{ color: '#6A7A8A', fontSize: '14px', lineHeight: 1.6, marginBottom: '14px' }}>{s.desc}</div>
              <span style={{ color: '#B86B25', fontSize: '14px', fontWeight: 600 }}>Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
