import React from 'react';
import Mail from "./Popover.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='mail'>
                        <Mail/>
                    </div>
                    <div className='links'>
                        <a  href='https://github.com/EmilLM' target={'_blank'}>
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </a>
                        <a  href='https://www.linkedin.com/in/emil-luchian-9933b198/' target={'_blank'}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}