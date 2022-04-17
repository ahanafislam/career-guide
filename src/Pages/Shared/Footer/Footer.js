import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='bg-white mt-3 p-4'>
            <Container>
                <h5 className='brand-text text-center'>Career Guide &copy; {year}</h5>
            </Container>
        </footer>
    );
};

export default Footer;