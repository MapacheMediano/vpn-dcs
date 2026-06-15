import { METRICS, TICKER_ITEMS } from '../data/sections'

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <>
      <section id="hero" style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'calc(64px + 60px) 5% 80px',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        {/* Background orbs */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(10,10,10,.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          {[
            { w:650, h:650, bg:'#7c3aed', top:'-15%', left:'-8%',  delay:'0s'    },
            { w:520, h:520, bg:'#ea580c', top:'5%',   right:'-12%', delay:'-3.5s' },
            { w:420, h:420, bg:'#2563eb', bottom:'0', left:'18%',   delay:'-6s'   },
            { w:280, h:280, bg:'#0891b2', bottom:'25%',right:'10%', delay:'-1.5s' },
          ].map((orb, i) => (
            <div key={i} style={{
              position: 'absolute', borderRadius: '50%',
              width: orb.w, height: orb.h,
              background: orb.bg,
              top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom,
              filter: 'blur(90px)', opacity: .15,
              animation: `orb-float 9s ease-in-out ${orb.delay} infinite`,
            }} />
          ))}
        </div>

        {/* Badge */}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px 6px 8px', borderRadius: 100,
          border: '1px solid rgba(10,10,10,.08)', background: '#fff',
          fontSize: 12, color: 'rgba(10,10,10,.6)', marginBottom: 28,
          position: 'relative', zIndex: 1,
          animation: 'fade-up .6s ease both',
        }}>
          <span style={{
            width: 20, height: 20, borderRadius: '50%',
            background: 'linear-gradient(135deg,#7c3aed,#2563eb)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 9, color: '#fff', fontWeight: 700,
          }}>✦</span>
          Proyecto Final · IT Governance · ESCOM IPN · 7CV4
        </span>

        {/* Title */}
        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2rem, 4.5vw, 4rem)',
          lineHeight: 1.15, letterSpacing: '-1.5px', color: '#0a0a0a',
          textAlign: 'center',
          position: 'relative', zIndex: 1, maxWidth: 960,
          animation: 'fade-up .7s .1s ease both',
        }}>
          Infraestructura de{' '}
          <span style={{
            background: 'linear-gradient(135deg,#7c3aed 15%,#ea580c 50%,#2563eb 85%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Seguridad VPN
          </span>{' '}
          Empresarial
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 300,
          lineHeight: 1.7, color: 'rgba(10,10,10,.6)',
          maxWidth: 540, margin: '20px auto 0',
          position: 'relative', zIndex: 1,
          animation: 'fade-up .7s .2s ease both',
        }}>
          VPN DCS provee conectividad cifrada, gestión de accesos y continuidad operacional
          bajo los frameworks COBIT 2019, ITIL v4 e ISO 27001. OpenVPN · WireGuard · AES-256.
        </p>

        {/* CTA buttons */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          flexWrap: 'wrap', justifyContent: 'center',
          marginTop: 36, position: 'relative', zIndex: 1,
          animation: 'fade-up .7s .3s ease both',
        }}>
          <button onClick={() => goTo('proyecto')} style={{
            padding: '14px 28px', borderRadius: 8,
            background: '#0a0a0a', color: '#fff',
            fontSize: 15, fontWeight: 500, fontFamily: 'DM Sans, sans-serif',
            border: 'none', cursor: 'pointer', transition: 'all .2s',
          }}
            onMouseEnter={e => { e.target.style.background='#222'; e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 16px 40px rgba(0,0,0,.18)' }}
            onMouseLeave={e => { e.target.style.background='#0a0a0a'; e.target.style.transform='translateY(0)'; e.target.style.boxShadow='none' }}>
            Explorar Documentos →
          </button>
          <button onClick={() => goTo('features')} style={{
            padding: '14px 28px', borderRadius: 8,
            background: 'transparent', color: '#0a0a0a',
            fontSize: 15, fontWeight: 500, fontFamily: 'DM Sans, sans-serif',
            border: '1.5px solid rgba(10,10,10,.3)', cursor: 'pointer', transition: 'all .2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#0a0a0a'; e.currentTarget.style.background='rgba(10,10,10,.08)'; e.currentTarget.style.transform='translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(10,10,10,.3)'; e.currentTarget.style.background='transparent'; e.currentTarget.style.transform='translateY(0)' }}>
            Conocer el Servicio
          </button>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 32,
          flexWrap: 'wrap', justifyContent: 'center',
          marginTop: 56, paddingTop: 40,
          borderTop: '1px solid rgba(10,10,10,.08)',
          position: 'relative', zIndex: 1, width: '100%', maxWidth: 700,
          animation: 'fade-up .7s .4s ease both',
        }}>
          {METRICS.map((m, i) => (
            <div key={m.num} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              {i > 0 && <div style={{ width: 1, height: 40, background: 'rgba(10,10,10,.08)' }} />}
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.9rem', color: '#0a0a0a', letterSpacing: '-1px' }}>{m.num}</div>
                <div style={{ fontSize: 11, color: 'rgba(10,10,10,.6)', marginTop: 3 }}>{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ticker */}
      <div style={{ padding: '14px 0', borderTop: '1px solid rgba(10,10,10,.08)', borderBottom: '1px solid rgba(10,10,10,.08)', overflow: 'hidden', background: '#f8f7f4' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'ticker-scroll 30s linear infinite' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{
              padding: '0 28px', fontSize: 13, fontWeight: 500,
              color: 'rgba(10,10,10,.6)', display: 'inline-flex', alignItems: 'center',
            }}>
              {item}
              <span style={{ marginLeft: 28, color: 'rgba(10,10,10,.3)' }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
