import './About.css'


import { motion } from 'framer-motion'
import { AboutIntro } from './components/Intro/AboutIntro'
import { Mision } from './components/Mision/Mision'
import { Vision } from './components/Vision/Vision'
import { Team } from './components/Team/Team'
import { Helmet } from 'react-helmet'

const text = "En Gestión y Resultados S.A.S, nos especializamos en la asesoría de proyectos en servicios públicos domiciliarios. Con más de 19 años de experiencia y participación en más de 160 proyectos tanto a nivel nacional como internacional, nuestro equipo profesional interdisiplinario, con más de 20 años de trayectoria, está comprometido con brindar soluciones efectivas y eficientes a nuestros clientes."

export const About = () => {
  return (
    <main>
      <Helmet>
        <title>About - GYR</title>
        <meta name='description' content={text} />
        <meta property='og:title' content='About - GYR' />
        <meta property='og:description' content={text}/>
        
      </Helmet>
      <motion.section className='about-container' initial={{ y: 0 }} animate={{ y: 0, transition: { duration: 0.5 } }} >
        <h1>Quienes <span>Somos</span></h1>
      </motion.section>
      <section>
        <AboutIntro />
      </section>
      <section>
        <Mision />
        <Vision />
      </section>
      <section>
        <Team />
      </section>
    </main>
  )
}
