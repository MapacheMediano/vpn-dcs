import { useState } from 'react'
import { useScrollReveal, revealStyle } from './useScrollReveal'
import { FEATURES } from '../data/sections'

const ACCENT = {
  purple: { bg: '#ede9fe', color: '#7c3aed' },
  orange: { bg: '#fff7ed', color: '#ea580c' },
  blue:   { bg: '#eff6ff', color: '#2563eb' },
  cyan:   { bg: '#ecfeff', color: '#0891b2' },
  green:  { bg: '#f0fdf4', color: '#16a34a' },
}

function BentoCard({ icon, accent, title, body, style = {} }) {
  const [hovered, setHovered] = useState(false)
  const a = ACCENT[accent]
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 28, padding: 32,
        background: '#fff', border: '1px solid rgba(10,10,10,.08)',
        overflow: 'hidden', position: 'relative',
        transition: 'transform .3s, box-shadow .3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 64px rgba(0,0,0,.08)' : 'none',
        ...style,
      }}>
      <div style={{ width: 48, height: 48, borderRadius: 14, background: a.bg, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 20 }}>
        {icon}
      </div>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#0a0a0a', marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: '.9rem', fontWeight: 300, lineHeight: 1.65, color: 'rgba(10,10,10,.6)' }}>{body}</div>
    </div>
  )
}

export default function Features() {
  const titleRef = useScrollReveal()
  const gridRef  = useScrollReveal()
  const isMobile = window.innerWidth <= 900

  return (
    <section id="features" style={{ padding: '100px 5%', background: '#f8f7f4' }}>
      <div ref={titleRef} style={revealStyle}>
        <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.12em', color: '#7c3aed', marginBottom: 16 }}>
          El Servicio
        </span>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3.5rem)', lineHeight: 1.08, letterSpacing: '-1.5px', color: '#0a0a0a', maxWidth: 700 }}>
          VPN diseñada para{' '}
          <span style={{ color: '#7c3aed' }}>entornos críticos</span>
        </h2>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(10,10,10,.6)', maxWidth: 520, marginTop: 14 }}>
          Solución de conectividad segura con gobierno corporativo, gestión de riesgos y continuidad de negocio integradas desde el diseño.
        </p>
      </div>

      <div ref={gridRef} style={{
        ...revealStyle, marginTop: 60,
        display: isMobile ? 'flex' : 'grid',
        flexDirection: isMobile ? 'column' : undefined,
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 16, transitionDelay: '.12s'
      }}>
        <BentoCard {...FEATURES[0]} style={isMobile ? {} : { gridColumn: 'span 5' }} />
        <BentoCard {...FEATURES[1]} style={isMobile ? {} : { gridColumn: 'span 7' }} />
        <BentoCard {...FEATURES[2]} style={isMobile ? {} : { gridColumn: 'span 4' }} />
        <BentoCard {...FEATURES[3]} style={isMobile ? {} : { gridColumn: 'span 4' }} />
        <BentoCard {...FEATURES[4]} style={isMobile ? {} : { gridColumn: 'span 4' }} />
      </div>
    </section>
  )
}