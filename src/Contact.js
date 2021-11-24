import { Modal } from "react-bootstrap"
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const Contact = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <input type='email' placeholder='Enter your email' />
            <input type='text' placeholder='Enter your feedback' />
            <Button onClick={handleShow}>Submit</Button>
            <Modal setShow={setShow} show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank You!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your input is appreciated.</p>
                </Modal.Body>
                <Button onClick={handleClose}>Close</Button>
            </Modal>
        </>
    )
}

export default Contact