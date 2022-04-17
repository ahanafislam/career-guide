import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Service.css";

const Service = ({service}) => {
    const {name, img, description, price} = service;

    return (
        <Col>
            <Card className='service-container border-0 shadow position-relative'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="brand-text">{name}</Card.Title>
                    <h5 className='price p-2 position-absolute top-0 start-50 translate-middle'>Price: ${price}</h5>
                    <Card.Text>{description}</Card.Text>
                    <button className='brand-btn'>Book Appointment</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;