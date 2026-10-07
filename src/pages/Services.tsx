import { Link } from 'react-router-dom'
import { ArrowRight, Headset, Globe2, CheckCircle2 } from 'lucide-react'
import { Seo, CtaBand } from '../components/Layout'
import { Reveal, Stagger, Item, SectionHead } from '../components/ui'

export default function Services() {
  return (
    <>
      <Seo title="Techvya" path="/services" description="Overview of Techvya services: Dynamics 365 Finance & Operations support, reporting, integrations, plus websites, portals and web applications." />
      <section className="bg-navy-900">
        <div className="container-x py-14">
          <Reveal><p className="eyebrow !text-brand-100">Services</p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold text-white sm:text-4xl">Everything you need to run operations and present your business well.</h1>
          <p className="mt-4 max-w-2xl text-slate-300">Two service lines, one way of working: understand first, deliver maintainable results, document clearly.</p></Reveal>
        </div>
      </section>
      <section className="container-x py-14">
        <Stagger className="grid gap-6 md:grid-cols-2">
          <Item className="card">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-white"><Headset size={22}/></span>
            <h2 className="font-display mt-4 text-2xl font-bold text-navy-900">Dynamics 365 F&amp;O Services</h2>
            <p className="mt-2 text-slate-600">For companies using D365 F&O and consulting firms needing extra capacity.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['Functional support & troubleshooting','Root-cause analysis & configuration review','Process optimization, testing & documentation','Reports, Power BI, OData, APIs & integrations','Workflows, Dataverse/Power Platform liaison','Functional specs & customization analysis','Training & deployment assistance'].map(x => <li key={x} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-brand-600"/>{x}</li>)}
            </ul>
            <Link to="/dynamics-365" className="btn-primary mt-6">Explore D365 <ArrowRight size={16}/></Link>
          </Item>
          <Item className="card">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white"><Globe2 size={22}/></span>
            <h2 className="font-display mt-4 text-2xl font-bold text-navy-900">Digital Solutions</h2>
            <p className="mt-2 text-slate-600">For businesses that need a credible website, portal or internal application.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['Company & service websites, landing pages','Real-estate & content-driven sites','Customer portals & dashboards','Workflow & role-based internal tools','API & database integrations','SEO, analytics, performance','Maintenance & continuous improvement'].map(x => <li key={x} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-brand-600"/>{x}</li>)}
            </ul>
            <Link to="/digital-solutions" className="btn-primary mt-6">Explore Digital <ArrowRight size={16}/></Link>
          </Item>
        </Stagger>
      </section>
      <CtaBand title="Not sure which service fits? Send your requirement. We will point you to the right path." />
    </>
  )
}
