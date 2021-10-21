import React from 'react';

// Incons
import { IconContext } from 'react-icons';
import { FaGithub, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

// Import style file
import './footer.scss';

const Footer = () => {

    // Set variables for print out the current year
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <a href="https://www.linkedin.com/in/valeri-marco/" target="_blank">
                <IconContext.Provider value={{ className: 'react-icons-linkedin' }}>
                    <FaLinkedin />
                </IconContext.Provider>
            </a>
            <a href="https://github.com/MarcoValeri" target="_blank">
                <IconContext.Provider value={{ className: 'react-icons-github' }}>
                    <FaGithub />
                </IconContext.Provider>
            </a>
            <a href="https://twitter.com/MarkoValeri" target="_blank">
                <IconContext.Provider value={{ className: 'react-icons-twitter' }}>
                    <FaTwitterSquare />
                </IconContext.Provider>
            </a>
            <p>Made with <span className="footer-heart">&hearts;</span> in London by Marco Valeri - &copy; {year} - All rights reserved</p>
        </footer>
    )
}

export default Footer;