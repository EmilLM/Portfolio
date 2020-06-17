import CV from "./assets/CV.webp";
import countryInfo from "./assets/countryinfo.webp";
import weatherApp from "./assets/weather_app.webp";
import chatAway from "./assets/ChatAway.jpg"

 const projects = [
    {
        _id: 0,
        src: chatAway,
        link: 'link',
        altText: 'ChatAway image',
        title: 'ChatAway',
        description: 'Slack-type chat app',
        stack: 'Made with: Next.js, Express, MongoDB'

    }, 
    {
        _id: 1,
        src: CV,
        link: 'https://emilscv.web.app',
        altText: 'CV image',
        title: 'Curriculum Vitae',
        description: 'CV website',
        stack: 'Made with: Vue, Bootstrap4'

    },
    {
        _id: 2,
        src: countryInfo,
        link: 'https://emillm.github.io',
        altText: 'CountryInfo app',
        title: 'CountryInfo',
        description: 'Socio-economic country statistics',
        stack: 'Made with: React, Scss, reactstrap'
    },
    {
        _id: 3,
        src: weatherApp,
        link: 'https://vremeacl.web.app',
        altText: 'Weather App image',
        title: 'Weather App',
        description: 'Weather app for all cities',
        stack: 'Made with: jQuery, Ajax, Scss'
    }
];

 export default projects;