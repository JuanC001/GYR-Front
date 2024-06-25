import './Consultorias.css'

import { motion } from 'framer-motion'

export const Consultorias = () => {
    return (
        <div className="image__container">
            <ConsultoryItem text={'Hola 1'} />
            <ConsultoryItem text={'Hola 2'} />
            <ConsultoryItem text={'Hola 3'} />
            <ConsultoryItem text={'Hola 4'} />
            <ConsultoryItem text={'Hola 5'} />
            <ConsultoryItem text={'Hola 6'} />
        </div>
    )
}

const ConsultoryItem = ({ text }) => {
    return (
        <motion.div whileHover={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }} className="content__grid">
            {text}
        </motion.div>
    )
}
