import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <Navbar bg='light' variant='light' expand='lg'>
                <Container>
                    <Navbar.Brand>Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav>
                            <NavLink to='/' className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}>
                                Inicio
                            </NavLink>
                            <NavLink to='/category/exterior' className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}>
                                Exterior
                            </NavLink>
                            <NavLink to='/category/interior' className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}>
                                Interior
                            </NavLink>
                        </Nav>
                        <NavLink to='/cart' className='ms-auto'>
                            <CartWidget />
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;
