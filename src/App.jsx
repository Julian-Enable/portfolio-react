import { useEffect, lazy, Suspense } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

// Lazy load components below the fold
const About = lazy(() => import('./components/About/About'))
const Highlights = lazy(() => import('./components/Highlights/Highlights'))
const Services = lazy(() => import('./components/Services/Services'))
const MyWork = lazy(() => import('./components/MyWork/MyWork'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

const App = () => {
  // TEMPORALMENTE DESACTIVADO - Scroll nativo hasta resolver el issue
  // useEffect(() => {
  //   // Inicializar Lenis para smooth scroll - balanceado
  //   const lenis = new Lenis({
  //     duration: 1.0,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     orientation: 'vertical',
  //     gestureOrientation: 'vertical',
  //     smoothWheel: true,
  //     wheelMultiplier: 1.0, // Normal scroll speed
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //     infinite: false,
  //     autoResize: true,
  //   })

  //   // Usar requestAnimationFrame de forma más eficiente
  //   let rafId
  //   function raf(time) {
  //     lenis.raf(time)
  //     rafId = requestAnimationFrame(raf)
  //   }

  //   rafId = requestAnimationFrame(raf)

  //   // Cleanup
  //   return () => {
  //     if (rafId) {
  //       cancelAnimationFrame(rafId)
  //     }
  //     lenis.destroy()
  //   }
  // }, [])

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