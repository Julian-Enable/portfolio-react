import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Foto de perfil" />
        <h1><span>Soy Julián Merchán,</span> Desarrollador Frontend (React).</h1>
        <p>Diseño y construyo interfaces rápidas, accesibles y mantenibles con React, JavaScript, HTML y CSS. Me enfoco en buenas prácticas, rendimiento y UX, alineado a necesidades reales de negocio.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contactar</AnchorLink></div>
            <div className="hero-resumen">Mi CV</div>
        </div>
    </div>
  )
}

export default Hero