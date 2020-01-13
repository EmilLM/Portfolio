import React from 'react';
import { Modal, ModalHeader, ModalBody, } from 'reactstrap';

export default function Modals(props)  {

    return (
        <div>
            <Modal isOpen={props.isOpen} toggle={props.onToggle} centered>
                <ModalHeader toggle={props.onToggle}>{props.title} </ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
            </Modal>
        </div>
    );
}