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
                <h1>Viaggin</h1>
            </main>
        </div>
    )

}

export default Viaggin;