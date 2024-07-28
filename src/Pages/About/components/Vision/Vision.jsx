import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import { motion } from 'framer-motion'

import VisionJPG from '../../../../assets/about/images/vision.webp'

import './Vision.css'

export const Vision = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({

    target: ref,
    offset: ["end end", "start start"]

  })

  const translation = useTransform(scrollYProgress, [0, 1], ["0%", "65%"])

  return (
    <div className="vision-container">



      <div className="vision-element" ref={ref}>
        <motion.div style={{ y: translation }} initial={{ x: -200, opacity: 0 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }} viewport={{ once: true }} className="vision-content">
          <h2>
            Visión
          </h2>
          <p>
            En Gestión y Resultados S.A.S, aspiramos a ser una empresa líder en la ejecución y desarrollo de proyectos en servicios públicos y proyectos ambientales, siendo reconocidos a nivel nacional e internacional por la calidad, responsabilidad y confiabilidad de nuestros servicios.
            Ser una empresa líder en la ejecución y desarrollo de proyectos en servicios públicos y proyectos ambientales, siendo reconocidos a nivel nacional e internacional por la calidad, responsabilidad y confiabilidad de nuestros servicios.
          </p>
        </motion.div>
      </div>

      <div className="vision-element-img">
        <motion.img loading="lazy" alt="" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }} src={VisionJPG} viewport={{ once: true }} />
      </div>

    </div>
  )
}
