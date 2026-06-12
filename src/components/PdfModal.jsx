import { useEffect, useRef } from 'react'

export default function PdfModal({ section, onClose }) {
  const frameRef  = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  const loadPDF = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    const frame = frameRef.current
    frame.src = url + '#toolbar=1&navpanes=0&view=FitH'
    frame.style.display = 'block'
    frame.previousSibling.style.display = 'none'
  }

  const CAT_COLORS = {
    identity: '#7c3aed', strategy: '#2563eb',
    ops: '#ea580c', security: '#16a34a',
  }

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
        width: '100%', maxWidth: 880, maxHeight: '92vh',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        boxShadow: '0 48px 120px rgba(0,0,0,.35)',
        animation: 'modal-slide .3s ease',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid rgba(10,10,10,.08)', flexShrink: 0 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 20,
                background: CAT_COLORS[section.cat] + '22',
                color: CAT_COLORS[section.cat],
                textTransform: 'uppercase', letterSpacing: '.08em',
              }}>{section.catLabel}</span>
              <span style={{ fontSize: 11, color: 'rgba(10,10,10,.4)', fontFamily: 'monospace' }}>#{section.num}</span>
            </div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0a0a0a', marginTop: 4 }}>{section.title}</div>
          </div>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 8,
            border: '1px solid rgba(10,10,10,.1)', background: 'none',
            cursor: 'pointer', fontSize: 16, color: 'rgba(10,10,10,.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all .2s',
          }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, padding: 24, overflowY: 'auto', background: '#f8f7f4' }}>

            {/* Placeholder */}
            <div style={{
              borderRadius: 20, border: '2px dashed rgba(10,10,10,.1)',
              padding: '48px 32px', textAlign: 'center', background: '#fff',
            }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📄</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0a0a0a', marginBottom: 8 }}>{section.title}</div>
              <p style={{ fontSize: '.88rem', color: 'rgba(10,10,10,.6)', maxWidth: 380, margin: '0 auto 8px', lineHeight: 1.6 }}>{section.detail}</p>
              <p style={{ fontSize: '.8rem', color: 'rgba(10,10,10,.4)', maxWidth: 360, margin: '0 auto 24px', lineHeight: 1.6 }}>
                Adjunta el PDF correspondiente para visualizarlo aquí, o coloca el archivo en <code style={{ fontFamily: 'monospace', background: '#f1f5f9', padding: '1px 5px', borderRadius: 4 }}>public/pdfs/</code>
              </p>
              <label style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '11px 22px', borderRadius: 8,
                background: '#7c3aed', color: '#fff',
                fontSize: 14, fontWeight: 500, cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif', transition: 'all .2s',
              }}>
                📎 Adjuntar PDF
                <input ref={inputRef} type="file" accept=".pdf" style={{ display: 'none' }} onChange={loadPDF} />
              </label>
            </div>

            {/* iframe (hidden until file loaded) */}
            <iframe ref={frameRef} title={section.title}
              style={{ width: '100%', height: 620, border: 'none', borderRadius: 14, display: 'none', marginTop: 16 }} />
          </div>
        </div>
      </div>
    </div>
  )
}
