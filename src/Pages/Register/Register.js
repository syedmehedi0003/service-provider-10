
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (password.length < 6) {
            <p>Plz enter 6 digit or more then password</p>
        }

        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div className='w-50 container mx-auto'>
            <h2 className='title-text text-center mt-4'>Please Register</h2>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>




                <Button className="btn-text w-50 mt-3 d-block mx-auto" variant="secondary" type="submit">
                    Register
                </Button>
            </Form>
            <div className='text-center mt-3'>
                <p>Have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin} >Please Login Here</Link></p>
            </div>


            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;