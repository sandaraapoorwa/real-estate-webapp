import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <span className="font-weight-bold text-primary me-2">🏠</span>
          <span className="font-weight-bold">Dream Home Realty</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#properties" className="mx-2">Properties</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About Us</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className="ms-lg-3 mt-2 mt-lg-0">List Your Property</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

