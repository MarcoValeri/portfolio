import React from 'react';

// Components
import BtnAnimated from '../btn-animated/btn-animated';

// Import style file
import './project.scss';

const Project = ({ image, title, description, url, content}) => {
    return (
        <section className="portfolio-project" style={{ backgroundImage: `url("${image}")` }}>
            <section className="portfolio-project-text">
                <h1>{title}</h1>
                <p>{description}</p>
                <BtnAnimated url={url} content={content} />
            </section>
        </section>
    )
}

export default Project;