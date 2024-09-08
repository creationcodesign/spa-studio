import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink to='/services'>services</NavLink>
            <NavLink to='/therapists'>therapists</NavLink>
            <NavLink to='/about'>about</NavLink>
            <NavLink to='/contact'>contact</NavLink>
        </nav>
    )
}
