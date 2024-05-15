import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Julian Merchan,</span> Developer based in Colombia.</h1>
        <p>A Software Engineering student, with 3 years of learning and 2 years focused on own projects.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Conecta Conmigo</AnchorLink></div>
            <div className="hero-resumen">Mi resumen</div>
        </div>
    </div>
  )
}

export default Hero