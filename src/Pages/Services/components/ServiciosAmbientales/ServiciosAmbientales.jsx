import './ServiciosAmbientales.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export const ServiciosAmbientales = () => {
    return (
        <div className="sa_image__container">
            <ConsultoryItem text={'Estudios de Impacto Ambiental'} id={'1sa'}/>
            <ConsultoryItem text={'Estudios de Impacto Ambiental'} id={'2sa'}/>
            <ConsultoryItem text={'Estudios de Impacto Ambiental'} id={'3sa'}/>
            <ConsultoryItem text={'Estudios de Impacto Ambiental'} id={'4sa'}/>
            <ConsultoryItem text={'Estudios de Impacto Ambiental'} id={'5sa'}/>
            <ConsultoryItem text={'Estudios de Impacto Ambiental'} id={'6sa'}/>
            <ConsultoryItem text={'Estudios de Impacto Ambiental End'} extraClass={'grid__row__full'} id={'7sa'}/>
        </div>
    )
}

const ConsultoryItem = ({ text, id, extraClass }) => {

    const [openContent, setOpenContent] = useState(false)

    const updateModal = () => {
        setOpenContent(!openContent)
    }

    return (
        <>
            <motion.div layoutId={id} whileHover={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }} className={`content__grid ${extraClass}`} onClick={updateModal}>
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
