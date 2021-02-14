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
                        React<br />
                        JavaScrpt<br />
                        Boostrap<br />
                        SASS<br />
                        CSS3<br />
                        HTML5<br />
                        Responsive Design<br />
                    </p>
                </section>
                <section className="skills-container-developer">
                    <p>
                        PHP<br />
                        MySQL<br />
                        APIs<br />
                        Google Cloud<br />
                        Firebase<br />
                    </p>
                    <h2 className="skills-container-developer-title">Back End</h2>
                </section>
            </section>
        </section>
    )
}

export default Skills;