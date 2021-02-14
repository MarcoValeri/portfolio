import React from 'react';

// Import style file
import './elastic-title.scss';

const ElasticTitle = ({ title }) => {
    return (
        <h2 className="elastic-title">{ title }</h2>
    )
}

export default ElasticTitle;