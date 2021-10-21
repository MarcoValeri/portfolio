import React from 'react';

// Import style file
import './skills.scss';

const Skills = () => {
    return (
        <section className="skills">
            <section className="skills-container">
                <section className="skills-container-developer">
                    <h2 className="skills-container-developer-title">Front-End</h2>
                    <p>
                        JavaScrpt<br />
                        React<br />
                        HTML5<br />
                        CSS3<br />
                        SASS<br />
                        Responsive Design<br />
                        Mobile First<br />
                    </p>
                </section>
                <section className="skills-container-developer">
                    <p>
                        PHP<br />
                        Symfony<br />
                        MySQL<br />
                        APIs<br />
                        Google Cloud<br />
                    </p>
                    <h2 className="skills-container-developer-title">Back End</h2>
                </section>
            </section>
        </section>
    )
}

export default Skills;