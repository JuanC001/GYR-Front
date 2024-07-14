import { Map } from "./components/Map/Map"
import './Experience.css'

import DecorationSVG from '../../../src/assets/about/images/decoration.svg'
import { International } from "./components/International/International"

export const Experience = () => {
    return (
        <main className="experience__container">
            <div className="experience__container_landing">
                <h1>Nuestra <span>Experiencia</span></h1>
            </div>
            <section className="experience__description">
                <div className="decoration-about-container">
                    <img src={DecorationSVG} />
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
