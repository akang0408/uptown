import { useState } from 'react'
import { hours } from '../data/siteData'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSub]   = useState(false)

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Wire to Formspree, Netlify Forms, EmailJS, etc.
    setSub(true)
  }

  return (
    <>
      <section className="page-hero">
        <p className="page-hero__eyebrow">We'd Love to Hear From You</p>
        <h1 className="page-hero__title">Find <em>Us</em></h1>
        <p className="page-hero__sub">
          Questions, catering inquiries, or just want to say hi —
          drop us a message or give us a call.
        </p>
      </section>

      <section className={`section section--light`}>
        <div className="container">
          <div className={styles.grid}>

            {/* Info panel */}
            <div className={styles.info}>
              <p className="eyebrow">Get in Touch</p>
              <div className="divider" />

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Phone</span>
                  <a href="tel:+13013453300" className={styles.value}>(301) 345-3300</a>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Email</span>
                  <a href="mailto:uptowndeliandgrill@gmail.com" className={styles.value}>
                    uptowndeliandgrill@gmail.com
                  </a>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Address</span>
                  <span className={styles.value}>
                    7501 Greenway Center Dr<br />
                    Inside MTC 3<br />
                    Greenbelt, MD 20770
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Hours</span>
                  <span className={styles.value}>
                    Monday – Friday<br />7:00 AM – 4:00 PM<br />
                    <em style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Breakfast until 11am</em>
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Order Online</span>
                  <a
                    href="https://www.sagextranet.com/uptowngrill/login.html"
                    target="_blank" rel="noreferrer"
                    className={styles.value}
                  >
                    Order via our online portal ↗
                  </a>
                </div>
              </div>

              <div className={styles.mapPlaceholder}>
                <iframe
                  title="Uptown Grill and Deli location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.!2d-76.8798!3d38.9989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c38ecb3e1a4b%3A0x1!2s7501+Greenway+Center+Dr%2C+Greenbelt%2C+MD+20770!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="240"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)', display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.google.com/?q=7501+Greenway+Center+Dr+Greenbelt+MD+20770"
                  target="_blank" rel="noreferrer"
                  className={`btn btn--primary ${styles.directionsBtn}`}
                >
                  Open in Google Maps ↗
                </a>
              </div>

              <div className={styles.hoursList}>
                <p className={styles.hoursTitle}>Full Hours</p>
                {hours.map(h => (
                  <div key={h.day} className={`${styles.hoursRow} ${!h.open ? styles.closedRow : ''}`}>
                    <span>{h.day}</span>
                    <span>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className={styles.formSide}>
              <p className="eyebrow">Send a Message</p>
              <div className="divider" />

              {submitted ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✓</span>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out! We'll get back to you as soon as we can.</p>
                  <button className="btn btn--outline" onClick={() => setSub(false)}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.row}>
                    <div className="field">
                      <label htmlFor="name">Full Name</label>
                      <input id="name" name="name" type="text" value={form.name} onChange={update} required />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={update} required />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className="field">
                      <label htmlFor="phone">Phone (optional)</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} />
                    </div>
                    <div className="field">
                      <label htmlFor="subject">Subject</label>
                      <select id="subject" name="subject" value={form.subject} onChange={update} required>
                        <option value="" disabled>Select a topic</option>
                        <option value="order">Order Question</option>
                        <option value="catering">Catering Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message"
                      placeholder="What's on your mind?"
                      rows={5}
                      value={form.message}
                      onChange={update}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
