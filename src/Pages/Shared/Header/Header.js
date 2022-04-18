import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">SHAKIB-75</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link' onClick={handleLogOut}>Log Out</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;