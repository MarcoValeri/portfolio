import React from 'react';

// Components
import Header from '../../components/header/header';
import Bars from '../../components/bars/bars';
import Footer from '../../components/footer/footer';

// Import style
import './about.scss';

const About = () => {
    return (
        <div className="about-grid-container">
            <Header />
            <Bars />
            <main className="about-main">
                <section className="about-main-container">
                    <h2>Hi and welcome</h2>
                    <h3>My name is Marco</h3>
                    <p>
                    I was born in 1984 in Rome, Italy.
                    <br />
                    <br />
                    When I was 20 years old I started to work as an SEO Specialist and Content Creator in Rome.
                    <br />
                    <br />
                    My life changed in 2015, when I moved to London with my beautiful girlfriend and our crazy cat. It has been a life changing experience. 
                    London is an incredible city, and I was lucky enough to meet people from all over the world - it has opened my eyes, allowing me to listen to thousands of stories.
                    <br />
                    <br />
                    I’ve always been passionate about the world and extremely curious. 
                    In 2016 I decided to combine my SEO and writing skills with my love for traveling and exploring, and decided to open a Travel Magazine that has reached 300k users in only a few years.
                    <br />
                    <br />
                    Managing a website on my own, gave me the chance to fully understand how important programming languages are to create, and maintain, a stable, creative business online.
                    <br />
                    <br />
                    One year later I won a Google Internship with Udacity in Programming Languages where I studied the basics of this field: HTML5, CSS3 and JavaScript.
                    <br />
                    <br />
                    In 2018 I was completely in love with programming languages, therefore, decided to improve my skills as a Web Developer.
                    Little did I know that in 2021 I would have graduated from  the Birkbeck University of London in Computer Science.
                    <br />
                    <br />
                    In these past years I specialised in Front End Development with HTML5, CSS3, SASS, JavaScript and React, opting for PHP and MySQL for Back End Development.
                    <br />
                    <br />
                    Nowadays, these technologies, combined with my SEO background, give me the skills to work through any kind of projects.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default About;