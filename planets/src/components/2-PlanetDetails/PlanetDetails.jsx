import React from 'react';
import './PlanetDetails.css';

const PlanetDetails = ({ data, path }) => {

    let content = "";

    switch (path) {
        case 'Overview':
            content = data.overview?.content;
            break;
        case 'Internal Structure':
            content = data.structure?.content;
            break;
        case 'Surface Geology':
            content = data.geology?.content;
            break;
        default:
            content = data.overview?.content;
    }

    return (
        <div className='planetDetailsContainer'>

            <h1>{data.name}</h1>

            <p>{content}</p>
            <div className='wikiSource'>

                <p> <span>Source:</span> <a target='_blank' href={`${data.structure?.source}`}>Wikipedia</a></p>

                <a target='_blank' href={`${data.structure?.source}`}>
                    <img src="./assets/icon-source.svg" alt="" width="12" height="12" />
                </a>

            </div>

        </div>
    );
}

export default PlanetDetails;