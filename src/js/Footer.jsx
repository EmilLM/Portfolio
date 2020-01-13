import React from 'react';
import Mail from "./Popover.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='mail'>
                    <Mail/>
                </div>
                <div className='links'>
                    <a  href='https://github.com/EmilLM' target={'_blank'} rel="noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                    <a  href='https://www.linkedin.com/in/emil-luchian-9933b198/' target={'_blank'} rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </footer>
    )
}