import { Map } from "./components/Map/Map"
import './Experience.css'

import DecorationSVG from '../../../src/assets/about/images/decoration.svg'
import { International } from "./components/International/International"
import { Helmet } from "react-helmet"

export const Experience = () => {
    return (
        <main className="experience__container">
            <Helmet>
                <title>Experiencia - Gestión y Resultados S.A.S.</title>
                <meta name="description" content="Gestión y Resultados S.A.S. es una empresa líder en el sector de la gestión y resultados, con más de 19 años de experiencia y participación en más de 160 proyectos." />
                <meta name="keywords" content="Gestión y Resultados, Gestión y resultados S.A.S., empresa líder, empresa, proyectos, año, años" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Experiencia - Gestión y Resultados S.A.S." />
                <meta property="og:description" content="Gestión y Resultados S.A.S. es una empresa líder en el sector de la gestión y resultados, con más de 19 años de experiencia y participación en más de 160 proyectos." />
            </Helmet>
            <div className="experience__container_landing">
                <h1>Nuestra <span>Experiencia</span></h1>
            </div>
            <section className="experience__description">
                <div className="decoration-about-container">
                    <img src={DecorationSVG} alt="" />
                </div>
                <div className="experience_description_content">
                    <h2>
                        Nuestra Trayectoria
                    </h2>

                    <p>
                        En Gestión y Resultados S.A.S. contamos con más de <span>19 AÑOS</span> de experiencia y participación en más de <span>160 PROYECTOS</span> tanto a nivel nacional como internacional.
                    </p>
                </div>
            </section>
            <section className="experience__section">
                <Map />
            </section>
            <section className="experience__section">
                <International />
            </section>
        </main>
    )
}
