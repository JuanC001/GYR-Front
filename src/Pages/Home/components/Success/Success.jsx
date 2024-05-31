import { motion } from 'framer-motion'
import './Success.css'

import SuccessImage from '../../../../assets/home/images/success_image.png'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const pilaresExito = [
  {
    id: 0,
    title: 'Respeto',
    content: 'Valoramos y reconocemos la dignidad de cada individuo, fomentando un ambiente de inclusión y diversidad.'
  },

  {
    id: 1,
    title: 'Responsabilidad',
    content: 'Cumplimos con nuestros compromisos y asumimos las consecuencias de nuestras acciones con integridad.'
  },
  {
    id: 2,
    title: 'Profesionalidad',
    content: 'Mantenemos altos estándares de excelencia y ética en todos los aspectos de nuestro trabajo.'
  },

  {
    id: 3,
    title: 'Laboriosidad',
    content: 'Nos dedicamos con esmero y perseverancia, asegurando el esfuerzo y la dedicación en cada tarea.'
  },

  {
    id: 4,
    title: 'Confianza',
    content: 'Construimos relaciones sólidas y transparentes, basadas en la honestidad y la fiabilidad.'
  },

  {
    id: 5,
    title: 'Lealtad',
    content: 'Somos fieles a nuestros principios, colaboradores y clientes, manteniendo un compromiso duradero'
  }

]

export const Success = () => {

  const ref1 = useRef()

  const handleClose = () => {
    ref1.current.close()
  }


  return (
    <div className='container-success'>

      <div className="header-success">

        <h2>Los Pilares de <span>Nuestro Éxito</span></h2>
        <p>
          En Gestión y Resultados hay un equipo apasionado y dedicador, alineado con valores y ética de trabajo. Estas son guías fundamentales que dan forma a nuestra cultura y nos ayudan a enfrentar desafíos juntos.
        </p>

      </div>

      <div className="content-success">
        <div className="accordeon">
          {pilaresExito.map(pilar => (
            <AccordeonItem key={pilar.id} title={pilar.title} content={pilar.content} open={false} closeAll={handleClose} ref={ref1} />
          ))}
        </div>
        <img src={SuccessImage} alt="Success" />
      </div>

    </div>
  )
}

// eslint-disable-next-line react/display-name
const AccordeonItem = forwardRef((props, ref) => {
  const { title, content, open, closeAll } = props

  useImperativeHandle(ref, () => ({
    close: () => setIsOpen(false),
  }))

  const [isOpen, setIsOpen] = useState(open)
  const handleOpen = () => {
    closeAll()
    setIsOpen(!isOpen)
  }

  return (
    <motion.div layout style={{ height: isOpen ? "150px" : "50px" }} className='accordeon-item'>
      <div className="accordeon-tittle" >
        <h3 onClick={handleOpen}>{title}</h3>
      </div>

      <motion.div layout className='accordeon-content'>
        <p>{content}</p>
      </motion.div>

    </motion.div>
  )
})
