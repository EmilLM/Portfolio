import React from 'react';
import HeaderBox from './HeaderBox';
import Project from "./Project";
import FooterBox from "./FooterBox";
import projects from '../../projectsData';

export default function Content()  {
    

    
    return (
        <main>
            <HeaderBox/>
            {projects.map( (project, index) => {
                return (
                    <Project key={index}
                    id={project._id} 
                    title={project.title}
                    src={project.src}
                    link={project.link}
                    altText={project.altText}
                    description={project.description}
                    stack={project.stack}
                    />
                )
            })}
            <FooterBox/>
        </main>
    );
};

