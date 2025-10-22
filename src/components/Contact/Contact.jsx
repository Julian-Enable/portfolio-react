import { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

        const [submitting, setSubmitting] = useState(false)
        const [resultMessage, setResultMessage] = useState("")
        const [isSuccess, setIsSuccess] = useState(null)

        const onSubmit = async (event) => {
          event.preventDefault()
          setSubmitting(true)
          setResultMessage("")
          setIsSuccess(null)

          const form = event.target
          const formData = new FormData(form)
          formData.append("access_key", "8c2d9ef9-cc72-471b-8adb-9455dc1201c4")

          const object = Object.fromEntries(formData)
          const json = JSON.stringify(object)

          try {
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            }).then((res) => res.json())

            if (res.success) {
              setIsSuccess(true)
              setResultMessage("¡Mensaje enviado! Te responderé pronto.")
              form.reset()
            } else {
              setIsSuccess(false)
              setResultMessage("No se pudo enviar el mensaje. Inténtalo nuevamente.")
            }
          } catch (error) {
            setIsSuccess(false)
            setResultMessage("Ocurrió un error de red. Revisa tu conexión e intenta otra vez.")
          } finally {
            setSubmitting(false)
          }
        }


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Contacto</h1>
                <img src={theme_pattern} alt="Patrón de tema" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Hablemos</h1>
                    <p>Actualmente estoy disponible para nuevos proyectos. Siéntete libre de enviarme un mensaje con tu idea y te responderé lo antes posible.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Correo" /> <p><a className='anchor-link' href="mailto:engjuliangonzalez@gmail.com">engjuliangonzalez@gmail.com</a></p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Teléfono" /> <p><a className='anchor-link' href="tel:+573212441930">+57 321 244 1930</a></p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Ubicación" /> <p>Bogotá D.C., Colombia</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right" noValidate>
                    <input type="text" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                    <label htmlFor="contact-name">Tu nombre</label>
                    <input id="contact-name" type="text" placeholder='Escribe tu nombre' name='name' autoComplete='name' required />
                    <label htmlFor="contact-email">Tu correo</label>
                    <input id="contact-email" type="email" placeholder='Escribe tu correo' name='email' autoComplete='email' required />
                    <label htmlFor="contact-message">Escribe tu mensaje</label>
                    <textarea id="contact-message" name="message" rows="8" placeholder='Escribe tu mensaje' required></textarea>
                    {resultMessage && (
                      <p role="alert" aria-live="polite" style={{ color: isSuccess ? '#4ade80' : '#f87171' }}>
                        {resultMessage}
                      </p>
                    )}
                    <button className="contact-submit" disabled={submitting} aria-busy={submitting}>
                      {submitting ? 'Enviando…' : 'Enviar ahora'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact