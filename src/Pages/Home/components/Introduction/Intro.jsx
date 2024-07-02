import { motion } from 'framer-motion'

import './Intro.css'
import ColGreen from '../../../../assets/home/images/colombia_verde.webp'

export const Intro = () => {

    const introVariants = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.2
            }
        },
        hidden_map: {

            opacity: 0,
            x: 100
        }

    }

    return (
        <div className="intro-container">
            <motion.div className="intro-content" variants={introVariants} initial={'hidden'} whileInView={'visible'} viewport={{ once: true }}>
                <h2>Descúbrenos</h2>
                <p>Gestión y Resultados S.A.S, es una empresa dedicada a asesorar proyectos en servicios públicos domiciliarios, con más de 19 años de experiencia, en más de 160 proyectos a nivel nacional e internacional, con un equipo profesional interdisciplinario que cuenta con más de 20 años de experiencia.</p>
            </motion.div>
            <motion.img src={ColGreen} alt="Colombia Verde" variants={introVariants} initial={'hidden_map'} whileInView={'visible'} viewport={{ once: true }} />
        </div>
    )
}
