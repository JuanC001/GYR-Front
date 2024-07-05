import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ConsultoriasSectorSalud.css'

export const ConsultoriasSectorSalud = () => {
    return (
        <div className="ss_image__container">
            <ConsultoryItem text={'Plan Hospitalario Para Emergencias'} id={1} />
            <ConsultoryItem text={'Plan De Gestión Integral De Residuos Hospitalarios Y Similares - PGIRHS'} id={2} />
        </div>
    )
}

const ConsultoryItem = ({ text, id }) => {

    const [openContent, setOpenContent] = useState(false)

    const updateModal = () => {
        setOpenContent(!openContent)
        console.log(`Open modal: ${openContent}`)
        console.log(id, text)
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

