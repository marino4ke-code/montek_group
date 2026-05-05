const steps = [
  { n: '1', title: 'Free Consultation & Estimate', desc: 'We visit your site, assess the scope, and provide a detailed, no-obligation written estimate — no surprise costs.' },
  { n: '2', title: 'Design & Planning', desc: 'We work with you on material selections, layout, permits, and a clear project timeline before breaking ground.' },
  { n: '3', title: 'Construction & Build', desc: 'Licensed tradespeople execute the work with daily updates, clean job sites, and strict timeline adherence.' },
  { n: '4', title: 'Final Walkthrough & Warranty', desc: 'Full punch-list inspection with you. Written warranty on labor and complete peace of mind.' },
]

export default function Process() {
  return (
    <section style={{ background: '#142444', padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 48px)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>How It Works</div>
        <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, marginBottom: '12px' }}>Our Process</h2>
        <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.8, marginBottom: '40px' }}>Simple, transparent, and stress-free from start to finish.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
          {steps.map(s => (
            <div key={s.n} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: '#1A305E', border: '1px solid #1e3a6e', borderRadius: '10px', padding: '24px' }}>
              <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: '#B86B25', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 800, flexShrink: 0 }}>{s.n}</div>
              <div>
                <div style={{ color: '#fff', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{s.title}</div>
                <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
