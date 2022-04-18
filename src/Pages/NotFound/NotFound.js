import React from 'react';
import notFound from '../../images/not-found.png';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className="d-flex justify-content-center align-item-center">
            <div className='w-50'>
                <img src={notFound} alt="NotFound" className='img-fluid'/>
                <h1 className='brand-text text-center'>You are searching for wrong path.</h1>
            </div>
        </Container>
    );
};

export default NotFound;