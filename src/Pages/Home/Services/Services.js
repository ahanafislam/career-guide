import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <Container id="services" className='mt-5'>
            <h2 className='brand-text text-center'>My Services</h2>
            <Row xs={1} md={3} className="g-5 mt-3 me-auto ms-auto">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;