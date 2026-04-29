import { useState } from 'react'
import { menuCategories } from '../data/siteData'
import styles from './Menu.module.css'

function MenuItemCard({ item }) {
  const [expanded, setExpanded] = useState(false)
  const hasOptions = item.options && item.options.length > 0

  return (
    <div className={`${styles.card} ${hasOptions ? styles.cardExpandable : ''}`}>
      <div className={styles.cardMain}>
        <div className={styles.cardTop}>
          <span className={styles.cardName}>{item.name}</span>
          <span className={styles.cardPrice}>{item.price}</span>
        </div>
        <p className={styles.cardDesc}>{item.description}</p>
        {item.tag && <span className="badge badge--green">{item.tag}</span>}
        {hasOptions && (
          <button
            className={styles.expandBtn}
            onClick={() => setExpanded(v => !v)}
            aria-expanded={expanded}
          >
            {expanded ? '− Fewer options' : '+ Options & Add-ons'}
          </button>
        )}
      </div>
      {hasOptions && expanded && (
        <div className={styles.options}>
          {item.options.map((opt, i) => (
            <div key={i} className={styles.option}>{opt}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const active = menuCategories.find(c => c.id === activeId)

  return (
    <>
      <section className="page-hero">
        <p className="page-hero__eyebrow">Uptown Grill & Deli</p>
        <h1 className="page-hero__title">Our <em>Menu</em></h1>
        <p className="page-hero__sub">
          Made fresh daily. Breakfast served until 11am.
          Order online or give us a call.
        </p>
        <div style={{ marginTop: '1.75rem', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://www.sagextranet.com/uptowngrill/login.html"
            target="_blank" rel="noreferrer"
            className="btn btn--primary"
          >
            Order Online ↗
          </a>
          <a href="tel:+13013453300" className="btn btn--outline">
            Call (301) 345-3300
          </a>
        </div>
      </section>

      {/* Sticky tabs */}
      <div className={styles.tabBar}>
        <div className={styles.tabInner}>
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeId === cat.id ? styles.tabActive : ''}`}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category */}
      <section className={`section section--light ${styles.menuSection}`}>
        <div className="container">
          <div className={styles.catMeta}>
            <div>
              <p className="eyebrow">{active.label}</p>
              <div className="divider" />
              {active.note && <p className={styles.catNote}>{active.note}</p>}
            </div>
            <div className={styles.catCount}>{active.items.length} items</div>
          </div>

          <div className={styles.grid}>
            {active.items.map(item => (
              <MenuItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section section--green`} style={{ textAlign: 'center' }}>
        <div className="container">
          <p className="eyebrow eyebrow--light">Hungry?</p>
          <div className="divider divider--center divider--light" />
          <h2 className="section-title section-title--light" style={{ marginBottom: '1.5rem' }}>
            Order Online or <em>Call Ahead</em>
          </h2>
          <p style={{ color: 'rgba(250,250,247,0.65)', maxWidth: 440, margin: '0 auto 2rem', lineHeight: 1.75, fontSize: '0.95rem' }}>
            Place your order through our online system or give us a call.
            We're open Monday through Friday, 7am–4pm.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://www.sagextranet.com/uptowngrill/login.html"
              target="_blank" rel="noreferrer"
              className="btn btn--primary"
            >
              Order Online ↗
            </a>
            <a href="tel:+13013453300" className="btn btn--outline-light">
              (301) 345-3300
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
