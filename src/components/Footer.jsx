import { Link } from 'react-router-dom'
import { hours } from '../data/siteData'
import styles from './Footer.module.css'

export default function Footer() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const todayHours = hours.find(h => h.day === today)

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>U</span>
            <div>
              <div className={styles.logoName}>Uptown Grill & Deli</div>
              <div className={styles.logoSub}>Greenbelt, MD</div>
            </div>
          </div>
          <p className={styles.tagline}>
            A woman-owned small business serving fresh, homemade food to the
            Greenbelt community. M–F, 7am–4pm.
          </p>
          {todayHours && (
            <p className={styles.liveHours}>
              <span className={todayHours.open ? styles.openDot : styles.closedDot}>●</span>
              {todayHours.open ? `Open Today · ${todayHours.hours}` : 'Closed Today'}
            </p>
          )}
          <div className={styles.badges}>
            <span className="badge badge--green">Woman Owned</span>
            <span className="badge badge--green">Small Business</span>
            <span className="badge badge--green">Fresh Ingredients</span>
          </div>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navGroup}>
            <h3>Navigate</h3>
            <Link to="/">Home</Link>
            <Link to="/menu">Full Menu</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Find Us</Link>
          </div>
          <div className={styles.navGroup}>
            <h3>Contact</h3>
            <a href="tel:+13013453300">(301) 345-3300</a>
            <a href="mailto:uptowndeliandgrill@gmail.com">Email Us</a>
            <a
              href="https://maps.google.com/?q=7501+Greenway+Center+Dr+Greenbelt+MD+20770"
              target="_blank" rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
          <div className={styles.navGroup}>
            <h3>Order</h3>
            <a
              href="https://www.sagextranet.com/uptowngrill/login.html"
              target="_blank" rel="noreferrer"
            >
              Order Online ↗
            </a>
            <span className={styles.address}>
              7501 Greenway Center Dr<br />
              Inside MTC 3<br />
              Greenbelt, MD 20770
            </span>
          </div>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Uptown Grill and Deli. All rights reserved.</span>
      </div>
    </footer>
  )
}
