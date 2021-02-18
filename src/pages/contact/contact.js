import React from 'react';

// Components
import Header from '../../components/header/header';
import Bars from '../../components/bars/bars';
import Footer from '../../components/footer/footer';

// Import style file
import './contact.scss';

const Contact = () => {
    return (
        <div className="contact-grid-container">
            <Header />
            <Bars />
            <main className="contact-main">
                <section className="contact-main-container">
                    <h2>Contact</h2>
                    <p>
                        I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them.
                        <br />
                        I want to bring my skills as Full Stack Developer and SEO and work together to solve real business-problems.
                        <br />
                        Feel free to reach out through any platforms bellow:
                    </p>
                    <ul>
                        <li>info@marcovaleri.net</li>
                        <li><a href="https://twitter.com/MarkoValeri" target="_blank">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/valeri-marco/" target="_blank">LinkedIn</a></li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Contact;