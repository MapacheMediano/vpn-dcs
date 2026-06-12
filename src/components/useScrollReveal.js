// ── useScrollReveal.js ──────────────────────────────
import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: .08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export const revealStyle = {
  opacity: 0,
  transform: 'translateY(28px)',
  transition: 'opacity .65s ease, transform .65s ease',
}
