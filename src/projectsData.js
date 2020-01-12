import CV from "./assets/CV.webp";
import countryInfo from "./assets/countryinfo.webp";
import weatherApp from "./assets/weather_app.webp";

 const projects = [
    {
        id: 1,
        src: CV,
        link: 'https://emilscv.web.app',
        altText: 'CV image',
        caption: 'CV Website',
        description: 'Made with: Vue, Bootstrap'

    },
    {
        id: 2,
        src: countryInfo,
        link: 'https://emillm.github.io',
        altText: 'CountryInfo app',
        caption: 'CountryInfo',
        description: 'Made with: React, Sass, ES6'
    },
    {
        id: 3,
        src: weatherApp,
        link: 'https://vremeacl.web.app',
        altText: 'Weather App image',
        caption: 'Weather App' ,
        description: 'Made with: jQuery, Ajax'
    }
];

 export default projects;