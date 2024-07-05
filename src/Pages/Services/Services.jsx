import './Services.css'
import { Consultorias } from './components/Consultorias/Consultorias'

import DecorationSVG from '../../../src/assets/about/images/decoration.svg'

export const Services = () => {
  return (
    <div>

      <div className="services-landing">
        <h1>Nuestros <span>Servicios</span></h1>
      </div>

      <section className="services-section-intro">
        <div className="decoration-services-container">
          <img src={DecorationSVG} />
        </div>
        <div className="services-intro-container">
          <p>
            Desarrollamos auditorías externas, interventorías y actividades asociadas al fortalecimiento institucional y estructuración de alternativas empresariales eficientes, a prestadores de servicios públicos domiciliarios, nacional e internacionalmente.
          </p>
        </div>
      </section>

      <section className="services-section">
        <h2>
          Consultorías
        </h2>
        <Consultorias />
      </section>

      <section className="services-section">
        
      </section>

    </div>
  )
}
