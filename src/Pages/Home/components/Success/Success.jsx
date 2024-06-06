import { motion } from 'framer-motion'
import './Success.css'

import SuccessImage from '../../../../assets/home/images/success_image.png'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

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

  const itemsRefs = useRef(pilaresExito.map(() => React.createRef()))

  const handleClose = (index) => {
    itemsRefs.current.forEach((item, i) => {
      if (item.current && i !== index) {
        item.current.close()
      }
    })
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
        <motion.div layout className="accordeon">
          {pilaresExito.map((pilar, index) => (
            <AccordeonItem
              key={index}
              ref={itemsRefs.current[index]}
              title={pilar.title} content={pilar.content}
              id={index} open={index === 0}
              handleClose={handleClose} />
          ))}
        </motion.div>
        <motion.img src={SuccessImage} alt="Success" />
      </div>

    </div>
  )
}

// eslint-disable-next-line react/display-name
const AccordeonItem = forwardRef(({ title, content, open, handleClose, index }, ref) => {

  const [isOpen, setIsOpen] = useState(open)
  const handleOpen = () => {
    handleClose(index)
    setIsOpen(true)
  }

  useImperativeHandle(ref, () => ({
    close: () => setIsOpen(false),
  }))



  return (
    <motion.div className='accordeon-item' >
      <div className="accordeon-tittle" onClick={handleOpen}>
        <h3 onClick={handleOpen}>{title}</h3>
      </div>
      <motion.div layout>
        {isOpen && <motion.div initial={{ opacity: 0, scaleY: 0, transformOrigin: 0 }} animate={{ opacity: 1, scaleY: 1 }} className='accordeon-content'>
          <p>{content}</p>
        </motion.div>}
      </motion.div>

    </motion.div>
  )
})
