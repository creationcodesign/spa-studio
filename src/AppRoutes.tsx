import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Therapists from './pages/Therapists'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/therapists' element={<Therapists />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}