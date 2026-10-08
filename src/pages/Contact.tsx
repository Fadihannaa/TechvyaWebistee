import { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, Mail, MessageCircle, Briefcase, MapPin, CalendarClock, Loader2 } from 'lucide-react'
import { Seo } from '../components/Layout'
import { Reveal } from '../components/ui'
import { site, serviceOptions } from '../site'
import { getSupabase, isSupabaseConfigured, type RequirementRow } from '../lib/supabase'

type Form = {
  service: string
  name: string; company: string; email: string; phone: string; country: string; contactMethod: string
  title: string; description: string; currentSystem: string; impact: string; timeline: string; budget: string
  consent: boolean
}

const initial = (preset: string | null): Form => ({
  service: preset && (serviceOptions as readonly string[]).includes(preset) ? preset : '',
  name: '', company: '', email: '', phone: '', country: '', contactMethod: 'Email',
  title: '', description: '', currentSystem: '', impact: '', timeline: '', budget: '',
  consent: false,
})

function Field({ label, error, children, hint }: { label: string; error?: string; children: React.ReactNode; hint?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy-900">{label}</label>
      <div className="mt-1.5">{children}</div>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
      {error && <p role="alert" className="mt-1 text-xs font-medium text-red-600">{error}</p>}
    </div>
  )
}
const inputCls = (err?: string) => `w-full rounded-xl border px-4 py-3 text-[15px] outline-none transition ${err ? 'border-red-400 bg-red-50/50' : 'border-slate-200 bg-white focus:border-brand-600'}`

