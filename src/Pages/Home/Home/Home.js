import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>  
            <Banner></Banner>
            <Container>
                <h1>I am home page.</h1>
            </Container>
        </div>
    );
};

export default Home;