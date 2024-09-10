import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Therapists from './pages/Therapists'
import Services from './pages/Services'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/therapists' element={<Therapists />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}