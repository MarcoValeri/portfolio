import React from 'react';

// Import style file
import './project.scss';

const Project = ({ image, title, description, url}) => {
    return (
        <section className="portfolio-project" style={{ backgroundImage: `url("${image}")` }}>
            <section className="portfolio-project-text">
                <h1>{title}</h1>
                <p>{description}</p>
                <button><a href={url} target="_blank">Check it out</a></button>
            </section>
        </section>
    )
}

export default Project;