import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    // const refContainer = useRef(initialValue);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        // navigate(from, { replace: true });
        navigate('/home');
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <div className='w-50 container mx-auto'>
            <h2 className='title-text text-center mt-4'>Please Login</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="btn-text w-50 mt-3 d-block mx-auto" variant="secondary" type="submit">
                    Login
                </Button>
            </Form>
            <div className='text-center mt-3'>
                <p>New User? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register Here</Link></p>
            </div>


            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;