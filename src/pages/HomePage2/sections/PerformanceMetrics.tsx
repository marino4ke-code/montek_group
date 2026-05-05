const stats = [
  { num: '100+', lbl: 'Projects Completed' },
  { num: '6', lbl: 'Service Areas' },
  { num: 'LICENSED & INSURED', lbl: 'NY & NJ', large: true },
  { num: '100%', lbl: 'Satisfaction Goal' },
]

export default function PerformanceMetrics() {
  return (
    <div style={{ background: '#1A305E', display: 'flex', justifyContent: 'space-around', padding: 'clamp(24px, 3vw, 36px) clamp(20px, 4vw, 48px)', flexWrap: 'wrap', gap: '20px' }}>
      {stats.map(s => (
        <div key={s.lbl} style={{ textAlign: 'center', minWidth: '120px' }}>
          <div style={{ fontSize: s.large ? 'clamp(18px, 2.5vw, 24px)' : 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#fff', letterSpacing: s.large ? '0.5px' : 'normal' }}>{s.num}</div>
          <div style={{ fontSize: s.large ? 'clamp(14px, 1.5vw, 17px)' : '13px', color: '#F5F2EA', letterSpacing: '1px', marginTop: '4px', textTransform: 'uppercase', opacity: 0.8 }}>{s.lbl}</div>
        </div>
      ))}
    </div>
  )
}
