import './Services.css'
import { Consultorias } from './components/Consultorias/Consultorias'

import DecorationSVG from '../../../src/assets/about/images/decoration.svg'

export const Services = () => {
  return (
    <div>

      <section className="services-section">
        <div className="services-landing">
          <h1>Nuestros <span>Servicios</span></h1>
        </div>

      </section>

      <section className="services-section-intro">
        <div className="decoration-services-container">
          <img src={DecorationSVG} />
        </div>
        <div className="services-intro-container">
          <Consultorias />
        </div>
      </section>

      <section className="services-section">

      </section>

    </div>
  )
}
