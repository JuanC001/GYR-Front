import { useState } from 'react'
import './Consultorias.css'

import { AnimatePresence, motion } from 'framer-motion'

export const Consultorias = () => {
    return (
        <div className="image__container">
            <ConsultoryItem id={'c1'} text={'Control Tarifario'} />
            <ConsultoryItem id={'c2'} text={'Reporte de Información SUI'} />
            <ConsultoryItem id={'c3'} text={'Diagnóstico de Viabilidad Empresarial'} />
            <ConsultoryItem id={'c4'} text={'Estructuración de Esquemas Regionales E Individuales'} />
            <ConsultoryItem id={'c5'} text={'Modernización Y Fortalecimiento Institucional'} />
            <ConsultoryItem id={'c6'} text={'Estudios Y Diseños de Ingeniería'} />
            <ConsultoryItem id={'c7'} text={'Valoración de Activos'} />
            <ConsultoryItem id={'c8'} text={'Catastro de Usuarios'} />
            <ConsultoryItem id={'c9'} text={'Capacitaciones'} />
        </div>
    )
}

const ConsultoryItem = ({ text, id }) => {

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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, quam sit amet viverra mattis, justo sapien fermentum velit, id placerat neque eros vel enim. Donec pellentesque, neque vel consectetur vestibulum, felis velit vulputate velit, at tincidunt justo velit in velit.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}
