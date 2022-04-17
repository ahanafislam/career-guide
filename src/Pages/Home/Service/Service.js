import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({service}) => {
    const {name, img, description, price} = service;

    return (
        <Col>
            <Card className='border-0 shadow rounded-3'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="brand-text">{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <button className='brand-btn'>Book Appointment</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;