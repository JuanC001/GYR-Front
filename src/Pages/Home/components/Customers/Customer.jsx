import { useEffect, useState } from 'react'
import './Customer.css'
import { AnimatePresence, motion } from 'framer-motion'
import { ImageGallery } from '../../../../assets/home/images/Customer/imagesExport'

export const Customer = () => {

    const [position, setPosition] = useState(1)

    useEffect(() => {

        const interval = setInterval(() => {
            updatePosition()
        }, 8000)
        return () => clearInterval(interval)

    }, [position])


    const updatePosition = () => {
        if (position + 1 > 3) {
            setPosition(1)
            return
        }
        setPosition(position + 1)
    }

    return (
        <div className="customer-container">
            <div className="customer-content">
                <h2>Nuestros <span>Clientes</span></h2>
                <motion.div layout className="customer-grid">

                    <GroupCustomer image={ImageGallery[0]} image2={ImageGallery[8]} image3={ImageGallery[16]} position={position} delay={0.2} />
                    <GroupCustomer image={ImageGallery[1]} image2={ImageGallery[9]} image3={ImageGallery[17]} position={position} delay={0.4} />
                    <GroupCustomer image={ImageGallery[2]} image2={ImageGallery[10]} image3={ImageGallery[18]} position={position} delay={0.6} />
                    <GroupCustomer image={ImageGallery[3]} image2={ImageGallery[11]} position={position} delay={0.8} />
                    <GroupCustomer image={ImageGallery[4]} image2={ImageGallery[12]} position={position} delay={1} />
                    <GroupCustomer image={ImageGallery[5]} image2={ImageGallery[13]} position={position} delay={1.2} />
                    <GroupCustomer image={ImageGallery[6]} image2={ImageGallery[14]} position={position} delay={1.3} />
                    <GroupCustomer image={ImageGallery[7]} image2={ImageGallery[15]} position={position} delay={1.4} />

                </motion.div>



            </div>

        </div>
    )
}

const GroupCustomer = ({ image, image2, image3 = null, position, delay }) => {



    const variants = {
        initial: { opacity: 0, scaleY: 0 },
        animate: { opacity: 1, scaleY: 1 },
        exit: { opacity: 0, scaleY: 0 }
    }

    return (
        <AnimatePresence mode='wait'>
            {position === 1 &&
                <motion.div key={image.id} initial={'initial'} transition={{ delay: delay }} animate={'animate'} exit={'exit'} variants={variants} className='customer'>
                    <img src={image.image} alt={image.title} />
                </motion.div >
            }

            {position === 2 &&
                <motion.div key={image2.id} initial={'initial'} transition={{ delay: delay }} animate={'animate'} exit={'exit'} variants={variants} className='customer'>
                    <img src={image2.image} alt={image2.title} />
                </motion.div >
            }

            {position === 3 && image3 !== null &&
                <motion.div key={image3.id} initial={'initial'} transition={{ delay: delay }} animate={'animate'} exit={'exit'} variants={variants} className='customer'>
                    <img src={image3.image} alt={image3.title} />
                </motion.div >
            }

        </AnimatePresence>


    )

}
