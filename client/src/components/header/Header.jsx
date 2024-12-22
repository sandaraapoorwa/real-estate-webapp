import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="font-weight-bold text-primary me-2">🏠</span>
          <span className="font-weight-bold">Dream Home Realty</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/properties" className="mx-2">Properties</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

