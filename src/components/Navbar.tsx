import { NavLink } from 'react-router-dom'

export default function Navbar({ closeNavbar }: { closeNavbar: () => void }) {
    return (
        <nav>
            <NavLink to='/services' onClick={closeNavbar}>services</NavLink>
            <NavLink to='/therapists' onClick={closeNavbar}>therapists</NavLink>
            <NavLink to='/about' onClick={closeNavbar}>about</NavLink>
            <NavLink to='/contact' onClick={closeNavbar}>contact</NavLink>
        </nav>
    )
}
