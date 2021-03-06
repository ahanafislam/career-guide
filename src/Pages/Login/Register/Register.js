import React, { useEffect, useRef } from 'react';
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
    
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async event => {
        event.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: fullName });
    }

    useEffect(() => {
        user && navigate("/");
    },[user, navigate]);

    if(loading || updating) {
        return <Loading></Loading>
    }

    if(error || updateError) {
        errorElement = <p className='text-danger'>{error?.message} {updateError?.message}</p>
    }

    return (
        <Container className='min-vh-100 d-flex justify-content-center'>
            <div>
                <h2 className='brand-text text-center'>Sign Up</h2>
                <div className="shadow p-5 me-auto ms-auto" style={{"width":"30rem"}}>
                    {errorElement}
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
                        <button className='brand-btn' type="submit">
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