import React, { useRef, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocicalLoin';

const Register = () => {
    const fullNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async event => {
        event.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: fullName });
        navigate('/');
    }

    if(loading || updating) {
        return <Loading></Loading>
    }

    return (
        <Container className='min-vh-100 d-flex justify-content-center'>
            <div>
                <h2 className='brand-text text-center'>Sign Up</h2>
                <div className="shadow p-5 me-auto ms-auto" style={{"width":"30rem"}}>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control ref={fullNameRef} type="text" placeholder="Enter Full Name"/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept Terms and Conditions" />
                        </Form.Group>
                        <button disabled={!agree} className='brand-btn' type="submit">
                            Sign Up
                        </button>
                    </Form>
                    <p className='mt-2'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </Container>
    );
};

export default Register;