import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand href="#home">Mi Portafolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#sobre-mi">Introducción</Nav.Link>
          <Nav.Link href="#proyectos">Proyectos</Nav.Link>
          <Nav.Link href="#noticias">Noticias</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);