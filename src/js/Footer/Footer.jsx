import React from 'react';
import Mail from "./Mail.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {

    const year = new Date().getFullYear()
    return (
        <footer>
            <div className='mail'>
                <Mail/>
            </div>
            <div className="date"> 
                <p>All rights reserved @LEM</p>
                <span>{year}</span>
            </div>
            <div className='links'>
                <a  href='https://github.com/EmilLM' target={'_blank'} rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>
                <a  href='https://www.linkedin.com/in/emil-luchian-9933b198/' target={'_blank'} rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    )
}