import './About.css'
import DecorationSVG from '../../assets/about/images/decoration.svg'
import { Bubble } from './components/bubble/Bubble'

import { motion } from 'framer-motion'

export const About = () => {
  return (
    <main>
      <motion.section initial={{ y: 0 }} animate={{ y: 0, transition: { duration: 0.5 } }} className='about-container'>
        <h1>Quienes <span>Somos</span></h1>
      </motion.section>
      <section className="about-intro">
        <div className="decoration-about-container">
          <img src={DecorationSVG} />
        </div>
        <div className="about-intro-container">
          <h2 className="about-title">
            Nosotros
          </h2>
          <p>
            En Gestión y Resultados S.A.S, nos especializamos en la asesoría de proyectos en servicios públicos domiciliarios. Con más de 19 años de experiancia y participación en mas de 160 proyectos tanto a nivel nacional como ineternacional, nuestro equipo profesional interdisiplinario, con más de 20 años de trayectoria, está comprometido con brindar soluciones efectivas y eficientes a nuestros clientes.
          </p>
        </div>
        <div className="about-intro-container">
          <div className="bubble-container">
            <Bubble title={'+20'} subtittle={'Años de experiencia profesional'} cx={230} cy={180} r={90} />
            <Bubble title={'19'} subtittle={'Años de trayectoria'} cx={150} cy={190} r={93} />
            <Bubble title={'+160'} subtittle={'Proyectos Ejecutados'} cx={250} cy={180} r={97} />
          </div>
        </div>
      </section>
    </main>
  )
}
