import * as React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import mountain from '../../../images/mountainride.png'
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid className="mx-3">
                <Navbar.Brand href="#home"><img className="img-fluid" style={{ maxWidth: '100px' }} src={mountain} alt="" /></Navbar.Brand>
                <div className="d-none d-lg-block d-md-block" style={{ width: '25%' }}></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ margin: 20 }}>
                        <NavLink className="fw-bold mx-2" to='/'>Home</NavLink>
                        <NavLink className="fw-bold mx-2" to='/explore'>Explore</NavLink>
                        <NavLink className="fw-bold mx-2" to='/'>About</NavLink>
                        <NavLink className="fw-bold mx-2" to='/dashboard'>DashBoard</NavLink>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {
                            user?.email ?
                                <Button onClick={logOut} variant="light">Log Out</Button>
                                :
                                <NavLink to='/login'><Button variant="primary">Login</Button></NavLink>
                        }
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;



