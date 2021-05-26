import React from 'react';

// Import style file
import './btn-animated.scss';

const BtnAnimated = ({ url, content }) => {
    return (
        <div className="btn-animated-wrap">
            <a href={url} target="_blank">
                <div className="btn-animated-content">
                    {content}
                </div>
            </a>
        </div>
    )
}

export default BtnAnimated;