import React, { useState } from 'react';
import {Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'


const Mail = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <>
            <a id="Popover1" href="mailto:luchianemil@gmail.com" data-toggle="collapse">
                <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
            <Popover placement="bottom"  isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>Gmail address:</PopoverHeader>
                <PopoverBody>LUCHIANEMIL@GMAIL.COM</PopoverBody>
            </Popover>
        </>
    );
};
export default Mail;