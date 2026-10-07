import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Seo } from '../components/Layout'

export default function Privacy() {
  return (
    <>
      <Seo title="Techvya" path="/privacy" description="Techvya privacy policy: what data we collect via the contact form and how we use it." />
      <section className="bg-navy-900"><div className="container-x py-14">
        <p className="eyebrow !text-brand-100">Privacy</p>
        <h1 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated: 2026. TODO: have this reviewed for your jurisdiction.</p>
      </div></section>
      <section className="container-x prose-sm max-w-3xl py-12 text-slate-700">
        <h2 className="font-display text-xl font-bold text-navy-900">1. What we collect</h2>
        <p className="mt-2">When you submit the requirement form, we receive your name, company, email, phone/WhatsApp (if provided), country, contact preference, and the requirement details you write. We also receive basic technical data needed to operate the site.</p>
        <h2 className="font-display mt-8 text-xl font-bold text-navy-900">2. How we use it</h2>
        <p className="mt-2">We use your details only to review your inquiry, respond, and prepare a proposal. We do not sell personal data and we do not share it with third parties except service providers needed to operate the form/email delivery.</p>
        <h2 className="font-display mt-8 text-xl font-bold text-navy-900">3. Retention & your rights</h2>
        <p className="mt-2">We keep inquiries for as long as needed to handle your request and meet legal obligations. You may request access, correction or deletion at any time via the contact email on the Contact page.</p>
        <h2 className="font-display mt-8 text-xl font-bold text-navy-900">4. Contact</h2>
        <p className="mt-2">For privacy questions, use the details on the <Link to="/contact" className="font-semibold text-brand-700 underline">Contact page</Link>.</p>
        <Link to="/" className="btn-secondary mt-10"><ArrowLeft size={16}/> Back home</Link>
      </section>
    </>
  )
}
