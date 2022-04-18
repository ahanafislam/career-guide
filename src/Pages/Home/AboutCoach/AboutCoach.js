import React from 'react';
import coachImg from '../../../images/coach.png';
import { Container } from 'react-bootstrap';
import './AboutCoach.css';

const AboutCoach = () => {
    return (
        <Container className="mt-5">
            <h2 className='brand-text text-center'>Who Am I ?</h2>
            <div className="card me-auto ms-auto coach-container shadow mt-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={coachImg} className="img-fluid rounded-start" alt="Coach"/>
                    </div>
                    <div className="col-md-8 d-flex align-items-center justify-content-center">
                        <div className="card-body">
                            <h3 className="card-title brand-text-2">I'm Jhon Doe. Professional career coach.</h3>
                            <p className="card-text">
                                I charged 5 bucks to review resumes and write LinkedIn profiles to sustain my soy, sugar-free vanilla latte addiction in college.Fast forward 9+ years and 1,000+ clients later…I am now a trusted confidant to some of the biggest names in Silicon Valley. I never imagined my college side hustle would turn into a multi-six-figure high tech career and executive coaching practice. I’ve been featured in Business Insider, CNBC, CNN, Entrepreneur, Fast Company, Forbes, Fortune, Glassdoor, The Muse, and The New York Times, among dozens of other leading publications.As a high tech career coach, mental health advocate, and human, I am relentlessly authentic and love sharing my whole truth with the world. As a professional speaker, I regularly present to Fortune 100/500 companies, hyper-growth startups, and universities on professional development, personal branding, and mental health in the workplace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutCoach;