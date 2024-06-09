import './About.css'


import { motion } from 'framer-motion'
import { AboutIntro } from './components/Intro/AboutIntro'
import { Mision } from './components/Mision/Mision'
import { Vision } from './components/Vision/Vision'
import { Team } from './components/Team/Team'

export const About = () => {
  return (
    <main>
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
