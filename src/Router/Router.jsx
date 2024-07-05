import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { About } from '../Pages/About/About'
import { Services } from '../Pages/Services/Services'
import { Contact } from '../Pages/Contact/Contact'
import { Home } from '../Pages/Home/Home'
import { Privacy } from '../Pages/Privacy/Privacy'
import { Footer } from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import { useEffect } from 'react'

import { useScroll } from '../hooks/useScroll'
import { Experience } from '../Pages/Experience/Experience'

export const Router = () => {

    const location = useLocation()
    const { scrollToTop } = useScroll()

    useEffect(
        () => {
            scrollToTop()
        },
        [location.pathname]
    )

    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/nosotros' element={<About />} />
                <Route path='/contacto' element={<Contact />} />
                <Route path='/servicios' element={<Services />} />
                <Route path='/politica-privacidad' element={<Privacy />} />
                <Route path='/experiencia' element={<Experience />} />
                <Route path='/*' element={<Navigate to={'/'} />} />

            </Routes>
            <Footer />
        </>
    )
}
