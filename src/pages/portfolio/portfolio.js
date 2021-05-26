import React from 'react';

// Components
import Header from '../../components/header/header';
import ElasticTitle from '../../components/elastic-title/elastic-title';
import Squares from '../../components/squares/squares';
import Project from '../../components/project/project';
import Footer from '../../components/footer/footer';

// Import style file
import './portfolio.scss';

// Import images
const quickbooks = '/images/quickbook.jpg'; // Photo by SpaceX on Unsplash
const nasagallery = '/images/nasagallery.jpg'; //Photo by Joost Crop on Unsplash
const viaggin = '/images/viaggin.jpg'; // Photo by Jack B on Unsplash
const wordscounter = '/images/words-counter.jpg'; // Photo by Csabi Elter on Unsplash
const coltellistrumenticucina = '/images/coltellistrumenticucina.jpg'; // Photo by Todd Quackenbush on Unsplash
const treatMigraineNaturally = 'images/treat-migraine-naturally.jpg'; // Photo by Unsplash

const Portfolio = () => {

    return (
        <div className="portfolio-grid-container">
            <Header />
            <section className="portfolio-title">
                <ElasticTitle title="portfolio" />
            </section>
            <Squares />
            <main>
                <Project 
                    image={`${treatMigraineNaturally}`}
                    title={"Migraine"}
                    description={"Web App with PHP, MySQL, SASS, CSS3 and HTML5"}
                    url={"https://treatmigrainenaturally.co.uk/"}
                    content={"Check it out"}
                />
                <section className="portfolio-project" style={{ backgroundImage: `url("${viaggin}")` }}>
                    <section className="portfolio-project-text">
                        <h1>ViaggIn</h1>
                        <p>Travel Magazine made with WordPress, PHP, MySql and a SEO strategy</p>
                        <h4>Check it out on<br /> ViaggIn.com</h4>
                    </section>
                </section>
                <Project 
                    image={`${wordscounter}`}
                    title={"Words Counter"}
                    description={"Words Counter made with React"}
                    url={"https://words-counter-302018.nw.r.appspot.com/"}
                    content={"Check it out"}
                />
                <Project 
                    image={`${nasagallery}`}
                    title={"NASA Gallery"}
                    description={"NASA Gallery made with React and NASA's APIs"}
                    url={"https://marcovaleri.github.io/nasa-gallery/#/"}
                    content={"Check it out"}
                />
                <section className="portfolio-project" style={{ backgroundImage: `url("${coltellistrumenticucina}")` }}>
                    <section className="portfolio-project-text">
                        <h1>Kitchen CSC</h1>
                        <p>Food Tools Magazine made with WordPress, PHP, MySql and a SEO strategy</p>
                        <h4>Check it out on<br /> coltellistrumenticucina.com</h4>
                    </section>
                </section>
                <Project 
                    image={`${quickbooks}`}
                    title={"Quickbooks"}
                    description={"Quickbooks simulator made with React"}
                    url={"https://marcovaleri.github.io/quickbooks-calculator/"}
                    content={"Check it out"}
                />
            </main>
            <Footer />
        </div>
    )
}

export default Portfolio;