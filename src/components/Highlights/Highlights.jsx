import React from 'react'
import './Highlights.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Highlights = () => {
  return (
    <section id='highlights' className='highlights'>
      <div className="highlights-title">
        <h2>Lo que me diferencia</h2>
        <img src={theme_pattern} alt="Patrón de tema" />
      </div>
      <div className="highlights-grid">
        <article className='highlight-card'>
          <div className='highlight-header'>⚡ Rendimiento</div>
          <p>Interfaces rápidas y ligeras. Foco en Core Web Vitals, optimización de assets y patrones de renderizado.</p>
          <ul>
            <li>Mejoras medibles con Lighthouse</li>
            <li>Optimización de imágenes y bundle</li>
            <li>Accesibilidad que suma SEO</li>
          </ul>
        </article>
        <article className='highlight-card'>
          <div className='highlight-header'>🤖 Automatización</div>
          <p>Scripts y pequeños servicios que ahorran tiempo: scraping, integraciones con APIs y tareas repetitivas.</p>
          <ul>
            <li>Node.js y Python para tareas ETL</li>
            <li>Integración con APIs REST</li>
            <li>Alertas y reportes automáticos</li>
          </ul>
        </article>
        <article className='highlight-card'>
          <div className='highlight-header'>🎨 UX clara</div>
          <p>Diseños coherentes y accesibles. Microinteracciones sutiles que mejoran la experiencia sin distraer.</p>
          <ul>
            <li>Componentes reutilizables</li>
            <li>Mobile‑first y responsive</li>
            <li>WAI‑ARIA y teclado</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Highlights


