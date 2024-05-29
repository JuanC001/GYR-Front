import './NavBar.css'
import IconMenu from '../../assets/icons/menu-mobile-button.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Logo } from '../Logo/Logo'

import {motion} from 'framer-motion'

export const NavBar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleClose = () => {
    setShowMobileMenu(false)
  }

  useEffect(() => {

    //to know the scroll position to css property
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.querySelector('nav').classList.add('on-top')
      } else {
        document.querySelector('nav').classList.remove('on-top')
      }
    }

    window.addEventListener('scroll', handleScroll)

  }, [])

  return (
    <>
      {showMobileMenu && <div className="mobile-background" onClick={handleClose}></div>}
      {showMobileMenu && <MobileNavBar handleClose={handleClose} />}
      <nav>
        <ul>
          <li className='logo'>
            <Logo />
          </li>
          <div className="list">
            <li className='list-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='list-item'>
              <Link to='/nosotros'>Nosotros</Link>
            </li>
            <li className='list-item'>
              <Link to='/experiencia'>Experiencia</Link>
            </li>
            <li className='list-item'>
              <Link to='/servicios'>Servicios</Link>
            </li>
            <li className='list-item'>
              <Link to='/contacto'>Contacto</Link>
            </li>
          </div>
          <li className='list-mobile-button'>
            <button className='button-mobile' onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <img src={IconMenu} alt='Icono de menú' />
            </button>
          </li>

        </ul>

      </nav>

    </>
  )
}

const MobileNavBar = ({handleClose}) => {
  return (
    <motion.div initial={{scaleX: 0}} animate={{scaleX: 1}} className="mobile-modal">
      <ul className='mobile-list'>
        <li className='list-item'>
          <Link onClick={handleClose} to='/'>Inicio</Link>
        </li>
        <li className='list-item'>
          <Link onClick={handleClose} to='/nosotros'>Nosotros</Link>
        </li>
        <li className='list-item'>
          <Link onClick={handleClose} to='/servicios'>Servicios</Link>
        </li>
        <li className='list-item'>
          <Link onClick={handleClose} to='/contacto'>Contacto</Link>
        </li>
        <li className='list-item'>
          <Link onClick={handleClose} to='/politica-privacidad'>Política de privacidad</Link>
        </li>
      </ul>
    </motion.div>
  )
}
