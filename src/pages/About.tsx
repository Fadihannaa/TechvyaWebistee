import { CheckCircle2 } from 'lucide-react'
import { Seo } from '../components/Layout'
import { Reveal, SectionHead } from '../components/ui'

const values = ['Understand before proposing','Communicate clearly','Build for the real requirement','Test carefully','Deliver maintainable solutions','Support continuous improvement']

export default function About() {
  return (
    <>
      <Seo title="Techvya" path="/about" description="Techvya is a focused technology consultancy in Lebanon working remotely worldwide: practical ERP expertise and high-quality digital solutions." />
      <section className="bg-navy-900">
        <div className="container-x py-14">
          <Reveal><p className="eyebrow !text-brand-100">About</p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold text-white sm:text-4xl">A focused consultancy, built for direct collaboration.</h1>
          <p className="mt-4 max-w-2xl text-slate-300">Techvya is an IT services and consulting company based in Lebanon, serving local and international clients remotely. We stay deliberately focused: Dynamics 365 Finance &amp; Operations, and professional websites &amp; applications.</p></Reveal>
        </div>
      </section>
      <section className="container-x grid gap-6 py-14 md:grid-cols-2">
        <Reveal className="card">
          <p className="eyebrow">Mission</p>
          <p className="mt-2 text-lg font-medium leading-relaxed text-navy-900">“To help businesses solve operational challenges and build better digital experiences through practical, reliable technology solutions.”</p>
        </Reveal>
        <Reveal className="card" delay={0.08}>
          <p className="eyebrow">Vision</p>
          <p className="mt-2 text-lg font-medium leading-relaxed text-navy-900">“To become a trusted technology partner for organizations seeking flexible ERP expertise and high-quality digital solutions.”</p>
        </Reveal>
      </section>
      <section className="container-x pb-14">
        <SectionHead eyebrow="How we work" title="Principles you can hold us to" lead="Focused consultancy · Direct collaboration · Flexible delivery. You work with people who know your requirement." />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(v => <Reveal key={v}><li className="card flex gap-2.5 !p-5 text-[15px] font-medium text-navy-900"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-600"/>{v}</li></Reveal>)}
        </ul>
      </section>
    </>
  )
}
