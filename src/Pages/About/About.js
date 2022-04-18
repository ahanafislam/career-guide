import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './About.css';
import picture from "../../images/me.jpg";

const About = () => {
    return (
        <Container className="mt-5">
            <h2 className='brand-text text-center'>About My Goal.</h2>
            <div className="card me-auto ms-auto shadow mt-4">
                <div className="row g-0">
                    <div className="col-md-4 order-md-2">
                        <img src={picture} className="img-fluid rounded-start" alt="Coach"/>
                    </div>
                    <div className="col-md-8 order-md-1 d-flex align-items-center justify-content-center">
                        <div className="card-body">
                            <h3 className="card-title brand-text-2">I'm Md Ahanaf Islam</h3>
                            <p className="card-text">
                                My goal is to become an expert software engineer and contribute my work to many big projects. And  I’m really passionate about technology and I like to learn about new technology. To achieve my goal now I'm learning many web development technology. And I'm giving my full time and my hard work on it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;