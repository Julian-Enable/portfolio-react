import './Footer.css'
import LogoLoop from '../LogoLoop/LogoLoop'
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiOpenai } from 'react-icons/si'

const Footer = () => {
  const techLogos = [
    { node: <FaReact size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'React' },
    { node: <FaNodeJs size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Node.js' },
    { node: <SiTypescript size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'TypeScript' },
    { node: <FaPython size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Python' },
    { node: <SiNextdotjs size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Next.js' },
    { node: <SiOpenai size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'OpenAI' },
    { node: <SiMongodb size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'MongoDB' },
    { node: <SiPostgresql size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'PostgreSQL' },
    { node: <FaDocker size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Docker' },
    { node: <FaAws size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'AWS' }
  ]

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-logo-section">
                <h2 className="footer-tech-title">Tecnologías que domino</h2>
                <div style={{ height: '120px', position: 'relative' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={60}
                        direction="left"
                        logoHeight={48}
                        gap={120}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#161513"
                        ariaLabel="Tecnologías que utilizo"
                    />
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© {new Date().getFullYear()} Julián Merchán. Todos los derechos reservados.</p>
            <nav className="footer-bottom-right" aria-label="Enlaces legales y sociales">
                <a href="#contact" aria-label="Ir a la sección de contacto">Contacto</a>
                <a href="https://github.com/Julian-Enable" target="_blank" rel="noopener noreferrer" aria-label="Visita mi perfil de GitHub">GitHub</a>
                <a href="https://www.linkedin.com/in/julian-enable/" target="_blank" rel="noopener noreferrer" aria-label="Conéctate conmigo en LinkedIn">LinkedIn</a>
            </nav>
        </div>
    </div>
  )
}

export default Footer