import React from 'react'
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
        <img src={profile_img} alt="Foto de perfil" />
        <h1>Soy <span>Julián Merchán,</span> Desarrollador de Software.</h1>
        <p>Construyo soluciones end‑to‑end: desde interfaces web hasta APIs y automatizaciones. Trabajo con JavaScript/TypeScript, React, Node.js y Python; priorizo calidad, rendimiento y una UX clara orientada al negocio.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contactar</AnchorLink></div>
            <div className="hero-resumen" onClick={handleDownloadCV}>Mi CV</div>
        </div>
    </div>
  )
}

export default Hero