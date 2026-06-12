import { useEffect, useState } from 'react'

const styles = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 999,
    background: '#0a0a0a',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    transition: 'opacity .8s ease, visibility .8s ease',
  },
  gone: { opacity: 0, visibility: 'hidden', pointerEvents: 'none' },
  logo: {
    width: 72, height: 72, borderRadius: 20,
    background: 'linear-gradient(135deg,#7c3aed,#2563eb)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 26, color: '#fff',
    marginBottom: 24,
    animation: 'welcome-pop .5s .2s cubic-bezier(.34,1.56,.64,1) both',
  },
  name: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.4rem',
    color: '#fff', letterSpacing: '-1.5px', marginBottom: 8,
    animation: 'fade-up .5s .35s ease both',
  },
  tagline: {
    fontSize: '.85rem', color: 'rgba(255,255,255,.35)',
    letterSpacing: '.08em', textTransform: 'uppercase',
    animation: 'fade-up .5s .45s ease both',
  },
  barWrap: {
    width: 160, height: 2, background: 'rgba(255,255,255,.1)',
    borderRadius: 1, marginTop: 44, overflow: 'hidden',
    animation: 'fade-up .4s .5s ease both',
  },
  barFill: {
    height: '100%',
    background: 'linear-gradient(90deg,#7c3aed,#2563eb,#0891b2)',
    borderRadius: 1,
    animation: 'bar-fill 1.6s .65s cubic-bezier(.4,0,.2,1) both',
  },
}

export default function WelcomeScreen() {
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ ...styles.overlay, ...(gone ? styles.gone : {}) }}>
      <div style={styles.logo}>DCS</div>
      <div style={styles.name}>VPN DCS</div>
      <div style={styles.tagline}>Gobierno de TI · ESCOM · IPN · 7CV4</div>
      <div style={styles.barWrap}>
        <div style={styles.barFill} />
      </div>
    </div>
  )
}
