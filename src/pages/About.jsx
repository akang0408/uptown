import { Link } from 'react-router-dom'
import { hours, reviews } from '../data/siteData'
import styles from './About.module.css'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <p className="page-hero__eyebrow">Woman-Owned · Greenbelt, MD</p>
        <h1 className="page-hero__title">About <em>Uptown</em></h1>
        <p className="page-hero__sub">
          A small business with a big heart — serving Greenbelt's community
          with fresh, homemade food since day one.
        </p>
      </section>

      {/* Story */}
      <section className={`section section--light`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <p className="eyebrow">Our Story</p>
              <div className="divider" />
              <h2 className="section-title">
                The Hole-in-the-Wall<br /><em>Everyone Should Know</em>
              </h2>
              <p className={styles.body}>
                Uptown Grill and Deli was built on a simple idea: make great food,
                treat people well, and show up every day. Tucked inside MTC 3 in
                Greenbelt, Maryland, we're the kind of place you discover once and
                never forget.
              </p>
              <p className={styles.body}>
                We're a woman-owned small business and proud of it. Every item on
                our menu is prepared fresh daily — from our breakfast platters and
                homemade soups to our signature Uptown Faves and teriyaki bowls.
                No shortcuts, no frozen shortcuts. Just real food made with care.
              </p>
              <p className={styles.body}>
                Our regulars come for the food and stay for the people. The team
                here is kind, hardworking, and genuinely happy to see you. That's
                what makes Uptown more than a deli — it's a community staple.
              </p>
              <div className={styles.storyActions}>
                <Link to="/menu" className="btn btn--primary">See Our Menu</Link>
                <Link to="/contact" className="btn btn--outline">Find Us</Link>
              </div>
            </div>
            <div className={styles.storyImgs}>
              <div className={styles.imgA}>
                <img src="/images/blt.JPG" alt="Food at Uptown Grill" loading="lazy" />
              </div>
              <div className={styles.imgB}>
                <img src="/images/newbowl.png" alt="Teriyaki bowl" loading="lazy" />
              </div>
              <div className={styles.imgC}>
                <img src="/images/reuben.jpg" alt="Mr. Reuben sandwich" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges / Values */}
      <section className={`section section--warm`}>
        <div className="container">
          <p className="eyebrow" style={{ textAlign: 'center' }}>What We Stand For</p>
          <div className="divider divider--center" />
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Why People <em>Keep Coming Back</em>
          </h2>
          <div className={styles.valuesGrid}>
            {[
              {
                title: 'Homemade Everything',
                body: 'We make our soups, sauces, and specialty items from scratch daily. You can taste the difference — and our regulars do.',
              },
              {
                title: 'Woman-Owned Business',
                body: 'Uptown is woman-owned and proud. We believe in building something meaningful for our community.',
              },
              {
                title: 'Fresh Ingredients',
                body: 'Quality ingredients make quality food. We source fresh produce and proteins every day to keep our menu tasting its best.',
              },
              {
                title: 'Fast & Friendly',
                body: 'Your lunch break is precious. We work quickly without cutting corners, and we do it all with a smile.',
              },
            ].map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <span className={styles.valueNum}>0{i + 1}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={`section section--green`}>
        <div className="container">
          <p className="eyebrow eyebrow--light" style={{ textAlign: 'center' }}>Google Reviews</p>
          <div className="divider divider--center divider--light" />
          <h2 className="section-title section-title--light" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            In Their Own <em>Words</em>
          </h2>
          <div className={styles.reviewsGrid}>
            {reviews.map((r, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.reviewStars}>{'★'.repeat(r.stars)}</div>
                <p className={styles.reviewText}>"{r.text}"</p>
                <div className={styles.reviewName}>{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className={`section section--light`}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div>
              <p className="eyebrow">Visit Us</p>
              <div className="divider" />
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>
                Hours & <em>Location</em>
              </h2>
              <div className={styles.contactItems}>
                {[
                  { label: 'Address',   value: '7501 Greenway Center Dr, Inside MTC 3, Greenbelt, MD 20770' },
                  { label: 'Phone',     value: '(301) 345-3300', href: 'tel:+13013453300' },
                  { label: 'Email',     value: 'uptowndeliandgrill@gmail.com', href: 'mailto:uptowndeliandgrill@gmail.com' },
                  { label: 'Order Online', value: 'sagextranet.com/uptowngrill', href: 'https://www.sagextranet.com/uptowngrill/login.html', external: true },
                ].map(c => (
                  <div key={c.label} className={styles.contactItem}>
                    <span className={styles.contactLabel}>{c.label}</span>
                    {c.href ? (
                      <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noreferrer' : undefined} className={styles.contactValue}>
                        {c.value}
                      </a>
                    ) : (
                      <span className={styles.contactValue}>{c.value}</span>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '2rem' }}>
                <a
                  href="https://maps.google.com/?q=7501+Greenway+Center+Dr+Greenbelt+MD+20770"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary"
                >
                  Get Directions
                </a>
                <Link to="/contact" className="btn btn--outline">Contact Page</Link>
              </div>
            </div>
            <div>
              <p className="eyebrow">Hours</p>
              <div className="divider" />
              <table className={styles.hoursTable}>
                <tbody>
                  {hours.map(h => (
                    <tr key={h.day} className={!h.open ? styles.closedRow : ''}>
                      <td className={styles.day}>{h.day}</td>
                      <td className={styles.time}>{h.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.hoursNote}>Breakfast served until 11:00 AM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
