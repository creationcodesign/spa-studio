import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header>
            <NavLink to='/' className='logo-link'>spa</NavLink>
            <div className='header-right'>
                <Navbar />
                <button className='header-btn btn-primary'>
                    <span>book now</span>
                </button>
                <div className="header-info">
                    <p className='small-text'>Mo - Su 8am - 8pm</p>
                    <p>0826 9328 2800</p>
                </div>
            </div>
        </header>
    )
}
