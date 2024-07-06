import './Services.css'
import { Consultorias } from './components/Consultorias/Consultorias'

import DecorationSVG from '../../../src/assets/about/images/decoration.svg'
import { ConsultoriasSectorSalud } from './components/ConsultoriasSectorSalud/ConsultoriasSectorSalud'
import { ServiciosAmbientales } from './components/ServiciosAmbientales/ServiciosAmbientales'
import { Auditorias } from './components/AuditoriasEGR/Auditorias'

import ImagenInterventorias from '../../../src/assets/services/interventorias.jpg'

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
        <h2>
          Consultorías del Sector Salud
        </h2>
        <ConsultoriasSectorSalud />
      </section>

      <section className="services-section">
        <h2>
          Auditorías Externas de Gestión y Resultados
        </h2>
        <Auditorias />
      </section>

      <section className="services-section">
        <h2>
          Servicios Ambientales
        </h2>
        <ServiciosAmbientales />
      </section>

      <section className="services-section-interventorias">
        <div>
          <h2>
            Interventorías
          </h2>
          <p>
            Ejecutamos interventorías en proyectos de servicios públicos domiciliarios, a su operación y obras de infraestructura
          </p>
        </div>
        <div className="container-interventorias">
          <img src={ImagenInterventorias} />
        </div>
      </section>

    </div>
  )
}
