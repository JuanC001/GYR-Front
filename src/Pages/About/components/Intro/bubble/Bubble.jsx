import './Bubble.css'

import { motion } from 'framer-motion'

export const Bubble = ({ title, subtittle, cx, cy, r, left, delay }) => {

    return (
        <div className={`bubble ${left ? 'left' : 'right'}`}>
            <motion.svg className={`bubble-draw`} width={'400'} height={'400'} viewBox={'0 0 400 400'}>

                <motion.circle initial={{ opacity: 1, x: 0 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: delay } }} viewport={{ once: true }} cx={'200'} cy={'200'} r={'100'} fill={'var(--color-secondary)'} />
                <motion.circle initial={{ opacity: 1, }} whileInView={{ opacity: 0.95, transition: { delay: delay + 0.5 } }} cx={cx} cy={cy} r={r} viewport={{ once: true }} fill={'var(--color-primary)'} />

            </motion.svg>
            <div className='bubble-content'>
                <span>{title}</span>
                <p>{subtittle}</p>
            </div>
        </div>
    )
}
