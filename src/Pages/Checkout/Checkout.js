import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams();

    return (
        <Container>
            <h1 className='brand-text text-center'>CheckOut</h1>
            <Card className='w-75 me-auto ms-auto'>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><h2>You select Service's Id : {serviceId} <span></span></h2></ListGroup.Item>
                        <ListGroup.Item>Thank For Selected me</ListGroup.Item>
                    </ListGroup>
                    <button className='brand-btn d-block ms-auto'>Go for payment.</button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Checkout;