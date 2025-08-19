import React from 'react'
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
                        <p>Soy Desarrollador de Software con experiencia construyendo productos web y automatizaciones. Me enfoco en soluciones mantenibles, accesibles y orientadas a negocio.</p>
                        <p>Trabajo con JavaScript/TypeScript, React, Node.js y Python; HTML/CSS (Flexbox/Grid), consumo de APIs REST, control de versiones con Git y herramientas modernas como Vite. Disfruto colaborar con diseño/UX y priorizo performance y calidad.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>JavaScript / TypeScript</p>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>React / Node.js</p>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>Python / Automatización</p>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: "60%" }}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>HTML5 / CSS3</p>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>Accesibilidad / Performance</p>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: "70%" }}></div>
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