export default function Contact() {
  const [params] = useSearchParams()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<Form>(() => initial(params.get('service')))
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [serverMsg, setServerMsg] = useState('')

  const endpoint = useMemo(() => (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim() || site.formEndpoint?.trim() || '', [])
  const set = (k: keyof Form, v: string | boolean) => setForm(f => ({ ...f, [k]: v }))

  function validate(s: number): boolean {
    const e: Record<string, string> = {}
    if (s === 0 && !form.service) e.service = 'Please select a service.'
    if (s === 1) {
      if (form.name.trim().length < 2) e.name = 'Enter your full name.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid business email.'
      if (!form.country.trim()) e.country = 'Enter your country.'
      if (!form.contactMethod) e.contactMethod = 'Choose a contact method.'
    }
    if (s === 2) {
      if (form.title.trim().length < 4) e.title = 'Give your requirement a short title.'
      if (form.description.trim().length < 20) e.description = 'Describe your requirement (min. 20 characters).'
      if (!form.timeline) e.timeline = 'Select a desired timeline.'
    }
    if (s === 3 && !form.consent) e.consent = 'Consent is required to submit.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => { if (validate(step)) { setStep(s => Math.min(3, s + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) } }
  const back = () => { setStep(s => Math.max(0, s - 1)) }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate(3)) return
    setStatus('sending'); setServerMsg('')
    try {
      const supa = getSupabase()
      if (supa) {
        const row: RequirementRow = {
          service: form.service,
          full_name: form.name.trim(),
          company: form.company.trim() || null,
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          country: form.country.trim(),
          contact_method: form.contactMethod,
          title: form.title.trim(),
          description: form.description.trim(),
          current_system: form.currentSystem.trim() || null,
          business_impact: form.impact.trim() || null,
          timeline: form.timeline,
          budget: form.budget || null,
          consent: form.consent,
          source_url: window.location.href,
        }
        const { error } = await supa.from('requirements').insert(row)
        if (error) throw new Error(error.message)
        setStatus('success')
        return
      }
      if (!endpoint) { setStatus('error'); setServerMsg('No submission destination is configured yet (Supabase and VITE_FORM_ENDPOINT are both empty). Your message was NOT sent. See README “Configuring forms”, or reach us directly by email/WhatsApp.'); return }
      const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, source: window.location.href, sentAt: new Date().toISOString() }) })
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      setStatus('success')
    } catch (err: any) {
      setStatus('error'); setServerMsg(err?.message ? `Submission failed: ${err.message}. Please try email or WhatsApp.` : 'Submission failed. Please try email or WhatsApp.')
    }
  }

  const steps = ['Service', 'Contact', 'Requirement', 'Review']
  return (
    <>
      <Seo title="Techvya" path="/contact" description="Submit your D365 F&O or website requirement to Techvya. Multi-step form with clear next steps. Lebanon-based, remote worldwide." />
      <section className="bg-navy-900"><div className="container-x py-12">
        <p className="eyebrow !text-brand-100">Contact</p>
        <h1 className="font-display mt-2 max-w-2xl text-3xl font-bold text-white sm:text-4xl">Discuss Your Requirements</h1>
        <p className="mt-3 max-w-2xl text-slate-300">Four quick steps. We review every submission and respond with a practical next step.</p>
      </div></section>

      <section className="container-x grid gap-8 py-12 lg:grid-cols-[1fr_340px]">
        <div>
          {/* progress */}
          <ol className="flex gap-2" aria-label="Form progress">
            {steps.map((s, i) => (
              <li key={s} className="flex-1">
                <div className={`h-1.5 rounded-full ${i <= step ? 'bg-brand-600' : 'bg-slate-200'}`} />
                <p className={`mt-1.5 text-xs font-semibold ${i === step ? 'text-navy-900' : 'text-slate-500'}`}>{i + 1}. {s}</p>
              </li>
            ))}
          </ol>

          {status === 'success' ? (
            <div className="card mt-6 border-emerald-200 bg-emerald-50/60 text-center" role="status">
              <CheckCircle2 size={40} className="mx-auto text-emerald-600" />
              <h2 className="font-display mt-3 text-2xl font-bold text-navy-900">Requirement received</h2>
              <p className="mx-auto mt-2 max-w-md text-slate-600">Thank you, {form.name.split(' ')[0] || 'there'}. We’ll review “{form.title}” ({form.service}) and reply to {form.email}.</p>
              <Link to="/" className="btn-secondary mt-6">Back home</Link>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="card mt-6" aria-label="Requirement form">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                  {step === 0 && (
                    <fieldset>
                      <legend className="font-display text-lg font-bold text-navy-900">Step 1: What do you need?</legend>
                      <div className="mt-4 grid gap-2.5 sm:grid-cols-2" role="radiogroup" aria-label="Service">
                        {serviceOptions.map(o => (
                          <button type="button" key={o} role="radio" aria-checked={form.service === o} onClick={() => set('service', o)}
                            className={`rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition ${form.service === o ? 'border-brand-600 bg-brand-50 text-navy-900 ring-1 ring-brand-600' : 'border-slate-200 hover:border-navy-900'}`}>{o}</button>
                        ))}
                      </div>
                      {errors.service && <p role="alert" className="mt-2 text-xs font-medium text-red-600">{errors.service}</p>}
                    </fieldset>
                  )}
                  {step === 1 && (
                    <fieldset className="grid gap-4">
                      <legend className="font-display text-lg font-bold text-navy-900">Step 2: How do we reach you?</legend>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Full name *" error={errors.name}><input className={inputCls(errors.name)} value={form.name} onChange={e => set('name', e.target.value)} autoComplete="name" /></Field>
                        <Field label="Company"><input className={inputCls()} value={form.company} onChange={e => set('company', e.target.value)} autoComplete="organization" /></Field>
                        <Field label="Business email *" error={errors.email}><input type="email" className={inputCls(errors.email)} value={form.email} onChange={e => set('email', e.target.value)} autoComplete="email" /></Field>
                        <Field label="Phone or WhatsApp"><input className={inputCls()} value={form.phone} onChange={e => set('phone', e.target.value)} autoComplete="tel" placeholder="+961 ..." /></Field>
                        <Field label="Country *" error={errors.country}><input className={inputCls(errors.country)} value={form.country} onChange={e => set('country', e.target.value)} autoComplete="country-name" /></Field>
                        <Field label="Preferred contact method *">
                          <select className={inputCls()} value={form.contactMethod} onChange={e => set('contactMethod', e.target.value)}>
                            {['Email', 'Phone', 'WhatsApp', 'Video call'].map(m => <option key={m}>{m}</option>)}
                          </select>
                        </Field>
                      </div>
                    </fieldset>
                  )}
                  {step === 2 && (
                    <fieldset className="grid gap-4">
                      <legend className="font-display text-lg font-bold text-navy-900">Step 3: Describe your requirement</legend>
                      <Field label="Requirement title *" error={errors.title}><input className={inputCls(errors.title)} value={form.title} onChange={e => set('title', e.target.value)} placeholder="e.g. Fix vendor invoice posting error in D365" /></Field>
                      <Field label="Detailed description *" error={errors.description} hint="Include what happens today, what should happen, and any error messages.">
                        <textarea rows={5} className={inputCls(errors.description)} value={form.description} onChange={e => set('description', e.target.value)} />
                      </Field>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Current system"><input className={inputCls()} value={form.currentSystem} onChange={e => set('currentSystem', e.target.value)} placeholder="e.g. D365 F&O 10.0.39, WordPress, none yet" /></Field>
                        <Field label="Business impact"><input className={inputCls()} value={form.impact} onChange={e => set('impact', e.target.value)} placeholder="e.g. month-end close blocked" /></Field>
                        <Field label="Desired timeline *" error={errors.timeline}>
                          <select className={inputCls(errors.timeline)} value={form.timeline} onChange={e => set('timeline', e.target.value)}>
                            <option value="">Select…</option>{['Urgent (days)', '2 to 4 weeks', '1 to 3 months', 'Flexible / exploring'].map(t => <option key={t}>{t}</option>)}
                          </select>
                        </Field>
                        <Field label="Optional budget range">
                          <select className={inputCls()} value={form.budget} onChange={e => set('budget', e.target.value)}>
                            <option value="">Prefer not to say</option>{['< $1k', '$1k to $5k', '$5k to $15k', '$15k+'].map(t => <option key={t}>{t}</option>)}
                          </select>
                        </Field>
                      </div>
                    </fieldset>
                  )}
                  {step === 3 && (
                    <div>
                      <h2 className="font-display text-lg font-bold text-navy-900">Step 4: Review and submit</h2>
                      <dl className="mt-4 grid gap-2 rounded-xl bg-slate-50 p-5 text-sm">
                        {[['Service', form.service], ['Name', `${form.name} ${form.company ? `· ${form.company}` : ''}`], ['Email', form.email], ['Phone', form.phone || 'Not provided'], ['Country', form.country], ['Title', form.title], ['Timeline', form.timeline]].map(([k, v]) => (
                          <div key={k} className="grid grid-cols-[110px_1fr] gap-2"><dt className="font-semibold text-navy-900">{k}</dt><dd className="text-slate-700">{v as string}</dd></div>
                        ))}
                        <div className="grid grid-cols-[110px_1fr] gap-2"><dt className="font-semibold text-navy-900">Details</dt><dd className="whitespace-pre-wrap text-slate-700">{form.description}</dd></div>
                      </dl>
                      {!isSupabaseConfigured && !endpoint && (
                        <p className="mt-4 flex gap-2 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-slate-700" role="note">
                          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-600" />
                          No submission destination is configured yet (Supabase and form endpoint are both empty). Submissions cannot be sent yet. See README “Configuring forms”. You can still reach us by email/WhatsApp.
                        </p>
                      )}
                      <div className="mt-4 flex items-start gap-2.5">
                        <input id="consent" type="checkbox" checked={form.consent} onChange={e => set('consent', e.target.checked)} className="mt-1 h-4 w-4 accent-[#0E63C6]" />
                        <label htmlFor="consent" className="text-sm text-slate-700">I agree that Techvya may use these details to respond to my inquiry. *</label>
                      </div>
                      {errors.consent && <p role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.consent}</p>}
                      {status === 'error' && <p role="alert" className="mt-3 flex gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"><AlertTriangle size={18} className="shrink-0" />{serverMsg}</p>}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
                <button type="button" onClick={back} disabled={step === 0 || status === 'sending'} className="btn-secondary !px-5 !py-2.5 disabled:opacity-50"><ArrowLeft size={16}/> Back</button>
                {step < 3
                  ? <button type="button" onClick={next} className="btn-primary">Continue <ArrowRight size={16}/></button>
                  : <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
                      {status === 'sending' ? <><Loader2 size={16} className="animate-spin"/> Sending…</> : <>Submit requirement <ArrowRight size={16}/></>}
                    </button>}
              </div>
            </form>
          )}
        </div>

        <Reveal className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-card lg:sticky lg:top-24">
          <h2 className="font-display text-lg font-bold text-navy-900">Other ways to reach us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href={`mailto:${site.email}`} className="flex items-center gap-2.5 font-medium text-navy-900 hover:text-brand-700"><Mail size={16} className="text-brand-700"/>{site.email}</a></li>
            <li><a href={site.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 font-medium text-navy-900 hover:text-brand-700"><MessageCircle size={16} className="text-brand-700"/>WhatsApp <span className="text-slate-500">{site.phoneDisplay}</span></a></li>
            <li><a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 font-medium text-navy-900 hover:text-brand-700"><Briefcase size={16} className="text-brand-700"/>LinkedIn</a></li>
            <li className="flex items-start gap-2.5 text-slate-600"><MapPin size={16} className="mt-0.5 text-brand-700"/>{site.locationLong}</li>
            <li className="flex items-start gap-2.5 text-slate-600"><CalendarClock size={16} className="mt-0.5 text-brand-700"/>Booking: {site.bookingUrl === '#' ? 'placeholder: add Calendly/Cal.com link in src/site.ts' : <a className="font-medium text-brand-700 underline" href={site.bookingUrl}>Book a call</a>}</li>
          </ul>
          <p className="mt-4 rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-500">Placeholders: email, phone, WhatsApp, LinkedIn, domain, booking link and form endpoint must be configured. See README checklist.</p>
        </Reveal>
      </section>
    </>
  )
}
