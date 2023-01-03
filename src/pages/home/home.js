import AboutMePreview from '../../components/about-me-preview/about-me-preview';
import CarouselInfinite from '../../components/carousel-infinite-skills/carousel-infinite-skills';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import PortfolioPreview from '../../components/portfolio-preview/portfolio-preview';

import './home.scss';

const Home = () => {

    return (
        <>
            <Header subTitle="Full Stack Developer" />
            <PortfolioPreview />
            <CarouselInfinite />
            <AboutMePreview />
            <Footer />
        </>
    )

}

export default Home;
