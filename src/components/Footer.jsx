import { useScrollReveal, revealStyle } from './useScrollReveal'
import { FRAMEWORKS, TEAM } from '../data/sections'

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export function FrameworksStrip() {
  return (
    <div id="frameworks" style={{ padding: '56px 5%', background: '#fff', borderTop: '1px solid rgba(10,10,10,.08)', borderBottom: '1px solid rgba(10,10,10,.08)' }}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(10,10,10,.6)' }}>
          Frameworks y estándares que sustentan el proyecto
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        {FRAMEWORKS.map(fw => (
          <div key={fw.label} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '10px 18px', borderRadius: 14, border: '1px solid rgba(10,10,10,.08)',
            fontSize: 13, fontWeight: 500, color: 'rgba(10,10,10,.6)',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: fw.color, flexShrink: 0 }} />
            {fw.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Nosotros() {
  const ref = useScrollReveal()
  const isMobile = window.innerWidth <= 900

  return (
    <section id="nosotros" style={{ padding: '100px 5%', background: '#0a0a0a' }}>
      <div ref={ref} style={{ ...revealStyle, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 36 : 60, alignItems: 'center' }}>
        <div>
          <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.12em', color: '#a78bfa', marginBottom: 16 }}>
            Sobre VPN DCS
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3.2rem)', lineHeight: 1.08, letterSpacing: '-1.5px', color: '#fff' }}>
            Seguridad empresarial con{' '}
            <span style={{ color: '#a78bfa' }}>gobierno robusto</span>
          </h2>
          <p style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,.45)', marginTop: 16, marginBottom: 28 }}>
            VPN DCS es el proyecto final de IT Governance (7CV4) en ESCOM IPN. Integra COBIT 2019, ITIL v4 e ISO 27001 en un servicio de conectividad VPN corporativa con OpenVPN y WireGuard. Profesora: Dra. Rocío Palacios Solano.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {TEAM.map(m => (
              <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                  {m.name.split(' ').map(w => w[0]).slice(0,2).join('')}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>{m.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>{m.role} · {m.schedule}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.07)', borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(255,255,255,.07)' }}>
          {[
            { num: '17', label: 'Secciones del proyecto integradas' },
            { num: '3',  label: 'Frameworks principales: COBIT · ITIL · ISO' },
            { num: '4',  label: 'Perspectivas del Balanced Scorecard' },
            { num: '$426K', label: 'Inversión total del proyecto en MXN' },
          ].map(m => (
            <div key={m.num} style={{ padding: '32px 28px', background: '#0a0a0a' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-2px', marginBottom: 6, background: 'linear-gradient(135deg,#fff,rgba(255,255,255,.55))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {m.num}
              </div>
              <div style={{ fontSize: '.82rem', fontWeight: 300, color: 'rgba(255,255,255,.45)', lineHeight: 1.5 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer style={{ padding: '44px 5%', borderTop: '1px solid rgba(10,10,10,.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, color: '#0a0a0a' }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#7c3aed,#2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 11, color: '#fff' }}>DCS</div>
        VPN DCS
      </div>
      <span style={{ fontSize: 13, color: 'rgba(10,10,10,.6)' }}>
        © 2026 VPN DCS · IT Governance · ESCOM IPN · Grupo 7CV4
      </span>
      <div style={{ display: 'flex', gap: 16 }}>
        {['hero','proyecto','nosotros'].map(id => (
          <span key={id} onClick={() => goTo(id)} style={{ fontSize: 13, color: 'rgba(10,10,10,.6)', cursor: 'pointer', textTransform: 'capitalize', transition: 'color .2s' }}
            onMouseEnter={e => e.target.style.color='#0a0a0a'}
            onMouseLeave={e => e.target.style.color='rgba(10,10,10,.6)'}>
            {id === 'hero' ? 'Inicio' : id.charAt(0).toUpperCase() + id.slice(1)}
          </span>
        ))}
      </div>
    </footer>
  )
}
