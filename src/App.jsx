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
  useEffect(() => {
    // Inicializar Lenis para smooth scroll - optimizado
    const lenis = new Lenis({
      duration: 1.0, // Reducido de 1.2 para mejor performance
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Desactivado para mejor performance en móviles
      touchMultiplier: 2,
      infinite: false,
      autoResize: true, // Auto-resize optimization
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <About/>
        <Highlights/>
        <Services/>
        <MyWork/>
        <Contact/>
        <Footer/>
      </Suspense>
    </div>
  )
}

export default App