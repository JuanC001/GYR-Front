import { useRef, useState } from 'react'

import './Hero.css'
import { motion, useScroll, useTransform } from 'framer-motion'

import FrontLayer from '../../../../assets/home/hero/Front-Layer.webp'
//import BackLayer from '../../../../assets/hero/Back-Layer.webp'
import BackLayer from '../../../../assets/home/hero/background.webp'

export const Hero = () => {

    const [frontLoaded, setFrontLoaded] = useState(false);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const translation_text = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
    const translation_front = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <div ref={ref} className="hero-container">
            <motion.h1 className='hero-tittle' style={{ y: translation_text }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} >
                GESTIÓN Y <span>RESULTADOS</span>
                
            </motion.h1>

            <motion.h1 className='mobile-title'

                initial={{
                    opacity: [1],
                    background: 'linear-gradient(350deg, var(--color-primary) 50%, var(--color-secondary) 50%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                }}
                animate={
                    {
                        opacity: 1,
                        background: 'linear-gradient(35deg, var(--color-primary) 50%, var(--color-secondary) 50%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        transition: { delay: 1, duration: 2 }
                    }}

            >
                GESTIÓN Y RESULTADOS
            </motion.h1>
            <motion.img className='hero-front'
                initial={{ opacity: 0, y: 100 }}
                animate={frontLoaded && { opacity: 1, y: 0, transition: { delay: 0, bounce: false } }}
                src={FrontLayer} alt='Layer_5'
                style={{ y: translation_front }}
                loading='lazy'
                onLoad={() => setFrontLoaded(true)} />

        </div>
    )
}

/* 

<motion.img className='hero-back'
                initial={{ opacity: 0, y: 100 }}
                animate={backLoaded && { opacity: 1, y: 0, transition: { delay: 0.2, bounce: false } }}
                src={BackLayer} alt='Layer_1'
                style={{ y: translation_back }}
                loading='lazy'
                onLoad={() => setBackLoaded(true)} />

*/
