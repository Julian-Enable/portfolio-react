import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>Sobre mí</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="Ilustración de perfil" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Soy Desarrollador de Software Full-Stack especializado en desarrollo web moderno e integración con IA. Construyo soluciones end-to-end con React, Node.js y Python, incorporando inteligencia artificial para automatización y mejora de la experiencia del usuario.</p>
                        <p>Trabajo con JavaScript/TypeScript, React/Next.js, Node.js/Express, Python y APIs de IA (OpenAI, Claude). Me especializo en crear aplicaciones escalables, APIs REST/GraphQL, automatizaciones inteligentes y optimización de performance (Core Web Vitals, SEO).</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>React / Next.js / TypeScript</p>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>Node.js / APIs REST</p>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>IA / OpenAI / Automatización</p>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>Python / Machine Learning</p>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>Performance / SEO / PWA</p>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-archivements">
                <div className="about-archivement">
                    <h1>2+</h1>
                    <p>AÑOS DE EXPERIENCIA</p>
                </div>
                <hr />
                <div className="about-archivement">
                    <h1>5+</h1>
                    <p>PROYECTOS COMPLETADOS</p>
                </div>
                <hr />
                <div className="about-archivement">
                    <h1>3+</h1>
                    <p>LENGUAJES DE PROGRAMACIÓN</p>
                </div>
            </div>
        </div>
    )
}

export default About