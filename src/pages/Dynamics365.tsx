import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Building2, Users, Layers, Headset } from 'lucide-react'
import { Seo } from '../components/Layout'
import { Reveal, Stagger, Item, SectionHead } from '../components/ui'

const functional = ['Finance','General Ledger','Accounts Payable','Accounts Receivable','Procurement','Sales','Inventory','Warehouse processes','Fixed Assets','Budgeting','Cost Management','Master Planning','Production processes','Retail / Commerce']
const support = ['User support','Issue investigation','Root-cause analysis','Configuration review','Process improvement','Testing','Documentation','Training','Deployment assistance']
const technical = ['Custom reports','Power BI','OData & APIs','Integrations','Dataverse','Power Platform liaison','Workflows','Functional specifications','Customization analysis']

export default function Dynamics365() {
  return (
    <>
      <Seo title="Techvya" path="/dynamics-365" description="Practical Dynamics 365 Finance & Operations support: functional help, troubleshooting, configuration, reports, Power BI, OData, APIs and integrations. Remote consulting." />
      <section className="bg-navy-900">
        <div className="container-x py-14">
          <Reveal><p className="eyebrow !text-brand-100">Microsoft Dynamics 365 Finance & Operations</p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">Practical Dynamics 365 F&amp;O Support for Real Business Operations</h1>
          <p className="mt-4 max-w-2xl text-slate-300">We help operations keep moving: resolve issues at the root, improve configuration, fix reporting gaps and connect F&amp;O to the rest of your systems.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact?service=Dynamics%20365%20Support" className="btn-light">Get ERP Support <ArrowRight size={16}/></Link>
            <Link to="/contact" className="btn-ghost-dark">Request a Consultation</Link>
          </div></Reveal>
        </div>
      </section>

      <section className="container-x py-14">
        <SectionHead eyebrow="Coverage" title="Supported functional areas" lead="Areas we support in daily operations, not a claim of mastery of every module." />
        <Stagger className="mt-6 flex flex-wrap gap-2.5">
          {functional.map(f => <Item key={f} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy-900 shadow-sm">{f}</Item>)}
        </Stagger>
      </section>

      <section className="bg-navy-50/70 py-14">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal className="card">
            <h2 className="font-display text-xl font-bold text-navy-900">Support & optimization</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">{support.map(s => <li key={s} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-brand-600"/>{s}</li>)}</ul>
          </Reveal>
          <Reveal className="card" delay={0.08}>
            <h2 className="font-display text-xl font-bold text-navy-900">Technical services</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">{technical.map(s => <li key={s} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-brand-600"/>{s}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-14">
        <SectionHead eyebrow="Who we help" title="Flexible support for different situations" />
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Building2, t: 'End customers', d: 'Companies running F&O that need reliable day-to-day support.' },
            { icon: Users, t: 'Consulting companies', d: 'Freelance / subcontracting capacity for delivery peaks and backlogs.' },
            { icon: Layers, t: 'Project backlogs', d: 'Help clearing enhancements, reports and integration queues.' },
            { icon: Headset, t: 'Remote assignments', d: 'Structured remote work with clear updates and documentation.' },
          ].map(c => <Item key={c.t} className="card"><c.icon size={20} className="text-brand-700"/><h3 className="mt-3 font-semibold text-navy-900">{c.t}</h3><p className="mt-1 text-sm text-slate-600">{c.d}</p></Item>)}
        </Stagger>
      </section>
    </>
  )
}
