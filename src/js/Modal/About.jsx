import React from 'react';

export default function About() {
    console.log('render');
    return (
        <>
            <h5>Main hub for all my front-end projects:</h5>
            <ol>
                <li>Landing page developed in create-react-app: React, Sass, Bootstrap 4.</li>
                <li>CountryInfo developed in Coder's lab boilerplate: React, Sass, manual RWD. Same app
                    with <a href='https://countrynfo.web.app' target="_blank"  rel="noopener noreferrer">more animations</a>.</li>
                <li>Weather App: jQuery, Ajax, Sass. Started as Coder's lab workshop, finished individually.</li>
                <li>Website CV: Vue, Bootstrap 4, Sass. Made as a way to practice Vue.</li>
            </ol>
        </>
    )
}