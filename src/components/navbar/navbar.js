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
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;