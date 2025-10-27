import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Julian_Merchan.pdf';
    link.download = 'CV_Julian_Gonzalez_Merchan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Foto de perfil" loading="eager" fetchpriority="high" />
        <h1>Soy <span>Julián Merchán,</span> Desarrollador Full-Stack & IA.</h1>
        <p>Construyo aplicaciones web modernas con React/Next.js y Node.js, integrando IA (OpenAI, Claude) para automatización inteligente. Especializado en APIs, soluciones full-stack escalables y optimización de rendimiento con foco en UX y resultados de negocio.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={100} href='#contact'>Contactar</AnchorLink></div>
            <div className="hero-resumen" onClick={handleDownloadCV}>Mi CV</div>
        </div>
    </div>
  )
}

export default Hero