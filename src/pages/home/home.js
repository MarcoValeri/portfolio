import React from 'react';

// Components
import Header from '../../components/header/header';
import Bars from '../../components/bars/bars';
import Skills from '../../components/skills/skills';
import Footer from '../../components/footer/footer';

// Import style file
import './home.scss';

const Home = () => {
    return (
        <div className="home-grid-container">
            <Header />
            <Bars />
            <Skills />
            <Footer />
        </div>
    )
}

export default Home;