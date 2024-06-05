import './Bubble.css'

import { motion } from 'framer-motion'

export const Bubble = ({ title, subtittle, cx, cy, r }) => {

    return (
        <div className='bubble'>
            <motion.svg className={'bubble-draw'} width={'400'} height={'400'} viewBox={'0 0 400 400'}>

                <motion.circle initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} cx={'200'} cy={'200'} r={'100'} fill={'var(--color-secondary)'} />
                <motion.circle initial={{ opacity: 0, }} whileInView={{ opacity: 1, transition: { delay: 0.5 } }} cx={cx} cy={cy} r={r} fill={'var(--color-primary)'} />

            </motion.svg>
            <div className='bubble-content'>
                <h3>{title}</h3>
                <p>{subtittle}</p>
            </div>
        </div>
    )
}
