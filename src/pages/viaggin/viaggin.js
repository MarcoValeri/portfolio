import React from 'react';

// Components
import Header from '../../components/header/header';
import ElasticTitle from '../../components/elastic-title/elastic-title';

// Import style file
import './viaggin.scss';

const Viaggin = () => {

    return (
        <div className="viaggin__grid-container">
            <Header />
            <section className="viaggin__title">
                <ElasticTitle title="ViaggIn Project" />
            </section>
            <main className="viaggin__main">
                <section className="viaggin__content-grid-container">
                    <section className="viaggin__paragraph-one">1</section>
                    <section className="viaggin__paragraph-two">2</section>
                    <section className="viaggin__paragraph-three">3</section>
                    <section className="viaggin__paragraph-four">4</section>
                    <section className="viaggin__paragraph-five">5</section>
                </section>
            </main>
        </div>
    )

}

export default Viaggin;