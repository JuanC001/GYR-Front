import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ConsultoriasSectorSalud.css'

export const ConsultoriasSectorSalud = () => {
    return (
        <div className="ss_image__container">
            <ConsultoryItem text={'Plan Hospitalario Para Emergencias'} id={1} description={`
                Analizamos integralmente los riesgos y determinamos las medidas de prevención, mitigación y respuesta ante desastres que puedan presentarse en instituciones prestadoras de servicio de salud, conforme a la normatividad vigente.
                `} />
            <ConsultoryItem text={'Plan De Gestión Integral De Residuos Hospitalarios Y Similares - PGIRHS'} id={2} description={`
                Elaboramos y establecemos los procedimientos, procesos, actividades y presupuestos que se deberán ejecutar dentro del marco sanitario y ambiental, para el manejo integral de los residuos generados durante la prestación de los servicios de salud.`} />
        </div>
    )
}

const ConsultoryItem = ({ text, id, description }) => {

    const [openContent, setOpenContent] = useState(false)

    const updateModal = () => {
        setOpenContent(!openContent)
    }

    return (
        <>
            <motion.div layoutId={id} whileHover={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }} className="content__grid" onClick={updateModal}>
                <h3>
                    {text}
                </h3>
            </motion.div>
            <AnimatePresence>
                {openContent && <motion.div className='modal'>
                    <div className="modal__click" onClick={updateModal}>

                    </div>
                    <motion.div layoutId={id} className='modal__content'>
                        <motion.div className="modal__header">
                            <h2>{text}</h2>
                            <button onClick={updateModal}>x</button>
                        </motion.div>
                        <motion.div className="modal__body">
                            {description}
                        </motion.div>
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

