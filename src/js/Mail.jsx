import React, { useState } from 'react';
import {Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'


export default function Mail() {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <>
            <a id="mail" href="mailto:luchianemil@gmail.com"  rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
            <Tooltip placement="bottom"  isOpen={popoverOpen} target="mail" toggle={toggle}>
                luchianemil@gmail.com
            </Tooltip>
        </>
    );
};
