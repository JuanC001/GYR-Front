import './ServiciosAmbientales.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export const ServiciosAmbientales = () => {
    return (
        <div className="sa_image__container">
            <ConsultoryItem text={'Estudios de Impacto Ambiental'} description={`
- Elaboramos Estudios de Impacto Ambiental (EIA) mediante la identificación, previsión y evaluación del potencial impacto ambiental que la ejecución de un proyecto puede tener en su entorno, lo que nos permitirá  identificar simultáneamente: 
    - Los posibles efectos que el proyecto o actividad tendrá sobre el medio ambiente, la salud y el entorno general.
    - Los instrumentos y medidas que pueden ser empleados para eliminar o reducir las consecuencias negativas de estos impactos.`} id={'1sa'} />
            <ConsultoryItem text={'Estudios De Línea Base Ambiental Y Planes De Contingencia'} description={`
                Elaboramos estudios específicos de levantamiento de línea base ambiental y planes de contingencia, que incluye la caracterización y análisis del clima, la geología, la geomorfología, la hidrogeología, la hidrología, niveles de ruido, calidad del aire y de los recursos hídricos, descripción y análisis de la fauna y flora, variables sociales y económicas del área donde se desarrollará el proyecto. Elaboración de informes de cumplimiento ambiental e informes de interventoría.`} id={'2sa'} />
            <ConsultoryItem text={'Planes de Manejo Ambiental'} description={`Definimos e implementamos las acciones necesarias para prevenir, mitigar, controlar, compensar y corregir los posibles efectos o impactos ambientales negativos causados durante el desarrollo de un proyecto, obra o actividad.`} id={'3sa'} />
            <ConsultoryItem text={'Monitoreo Ambiental'} description={`Elaboramos monitoreo de aire, agua subterránea y superficial, suelos, ruido, flora y fauna.`} id={'4sa'} />
            <ConsultoryItem text={'Planes de Gestión Integral De Residuos Sólidos - PGRIS'} description={`Elaboramos los objetivos, metas, programas, proyectos, actividades y definición de recursos para el manejo de los residuos sólidos municipales, distritales y/o regionales, de acuerdo con los lineamientos de la regulación vigente.`} id={'5sa'} />
            <ConsultoryItem text={'Programas de Uso Eficiente Y Ahorro Del Agua - PUEAA'} description={`Elaboramos los proyectos, programas y acciones para el uso eficiente y ahorro del agua asociadas a la prestación de los servicios públicos de acueducto y alcantarillado con el fin de optimizar el recurso hídrico y contribuir en su sostenibilidad.`} id={'6sa'} />
            <ConsultoryItem text={'Caracterización de Residuos'} description={`Realizamos caracterización de residuos sólidos mediante la recolección de muestras representativas de los residuos generados por los usuarios del servicio público de aseo, los cuales se identifican y cuantifican como insumos para el análisis de comportamiento de consumo y posterior manejo de los residuos sólidos a nivel local y/o regional.`} extraClass={'grid__row__full'} id={'7sa'} />
        </div>
    )
}

const ConsultoryItem = ({ text, id, extraClass, description }) => {

    const [openContent, setOpenContent] = useState(false)

    const updateModal = () => {
        setOpenContent(!openContent)
    }

    return (
        <>
            <motion.div layoutId={id} whileHover={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }} className={`content__grid ${extraClass}`} onClick={updateModal}>
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
                        <motion.div className="modal__body" style={{ whiteSpace: 'pre-line' }}>
                            {description}
                        </motion.div>
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}
