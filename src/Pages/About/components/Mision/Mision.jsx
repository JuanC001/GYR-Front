
import { useRef } from 'react'
import MisionJPG from '../../../../assets/about/images/mision.webp'

import './Mision.css'

import { motion, useScroll, useTransform } from 'framer-motion'

export const Mision = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({

        target: ref,
        offset: ["end end", "start start"]

    })

    const translation = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])

    return (
        <div className="mision-container">

            <div className="mision-element-img">
                <motion.img loading='lazy' initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }} viewport={{ once: true }} src={MisionJPG} />
            </div>

            <div className="mision-element" ref={ref}>
                <motion.div style={{ y: translation }} initial={{ x: 200, opacity: 0 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }} viewport={{ once: true }} className="mision-content">
                    <h2>
                        Misión
                    </h2>
                    <p>
                        En Gestión y Resultados S.A.S, nos dedicamos a desarrollar asesorías integrales en proyectos de servicios públicos, proyectos ambientales, auditorías e interventorías para entidades gubernamentales, empresas de servicios públicos del sector privado y banca multilateral.
                        <br />
                        Con una alta capacidad profesional y un conocimiento específico de la normatividad y la regulación, brindamos servicios de calidad y eficiencia. Estamos comprometidos con el bienestar y la salud de nuestros trabajadores, asegurando que cada proyecto se realice con el máximo estándar de excelencia y responsabilidad.
                    </p>
                </motion.div>
            </div>

        </div>
    )
}
