import { motion } from 'framer-motion'
import './Success.css'

import SuccessImage from '../../../../assets/images/success_image.jpg'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

export const Success = () => {

  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()

  const handleClose = () => {
    console.log('close')
    ref1.current.close()
    ref2.current.close()
    ref3.current.close()
    ref4.current.close()
  }


  return (
    <div className='container-success'>

      <div className="header-success">

        <h2>Los Pilares de <span>Nuestro Éxito</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloremque quae quisquam assumenda omnis itaque neque, esse deleniti molestias cupiditate non quibusdam earum, eligendi et veritatis. Incidunt voluptates odio veniam ad, necessitatibus voluptatum soluta numquam! Nihil fuga sunt in sapiente.</p>

      </div>

      <div className="content-success">
        <div className="accordeon">
          <AccordeonItem ref={ref1} closeAll={handleClose} title={'Respeto'} open={true} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloremque quae quisquam assumenda omnis itaque neque, esse deleniti molestias cupiditate non quibusdam earum, eligendi et veritatis. Incidunt voluptates odio veniam ad, necessitatibus voluptatum soluta numquam! Nihil fuga sunt in sapiente.'} />
          <AccordeonItem ref={ref2} closeAll={handleClose} title={'Responsabilidad'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloremque quae quisquam assumenda omnis itaque neque, esse deleniti molestias cupiditate non quibusdam earum, eligendi et veritatis. Incidunt voluptates odio veniam ad, necessitatibus voluptatum soluta numquam! Nihil fuga sunt in sapiente.'} />
          <AccordeonItem ref={ref3} closeAll={handleClose} title={'Honestidad'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloremque quae quisquam assumenda omnis itaque neque, esse deleniti molestias cupiditate non quibusdam earum, eligendi et veritatis. Incidunt voluptates odio veniam ad, necessitatibus voluptatum soluta numquam! Nihil fuga sunt in sapiente.'} />
          <AccordeonItem ref={ref4} closeAll={handleClose} title={'Compromiso'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloremque quae quisquam assumenda omnis itaque neque, esse deleniti molestias cupiditate non quibusdam earum, eligendi et veritatis. Incidunt voluptates odio veniam ad, necessitatibus voluptatum soluta numquam! Nihil fuga sunt in sapiente.'} />
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
    <motion.div layout style={{ height: isOpen ? "200px" : "30px" }} className='accordeon-item'>
      <div className="accordeon-tittle" onClick={handleOpen}>
        <h3>{title}</h3>
      </div>

      <motion.div layout className='accordeon-content'>
        <p>{content}</p>
      </motion.div>

    </motion.div>
  )
})
