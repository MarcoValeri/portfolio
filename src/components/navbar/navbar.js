import React from 'react';
import { Link } from 'react-router-dom';

// Import style file
import './navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-menu-toggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li>About Me</li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;