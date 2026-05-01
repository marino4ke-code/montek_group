import { useState } from 'react'
import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: 'Kitchen Remodeling', area: 'Staten Island, NY', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/xyzgpnkb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
    setLoading(false)
  }

  return (
    <div style={{ background: '#F5F2EA', minHeight: '100vh' }}>
      <Header />
      <section style={{ padding: '72px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#B86B25', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>Get In Touch</div>
            <h1 style={{ color: '#1A305E', fontSize: '40px', fontWeight: 800, marginBottom: '12px' }}>Free Estimate & Contact</h1>
            <p style={{ color: '#5A6A7A', fontSize: '16px', lineHeight: 1.7 }}>Fill out the form and we will get back to you within 24 hours with a free no-obligation estimate.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}>

            {/* FORM */}
            <div style={{ background: '#fff', border: '1px solid #E0D8CC', borderRadius: '12px', padding: '36px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ color: '#1A305E', fontSize: '22px', fontWeight: 800, marginBottom: '10px' }}>Request Received!</h3>
                  <p style={{ color: '#5A6A7A', fontSize: '15px' }}>Thank you! We will contact you within 24 hours to discuss your project and schedule a free on-site estimate.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ color: '#1A305E', fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Request a Free Estimate</h3>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ color: '#1A305E', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>FULL NAME *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      style={{ width: '100%', background: '#F5F2EA', border: '1px solid #E0D8CC', borderRadius: '6px', padding: '12px', fontSize: '14px', color: '#1A305E', outline: 'none' }} />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ color: '#1A305E', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>PHONE NUMBER *</label>
                    <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="(347) 000-0000" type="tel"
                      style={{ width: '100%', background: '#F5F2EA', border: '1px solid #E0D8CC', borderRadius: '6px', padding: '12px', fontSize: '14px', color: '#1A305E', outline: 'none' }} />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ color: '#1A305E', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>EMAIL ADDRESS</label>
                    <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="john@email.com" type="email"
                      style={{ width: '100%', background: '#F5F2EA', border: '1px solid #E0D8CC', borderRadius: '6px', padding: '12px', fontSize: '14px', color: '#1A305E', outline: 'none' }} />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ color: '#1A305E', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>SERVICE NEEDED</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      style={{ width: '100%', background: '#F5F2EA', border: '1px solid #E0D8CC', borderRadius: '6px', padding: '12px', fontSize: '14px', color: '#1A305E', outline: 'none' }}>
                      {['Kitchen Remodeling', 'Bathroom Renovation', 'Basement Finishing', 'Flooring', 'Painting', 'Doors & Windows', 'Decks & Outdoor', 'Full Home Renovation', 'Commercial Work', 'Other'].map(s => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ color: '#1A305E', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>SERVICE AREA</label>
                    <select value={form.area} onChange={e => setForm({ ...form, area: e.target.value })}
                      style={{ width: '100%', background: '#F5F2EA', border: '1px solid #E0D8CC', borderRadius: '6px', padding: '12px', fontSize: '14px', color: '#1A305E', outline: 'none' }}>
                      {['Staten Island, NY', 'Manhattan, NY', 'Brooklyn, NY', 'Queens, NY', 'Central New Jersey', 'Northern New Jersey'].map(a => (
                        <option key={a}>{a}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ color: '#1A305E', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>TELL US ABOUT YOUR PROJECT</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your project, timeline, and any specific requirements..."
                      rows={4}
                      style={{ width: '100%', background: '#F5F2EA', border: '1px solid #E0D8CC', borderRadius: '6px', padding: '12px', fontSize: '14px', color: '#1A305E', outline: 'none', resize: 'vertical' }} />
                  </div>

                  <button type="submit" disabled={loading}
                    style={{ width: '100%', background: '#B86B25', color: '#fff', border: 'none', padding: '14px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
                    {loading ? 'Sending...' : 'Send My Free Estimate Request'}
                  </button>
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#1A305E', borderRadius: '10px', padding: '20px' }}>
                <div style={{ color: '#B86B25', fontSize: '11px', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>PHONE</div>
                <div style={{ color: '#fff', fontSize: '20px', fontWeight: 700 }}>347-286-1223</div>
                <div style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>Call or text anytime</div>
              </div>

              <div style={{ background: '#1A305E', borderRadius: '10px', padding: '20px' }}>
                <div style={{ color: '#B86B25', fontSize: '11px', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>LOCATION</div>
                <div style={{ color: '#fff', fontSize: '16px', fontWeight: 700 }}>Staten Island, NY</div>
                <div style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>Serving NY & NJ</div>
              </div>

              <div style={{ background: '#1A305E', borderRadius: '10px', padding: '20px' }}>
                <div style={{ color: '#B86B25', fontSize: '11px', letterSpacing: '1px', marginBottom: '12px', fontWeight: 700 }}>BUSINESS HOURS</div>
                {[['Monday – Friday', '7:00 AM – 7:00 PM'], ['Saturday', '8:00 AM – 5:00 PM'], ['Sunday', 'By Appointment']].map(([day, time]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #1e3a6e' }}>
                    <span style={{ color: '#94a3b8', fontSize: '13px' }}>{day}</span>
                    <span style={{ color: '#fff', fontSize: '13px' }}>{time}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: '#B86B25', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>LICENSED & INSURED</div>
                <div style={{ color: '#F5F2EA', fontSize: '15px', fontWeight: 800 }}>New York & New Jersey</div>
                <div style={{ color: '#F5F2EA', fontSize: '12px', marginTop: '4px', opacity: 0.9 }}>Fully bonded — you are protected.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
