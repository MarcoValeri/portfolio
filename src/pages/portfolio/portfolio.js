import React from 'react';

// Components
import Header from '../../components/header/header';
import ElasticTitle from '../../components/elastic-title/elastic-title';
import Footer from '../../components/footer/footer';

// Import style file
import './portfolio.scss';

const Portfolio = () => {
    return (
        <div className="portfolio-grid-container">
            <Header />
            <section className="portfolio-title">
                <ElasticTitle title="portfolio" />
            </section>
            <main>
                <section className="portfolio-project">
                    <a href="" target="_blank">
                        <img className="portfolio-project-img" src="https://viaggin.com/wp-content/uploads/cielo-di-londra.jpg" alt="" />
                    </a>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Portfolio;