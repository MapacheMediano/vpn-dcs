import { useEffect, useRef } from 'react'

const BASE = import.meta.env.BASE_URL

const MISION_VISION = {
  mision: 'Proveer un servicio de conectividad remota segura, confiable y gobernada a los usuarios de la organización, garantizando la confidencialidad, integridad y disponibilidad de la información mediante tecnologías de código abierto y el marco de gobernanza COBIT 2019.',
  vision: 'Ser el servicio de acceso remoto de referencia en ESCOM IPN, reconocido por su robustez técnica, alineación estratégica y cumplimiento normativo, consolidando un modelo de gobernanza de TI replicable en organizaciones que adopten esquemas de trabajo híbrido y remoto.',
  valores: [
    { icon: '🔐', name: 'Seguridad',      desc: 'Cada conexión está cifrada y autenticada. La protección de la información no es opcional, es el núcleo del servicio.' },
    { icon: '✅', name: 'Confiabilidad',  desc: 'Disponibilidad del 99.5% con failover automático. Los usuarios confían en que el servicio estará cuando lo necesiten.' },
    { icon: '📋', name: 'Gobernanza',     desc: 'Cada proceso está alineado a COBIT 2019, ITIL v4 e ISO 27001. Las decisiones se toman con trazabilidad y rendición de cuentas.' },
    { icon: '🔍', name: 'Transparencia', desc: 'Bitácoras completas, auditorías periódicas y reportes de cumplimiento accesibles para todos los involucrados.' },
    { icon: '⚡', name: 'Innovación',     desc: 'Uso de tecnologías modernas de código abierto (WireGuard, OpenVPN) que eliminan dependencias de un solo fabricante.' },
    { icon: '🤝', name: 'Colaboración',  desc: 'El servicio se construye y opera en equipo, integrando roles técnicos, de gobernanza y de soporte con responsabilidades claras.' },
  ],
}

function MisionVisionView() {
  return (
    <div style={{ padding: '32px', overflowY: 'auto', maxHeight: '75vh' }}>

      {/* Misión */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🎯</div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0a0a0a' }}>Misión</span>
        </div>
        <p style={{ fontSize: '.95rem', lineHeight: 1.75, color: 'rgba(10,10,10,.7)', background: '#f8f7f4', padding: '16px 20px', borderRadius: 14, borderLeft: '3px solid #7c3aed' }}>
          {MISION_VISION.mision}
        </p>
      </div>

      {/* Visión */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🚀</div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0a0a0a' }}>Visión</span>
        </div>
        <p style={{ fontSize: '.95rem', lineHeight: 1.75, color: 'rgba(10,10,10,.7)', background: '#f8f7f4', padding: '16px 20px', borderRadius: 14, borderLeft: '3px solid #2563eb' }}>
          {MISION_VISION.vision}
        </p>
      </div>

      {/* Valores */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>💎</div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0a0a0a' }}>Valores</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
          {MISION_VISION.valores.map(v => (
            <div key={v.name} style={{ background: '#fff', border: '1px solid rgba(10,10,10,.08)', borderRadius: 16, padding: '16px 18px', transition: 'all .2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 20 }}>{v.icon}</span>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.95rem', color: '#0a0a0a' }}>{v.name}</span>
              </div>
              <p style={{ fontSize: '.82rem', lineHeight: 1.6, color: 'rgba(10,10,10,.6)' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default function PdfModal({ section, onClose }) {
  const frameRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const CAT_COLORS = {
    identity: '#7c3aed', strategy: '#2563eb',
    ops: '#ea580c', security: '#16a34a',
  }

  const isMisionVision = section.id === 'identity-4'
  const hasPdf   = !!section.pdfFile && section.pdfFile.endsWith('.pdf')
  const hasSheet = !!section.pdfFile && section.pdfFile.startsWith('https://')
  const hasDoc   = hasPdf || hasSheet
  const embedUrl = hasPdf ? `${BASE}pdfs/${section.pdfFile}` : section.pdfFile

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(10,10,10,.65)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20, animation: 'modal-in .25s ease',
      }}>
      <div style={{
        background: '#fff', borderRadius: 28,
        width: '100%', maxWidth: 900, maxHeight: '92vh',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        boxShadow: '0 48px 120px rgba(0,0,0,.35)',
        animation: 'modal-slide .3s ease',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 24px', borderBottom: '1px solid rgba(10,10,10,.08)', flexShrink: 0,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 20,
                background: CAT_COLORS[section.cat] + '22',
                color: CAT_COLORS[section.cat],
                textTransform: 'uppercase', letterSpacing: '.08em',
              }}>{section.catLabel}</span>
              <span style={{ fontSize: 11, color: 'rgba(10,10,10,.4)', fontFamily: 'monospace' }}>#{section.num}</span>
              {hasSheet && (
                <span style={{ fontSize: 10, fontWeight: 500, padding: '2px 8px', borderRadius: 20, background: '#f0fdf4', color: '#16a34a' }}>
                  📊 Google Sheets
                </span>
              )}
            </div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0a0a0a', marginTop: 4 }}>
              {section.title}
            </div>
          </div>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 8,
            border: '1px solid rgba(10,10,10,.1)', background: 'none',
            cursor: 'pointer', fontSize: 16, color: 'rgba(10,10,10,.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            flex: 1,
            padding: (hasDoc || isMisionVision) ? 0 : 24,
            overflowY: 'auto',
            background: hasDoc ? '#f1f5f9' : '#f8f7f4',
          }}>
            {isMisionVision ? (
              <MisionVisionView />
            ) : hasDoc ? (
              <iframe
                ref={frameRef}
                src={embedUrl}
                title={section.title}
                style={{ width: '100%', height: '75vh', border: 'none', display: 'block' }}
              />
            ) : (
              <div style={{
                borderRadius: 20, border: '2px dashed rgba(10,10,10,.1)',
                padding: '56px 32px', textAlign: 'center', background: '#fff',
              }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>📋</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0a0a0a', marginBottom: 8 }}>
                  {section.title}
                </div>
                <p style={{ fontSize: '.88rem', color: 'rgba(10,10,10,.6)', maxWidth: 380, margin: '0 auto 16px', lineHeight: 1.6 }}>
                  {section.detail}
                </p>
                <span style={{
                  display: 'inline-block', padding: '6px 16px', borderRadius: 100,
                  background: '#f1f5f9', color: 'rgba(10,10,10,.4)',
                  fontSize: 12, fontWeight: 500,
                }}>🕐 Documento en proceso</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}