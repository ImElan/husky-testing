import React from 'react';
import resultItemSprite from './assets/resultItemSprite.svg';

import './ResultItemBox.css';

function ResultItemBox(props) {
    const { icon, modality, finding } = props;

    return (
        <div className="resultItem">
            <div className="resultItem__modalityContainer">
                <svg className="resultItem__modalityImage">
                    <use xlinkHref={`${resultItemSprite}#${icon}`} />
                </svg>
                <p className="resultItem__modality">{modality}</p>
            </div>
            <div className="resultItem__findingContainer">
                <p className="resultItem__finding">{finding}</p>
            </div>
        </div>
    );
}

export default ResultItemBox;
