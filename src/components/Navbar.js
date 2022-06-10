import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
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
                            <NavLink to='/'>Inicio</NavLink>
                            <NavLink to='category/exterior'>Exterior</NavLink>
                            <NavLink to='category/interior'>Interior</NavLink>
                        </Nav>
                        <Nav.Link className='ms-auto'>
                            <CartWidget />
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;

{
    /* className={(isActive = isActive ? "clase1" : "clase2") */
}
