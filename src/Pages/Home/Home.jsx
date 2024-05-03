import './Home.css'
import { motion, useScroll, useTransform } from 'framer-motion'
/* import images */

import Layer_5 from '../../assets/hero/Layer_5.png'
import Layer_4 from '../../assets/hero/Layer_4.png'
import Layer_3 from '../../assets/hero/Layer_3.png'
import Layer_2 from '../../assets/hero/Layer_2.png'
import Layer_1 from '../../assets/hero/Layer_1.png'

import { useRef } from 'react'

export const Home = () => {

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
        <motion.h1 style={{ y: translation_text }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} className='hero-tittle'>
          Gestion y Resultados
        </motion.h1>

        <motion.img src={Layer_5} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} style={{ y: translation_front }} className='hero-front' />
        <motion.div src={Layer_4} style={{ y: translation_front }} className='hero-front2' />
        <motion.div style={{ y: translation_back }} className='hero-back' />
        <motion.div style={{ y: translation_back }} className='hero-back2' />



      </div>
    </main>
  )
}
