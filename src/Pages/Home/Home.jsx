import './Home.css'
import { motion, useScroll, useTransform } from 'framer-motion'
/* import images */

import FrontLayer from '../../assets/hero/Front-Layer.webp'
import BackLayer from '../../assets/hero/Back-Layer.webp'

import { Suspense, useRef, useState } from 'react'

export const Home = () => {

  const [frontLoaded, setFrontLoaded] = useState(false);
  const [backLoaded, setBackLoaded] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const translation_text = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const translation_back = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const translation_front = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);


  return (
    <main className='home-main'>

      <div ref={ref} className="hero-container">
        <motion.h1 style={{ y: translation_text }} initial={{ opacity: 0 }} animate={(frontLoaded && backLoaded) && { opacity: 1, transition: { delay: 0.5 } }} className='hero-tittle'>
          Gestión y Resultados
        </motion.h1>
        <Suspense fallback={<div>Loading...</div>}>
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

        </Suspense>
      </div>
    </main>
  )
}
