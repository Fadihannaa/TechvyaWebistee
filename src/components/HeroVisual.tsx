import { motion, useReducedMotion } from 'framer-motion'
import { Database, Globe, Boxes, ArrowLeftRight } from 'lucide-react'

// Lightweight animated enterprise visual: ERP <-> Data <-> Web. No heavy 3D/video.
export default function HeroVisual() {
  const reduce = useReducedMotion()
  const nodes = [
    { icon: Boxes, label: 'Operations', sub: 'Finance · Inventory · Sales', x: '8%', y: '14%' },
    { icon: Database, label: 'Dynamics 365 F&O', sub: 'Support · Reports · APIs', x: '58%', y: '6%' },
    { icon: ArrowLeftRight, label: 'Data & Integrations', sub: 'OData · Power BI · Dataverse', x: '14%', y: '62%' },
    { icon: Globe, label: 'Web & Portals', sub: 'Sites · Apps · Dashboards', x: '62%', y: '58%' },
  ]
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 via-navy-800 to-[#0B4EA2] p-6 sm:p-8" aria-hidden="true">
      {/* animated background glow + paths */}
      {!reduce && (
        <>
          <motion.div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-500/25 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl"
            animate={{ x: [0, -24, 0], y: [0, -18, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" fill="none">
            <motion.path d="M80 70 C 160 60, 200 40, 270 45" stroke="#4AA3F5" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="6 6"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear' }} />
            <motion.path d="M90 200 C 170 210, 210 190, 280 200" stroke="#A9CFFB" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="6 6"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }} />
            <motion.path d="M110 110 C 130 140, 130 170, 120 200" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 6"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
            <motion.path d="M270 70 C 280 110, 285 150, 280 190" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 6"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }} />
          </svg>
        </>
      )}
      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
        {nodes.map((n, i) => (
          <motion.div key={n.label} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.5 }}
            className="rounded-2xl border border-white/12 bg-white/[0.07] p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/90 text-white"><n.icon size={19} /></span>
              <div>
                <p className="text-sm font-semibold text-white">{n.label}</p>
                <p className="text-xs text-slate-300">{n.sub}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              <span className="text-[11px] text-slate-300">{i % 2 === 0 ? 'Connected · Synced' : 'Live · Monitored'}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="relative mt-4 flex items-center justify-between rounded-xl bg-black/25 px-4 py-2.5 text-[11px] text-slate-300">
        <span>Uptime-focused delivery · Tested · Documented</span>
        <span className="hidden sm:inline">Remote-first · LB → Worldwide</span>
      </div>
    </div>
  )
}
