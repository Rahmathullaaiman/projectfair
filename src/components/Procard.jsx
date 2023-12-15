import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import titlimage from '../images/download (1).jpeg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';


function Wcard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card onClick={handleShow} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={titlimage} />
        <Card.Body>
          <Card.Title className='text-center'>Video Player</Card.Title>
          <Button className='ms-5' variant="primary" onClick={handleShow}>
            Open Modal
          </Button>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{color:"black"}}>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row style={{height:"300px"}}>
                <Col md={6}>
                    <img src={titlimage} width={'100%'} alt="" />

                </Col>
                <Col md={6}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis tempore explicabo sunt odit architecto doloremque, quisquam est! Vitae vel provident, deserunt modi beatae voluptatem. Cum illo ut officiis libero recusandae? </p>
                    <h6>Technologies : HTML,CSS BOOTSRAP</h6>
                    

                </Col>
            </Row>
            <div>
                <a style={{color:"grey"}} href="" target='_blank' ><i class="fa-brands fa-github fa-2x ms-5"></i></a>
                <a style={{color:"grey"}} href="" target='_blank' ><i class="fa-solid fa-link fa-2x ms-5"></i></a>

            </div>
        </Modal.Body>
       
      </Modal>
    </div>
  );
}

export default Wcard;
