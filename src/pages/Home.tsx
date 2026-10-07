import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Headset, Globe2, Wrench, FileBarChart2, Plug2, Code2, GraduationCap, MonitorSmartphone, CheckCircle2, Search, ClipboardList, Rocket, LifeBuoy, CalendarClock, FolderKanban, Repeat2, Handshake } from 'lucide-react'
import { Seo } from '../components/Layout'
import { Reveal, Stagger, Item, SectionHead, Marquee, Faq, SpotCard } from '../components/ui'
import HeroVisual from '../components/HeroVisual'

const challenges = ['Recurring ERP issues','Manual processes','Reporting limitations','Integration problems','Customization requirements','Outdated websites','Business ideas needing web applications']
const capabilities = [
  { icon: Headset, t: 'D365 F&O functional support' }, { icon: Wrench, t: 'Troubleshooting & root-cause analysis' },
  { icon: ClipboardList, t: 'Configuration & process optimization' }, { icon: FileBarChart2, t: 'Reports & Power BI' },
  { icon: Plug2, t: 'OData, APIs & integrations' }, { icon: Code2, t: 'Customization analysis' },
  { icon: GraduationCap, t: 'User support & training' }, { icon: MonitorSmartphone, t: 'Website development' },
  { icon: Globe2, t: 'Web apps & portals' }, { icon: LifeBuoy, t: 'Maintenance & improvement' },
]
const why = ['Business + technical understanding','Clear communication','Flexible engagement','Practical solutions','Maintainable delivery','ERP + digital from one provider']
const models = [
  { icon: Headset, t: 'On-demand support', d: 'Get help when an issue blocks operations.' },
  { icon: FolderKanban, t: 'Project-based delivery', d: 'Scoped delivery for enhancements, reports, sites or apps.' },
  { icon: Repeat2, t: 'Monthly support', d: 'Recurring assistance and continuous improvement.' },
  { icon: Handshake, t: 'Freelance / subcontracting', d: 'Extra capacity for consulting companies and project backlogs.' },
  { icon: Globe2, t: 'Remote consulting', d: 'Structured remote collaboration with clear documentation.' },
]
const ticker = ['Dynamics 365 F&O', 'Functional Support', 'Troubleshooting', 'Reports & Power BI', 'OData & APIs', 'Integrations', 'Dataverse', 'Workflows', 'Websites', 'Web Applications', 'Portals & Dashboards', 'Training & Documentation']

const faqs = [
  { q: 'Where are you based, and how do we collaborate?', a: 'Techvya is based in Lebanon and works remotely with local and international clients through structured calls, shared documentation and clear status updates.' },
  { q: 'How do engagements work?', a: 'On demand support, project based delivery, monthly support, or freelance and subcontracting collaboration. Every engagement starts with your requirement and ends with a tailored proposal. Nothing is priced on the site because scope differs.' },
  { q: 'What do you need from us to start?', a: 'A description of the issue or requirement, the system you use today, and the business impact. The contact form walks you through exactly that in four short steps.' },
  { q: 'How quickly can you start?', a: 'It depends on current availability and scope. Send your requirement with your desired timeline and we will respond with a realistic next step.' },
]

const steps = [
  { icon: Search, n: '01', t: 'Understand', d: 'We clarify your process, system setup and what success looks like.' },
  { icon: ClipboardList, n: '02', t: 'Analyze', d: 'We investigate the root cause or requirement and propose a practical path.' },
  { icon: Rocket, n: '03', t: 'Deliver', d: 'We configure, build, integrate and test carefully.' },
  { icon: LifeBuoy, n: '04', t: 'Support', d: 'We document, hand over and stay available for improvements.' },
]

