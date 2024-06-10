import './Home.css'

import { Services } from './components/Services/Services'
import { Success } from './components/Success/Success'
import { Hero } from './components/Hero/Hero'
import { Intro } from './components/Introduction/Intro'

import Banner1 from '../../assets/images/gallery/imagen_1.jpg'
import { Experience } from './components/Experience/Experience'
import { motion } from 'framer-motion'

export const Home = () => {

  return (
    <main className='home-main'>

      <section >
        <Hero />
      </section>

      <section>
        <Intro />
      </section>

      <Banner text={'Asesorias Integrales en proyectos de servicios públicos y soluciones ambientales'} image={Banner1} />

      <section>
        <Services />
      </section>
      <section>
        <Success />
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
      <motion.div initial={{ y: '100%', opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.5, bounce: false } }} viewport={{ once: true }} className="banner-cover">
        <p>{text}</p>
      </motion.div>
    </motion.div>
  )
}
