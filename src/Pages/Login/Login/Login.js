import React, { useEffect, useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
    useEffect(() => {
        user && navigate('/');
    },[user, navigate]);

    if(loading || sending) {
        return <Loading></Loading>
    }

    if(error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email,password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        
        if(email) {
            toast("Please Cheack Your Email.");
        }

        else {
            toast("Please Provide email id");
        }
    }

    return (
        <Container className='min-vh-100 d-flex justify-content-center'>
            <div>
                <h2 className='brand-text text-center'>Log In</h2>
                <div className="shadow p-5" style={{"width":"30rem"}}>
                    {errorElement}
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <button className='brand-btn' type="submit">
                            Log in
                        </button>
                        <p className='mt-2'>New to Career Guide? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>
                        <p>Forget Password? <button onClick={resetPassword} className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button></p>
                        <ToastContainer/>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Login;