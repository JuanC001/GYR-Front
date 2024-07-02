import React from 'react'
import './Customer.css'
import { motion } from 'framer-motion'
import { ImageGallery } from '../../../../assets/home/images/Customer/imagesExport'

export const Customer = () => {
    return (
        <div className="customer-container">
            <div className="customer-content">
                <h2>Nuestros <span>Clientes</span></h2>
                <div className="customer-grid">
                    {
                        ImageGallery.map((image, index) => (
                            <CustomerComponent key={index} image={image.image} title={image.title} index={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const CustomerComponent = ({ image, title, index }) => {

    return (

        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: {delay: `0.${index}` }}}
            whileHover={{scale: 1.05}}
            transition={{ duration: 0.5 }} className="customer">
            <img

                src={image}
                alt={title}
            />
        </motion.div>

    )

}
