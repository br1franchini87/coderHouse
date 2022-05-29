import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
                            <Nav.Link>Ofertas</Nav.Link>
                            <Nav.Link>Productos Destacados</Nav.Link>
                            <Nav.Link>Catalogo</Nav.Link>
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
