import { Helmet } from 'react-helmet'
import './Contact.css'

import DecorationSVG from '../../assets/contact/decoration.svg'

export const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('El mensaje ha sido enviado correctamente.')
    // Enviar email aquí
  }

  return (
    <main className='contact-container'>
      <Helmet>
        <title>Contacto - Gestión y Resultados S.A.S.</title>
        <meta name='description' content='Contáctanos para obtener más información sobre nuestros servicios y proyectos.' />
        <meta property='og:title' content='Contacto - GYR' />
        <meta property='og:description' content='Contáctanos para obtener más información sobre nuestros servicios y proyectos.' />
      </Helmet>
      <div className="contact-landing">
        <img src={DecorationSVG} alt='' />
        <h1>Contacto</h1>
      </div>
      <div className="contact-content">
        <section className="contact-intro">
          <h2>
            ¿Cómo podemos ayudarlo?
          </h2>
          <p>
            Póngase en contacto con nuestro equipo para descubrir cómo GYR puede ayudarlo en su próximo proyecto. Envíenos un mensaje y nos pondremos en contacto con usted a la brevedad.
          </p>
        </section>
        <section className="contact-section">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Asunto" required />
            <input type="email" placeholder="Correo electrónico" required />
            <textarea placeholder="Consulta o comentario" required></textarea>
            <button type="submit">Enviar</button>
          </form>
          <div className="contact-info">
            <h2>Información de contacto</h2>
            <p>
              <b>Teléfono:</b> (+57) 601 3586685
              <br />
              <b>Teléfono:</b> (+57) 321 9263235
              <br />
              info@gestionyresultados.com
              <br />
              info@gestionyresultados.com
              <br />
              Calle 122 #52 - 49 Bogotá, Colombia
            </p>
          </div>
        </section>
        <section className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11246.850326658123!2d-74.07412872080178!3d4.707011851017213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9accf61190e1%3A0x717d458a4f827863!2sCl.%20122%20%2352-49%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1722209160114!5m2!1ses!2sco" width="100%" height="500" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </main>
  )
}
