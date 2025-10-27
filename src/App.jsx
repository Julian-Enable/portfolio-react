import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SmoothScroll from './utils/smoothScroll'

// Lazy load components below the fold
const About = lazy(() => import('./components/About/About'))
const Highlights = lazy(() => import('./components/Highlights/Highlights'))
const Services = lazy(() => import('./components/Services/Services'))
const MyWork = lazy(() => import('./components/MyWork/MyWork'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

const App = () => {
  useEffect(() => {
    // Inicializar smooth scroll custom con momentum/inercia
    const smoothScroll = new SmoothScroll()
    
    return () => {
      smoothScroll.destroy()
    }
  }, [])

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Suspense fallback={<div style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />}>
        <About/>
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '30vh' }} />}>
        <Highlights/>
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
        <Services/>
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <MyWork/>
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
        <Contact/>
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '30vh' }} />}>
        <Footer/>
      </Suspense>
    </div>
  )
}

export default App