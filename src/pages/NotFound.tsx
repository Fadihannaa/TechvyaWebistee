import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'
import { Seo } from '../components/Layout'

export default function NotFound() {
  return (
    <>
      <Seo title="Techvya" path="/404" description="The page you requested could not be found." />
      <section className="container-x py-24 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-white"><Compass size={26}/></span>
        <h1 className="font-display mt-6 text-4xl font-extrabold text-navy-900">404 — Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600">The link may be outdated or mistyped. Let’s get you back to something useful.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary"><ArrowLeft size={16}/> Back home</Link>
          <Link to="/contact" className="btn-secondary">Contact us</Link>
        </div>
      </section>
    </>
  )
}
