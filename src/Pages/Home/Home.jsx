import './Home.css'
import { motion, useScroll, useTransform } from 'framer-motion'
/* import images */

import FrontLayer from '../../assets/hero/Front-Layer.webp'
import BackLayer from '../../assets/hero/Back-Layer.webp'
import BackGround from '../../assets/hero/background.png'

import ColGreen from '../../assets/images/colombia_verde.jpg'

import { useRef, useState } from 'react'

export const Home = () => {

  const [frontLoaded, setFrontLoaded] = useState(false);
  const [backLoaded, setBackLoaded] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const translation_text = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const translation_back = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const translation_front = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);


  return (
    <main className='home-main'>

      <section ref={ref} className="hero-container">
        <motion.h1 style={{ y: translation_text }} initial={{ opacity: 0 }} animate={frontLoaded && backLoaded && { opacity: 1, transition: { delay: 0.5 } }} className='hero-tittle'>
          GESTIÓN Y
        </motion.h1>
        <motion.h1 style={{ y: translation_text }} initial={{ opacity: 0 }} animate={frontLoaded && backLoaded && { opacity: 1, transition: { delay: 0.5 } }} className='hero-tittle2'>
          RESULTADOS
        </motion.h1>
        <motion.img className='hero-front'
          initial={{ opacity: 0, y: 100 }}
          animate={frontLoaded && { opacity: 1, y: 0, transition: { delay: 0, bounce: false } }}
          src={FrontLayer} alt='Layer_5'
          style={{ y: translation_front }}
          loading='lazy'
          onLoad={() => setFrontLoaded(true)} />
        <motion.img className='hero-back'
          initial={{ opacity: 0, y: 100 }}
          animate={backLoaded && { opacity: 1, y: 0, transition: { delay: 0.2, bounce: false } }}
          src={BackLayer} alt='Layer_1'
          style={{ y: translation_back }}
          loading='lazy'
          onLoad={() => setBackLoaded(true)} />
      </section>

      <section className="intro-container">
        <motion.img initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4 } }} viewport={{ once: true }} className='image-container' src={ColGreen} alt='background' />
        <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }} viewport={{ once: true }} className='intro-content'>
          <h1>Descúbrenos</h1>
          <p>
            Gestión y Resultados S.A.S. es una empresa dedicada a asesorar proyectos en servicios públicos domiciliarios, con más de 19 años de
            experiencia, en más de 160 proyectos a nivel nacional e internacional, con un
            equipo profesional interdisciplinario que cuenta con más de 20 años de
            experiencia.
          </p>
          <div className='align-left'>
            <button>Conócenos {'>>'}</button>
          </div>
        </motion.div>
      </section>

      <section className="banner">
        <div className="banner-cover">
          <p>
            Asesorías integrales en proyectos de servicios públicos y soluciones ambientales
          </p>
        </div>
      </section>
    </main>
  )
}
