import { useState, useEffect } from 'react'

const s = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    height: 64, display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', padding: '0 5%',
    background: 'rgba(255,255,255,.88)',
    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(10,10,10,.08)',
    transition: 'box-shadow .3s',
  },
  logoWrap: { display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', textDecoration: 'none' },
  logoMark: {
    width: 36, height: 36, borderRadius: 10,
    background: 'linear-gradient(135deg,#7c3aed,#2563eb)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: '#fff',
  },
  logoText: { fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: '#0a0a0a' },
  links: { display: 'flex', alignItems: 'center', gap: 4 },
  link: {
    padding: '7px 14px', borderRadius: 8, fontSize: 14, fontWeight: 400,
    color: 'rgba(10,10,10,.6)', cursor: 'pointer', border: 'none',
    background: 'none', fontFamily: 'DM Sans, sans-serif', transition: 'all .2s',
  },
  cta: {
    padding: '8px 18px', borderRadius: 8,
    background: '#0a0a0a', color: '#fff',
    fontSize: 14, fontWeight: 500, cursor: 'pointer',
    border: 'none', fontFamily: 'DM Sans, sans-serif', transition: 'all .2s',
  },
  hamburger: {
    display: 'none', flexDirection: 'column', gap: 5,
    cursor: 'pointer', padding: 8, border: 'none', background: 'none',
  },
  bar: { width: 22, height: 2, background: '#0a0a0a', borderRadius: 2, display: 'block' },
  mobileNav: {
    position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
    background: 'rgba(255,255,255,.97)', backdropFilter: 'blur(20px)',
    flexDirection: 'column', padding: '24px 5%', gap: 4,
  },
  mobileLink: {
    padding: '14px 16px', borderRadius: 14, fontSize: 16,
    color: 'rgba(10,10,10,.6)', cursor: 'pointer', border: 'none',
    background: 'none', fontFamily: 'DM Sans, sans-serif', textAlign: 'left',
    transition: 'all .2s', width: '100%',
  },
}

const NAV_ITEMS = [
  { label: 'Servicio',    id: 'features'   },
  { label: 'Proyecto',   id: 'proyecto'   },
  { label: 'Frameworks', id: 'frameworks' },
  { label: 'Nosotros',   id: 'nosotros'   },
]

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile]     = useState(window.innerWidth <= 680)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onResize = () => setIsMobile(window.innerWidth <= 680)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <>
      <nav style={{ ...s.nav, boxShadow: scrolled ? '0 1px 28px rgba(0,0,0,.06)' : 'none' }}>
        <div style={s.logoWrap} onClick={() => goTo('hero')}>
          <div style={s.logoMark}>DCS</div>
          <span style={s.logoText}>VPN DCS</span>
        </div>

        {!isMobile && (
          <div style={s.links}>
            {NAV_ITEMS.map(item => (
              <button key={item.id} style={s.link} onClick={() => goTo(item.id)}
                onMouseEnter={e => { e.target.style.background='rgba(10,10,10,.08)'; e.target.style.color='#0a0a0a' }}
                onMouseLeave={e => { e.target.style.background='none'; e.target.style.color='rgba(10,10,10,.6)' }}>
                {item.label}
              </button>
            ))}
          </div>
        )}

        {!isMobile && (
          <button style={s.cta} onClick={() => goTo('proyecto')}
            onMouseEnter={e => { e.target.style.background='#222'; e.target.style.transform='translateY(-1px)' }}
            onMouseLeave={e => { e.target.style.background='#0a0a0a'; e.target.style.transform='translateY(0)' }}>
            Ver Documentos →
          </button>
        )}

        {isMobile && (
          <button style={s.hamburger} onClick={() => setMobileOpen(v => !v)} aria-label="Menú">
            <span style={s.bar} /><span style={s.bar} /><span style={s.bar} />
          </button>
        )}
      </nav>

      {mobileOpen && (
        <div style={{ ...s.mobileNav, display: 'flex' }}>
          {NAV_ITEMS.map(item => (
            <button key={item.id} style={s.mobileLink}
              onClick={() => { goTo(item.id); setMobileOpen(false) }}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
