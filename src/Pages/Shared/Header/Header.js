import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Link to="/" className='nav-link'>
                        <h3 className='logo' as={Link} to="/">Career Guide</h3>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <CustomLink to="/" className='nav-link m-1'>Home</CustomLink>
                            <CustomLink to="/services" className='nav-link m-1'>Services</CustomLink>
                            <CustomLink to="/blogs" className='nav-link m-1'>Blogs</CustomLink>
                            <CustomLink to="/about" className='nav-link m-1'>About</CustomLink>
                        </Nav>
                        <Nav className='ms-auto'>
                            <CustomLink to="/login" className='nav-link m-1'>Login</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;