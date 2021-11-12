import * as React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import mountain from '../../../images/mountainride.png'
import mountainLogo from '../../../images/logo_mountain_bike.png'
import useAuth from '../../hooks/useAuth';
import './Navigation.css'


const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar style={{ backgroundColor: '#222222' }} expand="lg">
            <Container fluid className="mx-3">
                <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }} href="#home"><img className="img-fluid" style={{ maxWidth: '100px', maxHeight: '25px' }} src={mountainLogo} alt="" /><span style={{ fontWeight: 'bold', fontSize: '30px', margin: '0', padding: '0', color: '#FFFFFF' }}>MOUNTAINBIKE</span></Navbar.Brand>

                <div className="d-none d-lg-block d-md-block" style={{ width: '25%' }}></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ margin: 20 }}>
                        <NavLink className="fw-bold mx-2 text-decoration-none custom" to='/home' activeStyle={{
                            fontWeight: "bold",
                            color: "#FFAA16"
                        }}>HOME</NavLink>

                        <NavLink className="fw-bold mx-2 text-decoration-none custom" to='/explore' activeStyle={{
                            fontWeight: "bold",
                            color: "#FFAA16"
                        }}>EXPLORE</NavLink>

                        <NavLink className="fw-bold mx-2 text-decoration-none custom" to='/EXPLORE' activeStyle={{
                            fontWeight: "bold",
                            color: "#FFAA16"
                        }}>SHOP</NavLink>

                        <NavLink className="fw-bold mx-2 text-decoration-none custom" to='/home' activeStyle={{
                            fontWeight: "bold",
                            color: "#FFAA16"
                        }}>NEWS</NavLink>

                        <NavLink className="fw-bold mx-2 text-decoration-none custom" to='/home' activeStyle={{
                            fontWeight: "bold",
                            color: "#FFAA16"
                        }}>CONTACT</NavLink>

                        {
                            user.email && <NavLink className="fw-bold mx-2 text-decoration-none custom" to='/dashboard' activeStyle={{
                                fontWeight: "bold",
                                color: "#FFAA16"
                            }}>DASHBOARD</NavLink>
                        }
                    </Nav>

                    <Navbar.Collapse className="justify-content-end">
                        {user?.email && <p style={{ color: 'green', marginRight: '10px', padding: '0px', margin: '0px 10px 0px 0px', fontWeight: 'bold' }}>{user.displayName}</p>}
                        {
                            user?.email ?
                                <Button className="fw-bold px-3 t" style={{ color: '#FFAA16' }} onClick={logOut} variant="light">Log Out</Button>
                                :
                                <NavLink to='/login'><Button className="px-5 fw-bold" style={{ backgroundColor: '#FFAA16', border: 'none' }} variant="primary">Login</Button></NavLink>
                        }
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;



