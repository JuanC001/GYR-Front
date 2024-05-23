import { motion } from 'framer-motion'

import './Intro.css'
import ColGreen from '../../../../assets/images/colombia_verde.jpg'

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
                <h1>Descúbrenos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laboriosam, deleniti numquam, rem ipsa labore quo tempore assumenda quam eaque neque eos rerum, veritatis voluptatum. Rerum, incidunt, est repudiandae, culpa quasi minus ullam ex reiciendis rem assumenda cum facere recusandae?</p>
            </motion.div>
            <motion.img src={ColGreen} alt="Colombia Verde" variants={introVariants} initial={'hidden_map'} whileInView={'visible'} viewport={{ once: true }} />
        </div>
    )
}
