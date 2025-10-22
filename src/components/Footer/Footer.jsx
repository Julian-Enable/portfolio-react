import { useState } from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribeMessage, setSubscribeMessage] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      setSubscribeMessage('Por favor ingresa un correo válido')
      setTimeout(() => setSubscribeMessage(''), 3000)
      return
    }

    setIsSubscribing(true)
    setSubscribeMessage('')

    try {
      // Simulación de suscripción (puedes integrar con un servicio real como Mailchimp, ConvertKit, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubscribeMessage('¡Suscripción exitosa! Gracias por unirte.')
      setEmail('')
      setTimeout(() => setSubscribeMessage(''), 4000)
    } catch (error) {
      setSubscribeMessage('Error al suscribir. Intenta nuevamente.')
      setTimeout(() => setSubscribeMessage(''), 3000)
    } finally {
      setIsSubscribing(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe()
    }
  }

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="Logo Julián Merchán" />
                <p>Desarrollador Full-Stack especializado en React, Node.js e integración con IA. Construyo soluciones web modernas, APIs escalables y automatizaciones inteligentes.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input" role="group" aria-label="Formulario de suscripción">
                    <img src={user_icon} alt="Icono de usuario" />
                    <input 
                      type="email" 
                      placeholder='Ingresa tu correo' 
                      aria-label='Correo electrónico' 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={isSubscribing}
                    />
                </div>
                <button 
                  className="footer-subscribe" 
                  onClick={handleSubscribe}
                  disabled={isSubscribing}
                  aria-busy={isSubscribing}
                >
                  {isSubscribing ? 'Suscribiendo...' : 'Suscribirme'}
                </button>
            </div>
            {subscribeMessage && (
              <p className="footer-subscribe-message" role="alert" aria-live="polite">
                {subscribeMessage}
              </p>
            )}
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© {new Date().getFullYear()} Julián Merchán. Todos los derechos reservados.</p>
            <nav className="footer-bottom-right" aria-label="Enlaces legales y sociales">
                <a href="#terminos" aria-label="Términos del servicio">Términos del servicio</a>
                <a href="#privacidad" aria-label="Política de privacidad">Política de privacidad</a>
                <a href="https://github.com/Julian-Enable" target="_blank" rel="noopener noreferrer" aria-label="Conecta conmigo en GitHub">Conecta conmigo</a>
            </nav>
        </div>
    </div>
  )
}

export default Footer