import { useState, useEffect, useCallback } from 'react'
import { hours } from '../data/siteData'
import styles from './StatusBanner.module.css'

const BANNER_H = 44

function parseTimeMins(str) {
  const [time, period] = str.trim().split(' ')
  let [hr, min] = time.split(':').map(Number)
  if (period === 'PM' && hr !== 12) hr += 12
  if (period === 'AM' && hr === 12) hr = 0
  return hr * 60 + min
}

function findNextOpenDay(fromDayName) {
  const idx = hours.findIndex(h => h.day === fromDayName)
  for (let i = 1; i <= 7; i++) {
    const next = hours[(idx + i) % hours.length]
    if (next.open) return next.day
  }
  return 'Monday'
}

function getStatus() {
  const now    = new Date()
  const today  = now.toLocaleDateString('en-US', { weekday: 'long' })
  const entry  = hours.find(h => h.day === today)
  const nowMins = now.getHours() * 60 + now.getMinutes()

  if (!entry || !entry.open) {
    return { type: 'closed', next: findNextOpenDay(today) }
  }

  const [openStr, closeStr] = entry.hours.split(' – ')
  const openMins  = parseTimeMins(openStr)
  const closeMins = parseTimeMins(closeStr)

  if (nowMins < openMins) {
    return { type: 'not-open-yet', openTime: openStr }
  }
  if (nowMins >= closeMins) {
    return { type: 'closed', next: findNextOpenDay(today) }
  }

  const minsLeft = closeMins - nowMins
  if (minsLeft <= 30) {
    return { type: 'closing-soon', minsLeft }
  }

  return { type: 'open' }
}

function buildMessage(status) {
  switch (status.type) {
    case 'closing-soon':
      return status.minsLeft <= 5
        ? `Closing in ${status.minsLeft} min — order online while you can`
        : `Closing in ${status.minsLeft} minutes · Order online now`
    case 'not-open-yet':
      return `Not open yet · We open at ${status.openTime} today`
    case 'closed': {
      const next = status.next
      const isWeekday = ['Monday','Tuesday','Wednesday','Thursday','Friday'].includes(next)
      const label = next === new Date(Date.now() + 86400000)
        .toLocaleDateString('en-US', { weekday: 'long' }) ? 'tomorrow' : next
      return isWeekday
        ? `We're closed · Back ${label} at 7:00 AM`
        : `Closed today · Open Monday–Friday, 7am–4pm`
    }
    default:
      return ''
  }
}

export default function StatusBanner() {
  const [status,    setStatus]    = useState(getStatus)
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem('bannerDismissed') === 'true'
  )

  // Refresh every minute so countdown stays accurate
  useEffect(() => {
    const id = setInterval(() => setStatus(getStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  const visible = !dismissed && status.type !== 'open'

  // Push the nav + hero down by the banner height via CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--banner-h', visible ? `${BANNER_H}px` : '0px'
    )
    return () => document.documentElement.style.setProperty('--banner-h', '0px')
  }, [visible])

  const dismiss = useCallback(() => {
    sessionStorage.setItem('bannerDismissed', 'true')
    setDismissed(true)
  }, [])

  if (!visible) return null

  const isWarn = status.type === 'closing-soon'

  return (
    <div
      className={`${styles.banner} ${isWarn ? styles.warn : styles.closed}`}
      role="status"
      aria-live="polite"
    >
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.msg}>{buildMessage(status)}</span>
      <button
        className={styles.dismiss}
        onClick={dismiss}
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  )
}
