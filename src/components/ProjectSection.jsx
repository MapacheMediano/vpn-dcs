import { useState } from 'react'
import { SECTIONS, TABS } from '../data/sections'
import { useScrollReveal, revealStyle } from './useScrollReveal'
import PdfModal from './PdfModal'

const CAT_STYLES = {
  identity: { border: '#7c3aed', tag: { bg: '#ede9fe', color: '#7c3aed' }, bar: 'linear-gradient(90deg,#7c3aed,#2563eb)' },
  strategy: { border: '#2563eb', tag: { bg: '#eff6ff', color: '#2563eb' }, bar: 'linear-gradient(90deg,#2563eb,#0891b2)' },
  ops:      { border: '#ea580c', tag: { bg: '#fff7ed', color: '#ea580c' }, bar: 'linear-gradient(90deg,#ea580c,#db2777)' },
  security: { border: '#16a34a', tag: { bg: '#f0fdf4', color: '#16a34a' }, bar: 'linear-gradient(90deg,#ea580c,#16a34a)' },
}

function ProjectCard({ section, onOpen }) {
  const [hovered, setHovered] = useState(false)
  const cs = CAT_STYLES[section.cat]

  return (
    <div
      onClick={() => onOpen(section)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20, padding: 24, cursor: 'pointer',
        border: hovered ? `1.5px solid ${cs.border}` : '1.5px solid rgba(10,10,10,.08)',
        background: '#fff', position: 'relative', overflow: 'hidden',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 40px ${cs.border}1a` : 'none',
        transition: 'all .25s',
      }}>
      {/* Top color bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        borderRadius: '3px 3px 0 0', background: cs.bar,
        opacity: hovered ? 1 : 0, transition: 'opacity .25s',
      }} />

      <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(10,10,10,.3)', marginBottom: 10 }}>
        {section.num} · {section.catLabel}
      </div>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0a0a0a', marginBottom: 6, letterSpacing: '-.2px' }}>
        {section.title}
      </div>
      <div style={{ fontSize: '.82rem', lineHeight: 1.6, color: 'rgba(10,10,10,.6)' }}>
        {section.desc}
      </div>
      <span style={{ display: 'inline-block', marginTop: 12, padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 500, background: cs.tag.bg, color: cs.tag.color }}>
        {section.catLabel}
      </span>

      {/* Arrow */}
      <div style={{
        position: 'absolute', top: 20, right: 20,
        width: 28, height: 28, borderRadius: '50%',
        background: hovered ? cs.border : 'rgba(10,10,10,.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, color: hovered ? '#fff' : '#0a0a0a',
        transition: 'all .25s',
      }}>→</div>
    </div>
  )
}

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState('all')
  const [modal, setModal]         = useState(null)
  const titleRef = useScrollReveal()
  const gridRef  = useScrollReveal()

  const filtered = activeTab === 'all' ? SECTIONS : SECTIONS.filter(s => s.cat === activeTab)

  return (
    <section id="proyecto" style={{ padding: '100px 5%', background: '#fff' }}>
      <div ref={titleRef} style={revealStyle}>
        <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.12em', color: '#7c3aed', marginBottom: 16 }}>
          Documentación del Proyecto
        </span>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3.5rem)', lineHeight: 1.08, letterSpacing: '-1.5px', color: '#0a0a0a' }}>
          Las <span style={{ color: '#7c3aed' }}>17 secciones</span> del proyecto final
        </h2>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(10,10,10,.6)', maxWidth: 520, marginTop: 14 }}>
          Explora cada entrega del semestre. Haz clic en cualquier tarjeta para ver el documento o adjuntar el PDF correspondiente.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, padding: 4, background: '#f8f7f4', borderRadius: 14, border: '1px solid rgba(10,10,10,.08)', flexWrap: 'wrap', marginTop: 32, marginBottom: 24, width: 'fit-content' }}>
        {TABS.map(tab => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
            padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 500,
            cursor: 'pointer', border: 'none', fontFamily: 'DM Sans, sans-serif',
            transition: 'all .2s', whiteSpace: 'nowrap',
            background: activeTab === tab.key ? '#fff' : 'none',
            color: activeTab === tab.key ? '#0a0a0a' : 'rgba(10,10,10,.6)',
            boxShadow: activeTab === tab.key ? '0 1px 4px rgba(0,0,0,.1)' : 'none',
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div ref={gridRef} style={{ ...revealStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 14, transitionDelay: '.12s' }}>
        {filtered.map(section => (
          <ProjectCard key={section.id} section={section} onOpen={setModal} />
        ))}
      </div>

      {/* Modal */}
      {modal && <PdfModal section={modal} onClose={() => setModal(null)} />}
    </section>
  )
}
