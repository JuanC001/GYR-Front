import './NavBar.css'
import IconMenu from '../../assets/icons/menu-mobile-button.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Logo } from '../Logo/Logo'

export const NavBar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

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
      {showMobileMenu && <div className="background-open" onClick={() => setShowMobileMenu(false)}></div>}
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
              <Link to='/servicios'>Servicios</Link>
            </li>
            <li className='list-item'>
              <Link to='/contacto'>Contacto</Link>
            </li>
            <li className='list-item'>
              <Link to='/politica-privacidad'>Política de privacidad</Link>
            </li>
          </div>
          <li className='list-button-mobile'>
            <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <img src={IconMenu} alt='Icono de menú' />
            </button>
          </li>

        </ul>
        {
          showMobileMenu && <MobileNavBar />
        }
      </nav>
    </>
  )
}

const MobileNavBar = () => {
  return (
    <motion.ul initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className="list-mobile">
      <li className='list-item'>
        <Link to='/'>Home</Link>
      </li>
      <li className='list-item'>
        <Link to='/nosotros'>Nosotros</Link>
      </li>
      <li className='list-item'>
        <Link to='/servicios'>Servicios</Link>
      </li>
      <li className='list-item'>
        <Link to='/contacto'>Contacto</Link>
      </li>
      <li className='list-item'>
        <Link to='/politica-privacidad'>Política de privacidad</Link>
      </li>
    </motion.ul>
  )
}
