import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'


export default function Header() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false)
    const toggleActive = () => setIsActive(!isActive)
    const closeNavbar = () => setIsActive(false);

    return (
        <header>
            <div className='header-logo-container'>
                <NavLink to='/' className='logo-link'>spa</NavLink>
                <div className="mobile-icons">
                    {!isActive ?
                        <svg width="35" height="35" viewBox="0 0 61 35" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleActive}>
                            <path d="M3 2.5H58" stroke="#BAC67F" strokeWidth="5" strokeLinecap="round" />
                            <path d="M3 17.5H58" stroke="#BAC67F" strokeWidth="5" strokeLinecap="round" />
                            <path d="M3 32.5H58" stroke="#BAC67F" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                        :
                        <svg width="35" height="35" viewBox="0 0 54 45" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleActive}>
                            <path d="M7.80371 41.8909L46.6946 3" stroke="#BAC67F" strokeWidth="5" strokeLinecap="round" />
                            <path d="M3 14L51.4974 42" stroke="#BAC67F" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    }
                </div>
            </div>
            <div className={`header-navbar-container ${isActive ? 'active' : ''}`}>
                <Navbar closeNavbar={closeNavbar} />
                <div className='header-info-container'>
                    <button className='header-btn btn-primary btn-book' onClick={() => navigate('/appointment')}>
                        <Link to="/appointment">book now</Link>
                    </button>
                    <div className="header-info">
                        <p className='small-text'>Mo - Su 8am - 8pm</p>
                        <p>0826 9328 2800</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
