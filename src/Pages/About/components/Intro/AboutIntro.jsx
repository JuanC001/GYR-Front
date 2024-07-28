import { Bubble } from './bubble/Bubble'
import DecorationSVG from '../../../../assets/about/images/decoration.svg'

import './AboutIntro.css'

export const AboutIntro = () => {
    return (
        <div className='about-intro'>
            <div className="decoration-about-container">
                <img src={DecorationSVG} alt='' />
            </div>
            <div className="about-intro-container">
                <div className="about-intro-content">
                    <h2 className="about-title">
                        Nosotros
                    </h2>

                    <p>
                        En Gestión y Resultados S.A.S, nos especializamos en la asesoría
                        de proyectos en servicios públicos domiciliarios. Con más de 19 años
                        de experiencia y participación en más de 160 proyectos tanto a nivel nacional
                        como internacional, nuestro equipo profesional interdisiplinario, con más de 20 años de
                        trayectoria, está comprometido con brindar soluciones efectivas y eficientes a nuestros clientes.
                    </p>
                </div>
            </div>
            <div className="about-intro-container">
                <div className="bubble-container">
                    <Bubble title={'+20'} subtittle={'Años de experiencia profesional'} cx={230} cy={230} r={90} left={true} delay={0.5} />
                    <Bubble title={'19'} subtittle={'Años de trayectoria'} cx={150} cy={190} r={93} delay={1} />
                    <Bubble title={'+160'} subtittle={'Proyectos Ejecutados'} cx={250} cy={180} r={97} left={true} delay={1.5} />
                </div>
            </div>
        </div>
    )
}
