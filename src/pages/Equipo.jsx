import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PROFESOR = {
  nombre: 'Dra. Rocío Palacios Solano',
  rol: 'Profesora · IT Governance',
  iniciales: 'RP',
  color: '#7c3aed',
}

const EQUIPO = [
  { nombre: 'Díaz Franco Kevin Joel',        rol: 'Ingeniero VPN 1',                iniciales: 'KJ', horario: '7:00–15:00',  color: '#2563eb' },
  { nombre: 'Moreno Camargo Raúl Alejandro', rol: 'Ingeniero VPN 2',                iniciales: 'RA', horario: '15:00–22:00', color: '#ea580c' },
  { nombre: 'Sandoval Mandujano Samuel',     rol: 'Arquitecto / Analista Seguridad', iniciales: 'SM', horario: '9:00–18:00',  color: '#16a34a' },
]

export default function Equipo() {
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#f8f7f4', fontFamily: 'DM Sans, sans-serif' }}>

      {/* Header */}
      <div style={{
        background: '#fff', borderBottom: '1px solid rgba(10,10,10,.08)',
        padding: '0 5%', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 10,
        backdropFilter: 'blur(16px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg,#7c3aed,#2563eb)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: '#fff',
          }}>DCS</div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: '#0a0a0a' }}>
            VPN DCS
          </span>
        </div>
        <button onClick={() => navigate('/')} style={{
          padding: '8px 18px', borderRadius: 8,
          background: '#0a0a0a', color: '#fff',
          fontSize: 14, fontWeight: 500, fontFamily: 'DM Sans, sans-serif',
          border: 'none', cursor: 'pointer', transition: 'all .2s',
          display: 'flex', alignItems: 'center', gap: 6,
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#333' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#0a0a0a' }}>
          ← Regresar al inicio
        </button>
      </div>

      {/* Hero */}
      <div style={{ padding: '64px 5% 48px', textAlign: 'center' }}>
        <span style={{
          display: 'inline-block', fontSize: 12, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '.12em',
          color: '#7c3aed', marginBottom: 16,
        }}>
          ESCOM IPN · Grupo 7CV4 · 2026
        </span>
        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          letterSpacing: '-1.5px', color: '#0a0a0a', marginBottom: 12,
        }}>
          Equipo de trabajo
        </h1>
        <p style={{ fontSize: '1rem', fontWeight: 300, color: 'rgba(10,10,10,.6)', maxWidth: 480, margin: '0 auto' }}>
          Proyecto Final · IT Governance · Servicio de VPN Corporativa
        </p>
      </div>

      {/* Profesora */}
      <div style={{ padding: '0 5% 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(10,10,10,.4)' }}>
            Profesora
          </span>
        </div>
        <div style={{
          background: '#fff', borderRadius: 20,
          border: '1px solid rgba(10,10,10,.08)',
          padding: '28px 32px',
          display: 'flex', alignItems: 'center', gap: 20,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
            background: `linear-gradient(135deg, ${PROFESOR.color}33, ${PROFESOR.color}22)`,
            border: `2px solid ${PROFESOR.color}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18,
            color: PROFESOR.color,
          }}>
            {PROFESOR.iniciales}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0a0a0a', marginBottom: 4 }}>
              {PROFESOR.nombre}
            </div>
            <div style={{ fontSize: 13, color: 'rgba(10,10,10,.5)' }}>{PROFESOR.rol}</div>
          </div>
        </div>
      </div>

      {/* Equipo */}
      <div style={{ padding: '0 5% 80px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(10,10,10,.4)' }}>
            Integrantes
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {EQUIPO.map((m, i) => (
            <div key={m.nombre} style={{
              background: '#fff', borderRadius: 20,
              border: '1px solid rgba(10,10,10,.08)',
              padding: '28px 32px',
              display: 'flex', alignItems: 'center', gap: 20,
              transition: 'all .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 32px ${m.color}18`; e.currentTarget.style.borderColor = `${m.color}33` }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(10,10,10,.08)' }}>

              {/* Número */}
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: 'rgba(10,10,10,.04)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'rgba(10,10,10,.3)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Avatar */}
              <div style={{
                width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
                background: `linear-gradient(135deg, ${m.color}33, ${m.color}22)`,
                border: `2px solid ${m.color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18,
                color: m.color,
              }}>
                {m.iniciales}
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#0a0a0a', marginBottom: 4 }}>
                  {m.nombre}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(10,10,10,.5)' }}>{m.rol}</div>
              </div>

              {/* Horario */}
              <div style={{
                padding: '6px 14px', borderRadius: 100,
                background: `${m.color}11`, color: m.color,
                fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap',
              }}>
                🕐 {m.horario}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid rgba(10,10,10,.08)',
        padding: '24px 5%', textAlign: 'center',
        fontSize: 13, color: 'rgba(10,10,10,.4)',
      }}>
        © 2026 VPN DCS · IT Governance · ESCOM IPN · Grupo 7CV4
      </div>

    </div>
  )
}