export default function Home() {
  return (
    <>
      <Seo title="Techvya" path="/"
        description="Techvya helps businesses improve Microsoft Dynamics 365 Finance & Operations and build modern websites and applications. Lebanon-based, remote worldwide." />
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white">
        <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
              className="font-display mt-3 text-4xl font-extrabold leading-[1.08] text-navy-900 sm:text-5xl">
              ERP Expertise. Digital Solutions. Built Around Your Business.
            </motion.h1>
            <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Techvya helps businesses improve Microsoft Dynamics 365 Finance &amp; Operations, solve operational challenges and build modern websites and applications designed for real business needs.
            </motion.p>
            <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:0.18}} className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Discuss Your Requirements <ArrowRight size={16} /></Link>
              <Link to="/services" className="btn-secondary">Explore Our Services</Link>
            </motion.div>
            <motion.a href="#pillars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700" aria-label="Scroll to services">
              See what we do <ChevronDown size={16} className="animate-cue" />
            </motion.a>
          </div>
          <motion.div initial={{opacity:0,scale:0.97}} animate={{opacity:1,scale:1}} transition={{duration:0.7}}>
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      <Marquee items={ticker} />

      {/* PILLARS */}
      <section id="pillars" className="container-x scroll-mt-20 py-16" aria-label="Service pillars">
        <SectionHead eyebrow="What we do" title="Two pillars, one accountable partner" lead="Operational ERP help and reliable digital delivery, without switching vendors." />
        <Stagger className="mt-8 grid gap-6 md:grid-cols-2">
          <SpotCard className="card group hover:shadow-pop">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-white"><Headset size={22}/></span>
            <h3 className="font-display mt-4 text-xl font-bold text-navy-900">Microsoft Dynamics 365 F&amp;O</h3>
            <p className="mt-2 text-slate-600">Practical support for companies running F&O: issues resolved, processes improved, reports fixed, integrations connected.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['Functional support & troubleshooting','Configuration & process optimization','Reports, Power BI, OData & integrations'].map(x => <li key={x} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-brand-600"/>{x}</li>)}
            </ul>
            <Link to="/dynamics-365" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2.5 transition-all">Explore D365 services <ArrowRight size={15}/></Link>
          </SpotCard>
          <SpotCard className="card group hover:shadow-pop">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white"><Globe2 size={22}/></span>
            <h3 className="font-display mt-4 text-xl font-bold text-navy-900">Digital Solutions</h3>
            <p className="mt-2 text-slate-600">Professional websites, portals and web applications that look credible, load fast and support your workflow.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {['Company & service websites','Customer portals & internal tools','Maintenance & continuous improvement'].map(x => <li key={x} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-brand-600"/>{x}</li>)}
            </ul>
            <Link to="/digital-solutions" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2.5 transition-all">Explore digital solutions <ArrowRight size={15}/></Link>
          </SpotCard>
        </Stagger>
      </section>

      {/* CHALLENGES */}
      <section className="bg-navy-50/70 py-16">
        <div className="container-x">
          <SectionHead eyebrow="Sound familiar?" title="Business challenges we help with" />
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map(c => <Item key={c} className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-navy-900 shadow-sm">{c}</Item>)}
          </Stagger>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="container-x py-16">
        <SectionHead eyebrow="Capabilities" title="Core capabilities" lead="A focused set of services we deliver well." />
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(c => <SpotCard key={c.t} className="card flex items-center gap-3 !p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><c.icon size={19}/></span><span className="text-[15px] font-medium text-navy-900">{c.t}</span></SpotCard>)}
        </Stagger>
      </section>

      {/* PROCESS */}
      <section className="bg-navy-900 py-16" aria-label="How we work">
        <div className="container-x">
          <SectionHead dark eyebrow="How we work" title="A clear four-step process" lead="You always know what happens next, what we need from you, and what you get." />
          <div className="relative mt-10 grid gap-5 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-white/15 md:block" aria-hidden="true" />
            <Stagger className="contents">
              {steps.map(s => (
                <Item key={s.n} className="relative rounded-2xl border border-white/12 bg-white/[0.06] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white"><s.icon size={20}/></span>
                  <p className="mt-4 text-xs font-bold tracking-widest text-brand-100">{s.n}</p>
                  <h3 className="font-display text-lg font-bold text-white">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{s.d}</p>
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* WHY + MODELS */}
      <section className="container-x grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Why Techvya" title="Practical, direct, maintainable" />
          <ul className="mt-6 space-y-3">
            {why.map(w => <Reveal key={w}><li className="flex gap-2.5 text-[15px] text-slate-700"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-600"/>{w}</li></Reveal>)}
          </ul>
        </div>
        <div>
          <SectionHead eyebrow="Engagement" title="Flexible ways to work together" lead="No prices on the site. Request a tailored proposal." />
          <div className="mt-6 space-y-3">
            {models.map(m => (
              <Reveal key={m.t}>
                <div className="card flex gap-4 !p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white"><m.icon size={18}/></span>
                  <div><h3 className="font-semibold text-navy-900">{m.t}</h3><p className="text-sm text-slate-600">{m.d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-16" aria-label="Frequently asked questions">
        <SectionHead eyebrow="FAQ" title="Straight answers before you ask" />
        <Reveal>
          <Faq items={faqs} />
        </Reveal>
      </section>

      <section className="container-x pb-16">
        <Reveal className="rounded-3xl bg-brand-50 p-8 text-center sm:p-12">
          <h2 className="h2">Have an ERP issue or a digital project in mind?</h2>
          <p className="lead mx-auto">Describe your requirement once. We will review it and propose a practical next step.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">Get ERP Support <ArrowRight size={16}/></Link>
            <Link to="/contact" className="btn-secondary">Start Your Project</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
