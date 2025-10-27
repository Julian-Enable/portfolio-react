import './Footer.css'
import LogoLoop from '../LogoLoop/LogoLoop'
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaAws,
    FaGithub,
    FaPaintBrush,
    FaJava
} from 'react-icons/fa'
import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiNextdotjs,
    SiVite,
    SiVuedotjs,
    SiAngular,
    SiMui,
    SiExpress,
    SiPostgresql,
    SiMysql,
    SiFirebase,
    SiGit,
    SiOpenai
} from 'react-icons/si'

const Footer = () => {
    const techLogos = [
        // Languages
        { node: <SiJavascript size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'JavaScript' },
        { node: <SiTypescript size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'TypeScript' },
        { node: <SiHtml5 size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'HTML' },
        { node: <SiCss3 size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'CSS' },
        { node: <FaPython size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Python' },
        { node: <FaJava size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Java' },

        // Frontend / UI
        { node: <FaReact size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'React' },
        { node: <SiNextdotjs size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Next.js' },
        { node: <SiVite size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Vite' },
        { node: <SiVuedotjs size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Vue' },
        { node: <SiAngular size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Angular' },
        { node: <SiMui size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Material UI' },
        { node: <FaPaintBrush size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Canvas' },

        // Backend / Databases
        { node: <FaNodeJs size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Node.js' },
        { node: <SiExpress size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Express' },
        { node: <SiPostgresql size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'PostgreSQL' },
        { node: <SiMysql size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'MySQL' },
        { node: <SiFirebase size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Firebase' },

        // Cloud / Tools
        { node: <FaAws size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'AWS' },
        { node: <SiGit size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'Git' },
        { node: <FaGithub size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'GitHub' },
        { node: <SiOpenai size={48} color="#FFFFFF" className="footer-tech-logo" />, title: 'OpenAI' }
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