import CV from "./assets/CV.webp";
import countryInfo from "./assets/countryinfo.webp";
import weatherApp from "./assets/weather_app.webp";
import chatAway from "./assets/ChatAway.jpg"

 const projects = [
    {
        _id: 0,
        src: chatAway,
        link: 'link',
        sourceLink: 'https://github.com/EmilLM/ChatApp',
        altText: 'ChatAway image',
        title: 'ChatAway',
        description: 'Slack-type chat app with fully built back-end (work in progress).',
        stack: 'Next.js - Express - MongoDB',
        sectionTitle: 'Projects'

    }, 
    {
        _id: 1,
        src: CV,
        link: 'https://emilscv.web.app',
        sourceLink: 'https://github.com/EmilLM/My-CV',
        altText: 'CV image',
        title: 'CV',
        description: 'Static site of a short and long version of my resume.',
        stack: 'Vue - Bootstrap4'

    },
    {
        _id: 2,
        src: countryInfo,
        link: 'https://emillm.github.io',
        sourceLink: 'https://github.com/EmilLM/CountryInfo',
        altText: 'CountryInfo app',
        title: 'CountryInfo',
        description: 'Socio-economic statistics about countries.',
        stack: 'React - Scss - reactstrap'
    },
    {
        _id: 3,
        src: weatherApp,
        link: 'https://vremeacl.web.app',
        sourceLink: 'https://github.com/EmilLM/Weather-app',
        altText: 'Weather App image',
        title: 'Weather App',
        description: "Weather app for all cities. Coder's Lab project. (requires revision).",
        stack: 'jQuery - Ajax - Scss'
    }
];

 export default projects;