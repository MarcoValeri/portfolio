import React from 'react';

// Components
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// Import style
import './about.scss';

const About = () => {
    return (
        <div className="about-grid-container">
            <Header />
            <main className="about-main">
                <section className="about-main-container">
                    <h2>Hi, my name is Marco</h2>
                    <h3>Nice to meet you</h3>
                    <p>
                    I was born in 1984 in Rome, Italy.
                    <br />
                    <br />
                    When I was 20 year old I started to work as an SEO Specialist and Content Creator in Rome.
                    <br />
                    <br />
                    In 2015 I moved to London with my beautiful girlfriend and our crazy cat. It has been an incredible and important year for me.
                    London is an incredible city, I met there people from all over the world, it has opened my eyes and let me know about thousands of stories.
                    <br />
                    <br />
                    So, in 2016 I decided to open a Travel Magazine that has reached 300k users in fews years thanks to my SEO and Content skills.
                    With this experience I understand how important are programming languages to have a stable and creative business online.
                    <br />
                    <br />
                    One year later I won a Google Internship with Udacity in Programming Languages where I studied the basics of this field: HTML5, CSS3 and JavaScript.
                    <br />
                    <br />
                    In 2018 I was completely in love with programming languages so I decided to improve my skills as a Web Developer. 
                    I applied later that year at Birkbeck University of London where in the 2021 I got a Foundation Degree in Computer Science.
                    <br />
                    <br />
                    It has been an incredible experience where I learn everything about programming languages and its environment such as binary text, hexadecimal and octal system, MVC and other paths, OOP, the importance of libraries and frameworks and how to meet responsive Design best practice.
                    <br />
                    <br />
                    In these years I decided to specialize myself in Front End Development with HTML5, CSS3, SASS, JavaScript and React.
                    For Back End Development I decided to master PHP and MySQL.
                    <br />
                    <br />
                    Nowadays these technologies, combined with my SEO background, give me the skills to work through any kind of projects.
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