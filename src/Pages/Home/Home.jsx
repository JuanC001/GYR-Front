import './Home.css'

import { Services } from './components/Services/Services'
import { Success } from './components/Success/Success'
import { Hero } from './components/Hero/Hero'
import { Intro } from './components/Introduction/Intro'

import Banner1 from '../../assets/images/gallery/imagen_1.jpg'
import { Experience } from './components/Experience/Experience'
import { motion } from 'framer-motion'
import { Customer } from './components/Customers/Customer'
import { Helmet } from 'react-helmet'



export const Home = () => {

  return (
    <main className='home-main'>
      <Helmet>
        <meta name='description' content='Gestión y Resultados S.A.S, es una empresa dedicada a asesorar proyectos en servicios públicos domiciliarios, con más de 19 años de experiencia, en más de 160 proyectos a nivel nacional e internacional, con un equipo profesional interdisciplinario que cuenta con más de 20 años de experiencia.'></meta>
      </Helmet>
      <section >
        <Hero />
      </section>

      <section>
        <Intro />
      </section>

      <Banner text={'Asesorías Integrales en proyectos de servicios públicos y soluciones ambientales'} image={Banner1} />

      <section>
        <Services />
      </section>
      <section>
        <Success />
      </section>
      <section>
        <Customer />
      </section>

      <section>
        <Experience />
      </section>
    </main>
  )
}

const Banner = ({ text, image }) => {
  return (
    <motion.div className='banner' style={{ backgroundImage: `url(${image})` }}>
      <motion.div initial={{ y: '0', opacity: 1 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.5, bounce: false } }} viewport={{ once: true }} className="banner-cover">
        <p>{text}</p>
      </motion.div>
    </motion.div>
  )
}
