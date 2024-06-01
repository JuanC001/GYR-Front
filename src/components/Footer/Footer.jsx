import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { LogoAnimated } from "../Logo/Logo"
import './Footer.css'
import { faCopy } from "@fortawesome/free-regular-svg-icons"

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react"

import FooterImg from '../../assets/footer_deco.svg'

export const Footer = () => {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <footer className="footer-container">
      <FooterSvg />
      <div className="footer-content">
        <div className="logo">
          <LogoAnimated />
        </div>
        <div className="contact-area">
          <h3 className="contact-tittle">Contacto</h3>
          <ul className="contact-list">
            <li className="contact-item">+52 55 5555 5555</li>
            <li className="contact-item">+52 55 5555 5555</li>
            <ContactItem email={"info@gestionyresultados.com"} copyToClipboard={copyToClipboard} />
            <ContactItem email={"nuevosnegocios@gestionyresultados.com"} copyToClipboard={copyToClipboard} />
          </ul>
        </div>
      </div>
      <p className="footer-caption">© Copyright 2024 | Gestión y Resultados S.A.S - Política de privacidad</p>
    </footer>
  )
}

const ContactItem = ({ email, copyToClipboard }) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(true)
    copyToClipboard(email)
    setTimeout(() => {
      setIsClicked(false)
    }, 1000)
  }
  return (
    <li className="contact-item">
      <a href={`mailto:${email}`}>{email}</a>
      <button className="copy-button" onClick={handleClick}>
        <AnimatePresence>
          {isClicked &&
            <motion.span initial={{ y: 30, scaleX: 0, opacity: 0 }} animate={{ y: 0, scaleX: 1, opacity: 1 }} exit={{ opacity: 0 }} className="copy-button-label">Copiado en portapapeles!</motion.span>
          }
        </AnimatePresence>
        <FontAwesomeIcon size="xs" icon={faCopy} />
      </button>
    </li>
  )
}

const FooterSvg = () => {
  return (
    <img src={FooterImg} alt="footer decoration" className="svg-decoration" />
  )
}