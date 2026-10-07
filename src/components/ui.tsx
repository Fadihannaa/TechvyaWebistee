import { motion, useReducedMotion, useScroll, AnimatePresence } from 'framer-motion'
import React, { useRef, useState } from 'react'

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Reveal({ children, delay = 0, className = '', as = 'div' }: { children: React.ReactNode; delay?: number; className?: string; as?: 'div' | 'section' | 'li' }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  const Tag = (motion as any)[as] ?? motion.div
  return (
    <Tag className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </Tag>
  )
}

export function Stagger({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div className={className} initial={reduce ? false : 'hidden'} whileInView="show"
      viewport={{ once: true, margin: '-60px' }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
      {children}
    </motion.div>
  )
}

export function Item({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return <motion.div className={className} variants={fadeUp}>{children}</motion.div>
}

export function SectionHead({ eyebrow, title, lead, dark = false }: { eyebrow: string; title: string; lead?: string; dark?: boolean }) {
  return (
    <Reveal>
      <p className={`eyebrow ${dark ? '!text-brand-100' : ''}`}>{eyebrow}</p>
      <h2 className={`h2 ${dark ? '!text-white' : ''}`}>{title}</h2>
      {lead && <p className={`lead ${dark ? '!text-slate-300' : ''}`}>{lead}</p>}
    </Reveal>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700"
      style={{ scaleX: scrollYProgress }} />
  )
}

export function PageFade({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()
  if (reduce) return <>{children}</>
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export function Marquee({ items, label = 'Technologies and capabilities' }: { items: string[]; label?: string }) {
  const row = [...items, ...items]
  return (
    <div className="marquee-paused overflow-hidden border-y border-slate-200/70 bg-white py-4" role="marquee" aria-label={label}>
      <div className="animate-marquee flex w-max items-center gap-3 pr-3">
        {row.map((t, i) => (
          <span key={i} aria-hidden={i >= items.length}
            className="whitespace-nowrap rounded-full border border-slate-200 bg-navy-50 px-4 py-1.5 text-[13px] font-semibold text-navy-900">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SpotCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return
    if (typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <motion.div ref={ref} onMouseMove={onMove} variants={fadeUp} className={`spot ${className}`}>
      {children}
    </motion.div>
  )
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()
  return (
    <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q}>
            <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-navy-50/60">
              <span className="font-display text-[15px] font-bold text-navy-900 sm:text-base">{f.q}</span>
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xl font-medium text-brand-700" aria-hidden="true">+</motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div key="body" initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden">
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-slate-600">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
