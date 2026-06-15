import { useEffect, useRef } from 'react'

const BASE = import.meta.env.BASE_URL

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

  const hasPdf    = !!section.pdfFile && section.pdfFile.endsWith('.pdf')
  const hasSheet  = !!section.pdfFile && section.pdfFile.startsWith('https://')
  const hasDoc    = hasPdf || hasSheet
  const embedUrl  = hasPdf ? `${BASE}pdfs/${section.pdfFile}` : section.pdfFile

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
              <span style={{ fontSize: 11, color: 'rgba(10,10,10,.4)', fontFamily: 'monospace' }}>
                #{section.num}
              </span>
              {hasSheet && (
                <span style={{ fontSize: 10, fontWeight: 500, padding: '2px 8px', borderRadius: 20, background: '#f0fdf4', color: '#16a34a' }}>
                  📊 Google Sheets
                </span>
              )}
            </div>
            <div style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: '1rem', color: '#0a0a0a', marginTop: 4,
            }}>{section.title}</div>
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
            flex: 1, padding: hasDoc ? 0 : 24,
            overflowY: 'auto',
            background: hasDoc ? '#f1f5f9' : '#f8f7f4',
          }}>

            {hasDoc ? (
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
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: '1.1rem', color: '#0a0a0a', marginBottom: 8,
                }}>{section.title}</div>
                <p style={{
                  fontSize: '.88rem', color: 'rgba(10,10,10,.6)',
                  maxWidth: 380, margin: '0 auto 16px', lineHeight: 1.6,
                }}>{section.detail}</p>
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