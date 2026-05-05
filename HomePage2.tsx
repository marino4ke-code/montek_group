import { useState } from 'react'
import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: 'Kitchen Remodeling', area: 'Staten Island, NY', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('https://formspree.io/f/xzdorrka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%', background: '#F5F2EA', border: '1px solid #E0D8CC',
    borderRadius: '6px', padding: '12px', fontSize: '15px', color: '#1A305E', outline: 'none'
  }

  const labelStyle = {
    color: '#1A305E', fontSize: '12px', fontWeight: 700 as const,
    letterSpacing: '0.5px', display: 'block' as const, marginBottom: '6px'
  }

  return (
    <div style={{ background: '#F5F2EA', minHeight: '100vh' }}>
      <Header />
      <section style={{ padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 48px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>Get In Touch</div>
            <h1 style={{ color: '#1A305E', fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 800, marginBottom: '12px' }}>Free Estimate & Contact</h1>
            <p style={{ color: '#5A6A7A', fontSize: '16px', lineHeight: 1.7 }}>Fill out the form and we will get back to you within 24 hours with a free no-obligation estimate.</p>
          </div>

          {/* FORM FIRST on all screens */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>

            {/* FORM */}
            <div style={{ background: '#fff', border: '1px solid #E0D8CC', borderRadius: '12px', padding: '36px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ color: '#1A305E', fontSize: '22px', fontWeight: 800, marginBottom: '10px' }}>Request Received!</h3>
                  <p style={{ color: '#5A6A7A', fontSize: '15px' }}>Thank you! We will contact you within 24 hours to discuss your project.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ color: '#1A305E', fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Request a Free Estimate</h3>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>FULL NAME *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Smith" style={inputStyle} />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>PHONE NUMBER *</label>
                    <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(347) 000-0000" type="tel" style={inputStyle} />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>EMAIL ADDRESS</label>
                    <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@email.com" type="email" style={inputStyle} />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>SERVICE NEEDED</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={inputStyle}>
                      {['Kitchen Remodeling', 'Bathroom Renovation', 'Basement Finishing', 'Flooring', 'Painting', 'Doors & Windows', 'Full Home Renovation', 'Commercial Work', 'Other'].map(s => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>SERVICE AREA</label>
                    <select value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} style={inputStyle}>
                      {['Staten Island, NY', 'Manhattan, NY', 'Brooklyn, NY', 'Queens, NY', 'Central New Jersey', 'Northern New Jersey'].map(a => (
                        <option key={a}>{a}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>TELL US ABOUT YOUR PROJECT</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your project, timeline, and any specific requirements..."
                      rows={4} style={{ ...inputStyle, resize: 'vertical' as const }} />
                  </div>

                  <button type="submit" disabled={loading}
                    style={{ width: '100%', background: '#B86B25', color: '#fff', border: 'none', padding: '15px', borderRadius: '6px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>
                    {loading ? 'Sending...' : 'Send My Free Estimate Request'}
                  </button>

                  {error && (
                    <p style={{ color: '#c0392b', fontSize: '14px', marginTop: '12px', textAlign: 'center' }}>
                      Something went wrong. Please call us at 347-286-1223.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#1A305E', borderRadius: '10px', padding: '24px' }}>
                <div style={{ color: '#B86B25', fontSize: '12px', letterSpacing: '1px', marginBottom: '12px', fontWeight: 700 }}>PHONE</div>
                <a href="tel:3472861223" style={{ color: '#fff', fontSize: '22px', fontWeight: 700, display: 'block', textDecoration: 'none', marginBottom: '8px' }}>347-286-1223</a>
                <a href="tel:3474804805" style={{ color: '#fff', fontSize: '22px', fontWeight: 700, display: 'block', textDecoration: 'none' }}>347-480-4805</a>
                <div style={{ color: '#94a3b8', fontSize: '14px', marginTop: '8px' }}>Call or text anytime</div>
              </div>

              <div style={{ background: '#1A305E', borderRadius: '10px', padding: '24px' }}>
                <div style={{ color: '#B86B25', fontSize: '12px', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>LOCATION</div>
                <div style={{ color: '#fff', fontSize: '17px', fontWeight: 700 }}>Staten Island, NY</div>
                <div style={{ color: '#94a3b8', fontSize: '14px', marginTop: '4px' }}>Serving NY & NJ</div>
              </div>

              <div style={{ background: '#1A305E', borderRadius: '10px', padding: '24px' }}>
                <div style={{ color: '#B86B25', fontSize: '12px', letterSpacing: '1px', marginBottom: '12px', fontWeight: 700 }}>BUSINESS HOURS</div>
                {[['Monday – Friday', '7:00 AM – 7:00 PM'], ['Saturday', '8:00 AM – 5:00 PM'], ['Sunday', 'By Appointment']].map(([day, time]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #1e3a6e' }}>
                    <span style={{ color: '#94a3b8', fontSize: '14px' }}>{day}</span>
                    <span style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>{time}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: '#B86B25', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                <div style={{ color: '#fff', fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>✓ LICENSED & INSURED</div>
                <div style={{ color: '#F5F2EA', fontSize: '17px', fontWeight: 800 }}>New York & New Jersey</div>
                <div style={{ color: '#F5F2EA', fontSize: '13px', marginTop: '4px', opacity: 0.9 }}>Fully bonded — you are protected.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
