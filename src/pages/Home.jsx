import { Link } from 'react-router-dom'
import { featured, reviews, hours, menuCategories } from '../data/siteData'
import styles from './Home.module.css'

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const todayHours = hours.find(h => h.day === today)

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <div className={styles.heroBadges}>
            <span className="badge badge--green">Woman Owned</span>
            <span className="badge badge--green">Fresh Ingredients</span>
          </div>
          <h1 className={styles.heroTitle}>
            Fresh Food,<br />
            <em>Made Daily.</em>
          </h1>
          <p className={styles.heroSub}>
            Greenbelt's favorite deli — homemade breakfast, handcrafted
            sandwiches, teriyaki bowls, and more. Inside MTC 3 at
            7501 Greenway Center Dr.
          </p>
          <div className={styles.heroMeta}>
            {todayHours && (
              <span className={styles.hoursChip}>
                <span className={todayHours.open ? styles.dot : styles.dotClosed}>●</span>
                {todayHours.open ? `Open Today · ${todayHours.hours}` : 'Closed Today'}
              </span>
            )}
            <span className={styles.metaSep}>·</span>
            <a href="tel:+13013453300" className={styles.phoneLink}>(301) 345-3300</a>
          </div>
          <div className={styles.heroActions}>
            <a
              href="https://www.sagextranet.com/uptowngrill/login.html"
              target="_blank" rel="noreferrer"
              className="btn btn--primary"
            >
              Order Online ↗
            </a>
            <Link to="/menu" className="btn btn--outline">View Menu</Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.heroImgFrame}>
            <img
              src="/images/blt.JPG"
              alt="Fresh food at Uptown Grill and Deli"
            />
          </div>
          <div className={styles.heroFloatCard}>
            <span className={styles.floatNum}>5.0</span>
            <span className={styles.floatStars}>★★★★★</span>
            <span className={styles.floatLabel}>Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className={styles.trustBar}>
        <div className="container">
          <div className={styles.trustItems}>
            {[
              { icon: '◈', label: 'Homemade Daily' },
              { icon: '◉', label: 'Woman-Owned Business' },
              { icon: '◈', label: 'Breakfast Until 11am' },
              { icon: '◉', label: 'Fast & Friendly Service' },
              { icon: '◈', label: 'M–F 7am–4pm' },
            ].map(t => (
              <div key={t.label} className={styles.trustItem}>
                <span className={styles.trustIcon}>{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Featured Items ─────────────────────────────────────── */
function FeaturedItems() {
  return (
    <section className={`section section--light ${styles.featuredSection}`}>
      <div className="container">
        <div className={styles.featuredHeader}>
          <div>
            <p className="eyebrow">Menu Highlights</p>
            <div className="divider" />
            <h2 className="section-title">Customer <em>Favorites</em></h2>
          </div>
          <Link to="/menu" className="btn btn--outline">See Full Menu →</Link>
        </div>
        <div className={styles.featuredGrid}>
          {featured.map((item, i) => (
            <div key={i} className={styles.featuredCard}>
              <div className={styles.featuredImg}>
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.featuredTop}>
                  <span className={styles.featuredName}>{item.name}</span>
                  <span className={styles.featuredPrice}>{item.price}</span>
                </div>
                <p className={styles.featuredDesc}>{item.description}</p>
                {item.note && <p className={styles.featuredNote}>{item.note}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.featuredCta}>
          <a
            href="https://www.sagextranet.com/uptowngrill/login.html"
            target="_blank" rel="noreferrer"
            className="btn btn--primary"
          >
            Order Now ↗
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── About Strip ────────────────────────────────────────── */
function AboutStrip() {
  return (
    <section className={`section section--green`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p className="eyebrow eyebrow--light">Our Story</p>
            <div className="divider divider--light" />
            <h2 className="section-title section-title--light">
              More Than a Deli —<br /><em>A Community Staple</em>
            </h2>
            <p className={styles.aboutBody}>
              Uptown Grill and Deli is a woman-owned small business built on a
              simple belief: everyone deserves a great meal made with care.
              Tucked inside MTC 3 in Greenbelt, we've become the go-to spot for
              office workers, neighbors, and regulars who keep coming back.
            </p>
            <p className={styles.aboutBody}>
              From our fresh breakfast platters to our homemade soups and
              signature teriyaki bowls, everything we make is prepared fresh
              daily with quality ingredients and a whole lot of love.
            </p>
            <div className={styles.aboutActions}>
              <Link to="/about" className="btn btn--outline-light">Our Story →</Link>
              <Link to="/contact" className="btn btn--outline-light">Find Us</Link>
            </div>
          </div>
          <div className={styles.aboutStats}>
            {[
              { num: '5★',   label: 'Google Rating'   },
              { num: 'M–F',  label: '7am – 4pm'       },
              { num: '100%', label: 'Woman Owned'      },
              { num: '♥',   label: 'Community Loved'  },
            ].map(s => (
              <div key={s.label} className={styles.statBox}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Menu Categories Preview ────────────────────────────── */
function MenuCategories() {
  const cats = menuCategories.slice(0, 6)
  return (
    <section className={`section section--warm ${styles.catsSection}`}>
      <div className="container">
        <p className="eyebrow">What We Serve</p>
        <div className="divider" />
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>
          Something for <em>Everyone</em>
        </h2>
        <div className={styles.catsGrid}>
          {cats.map(cat => (
            <Link to="/menu" key={cat.id} className={styles.catCard}>
              <div className={styles.catCount}>{cat.items.length} items</div>
              <h3 className={styles.catName}>{cat.label}</h3>
              {cat.note && <p className={styles.catNote}>{cat.note}</p>}
              <span className={styles.catArrow}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Reviews ────────────────────────────────────────────── */
function Reviews() {
  return (
    <section className={`section section--light ${styles.reviewsSection}`}>
      <div className="container">
        <p className="eyebrow eyebrow--muted" style={{ textAlign: 'center' }}>Google Reviews</p>
        <div className="divider divider--center" />
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          What Our <em>Regulars Say</em>
        </h2>
        <div className={styles.reviewsGrid}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.reviewCard}>
              <div className={styles.reviewStars}>{'★'.repeat(r.stars)}</div>
              <p className={styles.reviewText}>"{r.text}"</p>
              <div className={styles.reviewAuthor}>{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Find Us Banner ─────────────────────────────────────── */
function FindUs() {
  return (
    <section className={`section ${styles.findUsSection}`}>
      <div className="container">
        <div className={styles.findUsGrid}>
          <div>
            <p className="eyebrow eyebrow--light">Visit Us</p>
            <div className="divider divider--light" />
            <h2 className="section-title section-title--light">
              Come Find <em>Us</em>
            </h2>
            <p className={styles.findUsBody}>
              We're inside MTC 3 at 7501 Greenway Center Dr in Greenbelt, MD.
              Look for the smell of something delicious — that's us.
            </p>
            <div className={styles.findUsDetails}>
              <div className={styles.findUsItem}>
                <span className={styles.findUsLabel}>Address</span>
                <span className={styles.findUsValue}>
                  7501 Greenway Center Dr, Inside MTC 3<br />Greenbelt, MD 20770
                </span>
              </div>
              <div className={styles.findUsItem}>
                <span className={styles.findUsLabel}>Phone</span>
                <a href="tel:+13013453300" className={styles.findUsValue}>(301) 345-3300</a>
              </div>
              <div className={styles.findUsItem}>
                <span className={styles.findUsLabel}>Hours</span>
                <span className={styles.findUsValue}>Monday – Friday · 7:00 AM – 4:00 PM</span>
              </div>
              <div className={styles.findUsItem}>
                <span className={styles.findUsLabel}>Email</span>
                <a href="mailto:uptowndeliandgrill@gmail.com" className={styles.findUsValue}>
                  uptowndeliandgrill@gmail.com
                </a>
              </div>
            </div>
            <div className={styles.findUsActions}>
              <a
                href="https://maps.google.com/?q=7501+Greenway+Center+Dr+Greenbelt+MD+20770"
                target="_blank" rel="noreferrer"
                className="btn btn--outline-light"
              >
                Get Directions
              </a>
              <a href="tel:+13013453300" className="btn btn--outline-light">
                Call Us
              </a>
            </div>
          </div>
          <div className={styles.hoursCard}>
            <h3 className={styles.hoursCardTitle}>Hours of Operation</h3>
            {hours.map(h => (
              <div key={h.day} className={`${styles.hoursRow} ${!h.open ? styles.closedRow : ''}`}>
                <span>{h.day}</span>
                <span>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedItems />
      <AboutStrip />
      <MenuCategories />
      <Reviews />
      <FindUs />
    </>
  )
}
