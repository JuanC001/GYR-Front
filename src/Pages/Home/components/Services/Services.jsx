import { useState } from 'react'
import './Services.css'

import { AnimatePresence, motion } from 'framer-motion'

const ServicesJSON = [
    {
        id: 0,
        text: '¿Que hacemos?',
        description: 'Somos consultores en el campo de los espacios públicos domiciliarios, estructuración de alternativas empresariales eficientes, proyectos ambientales, auditores externos e interventores de proyectos de consultorias, obras y operación de los servicios públicos domiciliarios'
    },
    {
        id: 1,
        text: 'Consultoría',
        description: 'Realizamos las consultorias xyz'
    },
    {
        id: 2,
        text: 'Auditoría',
        description: 'Realizamos las auditorias xyz'
    },
    {
        id: 3,
        text: 'Interventoría',
        description: 'Realizamos las interventorias xyz'
    },
    {
        id: 4,
        text: 'Proyectos',
        description: 'Realizamos los proyectos xyz'
    }

]

export const Services = () => {

    const [hoverContent, setHoverContent] = useState(0)

    return (
        <div className='container'>
            <motion.div>
                <h2 className=''>Nuestros servicios</h2>
                <motion.div className='hover-menu' onHoverEnd={() => setHoverContent(0)}>

                    <ServicesMenoItem number={1} service={ServicesJSON[1]} setHoverContent={setHoverContent} />
                    <ServicesMenoItem number={2} service={ServicesJSON[2]} setHoverContent={setHoverContent} />
                    <ServicesMenoItem number={3} service={ServicesJSON[3]} setHoverContent={setHoverContent} />
                    <ServicesMenoItem number={4} service={ServicesJSON[4]} setHoverContent={setHoverContent} />

                </motion.div>

            </motion.div>
            <div className="hover-reactive">
                <div className="hover-content">
                    <AnimatePresence mode='wait'>
                        {hoverContent === 0 && <ServicesContentInfo service={ServicesJSON[0]} />}
                        {hoverContent === 1 && <ServicesContentInfo service={ServicesJSON[1]} />}
                        {hoverContent === 2 && <ServicesContentInfo service={ServicesJSON[2]} />}
                        {hoverContent === 3 && <ServicesContentInfo service={ServicesJSON[3]} />}
                        {hoverContent === 4 && <ServicesContentInfo service={ServicesJSON[4]} />}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    )
}

const ServicesContentInfo = ({ service }) => {
    return (
        <motion.div className="hover-content-info" key={service.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h3>{service.text}</h3>
            <p>{service.description}</p>
        </motion.div>
    )
}

const ServicesMenoItem = ({ number, service, setHoverContent }) => {
    return (
        <>
            <motion.div
                className="hover-item"
                onHoverStart={() => setHoverContent(number)}
                
            >
                <h3>{service.text}</h3>
            </motion.div>
            <hr />
        </>
    )
}

