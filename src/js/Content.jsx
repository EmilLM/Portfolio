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
            </Carousel>
        </main>
    );
};

