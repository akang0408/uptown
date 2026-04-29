import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { to: '/menu',    label: 'Menu'      },
  { to: '/about',   label: 'About'     },
  { to: '/contact', label: 'Find Us'   },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  const solid = scrolled || !isHome

  return (
    <>
      <header className={`${styles.nav} ${solid ? styles.solid : styles.transparent}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <img src="/images/LOGO.png" alt="Uptown Grill & Deli" className={styles.logoImg} />
          </Link>

          <nav className={styles.links}>
            {links.map(({ to, label }) => (
              <NavLink
                key={to} to={to}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href="tel:+13013453300" className={styles.phone}>(301) 345-3300</a>
            <a
              href="https://www.sagextranet.com/uptowngrill/login.html"
              target="_blank" rel="noreferrer"
              className={`btn btn--primary ${styles.orderBtn}`}
            >
              Order Online
            </a>
          </div>

          <button
            className={styles.burger}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`${styles.drawer} ${open ? styles.open : ''}`} aria-hidden={!open}>
        <nav className={styles.drawerLinks}>
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className={styles.drawerLink}>{label}</Link>
          ))}
          <a href="tel:+13013453300" className={styles.drawerPhone}>(301) 345-3300</a>
          <a
            href="https://www.sagextranet.com/uptowngrill/login.html"
            target="_blank" rel="noreferrer"
            className={`btn btn--primary`}
            style={{ alignSelf: 'flex-start', marginTop: '8px' }}
          >
            Order Online ↗
          </a>
        </nav>
      </div>
    </>
  )
}
