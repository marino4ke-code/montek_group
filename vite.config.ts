const reviews = [
  { stars: '★★★★★', text: 'Montek Group completely transformed our kitchen. The crew was professional, on time, and the quality exceeded our expectations. Will absolutely hire again.', author: 'Maria T., Staten Island, NY' },
  { stars: '★★★★★', text: 'They renovated our basement and did a beautiful job. Communication was great throughout and they stayed on budget.', author: 'David R., Brooklyn, NY' },
  { stars: '★★★★★', text: 'Top-notch tiling, new fixtures, everything done right. Clean, fast, and professional. Highly recommend Montek Group.', author: 'James K., Queens, NY' },
]

export default function CustomerFeedback() {
  return (
    <section style={{ background: '#1A305E', padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 48px)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>What Clients Say</div>
        <h2 style={{ color: '#fff', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginBottom: '12px' }}>Client Reviews</h2>
        <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.8, marginBottom: '40px' }}>Real results from real homeowners and businesses across NY and NJ.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {reviews.map(r => (
            <div key={r.author} style={{ background: '#F5F2EA', border: '1px solid #e0ddd4', borderRadius: '10px', padding: '24px', borderLeft: '4px solid #B86B25' }}>
              <div style={{ color: '#B86B25', fontSize: '18px', marginBottom: '12px' }}>{r.stars}</div>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.8, marginBottom: '14px', fontStyle: 'italic' }}>"{r.text}"</p>
              <div style={{ color: '#1A305E', fontSize: '13px', fontWeight: 700 }}>— {r.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
