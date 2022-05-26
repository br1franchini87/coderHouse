import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <header>
            <Navbar bg='light' variant='light' expand='lg'>
                <Container>
                    <Navbar.Brand>Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link>Ofertas</Nav.Link>
                            <Nav.Link>Productos Destacados</Nav.Link>
                            <Nav.Link>Catalogo</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;
