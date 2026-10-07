import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, ArrowRight, Mail, MessageCircle, Briefcase, MapPin } from 'lucide-react'
import { site, navLinks } from '../site'
import { ScrollProgress } from './ui'

export function Seo({ title, description, path = '/' }: { title: string; description: string; path?: string }) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
  }, [title, description])
  const url = `${site.domain.replace(/\/$/, '')}${path}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Techvya',
    url,
    description,
    areaServed: ['Lebanon', 'Worldwide'],
    // TODO: add sameAs, address, telephone once real details exist
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  )
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Techvya home">
      {/* Replace /public/logo.svg with official Techvya logo file (same filename). Colors below match brand. */}
      <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Techvya logo" className="h-9 w-auto" loading="eager" />
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => setOpen(false), [loc.pathname])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="container-x flex h-[68px] items-center justify-between">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `rounded-lg px-3.5 py-2 text-sm font-medium transition ${isActive ? 'bg-navy-50 text-navy-900' : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary ml-3 !px-5 !py-2.5">
            Discuss Your Requirements <ArrowRight size={16} />
          </Link>
        </nav>
        <button className="rounded-lg p-2 text-navy-900 lg:hidden" onClick={() => setOpen(v => !v)}
          aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden">
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((l, i) => (
                <motion.div key={l.to} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.03 * i }}>
                  <NavLink to={l.to} className={({ isActive }) => `block rounded-xl px-4 py-3 text-[15px] font-medium ${isActive ? 'bg-navy-50 text-navy-900' : 'text-slate-700 hover:bg-slate-50'}`}>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link to="/contact" className="btn-primary mt-2">Discuss Your Requirements <ArrowRight size={16} /></Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Techvya logo" className="h-9 w-auto brightness-0 invert" loading="lazy" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            IT services and consulting. Microsoft Dynamics 365 F&O support and professional websites & web applications.
          </p>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-100">ERP & Digital Solutions · Build • Optimize • Grow</p>
          <p className="mt-3 flex items-start gap-2 text-sm text-slate-400"><MapPin size={16} className="mt-0.5 shrink-0" /> {site.locationShort}</p>
        </div>
        <nav aria-label="Footer services">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link className="hover:text-white" to="/dynamics-365">Dynamics 365 F&amp;O Support</Link></li>
            <li><Link className="hover:text-white" to="/dynamics-365">Reports, Power BI & Integrations</Link></li>
            <li><Link className="hover:text-white" to="/digital-solutions">Websites</Link></li>
            <li><Link className="hover:text-white" to="/digital-solutions">Web Applications & Portals</Link></li>
            <li><Link className="hover:text-white" to="/services">All services</Link></li>
          </ul>
        </nav>
        <nav aria-label="Footer company">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link className="hover:text-white" to="/about">About</Link></li>
            <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-white" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="hover:text-white" to="/contact?service=Freelance%20or%20Subcontracting">Freelance / Subcontracting</Link></li>
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a></li>
            <li><a className="inline-flex items-center gap-2 hover:text-white" href={site.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a></li>
            <li><a className="inline-flex items-center gap-2 hover:text-white" href={site.linkedin} target="_blank" rel="noreferrer"><Briefcase size={15} /> LinkedIn</a></li>
            <li className="text-slate-500">{site.phoneDisplay} · placeholder</li>
          </ul>
          <Link to="/contact" className="btn-light mt-5 !px-5 !py-2.5 text-sm">Request a Consultation</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Techvya. All rights reserved.</span>
          <span>Techvya is an independent consultancy. Not affiliated with Microsoft. Does not resell licenses.</span>
        </div>
      </div>
    </footer>
  )
}

export function CtaBand({ title = 'Tell us what you need — we’ll respond with a practical next step.', primary = 'Discuss Your Requirements' }: { title?: string; primary?: string }) {
  return (
    <section className="bg-navy-900" aria-label="Call to action">
      <div className="container-x flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="font-display max-w-2xl text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-light">{primary} <ArrowRight size={16} /></Link>
          <Link to="/services" className="btn-ghost-dark">Explore Our Services</Link>
        </div>
      </div>
    </section>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
