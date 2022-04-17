import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    if(loading) {
        return <Loading></Loading>
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" sticky='top'>
                <Container>
                    <Link to="/" className='nav-link'>
                        <h3 className='logo' as={Link} to="/"><span className='brand-text'>Career</span> Guide</h3>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <CustomLink to="/" className='nav-link m-1'>Home</CustomLink>
                            <CustomLink to="/blogs" className='nav-link m-1'>Blogs</CustomLink>
                            <CustomLink to="/about" className='nav-link m-1'>About</CustomLink>
                        </Nav>
                        <Nav className='ms-auto'>
                            {
                                user
                                ?
                                 <button onClick={() => signOut(auth)} className="m-1 logout-btn">Log out</button>
                                :
                                 <CustomLink to="/login" className='nav-link m-1'>Login</CustomLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;