import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { About } from '../Pages/About/About'
import { Services } from '../Pages/Services/Services'
import { Contact } from '../Pages/Contact/Contact'
import { Home } from '../Pages/Home/Home'
import { Privacy } from '../Pages/Privacy/Privacy'
import { Footer } from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'

export const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/nosotros' element={<About />} />
                <Route path='/contacto' element={<Contact />} />
                <Route path='/servicios' element={<Services />} />
                <Route path='/politica-privacidad' element={<Privacy />} />

            </Routes>
            <Footer />

        </BrowserRouter>
    )
}
