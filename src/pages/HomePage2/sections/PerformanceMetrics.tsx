const stats = [
  { num: '500+', lbl: 'Projects Completed' },
  { num: '6', lbl: 'Service Areas' },
  { num: 'NY & NJ', lbl: 'Licensed & Insured' },
  { num: '100%', lbl: 'Satisfaction Goal' },
]

export default function PerformanceMetrics() {
  return (
    <div style={{ background: '#1A305E', display: 'flex', justifyContent: 'space-around', padding: 'clamp(20px, 3vw, 32px) clamp(20px, 4vw, 48px)', flexWrap: 'wrap', gap: '20px' }}>
      {stats.map(s => (
        <div key={s.lbl} style={{ textAlign: 'center', minWidth: '120px' }}>
          <div style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: '#fff' }}>{s.num}</div>
          <div style={{ fontSize: '12px', color: '#F5F2EA', letterSpacing: '1px', marginTop: '4px', textTransform: 'uppercase', opacity: 0.8 }}>{s.lbl}</div>
        </div>
      ))}
    </div>
  )
}
