import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import code_pattern from '../../assets/code_pattern.svg'
import profile_img from '../../assets/profile_photo.png'
import ProfileCard from '../ProfileCard/ProfileCard'
import { useState, useEffect } from 'react'

const SKILLS = [
  { label: 'Frontend Development', percent: 60 },
  { label: 'Backend & APIs', percent: 70 },
  { label: 'AI & Automation', percent: 55 },
  { label: 'Data Science', percent: 35 },
  { label: 'Performance & SEO', percent: 60 },
]

const SkillBar = ({ label, percent }) => {
  const [progress, setProgress] = useState(0)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percent)
    }, 450)
    return () => clearTimeout(timer)
  }, [percent])

  useEffect(() => {
    if (progress === percent) {
      setFilled(true)
    }
  }, [progress, percent])

  return (
    <div className="about-skill">
      <p>{label}</p>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: `${progress}%` }}
          data-filled={filled}
        >
        </div>
      </div>
    </div>
  )
}

const About = () => {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>Sobre mí</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <ProfileCard
                        name="Julian D. Gonzalez"
                        title="Full-Stack & IA Developer"
                        handle="Julian-Enable"
                        status="Disponible para proyectos"
                        contactText="CONTÁCTAME"
                        avatarUrl={profile_img}
                        iconUrl={code_pattern}
                        grainUrl={theme_pattern}
                        showBehindGradient={true}
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={handleContactClick}
                    />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Transformo ideas en experiencias digitales donde el código elegante se encuentra con la inteligencia artificial. Construyo aplicaciones que no solo funcionan, sino que aprenden y evolucionan.</p>
                        <p>Mi enfoque combina desarrollo full-stack con automatización inteligente, creando soluciones escalables que impulsan resultados reales. Cada proyecto es una oportunidad para innovar y superar expectativas.</p>
                    </div>
                    <div className="about-skills">
                      {SKILLS.map((skill) => (
                        <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
                      ))}
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