import { useState } from 'react'
import './Services.css'

import { AnimatePresence, motion } from 'framer-motion'

const ServicesJSON = [
    {
        id: 0,
        text: '¿Que hacemos?',
        description: 'Somos consultores en el campo de los servicios públicos domiciliarios, estructuración de alternativas empresariales eficientes, proyectos ambientales, auditores externos e interventores de proyectos de consultorias, obras y operación de los servicios públicos domiciliarios'
    },
    {
        id: 1,
        text: 'Consultoría',
        description: 'En Gestión y Resultados S.A.S. ofrecemos servicios de consultoría especializada en el sector de servicios públicos domiciliarios, abarcando áreas como control tarifario, reporte de información, diagnóstico empresarial, estructuración de esquemas, modernización institucional, estudios de ingeniería, valoración de activos y capacitación, todo ello con un enfoque en calidad, eficiencia y cumplimiento normativo.'
    },
    {
        id: 2,
        text: 'Auditorías Externas',
        description: 'Realizamos auditorías externas de gestión y resultados de acuerdo con la normatividad vigente para cada uno de los servicios públicos domiciliarios.'
    },
    {
        id: 3,
        text: 'Servicios Ambientales',
        description: 'En Gestión y Resultados S.A.S. ofrecemos servicios ambientales integrales, incluyendo estudios de impacto ambiental, líneas base y planes de contingencia, planes de manejo ambiental, monitoreo ambiental, gestión integral de residuos sólidos, programas de uso eficiente y ahorro de agua, y caracterización de residuos. Nuestro enfoque garantiza la identificación, prevención y mitigación de impactos ambientales, promoviendo la sostenibilidad y el cumplimiento normativo en cada proyecto.'
    },
    {
        id: 4,
        text: 'Interventorías',
        description: 'Ejecutamos interventorías en proyectos de servicios públicos domiciliarios, a su operación y obras de infraestructura.'
    }

]

export const Services = () => {

    const [hoverContent, setHoverContent] = useState(0)

    return (
        <div className='services-container'>
            <div>
                <h2>Nuestros servicios</h2>
                <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className='hover-menu'>

                    <ServicesMenuItem number={1} service={ServicesJSON[1]} setHoverContent={setHoverContent} />
                    <ServicesMenuItem number={2} service={ServicesJSON[2]} setHoverContent={setHoverContent} />
                    <ServicesMenuItem number={3} service={ServicesJSON[3]} setHoverContent={setHoverContent} />
                    <ServicesMenuItem number={4} service={ServicesJSON[4]} setHoverContent={setHoverContent} />

                </motion.div>

            </div>
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
        <motion.div className="hover-content-info" key={service.id} initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -200 }}>
            <h4>{service.text}</h4>
            <p>{service.description}</p>
        </motion.div>
    )
}

const ServicesMenuItem = ({ number, service, setHoverContent }) => {
    return (

        <div
            className="hover-item"

            onMouseEnter={() => setHoverContent(number)}
            onMouseLeave={() => setHoverContent(0)}
        >
            <h4>
                {service.text}
            </h4>
        </div>

    )
}

