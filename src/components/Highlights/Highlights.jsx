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
          <div className='highlight-header'>🤖 Integración con IA</div>
          <p>Implemento chatbots, asistentes virtuales y automatización inteligente usando APIs de OpenAI, Claude y modelos de lenguaje avanzados.</p>
          <ul>
            <li>ChatGPT, Claude API, Gemini</li>
            <li>Procesamiento de lenguaje natural</li>
            <li>Análisis de sentimientos y datos</li>
          </ul>
        </article>
        <article className='highlight-card'>
          <div className='highlight-header'>⚡ Full-Stack Moderno</div>
          <p>Desarrollo completo desde frontend hasta backend: React/Next.js, Node.js/Express, bases de datos y arquitecturas escalables y seguras.</p>
          <ul>
            <li>React, Next.js 14+, TypeScript</li>
            <li>Node.js, Express, APIs REST/GraphQL</li>
            <li>MongoDB, PostgreSQL, Prisma</li>
          </ul>
        </article>
        <article className='highlight-card'>
          <div className='highlight-header'>🚀 Performance & SEO</div>
          <p>Optimización técnica para Core Web Vitals, SEO avanzado con SSR/SSG, PWAs y experiencias web ultrarrápidas.</p>
          <ul>
            <li>Lighthouse 90+ scores</li>
            <li>Next.js SSR/SSG, ISR</li>
            <li>PWA, Service Workers, Caching</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Highlights


