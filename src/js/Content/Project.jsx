import React, {useState} from 'react';
import { Collapse } from 'reactstrap';


const Project = (props) => {

    const {id, src, link, altText, title, description, stack} = props;
    const [isOpen, setIsOpen] = useState(false)
     const toggle = () => setIsOpen(!isOpen);

    return ( 
        <div className={`diagonal-box bg${id}`} onClick={toggle}>
            <div className="content">
                <h1> &lt; {title} &gt;</h1>

                <Collapse isOpen={isOpen} className="project">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img className="appImage" src={src} alt={altText}/>
                    </a>
                    <div className="description">
                        <p>{description}</p>
                        <p>{stack}</p>
                    </div>
                    
                </Collapse>
                
            </div>
            
        </div>
     );
}
 
export default Project;