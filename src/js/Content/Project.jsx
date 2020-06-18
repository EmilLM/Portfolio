import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'

const Project = (props) => {

    const {id, src, link, source, altText, title, description, stack, sectionTitle} = props;
    

    return ( 
        <div className={`diagonal-box bg${id}`}>
            <div className="content project">
                {sectionTitle?<h2 className="sectionTitle">{sectionTitle}</h2>: null}
                <h1> &lt; {title} &gt;</h1>
                    <img className="appImage" src={src} alt={altText}/>
                    <div className="description">
                        <p>{description}</p>
                        <strong>{stack}</strong>
                        <div className="iconLinks">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLaptopCode}/>   Demo
                            </a>   
                            <a href={source} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare}/>  Source
                            </a>
                        </div>
                    </div>  
                   
            </div> 
        </div>
     );
}
 
export default Project;