// Import Icons
import { IconContext } from 'react-icons/lib';
import { FaNodeJs, FaReact, FaPhp, FaSymfony, FaSass, FaCss3Alt, FaHtml5, FaWordpressSimple, FaGithub } from 'react-icons/fa';
import { SiMysql, SiJavascript } from 'react-icons/si';

// Import style file
import './carousel-infinite-skills.scss';

/**
 * Create an array where to store the icons
 */
 const skillsIcons = [
    <IconContext.Provider value={{ className: 'icon icon__javascript' }}>
        <SiJavascript />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__node' }}>
        <FaNodeJs />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__react' }}>
        <FaReact />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__php' }}>
        <FaPhp />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__symfony' }}>
        <FaSymfony />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__mysql' }}>
        <SiMysql />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__sass' }}>
        <FaSass />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__css' }}>
        <FaCss3Alt />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__html' }}>
        <FaHtml5 />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__github' }}>
        <FaGithub />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__wordpress' }}>
        <FaWordpressSimple />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__javascript' }}>
        <SiJavascript />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__node' }}>
        <FaNodeJs />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__react' }}>
        <FaReact />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__php' }}>
        <FaPhp />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__symfony' }}>
        <FaSymfony />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__mysql' }}>
        <SiMysql />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__sass' }}>
        <FaSass />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__css' }}>
        <FaCss3Alt />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__html' }}>
        <FaHtml5 />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__github' }}>
        <FaGithub />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__wordpress' }}>
        <FaWordpressSimple />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__javascript' }}>
        <SiJavascript />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__node' }}>
        <FaNodeJs />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__react' }}>
        <FaReact />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__php' }}>
        <FaPhp />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__symfony' }}>
        <FaSymfony />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__mysql' }}>
        <SiMysql />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__sass' }}>
        <FaSass />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__css' }}>
        <FaCss3Alt />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__html' }}>
        <FaHtml5 />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__github' }}>
        <FaGithub />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__wordpress' }}>
        <FaWordpressSimple />
    </IconContext.Provider>,
];

const CarouselInfinite = () => {

    const getCarouseItems = (items) => {

        let output = [];

        items.forEach((item, index) => {
            output.push(
                <div key={index} className="carousel-infinite__item">
                    {item}
                </div>
                );
        });

        return output;
    }

    return (
        <section className="carousel-infinite">
            <div className="carousel-infinite__wrapper">
                {getCarouseItems(skillsIcons)}
            </div>
        </section>
    )
}


export default CarouselInfinite;
