import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Desarrollador de Software especializado en web y automatización. Experto en React y tecnologías modernas.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input" role="group" aria-label="Formulario de suscripción">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Ingresa tu correo' aria-label='Correo electrónico' />
                </div>
                <div className="footer-subscribe">Suscribirme</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Julián Merchán. Todos los derechos reservados.</p>
            <div className="footer-bottom-right">
                <p>Términos del servicio</p>
                <p>Política de privacidad</p>
                <p>Conecta conmigo</p>
            </div>
        </div>
    </div>
  )
}

export default Footer