import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const Register = () => {
    return (
        <Container className='min-vh-100 d-flex justify-content-center'>
            <div>
                <h2 className='brand-text text-center'>Sign Up</h2>
                <div className="shadow p-5 me-auto ms-auto" style={{"width":"30rem"}}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" required/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept Terms and Conditions" />
                        </Form.Group>
                        <button className='brand-btn' type="submit">
                            Sign Up
                        </button>
                    </Form>
                    <p className='mt-2'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
                </div>
            </div>
        </Container>
    );
};

export default Register;