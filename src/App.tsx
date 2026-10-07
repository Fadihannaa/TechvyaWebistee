import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import { PageFade } from './components/ui'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Dynamics365 = lazy(() => import('./pages/Dynamics365'))
const DigitalSolutions = lazy(() => import('./pages/DigitalSolutions'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageFade><Home /></PageFade>} />
        <Route path="/services" element={<PageFade><Services /></PageFade>} />
        <Route path="/dynamics-365" element={<PageFade><Dynamics365 /></PageFade>} />
        <Route path="/digital-solutions" element={<PageFade><DigitalSolutions /></PageFade>} />
        <Route path="/about" element={<PageFade><About /></PageFade>} />
        <Route path="/contact" element={<PageFade><Contact /></PageFade>} />
        <Route path="/privacy" element={<PageFade><Privacy /></PageFade>} />
        <Route path="*" element={<PageFade><NotFound /></PageFade>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<div className="container-x py-24 text-slate-500" role="status">Loading…</div>}>
        <AnimatedRoutes />
      </Suspense>
    </Layout>
  )
}
