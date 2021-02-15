import React from 'react';

// Components
import Header from '../../components/header/header';
import ElasticTitle from '../../components/elastic-title/elastic-title';
import Project from '../../components/project/project';
import Footer from '../../components/footer/footer';

// Import style file
import './portfolio.scss';

// Import images
const quickbooks = '/images/quickbook.jpg';

const Portfolio = () => {

    return (
        <div className="portfolio-grid-container">
            <Header />
            <section className="portfolio-title">
                <ElasticTitle title="portfolio" />
            </section>
            <main>
                <Project 
                    image={`${quickbooks}`}
                    title={"Quickbooks"}
                    description={"Quickbooks simulator made with React"}
                    url={"https://marcovaleri.github.io/quickbooks-calculator/"}
                />
                {/* <section className="portfolio-project" style={{ backgroundImage: `url("https://viaggin.com/wp-content/uploads/cielo-di-londra.jpg")` }}>
                    <section className="portfolio-project-text">
                        <h1>Project</h1>
                        <p>Description</p>
                        <button>Check it out</button>
                    </section>
                </section> */}
            </main>
            <Footer />
        </div>
    )
}

export default Portfolio;