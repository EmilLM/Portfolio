import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import projects from "../projectsData"

export default function Content()  {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    //Array of projects
    const slides = projects.map(project => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={project.id}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.src} alt={project.altText} />
                </a>
                <CarouselCaption  captionHeader={project.caption} captionText={project.description} />
            </CarouselItem>
        );
    });

    return (
        <main>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className="carousel-fade"
            >
                <CarouselIndicators items={projects} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                {/*<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />*/}
                {/*<CarouselControl direction="next" directionText="Next" onClickHandler={next} />*/}
            </Carousel>
        </main>
    );
};


// export default class Content extends React.Component {
//     render() {
//         return (
//             <main>
//                 <div id="appCarousel" className="carousel slide carousel-fade container" data-ride="carousel">
//                     <ol className="carousel-indicators">
//                         <li data-target="#appCarousel" data-slide-to="0" className="active bg-primary"> </li>
//                         <li data-target="#appCarousel" data-slide-to="1" className="bg-primary"> </li>
//                         <li data-target="#appCarousel" data-slide-to="2" className="bg-primary"> </li>
//                     </ol>
//                     <div className="carousel-inner">
//                         <div className="carousel-item active">
//                             <a href="https://emilscv.web.app" target="_blank" rel="noopener noreferrer">
//                                 <img src={CV} alt="CV"/>
//                             </a>
//                             <div className="carousel-caption">
//                                 <h5>CV Website</h5>
//                                 <p>Made with: Vue, Bootstrap</p>
//                             </div>
//                         </div>
//                         <div className="carousel-item">
//                             <a href={'https://emillm.github.io'} target='_blank' rel="noopener noreferrer">
//                                 <img src={countryInfo} alt="CountryInfo App"/>
//                             </a>
//                             <div className="carousel-caption">
//                                 <h5>CountryInfo</h5>
//                                 <p>Made with: React, Sass, ES6</p>
//                             </div>
//                         </div>
//                         <div className="carousel-item">
//                             <a href='https://vremeacl.web.app' target="_blank" rel="noopener noreferrer">
//                                 <img src={weatherApp} alt='Weather App' />
//                             </a>
//                                 <div className="carousel-caption">
//                                     <h5>Weather App</h5>
//                                     <p>Made with: jQuery, Ajax</p>
//                                 </div>
//                         </div>
//                     </div>
//                     {/*<a className="carousel-control-prev" href="#appCarousel" role="button"*/}
//                     {/*   data-slide="prev">*/}
//                     {/*    <span><i className="fa fa-chevron-left fa-lg" aria-hidden="true"> </i></span>*/}
//                     {/*    <span className="sr-only">Previous</span>*/}
//                     {/*</a>*/}
//                     {/*<a className="carousel-control-next" href="#appCarousel" role="button"*/}
//                     {/*   data-slide="next">*/}
//                     {/*    <span><i className="fa fa-chevron-right fa-lg" aria-hidden="true"> </i></span>*/}
//                     {/*    <span className="sr-only">Next</span>*/}
//                     {/*</a>*/}
//                 </div>
//             </main>
//         )
//     }
// }