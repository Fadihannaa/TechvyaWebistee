import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Globe, LayoutDashboard, Search, PenTool, Code2, Plug2, FlaskConical, Rocket, LifeBuoy } from 'lucide-react'
import { Seo } from '../components/Layout'
import { Reveal, Stagger, Item, SectionHead } from '../components/ui'

const sites = ['Company websites','Service websites','Landing pages','Real-estate websites','Responsive design','SEO setup','Analytics','Performance optimization']
const apps = ['Customer portals','Internal tools','Dashboards','Workflow applications','Role-based systems','Databases','API integrations']
const process = [
  { icon: Search, t: 'Requirement analysis' }, { icon: PenTool, t: 'UX planning' }, { icon: Code2, t: 'Development' },
  { icon: Plug2, t: 'Integration' }, { icon: FlaskConical, t: 'Testing' }, { icon: Rocket, t: 'Deployment' }, { icon: LifeBuoy, t: 'Maintenance' },
]

const tiers = [
  { icon: Globe, name: 'Informational website', best: 'Best for: presenting your business credibly', feats: ['5 to 10 pages', 'Contact / quote forms', 'SEO basics + analytics', 'Fast, mobile-first'], cta: 'Start Your Project' },
  { icon: LayoutDashboard, name: 'Business website', best: 'Best for: generating inquiries', feats: ['Everything in Informational', 'Service / listing structures', 'Blog or case-study setup', 'Conversion-focused layouts'], cta: 'Discuss Your Requirements' },
  { icon: Code2, name: 'Custom web application', best: 'Best for: portals, tools & workflows', feats: ['Login & roles', 'Dashboards & databases', 'API integrations', 'Testing + maintenance plan'], cta: 'Request a Consultation' },
]

export default function DigitalSolutions() {
  const [active, setActive] = useState(1)
  return (
    <>
      <Seo title="Techvya" path="/digital-solutions" description="Professional websites, portals and web applications: company sites, landing pages, dashboards, workflow apps and integrations. Designed to look professional and work reliably." />
      <section className="bg-navy-900">
        <div className="container-x py-14">
          <Reveal><p className="eyebrow !text-brand-100">Digital Solutions</p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold text-white sm:text-4xl">Professional Digital Experiences That Work Reliably</h1>
          <p className="mt-4 max-w-2xl text-slate-300">We build websites and applications around your real requirement. We test, launch and maintain them properly.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact?service=Website%20Development" className="btn-light">Start Your Project <ArrowRight size={16}/></Link>
            <Link to="/contact" className="btn-ghost-dark">Request a Consultation</Link>
          </div></Reveal>
        </div>
      </section>

      <section className="container-x grid gap-6 py-14 md:grid-cols-2">
        <Reveal className="card">
          <h2 className="font-display text-xl font-bold text-navy-900">Websites</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">{sites.map(s => <li key={s} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600"/>{s}</li>)}</ul>
        </Reveal>
        <Reveal className="card" delay={0.08}>
          <h2 className="font-display text-xl font-bold text-navy-900">Applications</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">{apps.map(s => <li key={s} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600"/>{s}</li>)}</ul>
        </Reveal>
      </section>

      <section className="bg-navy-50/70 py-14">
        <div className="container-x">
          <SectionHead eyebrow="Delivery" title="Delivery process" lead="From requirement to maintenance, with review points at each stage." />
          <Stagger className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {process.map(p => <Item key={p.t} className="rounded-xl border bg-white p-4 text-center text-[13px] font-medium text-navy-900"><p.icon size={18} className="mx-auto text-brand-700"/>{p.t}</Item>)}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-14">
        <SectionHead eyebrow="Compare" title="Which one do you need?" lead="Pick the tier that matches your goal. You can switch. The contact form captures the details." />
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Compare options">
          {tiers.map((t, i) => (
            <button key={t.name} role="tab" aria-selected={active === i} onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${active === i ? 'bg-navy-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{t.name}</button>
          ))}
        </div>
        <Reveal key={active} className="card mt-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">{(() => { const I = tiers[active].icon; return <I size={20}/> })()}</span>
            <div><h3 className="font-display text-lg font-bold text-navy-900">{tiers[active].name}</h3><p className="text-sm text-slate-600">{tiers[active].best}</p></div>
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">{tiers[active].feats.map(f => <li key={f} className="flex gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="mt-0.5 text-brand-600"/>{f}</li>)}</ul>
          <Link to="/contact" className="btn-primary mt-5">{tiers[active].cta} <ArrowRight size={16}/></Link>
        </Reveal>
      </section>
    </>
  )
}
