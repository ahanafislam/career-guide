import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <Container className='min-vh-100 d-flex justify-content-center'>
            <div>
                <h2 className='brand-text text-center'>Log In</h2>
                <div className="shadow p-5" style={{"width":"30rem"}}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>
                        <button className='brand-btn' type="submit">
                            Log in
                        </button>
                        <p className='mt-2'>New to Career Guide? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
                        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Login;