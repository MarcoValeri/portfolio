import React from 'react';

// Icons
import { FaPhp, FaReact, FaJs, FaSass, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { SiMysql } from 'react-icons/si';

// Components
import Navbar from '../navbar/navbar';

// Import style file
import './header.scss';

const Header = () => {
    return (
       <header>
           <Navbar />
           <section className="header-title">
               <section className="header-title-main">
                   <h1 className="header-title-main-one">Marco Valeri</h1>
                   <h2 className="header-title-main-two">Full Stack Developer</h2>
               </section>
               <section class="header-icons">
                   <IconContext.Provider value={{ className: 'react-icons' }}>
                        <IconContext.Provider value={{ className: 'react-icons react-icons-php'}}>
                            <FaPhp />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'react-icons react-icons-mysql'}}>
                        <SiMysql />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'react-icons react-icons-react'}}>
                            <FaReact />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'react-icons react-icons-js'}}>
                            <FaJs />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'react-icons react-icons-sass'}}>
                            <FaSass />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'react-icons react-icons-css'}}>
                            <FaCss3Alt />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'react-icons react-icons-html'}}>
                            <FaHtml5 />
                        </IconContext.Provider>
                   </IconContext.Provider>
                </section>
           </section>
       </header>
    )
}

export default Header;