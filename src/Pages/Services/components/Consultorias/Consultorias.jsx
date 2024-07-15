import { useState } from 'react'
import './Consultorias.css'

import { AnimatePresence, motion } from 'framer-motion'

export const Consultorias = () => {
    return (
        <div className="image__container">
            <ConsultoryItem id={'c1'} text={'Control Tarifario'} description={'Revisión, actualización, capacitaciones y acompañamientos en la aplicación tarifaria de los servicios públicos domiciliarios acorde con el marco normativo vigente. '} />
            <ConsultoryItem id={'c2'} text={'Reporte de Información SUI'} description={'Compilación, organización y reporte de información al SUI, siguiendo los formatos y formularios de las Resoluciones emitidas por la Superintendencia de Servicios Públicos Domiciliarios (SSPD) para los servicios públicos. Llevamos a cabo análisis de información reportada y capacitación sobre el cargue de la información al SUI.'} />
            <ConsultoryItem id={'c3'} text={'Diagnóstico de Viabilidad Empresarial'} description={'Elaboramos planes estratégicos basados en criterios e indicadores que sirvan de soporte para alcanzar una óptima gestión empresarial y garantizar la calidad de los servicios a corto, mediano y largo plazo, mediante estudios específicos en los aspectos técnicos operativos, económicos, financieros, comerciales, administrativos y jurídicos.'} />
            <ConsultoryItem id={'c4'} text={'Estructuración de Esquemas Regionales E Individuales'} description={'Definición de alternativas técnicas, económicas, financieras y legales de esquemas de prestación del sector de agua potable y saneamiento básico a través de la implementación de esquemas individuales y/o, regionales y de vinculación de operadores especializados.'} />
            <ConsultoryItem id={'c5'} text={'Modernización Y Fortalecimiento Institucional'} description={'Implementamos actividades de fortalecimiento institucional a las empresas de servicios públicos domiciliarios, mediante la asistencia técnica en aspectos legales, institucionales, administrativos, comerciales, financieros, técnicos y operativos, con el propósito de fortalecer su gestión y reorganización empresarial y dar cumplimiento a las obligaciones derivadas de la Ley.\n El fortalecimiento institucional incorpora la transformación empresarial, creación de empresas, estructura orgánica, manual de funciones, manual de procedimientos, costos y tarifas, contrato de condiciones uniformes, catastro de suscriptores, plan único de cuentas, normas internacionales de contabilidad, entre otros aspectos.'} />
            <ConsultoryItem id={'c6'} text={'Estudios Y Diseños de Ingeniería'} description={'Análisis y diseños propios de proyectos de ingeniería para el mejoramiento de la calidad de vida, entre los que destacan: planes maestros de acueducto y alcantarillado, interventoría a proyectos de agua potable y saneamiento básico, diseño y optimización de plantas de tratamiento de agua y aguas residuales, manejo y operación del servicio público de aseo, rellenos sanitarios, plantas de aprovechamiento y reciclaje, cierre de botaderos a cielo abierto y proyectos de alumbrado público e infraestructura vial.'} />
            <ConsultoryItem id={'c7'} text={'Valoración de Activos'} description={'Realizamos valoración de los activos a prestadores de acueducto y alcantarillado  conforme con la metodología establecida en la regulación de los servicios públicos domiciliarios.'} />
            <ConsultoryItem id={'c8'} text={'Catastro de Usuarios'} description={'Elaboramos catastro de suscriptores con la metodología establecido por MVCT, siguiendo los protocolos para el levantamiento de encuesta y control de calidad, con el objeto de mejorar la gestión comercial de los prestadores de servicios públicos domiciliarios.'} />
            <ConsultoryItem id={'c9'} text={'Capacitaciones'} description={`
Desarrollamos capacitaciones de los servicios públicos domiciliarios, en los aspectos administrativos, financieros, comerciales, técnico operativos y legales, de conformidad con el marco regulatorio vigente.\n
Implementación y aplicación de las tarifas del sector de agua potable y saneamiento básica de acuerdo con la normatividad vigente.\n
Estructuración e implementación de los Planes de Gestión y Resultados – PGR. \n
Indicadores de gestión y resultados de los servicios públicos domiciliarios.\n`} />
        </div>
    )
}

const ConsultoryItem = ({ text, id, description }) => {

    const [openContent, setOpenContent] = useState(false)

    const updateModal = () => {
        setOpenContent(!openContent)
    }

    return (
        <>
            <motion.div layoutId={id} whileHover={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }} className="content__grid" onClick={updateModal}>
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
                        <motion.div className="modal__body" style={{whiteSpace: 'pre-line'}}>
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}
